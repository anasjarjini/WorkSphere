<?php

namespace App\Notifications\Traits;

use App\Models\Task;
use App\Models\User;

trait ResolvesTaskRoute
{
    protected function taskRouteFor(User $notifiable, Task $task): string
    {
        return match ($notifiable->role) {
            'MANAGER' => '/manager/projects/' . $task->project_id . '/board',
            'HR_ADMIN' => '/admin/projects/' . $task->project_id,
            default => '/employee/tasks/' . $task->id,
        };
    }
}
