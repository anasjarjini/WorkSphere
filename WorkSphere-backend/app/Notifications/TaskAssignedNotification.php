<?php

namespace App\Notifications;

use App\Models\Task;
use App\Notifications\Traits\ResolvesTaskRoute;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class TaskAssignedNotification extends Notification
{
    use Queueable, ResolvesTaskRoute;

    public function __construct(
        private readonly Task $task,
        private readonly bool $isNew = false
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

        $message = $this->isNew
            ? "Nouvelle tâche $taskLabel$projectPart : elle vous a été assignée."
            : "Vous avez été assigné à la tâche $taskLabel$projectPart.";

        return [
            'message' => $message,
            'type' => 'task_assigned',
            'route' => $this->taskRouteFor($notifiable, $this->task),
            'task_id' => $this->task->id,
            'project_id' => $this->task->project_id,
            'reference_code' => $this->task->reference_code,
        ];
    }
}
