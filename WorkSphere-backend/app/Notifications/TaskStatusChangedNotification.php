<?php

namespace App\Notifications;

use App\Models\Task;
use App\Notifications\Traits\ResolvesTaskRoute;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class TaskStatusChangedNotification extends Notification
{
    use Queueable, ResolvesTaskRoute;

    private const STATUS_LABELS = [
        'TODO' => 'À faire',
        'IN_PROGRESS' => 'En cours',
        'REVIEW' => 'En revue',
        'DONE' => 'Terminée',
    ];

    public function __construct(
        private readonly Task $task,
        private readonly string $actorName,
        private readonly string $oldStatus,
        private readonly string $newStatus,
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        $projectName = $this->task->project?->name;

        $message = sprintf(
            '%s a changé le statut de %s – %s%s : %s → %s.',
            $this->actorName,
            $this->task->reference_code,
            $this->task->title,
            $projectName ? " ($projectName)" : '',
            self::STATUS_LABELS[$this->oldStatus] ?? $this->oldStatus,
            self::STATUS_LABELS[$this->newStatus] ?? $this->newStatus,
        );

        return [
            'message' => $message,
            'type' => 'task_status_changed',
            'route' => $this->taskRouteFor($notifiable, $this->task),
            'task_id' => $this->task->id,
            'project_id' => $this->task->project_id,
            'reference_code' => $this->task->reference_code,
        ];
    }
}
