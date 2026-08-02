<?php

namespace App\Console\Commands;

use App\Enums\AttendanceStatus;
use App\Models\AttendanceDeclaration;
use App\Notifications\ClockOutReminderNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendEveningReminders extends Command
{
    protected $signature = 'attendance:send-evening-reminders';

    protected $description = 'Envoyer un rappel aux employes ayant declare PRESENT mais sans heures saisies';

    public function handle(): int
    {
        $today = Carbon::today()->toDateString();

        $declarations = AttendanceDeclaration::where('date', $today)
            ->where('status', AttendanceStatus::PRESENT)
            ->whereNull('hours_worked')
            ->with('user')
            ->get();

        $count = 0;
        foreach ($declarations as $declaration) {
            if ($declaration->user) {
                $declaration->user->notify(new ClockOutReminderNotification($declaration));
                $count++;
            }
        }

        $this->info("{$count} rappel(s) soire(s) envoye(s).");

        return Command::SUCCESS;
    }
}
