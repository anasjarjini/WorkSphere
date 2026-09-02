<?php

namespace Database\Seeders;

use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;

class AttendanceTestSeeder extends Seeder
{
    public function run(): void
    {
        if (app()->environment('production')) {
            $this->command->error('Ce seeder ne peut pas être exécuté en production.');
            return;
        }

        $companies = Company::all();

        foreach ($companies as $company) {
            $employees = User::where('company_id', $company->id)
                ->whereIn('role', ['EMPLOYE', 'MANAGER'])
                ->where('status', 'ACTIVE')
                ->get();

            $startDate = now()->subMonth()->startOfMonth();
            $endDate = now();

            foreach ($employees as $employee) {
                for ($date = $startDate->copy(); $date->lte($endDate); $date->addDay()) {
                    // Skip weekends
                    if ($date->isWeekend()) continue;

                    // Skip si l'employé a une absence approuvée ce jour
                    $hasApprovedLeave = Absence::where('user_id', $employee->id)
                        ->where('status', 'APPROUVEE')
                        ->whereDate('start_date', '<=', $date)
                        ->whereDate('end_date', '>=', $date)
                        ->exists();
                    if ($hasApprovedLeave) continue;

                    // Distribution réaliste : 90% présent, 10% absent
                    $isPresent = fake()->boolean(90);

                    // Distribution des statuts de validation :
                    // 70% validée, 20% en attente, 10% rejetée
                    $validationRoll = fake()->numberBetween(1, 100);
                    $validationStatus = match (true) {
                        $validationRoll <= 70 => 'VALIDEE',
                        $validationRoll <= 90 => 'EN_ATTENTE',
                        default => 'REJETEE',
                    };

                    $manager = User::find($employee->manager_id);
                    $hrAdmin = User::where('company_id', $company->id)
                        ->where('role', 'HR_ADMIN')
                        ->first();

                    $approver = $employee->role === 'EMPLOYE' ? $manager : $hrAdmin;

                    AttendanceDeclaration::create([
                        'company_id' => $company->id,
                        'user_id' => $employee->id,
                        'date' => $date->toDateString(),
                        'status' => $isPresent ? 'PRESENT' : 'ABSENT',
                        'validation_status' => $validationStatus,
                        'validated_by' => $validationStatus !== 'EN_ATTENTE' ? $approver?->id : null,
                        'validated_at' => $validationStatus !== 'EN_ATTENTE' ? $date->copy()->addHours(2) : null,
                        'rejection_reason' => $validationStatus === 'REJETEE'
                            ? fake()->randomElement([
                                'Heures incohérentes avec le planning',
                                'Merci de préciser les raisons',
                            ])
                            : null,
                    ]);
                }
            }
        }

        $this->command->info('Attendance seeded: 1 mois de données pour toutes les companies actives.');
    }
}
