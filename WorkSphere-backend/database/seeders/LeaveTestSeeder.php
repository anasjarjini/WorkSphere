<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LeaveTestSeeder extends Seeder
{
    public function run(): void
    {
        $companies = \App\Models\Company::all();

        foreach ($companies as $company) {
            $employees = \App\Models\User::where('company_id', $company->id)
                ->whereIn('role', ['EMPLOYE', 'MANAGER'])
                ->where('status', 'ACTIVE')
                ->get();

            // Solde de l'année en cours pour chaque employé/manager
            foreach ($employees as $employee) {
                \App\Models\LeaveBalance::create([
                    'company_id' => $company->id,
                    'user_id' => $employee->id,
                    'year' => now()->year,
                    'type' => \App\Enums\AbsenceType::CONGE_PAYE,
                    'allocated_days' => $company->default_annual_leave_days ?? 18,
                    'used_days' => 0,
                    'carried_over_days' => fake()->numberBetween(0, 3),
                ]);
            }

            // Génère 2-4 demandes de congé par employé sur le dernier mois
            foreach ($employees as $employee) {
                $requestCount = fake()->numberBetween(1, 3);

                for ($i = 0; $i < $requestCount; $i++) {
                    $start = fake()->dateTimeBetween('-1 month', '+2 weeks');
                    $duration = fake()->numberBetween(1, 5);
                    $end = (clone $start)->modify("+{$duration} days");

                    $type = fake()->randomElement([
                        \App\Enums\AbsenceType::CONGE_PAYE, \App\Enums\AbsenceType::CONGE_PAYE, \App\Enums\AbsenceType::CONGE_PAYE, // pondéré
                        \App\Enums\AbsenceType::MALADIE, \App\Enums\AbsenceType::SANS_SOLDE,
                    ]);

                    $statusRoll = fake()->numberBetween(1, 100);
                    $status = match (true) {
                        $statusRoll <= 60 => \App\Enums\AbsenceStatus::APPROUVEE,
                        $statusRoll <= 85 => \App\Enums\AbsenceStatus::EN_ATTENTE,
                        $statusRoll <= 95 => \App\Enums\AbsenceStatus::REJETEE,
                        default => \App\Enums\AbsenceStatus::ANNULEE,
                    };

                    $manager = \App\Models\User::find($employee->manager_id);
                    $hrAdmin = \App\Models\User::where('company_id', $company->id)
                        ->where('role', 'HR_ADMIN')->first();
                    $approver = $employee->role === 'EMPLOYE' ? $manager : $hrAdmin;

                    $absence = \App\Models\Absence::create([
                        'company_id' => $company->id,
                        'user_id' => $employee->id,
                        'approver_id' => in_array($status, [\App\Enums\AbsenceStatus::APPROUVEE, \App\Enums\AbsenceStatus::REJETEE]) ? $approver?->id : null,
                        'type' => $type,
                        'start_date' => $start,
                        'end_date' => $end,
                        'duration_days' => $duration,
                        'reason' => fake()->sentence(),
                        'status' => $status,
                        'rejection_reason' => $status === \App\Enums\AbsenceStatus::REJETEE
                            ? 'Période trop chargée pour l\'équipe' : null,
                        'approved_at' => $status === \App\Enums\AbsenceStatus::APPROUVEE ? $start : null,
                        'rejected_at' => $status === \App\Enums\AbsenceStatus::REJETEE ? $start : null,
                    ]);

                    // Déduit le solde si approuvée et CONGE_PAYE
                    if ($status === \App\Enums\AbsenceStatus::APPROUVEE && $type === \App\Enums\AbsenceType::CONGE_PAYE) {
                        \App\Models\LeaveBalance::where('user_id', $employee->id)
                            ->where('year', now()->year)
                            ->where('type', \App\Enums\AbsenceType::CONGE_PAYE)
                            ->increment('used_days', $duration);
                    }
                }
            }
        }

        $this->command->info('Leaves seeded: soldes + ~2-3 demandes par employé sur le dernier mois.');
    }
}
