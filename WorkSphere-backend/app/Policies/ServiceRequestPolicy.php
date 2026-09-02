<?php

namespace App\Policies;

use App\Models\ServiceRequest;
use App\Models\User;

class ServiceRequestPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->role === 'HR_ADMIN';
    }

    public function viewDepartment(User $user): bool
    {
        return $user->role === 'MANAGER' && $user->department_id !== null;
    }

    public function view(User $user, ServiceRequest $serviceRequest): bool
    {
        if ($user->company_id !== $serviceRequest->company_id) {
            return false;
        }

        return $user->role === 'HR_ADMIN'
            || $serviceRequest->creator_id === $user->id
            || $serviceRequest->developer_id === $user->id
            || $this->managesDestinationDepartment($user, $serviceRequest);
    }

    public function create(User $user): bool
    {
        return $user->company_id !== null && $user->department_id !== null;
    }

    public function update(User $user, ServiceRequest $serviceRequest): bool
    {
        return $user->company_id === $serviceRequest->company_id
            && $serviceRequest->creator_id === $user->id
            && $serviceRequest->status === 'PENDING';
    }

    public function approve(User $user, ServiceRequest $serviceRequest): bool
    {
        return $user->company_id === $serviceRequest->company_id
            && ($user->role === 'HR_ADMIN' || $this->managesDestinationDepartment($user, $serviceRequest));
    }

    public function assignDeveloper(User $user, ServiceRequest $serviceRequest): bool
    {
        return $this->approve($user, $serviceRequest);
    }

    public function updateStatus(User $user, ServiceRequest $serviceRequest): bool
    {
        return $user->company_id === $serviceRequest->company_id
            && ($serviceRequest->developer_id === $user->id || $this->approve($user, $serviceRequest));
    }

    private function managesDestinationDepartment(User $user, ServiceRequest $serviceRequest): bool
    {
        return $user->role === 'MANAGER'
            && $user->department_id !== null
            && $user->department_id === $serviceRequest->to_department_id;
    }
}
