<?php

namespace App\Services;

use App\Exceptions\DuplicateAdminException;
use App\Models\Company;
use App\Models\User;

class RoleAssignmentService
{
    public function assignAdminRh(User $user, Company $company): void
    {
        if ($company->hasAdminRh()) {
            throw new DuplicateAdminException();
        }

        $user->assignRole('administrateur_rh');
    }
}
