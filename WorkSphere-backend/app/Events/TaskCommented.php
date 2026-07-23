<?php

namespace App\Events;

use App\Models\TaskComment;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TaskCommented implements ShouldBroadcastNow
{
    use Dispatchable, SerializesModels;

    public $comment;
    public $taskOwnerId;

    public function __construct(TaskComment $comment, $taskOwnerId)
    {
        $this->comment = $comment;
        $this->taskOwnerId = $taskOwnerId;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('App.Models.User.' . $this->taskOwnerId);
    }

    public function broadcastAs()
    {
        return 'TaskCommented';
    }

    public function broadcastWith()
    {
        return [
            'task_id' => $this->comment->task_id,
            'message' => 'Nouveau commentaire sur votre tâche.',
        ];
    }
}
