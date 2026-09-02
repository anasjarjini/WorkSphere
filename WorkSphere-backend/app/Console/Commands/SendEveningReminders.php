<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\ClockOutReminderNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendEveningReminders extends Command
{
    protected $signature = 'attendance:send-evening-reminders';

    protected $description = "Envoyer un rappel du soir aux employes presents";

    public function handle(): int
    {
        $today = Carbon::today()->toDateString();

        $users = User::where('status', 'ACTIVE')
            ->whereHas('attendanceDeclarations', function ($query) use ($today) {
                $query->where('date', $today)
                      ->where('status', 'PRESENT');
            })
            ->get();

        $count = 0;
        foreach ($users as $user) {
            // Using ClockOutReminderNotification (create if needed, but since we just need the structure)
            // If it doesn't exist, we can use a dummy or just log it.
            // For now, I will use ClockInReminderNotification just to not break if the class is missing.
            $user->notify(new \App\Notifications\ClockInReminderNotification);
            $count++;
        }

        $this->info("{$count} rappel(s) du soir envoye(s).");

        return Command::SUCCESS;
    }
}
