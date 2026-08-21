<?php

namespace Tests\Feature;

use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Models\AttendanceDeclaration;
use App\Models\Company;
use App\Models\User;
use App\Services\AttendanceDeclarationService;
use Carbon\Carbon;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class AttendanceDeclarationTest extends TestCase
{
    private Company $company;
    private User $manager;
    private User $employee;
    private User $hrAdmin;
    private AttendanceDeclarationService $service;

    protected function setUp(): void
    {
        parent::setUp();

        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('manager_id')->nullable()->constrained('users')->nullOnDelete();
            $table->boolean('is_active')->default(false);
            $table->string('role');
            $table->string('status')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('attendance_declarations', function (Blueprint $table) {
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

        Schema::create('absences', function (Blueprint $table) {
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
            $table->index(['company_id', 'user_id', 'status']);
        });

        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        $this->company = Company::create([
            'name' => 'Test Corp',
            'slug' => 'test-corp',
            'is_active' => true,
        ]);

        $this->hrAdmin = User::create([
            'name' => 'RH Admin',
            'first_name' => 'RH',
            'last_name' => 'Admin',
            'email' => 'rh@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'HR_ADMIN',
            'status' => 'ACTIVE',
        ]);

        $this->manager = User::create([
            'name' => 'Manager User',
            'first_name' => 'Manager',
            'last_name' => 'User',
            'email' => 'manager@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'MANAGER',
            'status' => 'ACTIVE',
        ]);

        $this->employee = User::create([
            'name' => 'Employee User',
            'first_name' => 'Employee',
            'last_name' => 'User',
            'email' => 'employee@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'manager_id' => $this->manager->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);

        $this->service = new AttendanceDeclarationService();
    }

    public function test_employee_can_declare_present(): void
    {
        $declaration = $this->service->declare(
            $this->employee,
            Carbon::today(),
            AttendanceStatus::PRESENT
        );

        $this->assertSame($this->employee->id, $declaration->user_id);
        $this->assertSame('PRESENT', $declaration->status->value);
        $this->assertSame('EN_ATTENTE', $declaration->validation_status->value);
    }

    public function test_employee_can_update_declaration_if_not_validated(): void
    {
        $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        $updated = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        $this->assertSame('EN_ATTENTE', $updated->validation_status->value);
    }

    public function test_cannot_update_validated_declaration(): void
    {
        $declaration = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        AttendanceDeclaration::withoutGlobalScopes()->where('id', $declaration->id)->update([
            'validation_status' => AttendanceValidationStatus::VALIDEE,
            'validated_by' => $this->manager->id,
            'validated_at' => now(),
        ]);

        $this->expectException(\DomainException::class);
        $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);
    }

    public function test_manager_approve_employee_declaration(): void
    {
        $declaration = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        $approved = $this->service->approve($declaration, $this->manager);

        $this->assertSame('VALIDEE', $approved->validation_status->value);
        $this->assertSame($this->manager->id, $approved->validated_by);
        $this->assertNotNull($approved->validated_at);
        $this->assertNull($approved->manager_validated_by);
    }

    public function test_manager_cannot_approve_own_declaration(): void
    {
        $declaration = $this->service->declare($this->manager, Carbon::today(), AttendanceStatus::PRESENT);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->service->approve($declaration, $this->manager);
    }

    public function test_manager_cannot_approve_other_managers_declaration(): void
    {
        $otherManager = User::create([
            'name' => 'Other Manager',
            'first_name' => 'Other',
            'last_name' => 'Manager',
            'email' => 'other.mgr@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'MANAGER',
            'status' => 'ACTIVE',
        ]);

        $declaration = $this->service->declare($otherManager, Carbon::today(), AttendanceStatus::PRESENT);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->service->approve($declaration, $this->manager);
    }

    public function test_hr_admin_can_approve_manager_declaration(): void
    {
        $declaration = $this->service->declare($this->manager, Carbon::today(), AttendanceStatus::PRESENT);

        $approved = $this->service->approve($declaration, $this->hrAdmin);

        $this->assertSame('VALIDEE', $approved->validation_status->value);
        $this->assertSame($this->hrAdmin->id, $approved->validated_by);
    }

    public function test_hr_admin_cannot_approve_employee_declaration(): void
    {
        $declaration = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->service->approve($declaration, $this->hrAdmin);
    }

    public function test_hr_admin_cannot_create_declaration(): void
    {
        $this->assertFalse(Gate::forUser($this->hrAdmin)->allows('create', AttendanceDeclaration::class));
    }

    public function test_employee_cannot_approve_declaration(): void
    {
        $declaration = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->service->approve($declaration, $this->employee);
    }

    public function test_can_reject_declaration(): void
    {
        $declaration = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        $rejected = $this->service->reject($declaration, $this->manager, 'Justification insuffisante');

        $this->assertSame('REJETEE', $rejected->validation_status->value);
        $this->assertSame('Justification insuffisante', $rejected->rejection_reason);
    }

    public function test_cannot_reject_validated_declaration(): void
    {
        $declaration = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        AttendanceDeclaration::withoutGlobalScopes()->where('id', $declaration->id)->update([
            'validation_status' => AttendanceValidationStatus::VALIDEE,
            'validated_by' => $this->manager->id,
            'validated_at' => now(),
        ]);

        $this->expectException(\DomainException::class);
        $this->service->reject($declaration->fresh(), $this->manager, 'Trop tard');
    }

    public function test_bulk_approve_mixed_ids(): void
    {
        $decl1 = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);
        $decl2 = $this->service->declare($this->employee, Carbon::yesterday(), AttendanceStatus::PRESENT);

        $result = $this->service->bulkApprove([$decl1->id, $decl2->id, 99999], $this->manager);

        $this->assertCount(2, $result['approved']);
        $this->assertCount(1, $result['skipped']);
        $this->assertContains(99999, $result['skipped']);
    }

    public function test_bulk_approve_skips_already_validated(): void
    {
        $decl1 = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);

        AttendanceDeclaration::withoutGlobalScopes()->where('id', $decl1->id)->update([
            'validation_status' => AttendanceValidationStatus::VALIDEE,
            'validated_by' => $this->hrAdmin->id,
            'validated_at' => now(),
        ]);

        $decl2 = $this->service->declare($this->employee, Carbon::yesterday(), AttendanceStatus::PRESENT);

        $result = $this->service->bulkApprove([$decl1->id, $decl2->id], $this->manager);

        $this->assertCount(1, $result['approved']);
        $this->assertContains($decl2->id, $result['approved']);
        $this->assertContains($decl1->id, $result['skipped']);
    }

    public function test_bulk_approve_skips_unauthorized(): void
    {
        $otherManager = User::create([
            'name' => 'Other Manager',
            'first_name' => 'Other',
            'last_name' => 'Manager',
            'email' => 'other.mgr2@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'MANAGER',
            'status' => 'ACTIVE',
        ]);
        $otherEmployee = User::create([
            'name' => 'Other Employee',
            'first_name' => 'Other',
            'last_name' => 'Employee',
            'email' => 'other.emp@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'manager_id' => $otherManager->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);

        $decl1 = $this->service->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT);
        $decl2 = $this->service->declare($otherEmployee, Carbon::today(), AttendanceStatus::PRESENT);

        $result = $this->service->bulkApprove([$decl1->id, $decl2->id], $this->manager);

        $this->assertCount(1, $result['approved']);
        $this->assertCount(1, $result['skipped']);
        $this->assertContains($decl1->id, $result['approved']);
        $this->assertContains($decl2->id, $result['skipped']);
    }

}
