<?php

namespace App\Policies;

use App\Models\AttendanceDeclaration;
use App\Models\User;

class AttendanceDeclarationPolicy
{
    public function create(User $user): bool
    {
        return in_array($user->role, ['EMPLOYE', 'MANAGER']);
    }

    public function update(User $user, AttendanceDeclaration $declaration): bool
    {
        return $user->id === $declaration->user_id
            && $declaration->validation_status->value !== 'VALIDEE';
    }

    public function view(User $user, AttendanceDeclaration $declaration): bool
    {
        if ($user->company_id !== $declaration->company_id) {
            return false;
        }

        if ($user->id === $declaration->user_id) {
            return true;
        }

        if ($user->role === 'MANAGER' && $declaration->relationLoaded('user')) {
            return $declaration->user->manager_id === $user->id;
        }

        if ($user->role === 'MANAGER') {
            $declarationUser = $declaration->user()->first();
            return $declarationUser->manager_id === $user->id;
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

        $declarationUser = $declaration->relationLoaded('user')
            ? $declaration->user
            : $declaration->user()->first();

        if ($user->role === 'MANAGER') {
            return $declarationUser->manager_id === $user->id
                && $declarationUser->role === 'EMPLOYE';
        }

        if ($user->role === 'HR_ADMIN') {
            return $declarationUser->role === 'MANAGER';
        }

        return false;
    }
}
