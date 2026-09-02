<?php

namespace App\Policies;

use App\Models\AttendanceDeclaration;
use App\Models\User;

class AttendanceDeclarationPolicy
{
    public function create(User $user): bool
    {
        return in_array($user->role, ['EMPLOYE', 'MANAGER', 'HR_ADMIN']);
    }

    public function update(User $user, AttendanceDeclaration $declaration): bool
    {
        if ($user->company_id !== $declaration->company_id) {
            return false;
        }

        if ($user->role === 'HR_ADMIN') {
            return true;
        }

        if ($user->role === 'MANAGER') {
            $declarationUser = $declaration->relationLoaded('user') ? $declaration->user : $declaration->user()->first();
            return $declarationUser && $declarationUser->manager_id === $user->id;
        }

        return false;
    }

    public function view(User $user, AttendanceDeclaration $declaration): bool
    {
        if ($user->company_id !== $declaration->company_id) {
            return false;
        }

        if ($user->id === $declaration->user_id) {
            return true;
        }

        if ($user->role === 'MANAGER') {
            $declarationUser = $declaration->relationLoaded('user') ? $declaration->user : $declaration->user()->first();
            return $declarationUser && $declarationUser->manager_id === $user->id;
        }

        if ($user->role === 'HR_ADMIN') {
            return true;
        }

        return false;
    }

    public function approve(User $user, AttendanceDeclaration $declaration): bool
    {
        if ($user->company_id !== $declaration->company_id) {
            return false;
        }

        if ($user->id === $declaration->user_id) {
            return false;
        }

        if ($user->role === 'HR_ADMIN') {
            return true;
        }

        if ($user->role === 'MANAGER') {
            $declarationUser = $declaration->relationLoaded('user')
                ? $declaration->user
                : $declaration->user()->first();

            return $declarationUser && $declarationUser->manager_id === $user->id;
        }

        return false;
    }
}

