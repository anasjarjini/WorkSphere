<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;

class TaskPolicy
{
    public function view(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id;
    }

    public function create(User $user, Project $project): bool
    {
        return $user->company_id === $project->company_id
            && in_array($user->role, ['HR_ADMIN', 'MANAGER']);
    }

    public function update(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id
            && ($user->role === 'HR_ADMIN' || $user->id === $task->creator_id);
    }

    public function delete(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id
            && ($user->role === 'HR_ADMIN' || $user->id === $task->creator_id);
    }

    public function updateStatus(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id
            && (
                $user->role === 'HR_ADMIN'
                || $user->id === $task->creator_id
                || $user->id === $task->user_id
            );
    }

    public function assign(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id
            && ($user->role === 'HR_ADMIN' || $user->id === $task->creator_id);
    }

    public function reorder(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id
            && ($user->role === 'HR_ADMIN' || $user->id === $task->creator_id);
    }

    public function history(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id;
    }
}