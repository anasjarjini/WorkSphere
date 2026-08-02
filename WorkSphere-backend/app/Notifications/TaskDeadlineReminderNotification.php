<?php

namespace App\Notifications;

use App\Models\Task;
use App\Notifications\Traits\ResolvesTaskRoute;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class TaskDeadlineReminderNotification extends Notification
{
    use Queueable, ResolvesTaskRoute;

    public function __construct(
        private readonly Task $task
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        $taskLabel = $this->task->reference_code . ' – ' . $this->task->title;
        $projectName = $this->task->project?->name;
        $projectPart = $projectName ? " ($projectName)" : '';
        $date = $this->task->due_date?->format('d/m/Y');

        $suffix = '';
        if ($this->task->due_date) {
            $due = $this->task->due_date->startOfDay();
            $today = now()->startOfDay();

            if ($due->lt($today)) {
                $suffix = ' (échéance dépassée)';
            } elseif ($due->isSameDay($today)) {
                $suffix = " (échéance aujourd'hui)";
            } else {
                $days = (int) $today->diffInDays($due, false);
                $suffix = ' (dans ' . $days . ' jour' . ($days > 1 ? 's' : '') . ')';
            }
        }

        $message = "La tâche $taskLabel$projectPart est due le $date$suffix.";

        return [
            'message' => $message,
            'type' => 'task_deadline_reminder',
            'route' => $this->taskRouteFor($notifiable, $this->task),
            'task_id' => $this->task->id,
            'project_id' => $this->task->project_id,
            'reference_code' => $this->task->reference_code,
        ];
    }
}
