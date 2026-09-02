<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('attendance:mark-missing')]
#[Description('Mark active employees as absent if they did not declare attendance and are not on leave')]
class MarkMissingAttendances extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $date = \Carbon\Carbon::today();
        
        // Find all active users (employees and managers)
        $users = \App\Models\User::where('status', 'ACTIVE')
            ->whereIn('role', ['EMPLOYE', 'MANAGER'])
            ->get();
            
        $markedCount = 0;

        foreach ($users as $user) {
            // Check if they already have a declaration today
            $hasDeclaration = \App\Models\AttendanceDeclaration::withoutGlobalScopes()
                ->where('company_id', $user->company_id)
                ->where('user_id', $user->id)
                ->whereDate('date', $date)
                ->exists();

            if ($hasDeclaration) {
                continue;
            }

            // Check if they are on approved leave today
            $onLeave = \App\Models\Absence::withoutGlobalScopes()
                ->where('company_id', $user->company_id)
                ->where('user_id', $user->id)
                ->where('status', \App\Enums\AbsenceStatus::APPROUVEE)
                ->whereDate('start_date', '<=', $date)
                ->whereDate('end_date', '>=', $date)
                ->exists();

            if ($onLeave) {
                continue;
            }

            // Create an absent declaration
            \App\Models\AttendanceDeclaration::create([
                'company_id' => $user->company_id,
                'user_id' => $user->id,
                'date' => $date->toDateString(),
                'status' => \App\Enums\AttendanceStatus::ABSENT,
                'validation_status' => \App\Enums\AttendanceValidationStatus::VALIDEE, // Automatically validated as it's a system action
                'rejection_reason' => 'Absent non justifié (Système)',
            ]);

            $markedCount++;
        }

        $this->info("Marquage automatique terminé. {$markedCount} employé(s) marqué(s) comme absent(s).");
    }
}
