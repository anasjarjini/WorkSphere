<?php

namespace App\Notifications;

use App\Models\Task;
use App\Notifications\Traits\ResolvesTaskRoute;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class TaskCommentAddedNotification extends Notification
{
    use Queueable, ResolvesTaskRoute;

    public function __construct(
        private readonly Task $task,
        private readonly string $authorName,
        private readonly string $excerpt,
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        $projectName = $this->task->project?->name;

        $message = sprintf(
            '%s a commenté %s – %s%s : « %s »',
            $this->authorName,
            $this->task->reference_code,
            $this->task->title,
            $projectName ? " ($projectName)" : '',
            $this->excerpt,
        );

        return [
            'message' => $message,
            'type' => 'task_comment',
            'route' => $this->taskRouteFor($notifiable, $this->task),
            'task_id' => $this->task->id,
            'project_id' => $this->task->project_id,
            'reference_code' => $this->task->reference_code,
        ];
    }
}
