<?php

namespace App\Services;

use App\Jobs\SendActivationEmailJob;
use App\Models\ActivationToken;
use App\Models\Company;
use App\Models\Department;
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
    /**
     * Rôles autorisés à l'import (nouveaux ENUMs).
     * HR_ADMIN est interdit — les admins sont créés via l'inscription.
     */
    private const ALLOWED_ROLES = ['MANAGER', 'EMPLOYEE'];

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
        // Track manager departments seen in this CSV: one manager per department.
        $seenManagerDepartments = [];

        foreach ($csv->getRecords() as $offset => $record) {
            // offset 0 = header row, so real spreadsheet line = offset + 2
            $lineNumber = $offset + 2;

            $validationResult = $this->validateRow($record, $seenEmails, $seenManagerDepartments, $company);

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
            if (trim($record['role']) === 'MANAGER') {
                $seenManagerDepartments[] = $this->normalizeDepartmentName($record['department']);
            }

            try {
                // One transaction per line: a failure here does NOT roll back
                // previously committed lines (best-effort strategy).
                DB::transaction(function () use ($record, $company) {
                    $hireDate = Carbon::createFromFormat('d/m/Y', trim($record['hire_date']))->format('Y-m-d');

                    // ── Résoudre ou créer le département par son nom ──
                    $departmentId = $this->resolveDepartmentId($company, $record['department'] ?? '');
                    $role = trim($record['role']);
                    $managerId = $role === 'EMPLOYEE'
                        ? $this->resolveDepartmentManagerId($company, $departmentId)
                        : null;

                    $user = User::create([
                        'name'       => trim($record['first_name']) . ' ' . trim($record['last_name']),
                        'first_name' => trim($record['first_name']),
                        'last_name'  => trim($record['last_name']),
                        'email'      => strtolower(trim($record['email'])),
                        'password'   => Hash::make(Str::random(32)),
                        'company_id' => $company->id,
                        'department_id' => $departmentId,
                        'manager_id' => $managerId,
                        'role'       => $role,  // MANAGER ou EMPLOYEE
                        'status'     => 'PENDING_ACTIVATION',
                        'job_title'  => trim($record['job_title']),
                        'hire_date'  => $hireDate,
                        'salary'     => isset($record['salary']) && $record['salary'] !== '' ? (float) $record['salary'] : null,
                    ]);

                    if ($role === 'MANAGER') {
                        $this->attachDepartmentEmployeesToManager($company, $departmentId, $user->id);
                    }

                    $activationToken = ActivationToken::create([
                        'user_id'    => $user->id,
                        'token'      => Str::random(64),
                        'expires_at' => now()->addDays(7),
                        'used_at'    => null,
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
     * Resolve a department by name for the company, creating it if needed.
     */
    private function resolveDepartmentId(Company $company, string $departmentName): ?int
    {
        $name = trim($departmentName);

        if ($name === '') {
            return null;
        }

        $normalizedName = mb_strtolower($name);

        $department = Department::where('company_id', $company->id)
            ->where(function ($query) use ($name, $normalizedName): void {
                $query->where('name', $name)
                    ->orWhereRaw('LOWER(name) = ?', [$normalizedName]);
            })
            ->first();

        if ($department) {
            return $department->id;
        }

        $createdDepartment = Department::create([
            'company_id' => $company->id,
            'name' => $name,
        ]);

        return $createdDepartment->id;
    }

    private function resolveDepartmentManagerId(Company $company, ?int $departmentId): ?int
    {
        if ($departmentId === null) {
            return null;
        }

        return User::where('company_id', $company->id)
            ->where('department_id', $departmentId)
            ->where('role', 'MANAGER')
            ->value('id');
    }

    private function attachDepartmentEmployeesToManager(Company $company, ?int $departmentId, int $managerId): void
    {
        if ($departmentId === null) {
            return;
        }

        User::where('company_id', $company->id)
            ->where('department_id', $departmentId)
            ->where('role', 'EMPLOYEE')
            ->whereNull('manager_id')
            ->update(['manager_id' => $managerId]);
    }

    private function normalizeDepartmentName(string $departmentName): string
    {
        return mb_strtolower(trim($departmentName));
    }

    /**
     * Validate a single CSV row.
     * Returns null if valid, or a string describing the error.
     */
    private function validateRow(array $record, array $seenEmails, array $seenManagerDepartments, Company $company): ?string
    {
        $validator = Validator::make($record, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'email'      => ['required', 'email', 'unique:users,email'],
            'role'       => ['required', 'in:' . implode(',', self::ALLOWED_ROLES)],
            'job_title'  => ['required', 'string', 'max:255'],
            'department' => ['required', 'string', 'max:255'],
            'hire_date'  => ['required', 'string'],
            'salary'     => ['nullable', 'numeric'],
        ], [
            'role.in' => "Le rôle doit être 'MANAGER' ou 'EMPLOYEE'. Le rôle 'HR_ADMIN' est interdit à l'import.",
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

        if (trim($record['role']) === 'MANAGER') {
            $departmentName = trim($record['department']);
            $normalizedDepartment = $this->normalizeDepartmentName($departmentName);

            if (in_array($normalizedDepartment, $seenManagerDepartments, true)) {
                return "Un seul manager est autorisé par département. Le département '{$departmentName}' a déjà un manager dans ce fichier.";
            }

            $department = Department::where('company_id', $company->id)
                ->where(function ($query) use ($departmentName, $normalizedDepartment): void {
                    $query->where('name', $departmentName)
                        ->orWhereRaw('LOWER(name) = ?', [$normalizedDepartment]);
                })
                ->first();

            if ($department && $this->resolveDepartmentManagerId($company, $department->id) !== null) {
                return "Un seul manager est autorisé par département. Le département '{$departmentName}' a déjà un manager.";
            }
        }

        return null;
    }
}
