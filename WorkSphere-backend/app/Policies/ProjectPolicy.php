<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;

class ProjectPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Project $project): bool
    {
        return $user->company_id === $project->company_id;
    }

    public function create(User $user): bool
    {
        return in_array($user->role, ['HR_ADMIN', 'MANAGER']);
    }

    public function update(User $user, Project $project): bool
    {
        return $user->company_id === $project->company_id
            && ($user->id === $project->creator_id || $user->role === 'HR_ADMIN');
    }

    public function delete(User $user, Project $project): bool
    {
        return $user->company_id === $project->company_id
            && ($user->id === $project->creator_id || $user->role === 'HR_ADMIN');
    }

    public function uploadCahierCharges(User $user, Project $project): bool
    {
        return $user->company_id === $project->company_id
            && ($user->id === $project->creator_id || $user->role === 'HR_ADMIN');
    }
}
