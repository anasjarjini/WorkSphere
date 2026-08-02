<?php

namespace App\Services;

use App\Enums\AbsenceType;
use App\Jobs\SendActivationEmailJob;
use App\Models\ActivationToken;
use App\Models\Company;
use App\Models\Department;
use App\Models\LeaveBalance;
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
    private const ALLOWED_ROLES = ['MANAGER', 'EMPLOYE'];

    /**
     * Alias acceptés pour chaque rôle : français / anglais, toute casse
     * (la casse et les accents sont normalisés avant comparaison via
     * normalizeRole(), donc on ne liste ici que les formes en MAJUSCULES
     * SANS ACCENTS).
     */
    private const ROLE_ALIASES = [
        'MANAGER'      => 'MANAGER',
        'GESTIONNAIRE' => 'MANAGER',
        'RESPONSABLE'  => 'MANAGER',
        'EMPLOYE'      => 'EMPLOYE', // couvre EMPLOYÉ une fois les accents retirés
        'EMPLOYEE'     => 'EMPLOYE',
        'SALARIE'      => 'EMPLOYE', // couvre SALARIÉ une fois les accents retirés
    ];

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
        // Les gros fichiers ne doivent pas être tués par max_execution_time (30s
        // en php.ini) : le hashing bcrypt est fait une seule fois ci-dessous.
        set_time_limit(120);

        $csv = Reader::from($file->getRealPath());
        $csv->setHeaderOffset(0); // first row = headers

        // Hash unique partagé par tous les employés importés : le mot de passe
        // est un placeholder aléatoire (login bloqué tant que status !== 'ACTIVE',
        // et l'activation le remplace). 1 hash bcrypt (~1s) au lieu d'un par ligne.
        $placeholderPasswordHash = Hash::make(Str::random(32));

        $imported = 0;
        $errors = [];
        // Track emails seen in this CSV to detect duplicates within the file
        $seenEmails = [];
        // Track manager departments seen in this CSV: one manager per department.
        $seenManagerDepartments = [];

        foreach ($csv->getRecords() as $offset => $record) {
            // offset 0 = header row, so real spreadsheet line = offset + 2
            $lineNumber = $offset + 2;

            // Normalise le rôle : accepte FR/EN, toute casse, avec ou sans accents
            // (ex: "manager", "Gestionnaire", "EMPLOYÉ", "employee" ...).
            // Si le rôle n'est pas reconnu, on garde la valeur brute (trim) pour
            // que le message d'erreur de validation soit explicite.
            $rawRole = trim((string) ($record['role'] ?? ''));
            $record['role'] = $this->normalizeRole($rawRole) ?? $rawRole;

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
            if ($record['role'] === 'MANAGER') {
                $seenManagerDepartments[] = $this->normalizeDepartmentName($record['department']);
            }

            try {
                // One transaction per line: a failure here does NOT roll back
                // previously committed lines (best-effort strategy).
                DB::transaction(function () use ($record, $company, $placeholderPasswordHash) {
                    $hireDate = Carbon::createFromFormat('d/m/Y', trim($record['hire_date']))->format('Y-m-d');

                    // ── Résoudre ou créer le département par son nom ──
                    $departmentId = $this->resolveDepartmentId($company, $record['department'] ?? '');
                    // Le rôle a déjà été normalisé (FR/EN, toute casse) en amont
                    $role = $record['role'];

                    $managerId = $role === 'EMPLOYE'
                        ? $this->resolveDepartmentManagerId($company, $departmentId)
                        : null;

                    $user = User::create([
                        'name'       => trim($record['first_name']) . ' ' . trim($record['last_name']),
                        'first_name' => trim($record['first_name']),
                        'last_name'  => trim($record['last_name']),
                        'email'      => strtolower(trim($record['email'])),
                        'password'   => $placeholderPasswordHash,
                        'company_id' => $company->id,
                        'department_id' => $departmentId,
                        'manager_id' => $managerId,
                        'role'       => $role,  // MANAGER ou EMPLOYE
                        'status'     => 'PENDING_ACTIVATION',
                        'job_title'  => trim($record['job_title']),
                        'hire_date'  => $hireDate,
                        'salary'     => isset($record['salary']) && $record['salary'] !== '' ? (float) $record['salary'] : null,
                    ]);

                    if ($role === 'MANAGER') {
                        $this->attachDepartmentEmployeesToManager($company, $departmentId, $user->id);
                    }

                    // Solde de congés payés de l'année courante (même logique que
                    // la commande leaves:init-yearly-balances).
                    LeaveBalance::firstOrCreate(
                        [
                            'user_id' => $user->id,
                            'year' => now()->year,
                            'type' => AbsenceType::CONGE_PAYE,
                        ],
                        [
                            'company_id' => $company->id,
                            'allocated_days' => $company->default_annual_leave_days ?? 18,
                            'carried_over_days' => 0,
                        ]
                    );

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
     * Normalise une valeur de rôle brute (FR/EN, toute casse, avec ou sans
     * accents) vers la valeur canonique ('MANAGER' ou 'EMPLOYE').
     * Retourne null si la valeur ne correspond à aucun alias connu.
     */
    private function normalizeRole(?string $role): ?string
    {
        $normalized = Str::ascii(Str::upper(trim((string) $role)));

        return self::ROLE_ALIASES[$normalized] ?? null;
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
            ->where('role', 'EMPLOYE')
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
            // À ce stade $record['role'] est déjà normalisé (MANAGER/EMPLOYE)
            'role'       => ['required', 'in:' . implode(',', self::ALLOWED_ROLES)],
            'job_title'  => ['required', 'string', 'max:255'],
            'department' => ['required', 'string', 'max:255'],
            'hire_date'  => ['required', 'string'],
            'salary'     => ['nullable', 'numeric'],
        ], [
            'role.in' => "Le rôle doit être 'MANAGER'/'GESTIONNAIRE' ou 'EMPLOYE'/'EMPLOYEE' (FR ou EN, toute casse). Le rôle 'HR_ADMIN' est interdit à l'import.",
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

        if ($record['role'] === 'MANAGER') {
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