<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\TaskAttachment;
use App\Models\User;

class TaskAttachmentPolicy
{
    public function create(User $user, Task $task): bool
    {
        return $user->company_id === $task->company_id;
    }

    public function download(User $user, TaskAttachment $attachment): bool
    {
        return $user->company_id === $attachment->company_id;
    }

    public function delete(User $user, TaskAttachment $attachment): bool
    {
        if ($user->company_id !== $attachment->company_id) {
            return false;
        }

        return $user->role === 'HR_ADMIN'
            || $attachment->uploaded_by_id === $user->id
            || $attachment->task?->creator_id === $user->id;
    }
}
