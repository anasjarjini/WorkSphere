<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EmployeePolicy
{
    use HandlesAuthorization;

    /**
     * L'utilisateur peut modifier le statut de l'employé uniquement
     * si l'employé appartient à la même entreprise et n'est pas un HR_ADMIN.
     */
    public function updateStatus(User $user, User $employee): bool
    {
        return $user->company_id === $employee->company_id
            && $employee->role !== 'HR_ADMIN';
    }

    /**
     * L'utilisateur peut supprimer l'employé uniquement
     * si l'employé appartient à la même entreprise et n'est pas un HR_ADMIN.
     */
    public function delete(User $user, User $employee): bool
    {
        return $user->company_id === $employee->company_id
            && $employee->role !== 'HR_ADMIN';
    }
}
