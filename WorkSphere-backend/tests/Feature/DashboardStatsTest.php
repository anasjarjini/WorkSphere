<?php

namespace Tests\Feature;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\Company;
use App\Models\Department;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class DashboardStatsTest extends TestCase
{
    private Company $company;

    private Company $otherCompany;

    private Department $department;

    private Department $otherDepartment;

    private User $hrAdmin;

    private User $manager;

    protected function setUp(): void
    {
        parent::setUp();

        Carbon::setTestNow(Carbon::parse('2026-09-02 10:00:00'));

        Schema::create('companies', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('departments', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('users', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('manager_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('job_title')->nullable();
            $table->date('hire_date')->nullable();
            $table->string('role');
            $table->string('status');
            $table->boolean('is_active')->default(true);
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('attendance_declarations', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->date('date');
            $table->string('status');
            $table->string('validation_status')->default('EN_ATTENTE');
            $table->foreignId('validated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('validated_at')->nullable();
            $table->foreignId('manager_validated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('manager_validated_at')->nullable();
            $table->text('rejection_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->unique(['user_id', 'date']);
        });

        Schema::create('absences', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('approver_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('type');
            $table->string('reference_code')->unique();
            $table->date('start_date');
            $table->date('end_date');
            $table->unsignedSmallInteger('duration_days');
            $table->text('reason')->nullable();
            $table->string('status')->default('EN_ATTENTE');
            $table->text('rejection_reason')->nullable();
            $table->string('justificatif_path')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('rejected_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        $this->company = Company::create([
            'name' => 'WorkSphere A',
            'slug' => 'worksphere-a',
            'is_active' => true,
        ]);
        $this->otherCompany = Company::create([
            'name' => 'WorkSphere B',
            'slug' => 'worksphere-b',
            'is_active' => true,
        ]);

        $this->department = Department::create([
            'company_id' => $this->company->id,
            'name' => 'Engineering',
        ]);
        $this->otherDepartment = Department::create([
            'company_id' => $this->otherCompany->id,
            'name' => 'Secret B',
        ]);

        $this->hrAdmin = $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'hr@a.test',
            role: 'HR_ADMIN',
            hireDate: '2024-01-01',
        );
        $this->manager = $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'manager@a.test',
            role: 'MANAGER',
            hireDate: '2025-01-10',
        );
    }

    protected function tearDown(): void
    {
        Carbon::setTestNow();

        parent::tearDown();
    }

    public function test_hr_dashboard_returns_reliable_tenant_scoped_metrics(): void
    {
        Department::create([
            'company_id' => $this->company->id,
            'name' => 'Empty department',
        ]);
        $deletedDepartment = Department::create([
            'company_id' => $this->company->id,
            'name' => 'Archived department',
        ]);
        $deletedDepartment->delete();

        $presentEmployee = $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'present@a.test',
            manager: $this->manager,
            hireDate: '2026-08-31',
        );
        $onLeaveEmployee = $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'leave@a.test',
            manager: $this->manager,
            hireDate: '2026-08-20',
        );
        $incompleteEmployee = $this->createUser(
            company: $this->company,
            department: null,
            email: 'incomplete@a.test',
            manager: null,
            hireDate: '2026-07-01',
            jobTitle: null,
        );
        $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'inactive@a.test',
            manager: $this->manager,
            status: 'INACTIVE',
            hireDate: '2025-03-01',
        );
        $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'pending@a.test',
            manager: $this->manager,
            status: 'PENDING_ACTIVATION',
            hireDate: '2025-04-01',
        );
        $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'suspended@a.test',
            manager: $this->manager,
            status: 'SUSPENDED',
            hireDate: '2025-05-01',
        );

        $otherManager = $this->createUser(
            company: $this->otherCompany,
            department: $this->otherDepartment,
            email: 'manager@b.test',
            role: 'MANAGER',
            hireDate: '2025-01-01',
        );
        $otherEmployee = $this->createUser(
            company: $this->otherCompany,
            department: $this->otherDepartment,
            email: 'employee@b.test',
            manager: $otherManager,
            hireDate: '2026-09-01',
        );

        $this->createAttendance($presentEmployee, AttendanceStatus::PRESENT, AttendanceValidationStatus::EN_ATTENTE);
        $this->createAttendance($this->manager, AttendanceStatus::ABSENT, AttendanceValidationStatus::EN_ATTENTE);
        $this->createAttendance($onLeaveEmployee, AttendanceStatus::PRESENT, AttendanceValidationStatus::EN_ATTENTE);
        $this->createAttendance($incompleteEmployee, AttendanceStatus::PRESENT, AttendanceValidationStatus::REJETEE);
        $this->createAttendance($otherEmployee, AttendanceStatus::PRESENT, AttendanceValidationStatus::EN_ATTENTE);

        $approvedAbsence = $this->createAbsence(
            $onLeaveEmployee,
            AbsenceStatus::APPROUVEE,
            Carbon::today(),
            Carbon::today()->addDays(2),
        );
        $this->createAbsence(
            $presentEmployee,
            AbsenceStatus::EN_ATTENTE,
            Carbon::today()->addDays(10),
            Carbon::today()->addDays(11),
        );
        $this->createAbsence(
            $otherEmployee,
            AbsenceStatus::EN_ATTENTE,
            Carbon::today()->addDay(),
            Carbon::today()->addDays(2),
        );
        $this->createAbsence(
            $otherEmployee,
            AbsenceStatus::APPROUVEE,
            Carbon::today(),
            Carbon::today()->addDays(2),
        );

        $response = $this->actingAs($this->hrAdmin)->getJson('/api/dashboard/stats');

        $response->assertOk()
            ->assertJson([
                'total_employees' => 7,
                'active_count' => 4,
                'pending_count' => 3,
                'managers_count' => 1,
                'regular_employees_count' => 6,
                'departments_count' => 2,
                'recent_hires_count' => 2,
                'status_counts' => [
                    'active' => 4,
                    'pending_activation' => 1,
                    'inactive' => 1,
                    'suspended' => 1,
                ],
                'employees_without_department' => 1,
                'employees_without_manager' => 1,
                'presence_today' => [
                    'present' => 1,
                    'absent' => 1,
                    'on_leave' => 1,
                    'not_declared' => 1,
                    'total' => 4,
                    'rate' => 25.0,
                ],
                'pending_actions' => [
                    'leave_requests' => 1,
                    'attendance_declarations' => 1,
                    'incomplete_profiles' => 1,
                    'total' => 3,
                ],
            ])
            ->assertJsonPath('department_distribution.0.department', 'Engineering')
            ->assertJsonPath('department_distribution.0.count', 6)
            ->assertJsonPath('recent_hires.0.email', 'present@a.test')
            ->assertJsonPath('recent_hires.1.email', 'leave@a.test')
            ->assertJsonPath('upcoming_absences.0.id', $approvedAbsence->id)
            ->assertJsonPath('upcoming_absences.0.user.email', 'leave@a.test')
            ->assertJsonPath('headcount_trend.11.month', '2026-09')
            ->assertJsonPath('headcount_trend.11.count', 7)
            ->assertJsonPath('recent_activity.0.type', 'NEW_HIRE')
            ->assertJsonCount(12, 'headcount_trend')
            ->assertJsonCount(1, 'upcoming_absences')
            ->assertJsonCount(2, 'recent_activity')
            ->assertJsonMissing(['email' => 'employee@b.test']);

        $this->assertNotEmpty($response->json('last_updated_at'));
    }

    public function test_recent_hires_are_sorted_server_side_and_limited_to_five(): void
    {
        foreach (range(1, 7) as $daysAgo) {
            $this->createUser(
                company: $this->company,
                department: $this->department,
                email: "hire{$daysAgo}@a.test",
                manager: $this->manager,
                hireDate: Carbon::today()->subDays($daysAgo)->toDateString(),
            );
        }

        $response = $this->actingAs($this->hrAdmin)->getJson('/api/dashboard/stats');

        $response->assertOk()
            ->assertJsonPath('recent_hires_count', 7)
            ->assertJsonCount(5, 'recent_hires')
            ->assertJsonPath('recent_hires.0.email', 'hire1@a.test')
            ->assertJsonPath('recent_hires.4.email', 'hire5@a.test');
    }

    public function test_employee_without_manager_is_counted_as_one_incomplete_profile(): void
    {
        $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'managerless@a.test',
            manager: null,
            hireDate: '2025-01-01',
        );

        $this->actingAs($this->hrAdmin)
            ->getJson('/api/dashboard/stats')
            ->assertOk()
            ->assertJsonPath('employees_without_department', 0)
            ->assertJsonPath('employees_without_manager', 1)
            ->assertJsonPath('pending_actions.incomplete_profiles', 1);
    }

    public function test_dashboard_stats_remain_restricted_to_hr_admins(): void
    {
        $employee = $this->createUser(
            company: $this->company,
            department: $this->department,
            email: 'employee@a.test',
            manager: $this->manager,
            hireDate: '2025-01-01',
        );

        $this->actingAs($employee)
            ->getJson('/api/dashboard/stats')
            ->assertForbidden();
    }

    private function createUser(
        Company $company,
        ?Department $department,
        string $email,
        string $role = 'EMPLOYE',
        ?User $manager = null,
        string $status = 'ACTIVE',
        ?string $hireDate = null,
        ?string $jobTitle = 'Software Engineer',
    ): User {
        $localPart = explode('@', $email)[0];
        $firstName = ucfirst((string) strtok($localPart, '.'));

        return User::create([
            'name' => $firstName.' User',
            'first_name' => $firstName,
            'last_name' => 'User',
            'email' => $email,
            'password' => 'secret',
            'company_id' => $company->id,
            'department_id' => $department?->id,
            'manager_id' => $manager?->id,
            'job_title' => $jobTitle,
            'hire_date' => $hireDate,
            'role' => $role,
            'status' => $status,
        ]);
    }

    private function createAttendance(
        User $user,
        AttendanceStatus $status,
        AttendanceValidationStatus $validationStatus,
    ): AttendanceDeclaration {
        return AttendanceDeclaration::create([
            'company_id' => $user->company_id,
            'user_id' => $user->id,
            'date' => Carbon::today()->toDateString(),
            'status' => $status,
            'validation_status' => $validationStatus,
        ]);
    }

    private function createAbsence(
        User $user,
        AbsenceStatus $status,
        Carbon $start,
        Carbon $end,
    ): Absence {
        return Absence::create([
            'company_id' => $user->company_id,
            'user_id' => $user->id,
            'type' => AbsenceType::CONGE_PAYE,
            'reference_code' => implode('-', [
                'TEST',
                $user->company_id,
                $user->id,
                $start->format('Ymd'),
                $status->value,
            ]),
            'start_date' => $start->toDateString(),
            'end_date' => $end->toDateString(),
            'duration_days' => $start->diffInDays($end) + 1,
            'status' => $status,
        ]);
    }
}
