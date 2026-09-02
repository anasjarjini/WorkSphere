<?php

namespace Tests\Unit;

use App\Models\ServiceRequest;
use App\Models\User;
use App\Policies\ServiceRequestPolicy;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class ServiceRequestPolicyTest extends TestCase
{
    private ServiceRequestPolicy $policy;

    protected function setUp(): void
    {
        parent::setUp();

        $this->policy = new ServiceRequestPolicy;
    }

    #[Test]
    public function an_employee_cannot_approve_a_service_request(): void
    {
        $employee = $this->user(10, 1, 'EMPLOYE', 2);
        $serviceRequest = $this->serviceRequest(1, 20, 2);

        self::assertFalse($this->policy->approve($employee, $serviceRequest));
    }

    #[Test]
    public function only_the_destination_department_manager_can_approve(): void
    {
        $destinationManager = $this->user(10, 1, 'MANAGER', 2);
        $otherManager = $this->user(11, 1, 'MANAGER', 3);
        $serviceRequest = $this->serviceRequest(1, 20, 2);

        self::assertTrue($this->policy->approve($destinationManager, $serviceRequest));
        self::assertFalse($this->policy->approve($otherManager, $serviceRequest));
    }

    #[Test]
    public function users_from_another_company_are_always_rejected(): void
    {
        $hrAdmin = $this->user(10, 2, 'HR_ADMIN', 2);
        $serviceRequest = $this->serviceRequest(1, 20, 2);

        self::assertFalse($this->policy->view($hrAdmin, $serviceRequest));
        self::assertFalse($this->policy->approve($hrAdmin, $serviceRequest));
        self::assertFalse($this->policy->updateStatus($hrAdmin, $serviceRequest));
    }

    #[Test]
    public function assigned_developer_can_view_and_advance_the_request(): void
    {
        $developer = $this->user(30, 1, 'EMPLOYE', 4);
        $serviceRequest = $this->serviceRequest(1, 20, 2);
        $serviceRequest->developer_id = 30;

        self::assertTrue($this->policy->view($developer, $serviceRequest));
        self::assertTrue($this->policy->updateStatus($developer, $serviceRequest));
        self::assertFalse($this->policy->approve($developer, $serviceRequest));
    }

    private function user(int $id, int $companyId, string $role, int $departmentId): User
    {
        $user = new User;
        $user->id = $id;
        $user->company_id = $companyId;
        $user->role = $role;
        $user->department_id = $departmentId;

        return $user;
    }

    private function serviceRequest(int $companyId, int $creatorId, int $destinationDepartmentId): ServiceRequest
    {
        $serviceRequest = new ServiceRequest;
        $serviceRequest->company_id = $companyId;
        $serviceRequest->creator_id = $creatorId;
        $serviceRequest->to_department_id = $destinationDepartmentId;
        $serviceRequest->status = 'PENDING';

        return $serviceRequest;
    }
}
