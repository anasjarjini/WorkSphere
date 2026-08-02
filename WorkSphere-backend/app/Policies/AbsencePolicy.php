<?php

namespace App\Policies;

use App\Enums\AbsenceStatus;
use App\Models\Absence;
use App\Models\User;

class AbsencePolicy
{
    public function create(User $user): bool
    {
        return in_array($user->role, ['EMPLOYE', 'MANAGER']);
    }

    public function view(User $user, Absence $absence): bool
    {
        if ($user->company_id !== $absence->company_id) {
            return false;
        }

        if ($user->id === $absence->user_id) {
            return true;
        }

        if ($user->role === 'MANAGER') {
            $absenceUser = $absence->relationLoaded('user')
                ? $absence->user
                : $absence->user()->first();

            return $absenceUser?->manager_id === $user->id;
        }

        if ($user->role === 'HR_ADMIN') {
            return true;
        }

        return false;
    }

    public function approve(User $user, Absence $absence): bool
    {
        if ($user->company_id !== $absence->company_id) {
            return false;
        }

        if ($user->id === $absence->user_id) {
            return false;
        }

        $absenceUser = $absence->relationLoaded('user')
            ? $absence->user
            : $absence->user()->first();

        if (! $absenceUser) {
            return false;
        }

        if ($user->role === 'HR_ADMIN') {
            return true;
        }

        if ($user->role === 'MANAGER') {
            return $absenceUser->manager_id === $user->id;
        }

        return false;
    }

    /**
     * Annulation par l'employé de sa propre demande encore en attente.
     */
    public function cancel(User $user, Absence $absence): bool
    {
        return $user->id === $absence->user_id
            && $absence->status === AbsenceStatus::EN_ATTENTE;
    }

    /**
     * Annulation exceptionnelle d'une absence déjà approuvée :
     * administrateur_rh uniquement.
     */
    public function cancelApproved(User $user, Absence $absence): bool
    {
        return $user->company_id === $absence->company_id
            && $user->role === 'HR_ADMIN';
    }
}
