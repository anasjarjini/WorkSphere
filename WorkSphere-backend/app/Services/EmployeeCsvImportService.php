<?php

namespace App\Services;

use App\Jobs\SendActivationEmailJob;
use App\Models\ActivationToken;
use App\Models\Company;
use App\Models\Employee;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use League\Csv\Reader;

class EmployeeCsvImportService
{
    private const ALLOWED_ROLES = ['manager', 'employe'];

    /**
     * Import employees from a CSV file for the given company.
     *
     * Strategy: "best effort" — valid rows are committed one by one.
     * Invalid rows are collected and returned in the error report without
     * blocking the import of subsequent valid rows.
     *
     * @return array{imported: int, failed: int, errors: array}
     */
    public function import(UploadedFile $file, Company $company): array
    {
        $csv = Reader::createFromPath($file->getRealPath(), 'r');
        $csv->setHeaderOffset(0); // first row = headers

        $imported = 0;
        $errors = [];
        // Track emails seen in this CSV to detect duplicates within the file
        $seenEmails = [];

        foreach ($csv->getRecords() as $offset => $record) {
            // offset 0 = header row, so real spreadsheet line = offset + 2
            $lineNumber = $offset + 2;

            $validationResult = $this->validateRow($record, $seenEmails);

            if ($validationResult !== null) {
                $errors[] = [
                    'line' => $lineNumber,
                    'email' => $record['email'] ?? null,
                    'reason' => $validationResult,
                ];
                continue;
            }

            // Mark email as seen for intra-CSV duplicate detection
            $seenEmails[] = strtolower(trim($record['email']));

            try {
                // One transaction per line: a failure here does NOT roll back
                // previously committed lines (best-effort strategy).
                DB::transaction(function () use ($record, $company) {
                    $hireDate = Carbon::createFromFormat('d/m/Y', trim($record['hire_date']))->format('Y-m-d');

                    $user = User::create([
                        'name' => trim($record['first_name']) . ' ' . trim($record['last_name']),
                        'email' => strtolower(trim($record['email'])),
                        'password' => Hash::make(Str::random(32)),
                        'company_id' => $company->id,
                        'is_active' => false,
                    ]);

                    $user->assignRole(trim($record['role']));

                    Employee::create([
                        'user_id' => $user->id,
                        'company_id' => $company->id,
                        'first_name' => trim($record['first_name']),
                        'last_name' => trim($record['last_name']),
                        'job_title' => trim($record['job_title']),
                        'department' => trim($record['department']),
                        'hire_date' => $hireDate,
                        'salary' => isset($record['salary']) && $record['salary'] !== '' ? (float) $record['salary'] : null,
                    ]);

                    $activationToken = ActivationToken::create([
                        'user_id' => $user->id,
                        'token' => Str::random(64),
                        'expires_at' => now()->addDays(7),
                        'used_at' => null,
                    ]);

                    SendActivationEmailJob::dispatch($user, $activationToken);
                });

                $imported++;
            } catch (\Throwable $e) {
                $errors[] = [
                    'line' => $lineNumber,
                    'email' => strtolower(trim($record['email'] ?? '')),
                    'reason' => 'Erreur interne lors de la création : ' . $e->getMessage(),
                ];
            }
        }

        return [
            'imported' => $imported,
            'failed' => count($errors),
            'errors' => $errors,
        ];
    }

    /**
     * Validate a single CSV row.
     * Returns null if valid, or a string describing the error.
     */
    private function validateRow(array $record, array $seenEmails): ?string
    {
        $validator = Validator::make($record, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'role' => ['required', 'in:manager,employe'],
            'job_title' => ['required', 'string', 'max:255'],
            'department' => ['required', 'string', 'max:255'],
            'hire_date' => ['required', 'string'],
            'salary' => ['nullable', 'numeric'],
        ], [
            'role.in' => "Le rôle doit être 'manager' ou 'employe'. Le rôle 'administrateur_rh' est interdit à l'import.",
            'email.unique' => 'Cet email est déjà utilisé dans le système.',
        ]);

        if ($validator->fails()) {
            return implode(' | ', $validator->errors()->all());
        }

        // Validate hire_date format DD/MM/YYYY
        try {
            Carbon::createFromFormat('d/m/Y', trim($record['hire_date']));
        } catch (\Exception $e) {
            return "Format de hire_date invalide. Attendu : DD/MM/YYYY (ex: 15/03/2023).";
        }

        // Check for duplicates within the current CSV file
        if (in_array(strtolower(trim($record['email'])), $seenEmails)) {
            return 'Email en doublon dans le fichier CSV.';
        }

        return null;
    }
}
