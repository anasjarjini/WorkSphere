<?php

namespace App\Console\Commands;

use App\Models\Task;
use App\Models\User;
use App\Notifications\TaskDeadlineReminderNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendTaskDeadlineReminders extends Command
{
    protected $signature = 'tasks:send-deadline-reminders';

    protected $description = "Envoyer un rappel aux employes dont une tache arrive a echeance (J-2, J-1, aujourd'hui ou depassee)";

    public function handle(): int
    {
        $today = Carbon::today()->startOfDay();
        $horizon = Carbon::today()->addDays(2)->endOfDay();

        $tasks = Task::whereNotNull('user_id')
            ->where('status', '!=', 'DONE')
            ->whereNotNull('due_date')
            ->whereBetween('due_date', [$today, $horizon])
            ->with('assignedUser', 'project')
            ->get();

        $count = 0;
        foreach ($tasks as $task) {
            $assignee = $task->assignedUser;
            if ($assignee && $assignee->status === 'ACTIVE') {
                $assignee->notify(new TaskDeadlineReminderNotification($task));
                $count++;
            }
        }

        $this->info("{$count} rappel(s) d'echeance envoye(s).");

        return Command::SUCCESS;
    }
}
