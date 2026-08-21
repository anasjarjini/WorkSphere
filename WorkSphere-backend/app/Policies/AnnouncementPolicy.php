<?php

namespace App\Policies;

use App\Enums\AnnouncementScope;
use App\Enums\AnnouncementStatus;
use App\Models\Announcement;
use App\Models\User;

class AnnouncementPolicy
{
    public function create(User $user): bool
    {
        return in_array($user->role, ['MANAGER', 'HR_ADMIN']);
    }

    public function createCompanyWide(User $user): bool
    {
        return $user->role === 'HR_ADMIN';
    }

    public function view(User $user, Announcement $announcement): bool
    {
        if ($user->company_id !== $announcement->company_id) {
            return false;
        }

        if ($announcement->status === AnnouncementStatus::DRAFT) {
            return $announcement->creator_id === $user->id;
        }

        if ($announcement->target_scope === AnnouncementScope::COMPANY) {
            return true;
        }

        return $announcement->target_manager_id === $user->manager_id
            || $announcement->target_manager_id === $user->id
            || $announcement->creator_id === $user->id;
    }

    public function update(User $user, Announcement $announcement): bool
    {
        return $user->company_id === $announcement->company_id
            && $user->id === $announcement->creator_id;
    }

    public function delete(User $user, Announcement $announcement): bool
    {
        return $this->update($user, $announcement);
    }
}
