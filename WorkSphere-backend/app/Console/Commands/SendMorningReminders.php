<?php

namespace App\Console\Commands;

use App\Enums\AbsenceStatus;
use App\Models\Absence;
use App\Models\User;
use App\Notifications\ClockInReminderNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendMorningReminders extends Command
{
    protected $signature = 'attendance:send-morning-reminders';

    protected $description = "Envoyer un rappel matinal aux employes n'ayant pas encore declare leur presence";

    public function handle(): int
    {
        $today = Carbon::today()->toDateString();

        $users = User::where('status', 'ACTIVE')
            ->whereDoesntHave('attendanceDeclarations', function ($query) use ($today) {
                $query->where('date', $today);
            })
            ->whereDoesntHave('absences', function ($query) use ($today) {
                $query->where('status', AbsenceStatus::APPROUVEE)
                    ->where('start_date', '<=', $today)
                    ->where('end_date', '>=', $today);
            })
            ->get();

        $count = 0;
        foreach ($users as $user) {
            $user->notify(new ClockInReminderNotification);
            $count++;
        }

        $this->info("{$count} rappel(s) matinal(aux) envoye(s).");

        return Command::SUCCESS;
    }
}
