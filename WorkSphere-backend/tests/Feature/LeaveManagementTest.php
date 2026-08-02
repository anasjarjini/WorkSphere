<?php

namespace Tests\Feature;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Enums\AttendanceStatus;
use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\Company;
use App\Models\LeaveBalance;
use App\Models\PublicHoliday;
use App\Models\User;
use App\Services\AbsenceStatusTransitionService;
use App\Services\AttendanceDeclarationService;
use App\Services\LeaveBalanceService;
use Carbon\Carbon;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class LeaveManagementTest extends TestCase
{
    private Company $company;
    private User $manager;
    private User $employee;
    private User $hrAdmin;
    private LeaveBalanceService $balanceService;
    private AbsenceStatusTransitionService $transitionService;

    protected function setUp(): void
    {
        parent::setUp();

        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->boolean('is_active')->default(true);
            $table->unsignedSmallInteger('default_annual_leave_days')->nullable();
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

        Schema::create('public_holidays', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->date('date');
            $table->timestamps();
            $table->index(['company_id', 'date']);
        });

        Schema::create('leave_balances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->unsignedSmallInteger('year');
            $table->string('type');
            $table->unsignedSmallInteger('allocated_days')->default(0);
            $table->unsignedSmallInteger('used_days')->default(0);
            $table->unsignedSmallInteger('carried_over_days')->default(0);
            $table->timestamps();
            $table->softDeletes();
            $table->unique(['user_id', 'year', 'type']);
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

        Schema::create('attendance_declarations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->date('date');
            $table->string('status');
            $table->decimal('hours_worked', 5, 2)->nullable();
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

        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        $this->company = Company::create([
            'name' => 'Leave Corp',
            'slug' => 'leave-corp',
            'is_active' => true,
            'default_annual_leave_days' => 18,
        ]);

        $this->hrAdmin = User::create([
            'name' => 'RH Admin',
            'first_name' => 'RH',
            'last_name' => 'Admin',
            'email' => 'rh@leave.test',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'HR_ADMIN',
            'status' => 'ACTIVE',
        ]);

        $this->manager = User::create([
            'name' => 'Manager User',
            'first_name' => 'Manager',
            'last_name' => 'User',
            'email' => 'manager@leave.test',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'MANAGER',
            'status' => 'ACTIVE',
        ]);

        $this->employee = User::create([
            'name' => 'Employee User',
            'first_name' => 'Employee',
            'last_name' => 'User',
            'email' => 'employee@leave.test',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'manager_id' => $this->manager->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);

        $this->balanceService = new LeaveBalanceService();
        $this->transitionService = new AbsenceStatusTransitionService($this->balanceService);

        $this->seedBalance(18, 0);
    }

    private function seedBalance(int $allocated, int $used): void
    {
        LeaveBalance::updateOrCreate(
            [
                'company_id' => $this->company->id,
                'user_id' => $this->employee->id,
                'year' => now()->year,
                'type' => AbsenceType::CONGE_PAYE,
            ],
            [
                'allocated_days' => $allocated,
                'used_days' => $used,
                'carried_over_days' => 0,
            ]
        );
    }

    private function createAbsence(
        Carbon $start,
        Carbon $end,
        AbsenceType $type = AbsenceType::CONGE_PAYE,
        int $duration = 5
    ): Absence {
        return Absence::create([
            'company_id' => $this->company->id,
            'user_id' => $this->employee->id,
            'type' => $type,
            'start_date' => $start->toDateString(),
            'end_date' => $end->toDateString(),
            'duration_days' => $duration,
            'reason' => 'Vacances',
            'status' => AbsenceStatus::EN_ATTENTE,
        ]);
    }

    public function test_calculate_working_days_excludes_weekends_and_holidays(): void
    {
        PublicHoliday::create(['company_id' => null, 'name' => 'Férié national', 'date' => '2026-07-14']);
        PublicHoliday::create(['company_id' => $this->company->id, 'name' => 'Férié company', 'date' => '2026-07-15']);

        // 2026-07-13 (lun) au 2026-07-19 (dim) : 5 jours ouvrés - 2 fériés = 3
        $days = $this->balanceService->calculateWorkingDays(
            Carbon::parse('2026-07-13'),
            Carbon::parse('2026-07-19'),
            $this->company->id
        );

        $this->assertSame(3, $days);
    }

    public function test_working_days_ignores_holidays_of_other_companies(): void
    {
        $otherCompany = Company::create(['name' => 'Other', 'slug' => 'other-company', 'is_active' => true]);
        PublicHoliday::create(['company_id' => $otherCompany->id, 'name' => 'Férié autre', 'date' => '2026-07-14']);

        $days = $this->balanceService->calculateWorkingDays(
            Carbon::parse('2026-07-13'),
            Carbon::parse('2026-07-17'),
            $this->company->id
        );

        $this->assertSame(5, $days);
    }

    public function test_sufficient_balance_blocks_only_conge_paye(): void
    {
        $this->assertTrue($this->balanceService->hasSufficientBalance($this->employee, AbsenceType::MALADIE, 30));
        $this->assertTrue($this->balanceService->hasSufficientBalance($this->employee, AbsenceType::SANS_SOLDE, 30));
        $this->assertTrue($this->balanceService->hasSufficientBalance($this->employee, AbsenceType::CONGE_PAYE, 5));
        $this->assertFalse($this->balanceService->hasSufficientBalance($this->employee, AbsenceType::CONGE_PAYE, 19));
    }

    public function test_approve_deducts_balance(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 3);

        $approved = $this->transitionService->approve($absence, $this->manager);

        $this->assertSame('APPROUVEE', $approved->status->value);
        $this->assertSame($this->manager->id, $approved->approver_id);
        $this->assertNotNull($approved->approved_at);

        $balance = $this->employee->leaveBalances()->where('year', now()->year)->first();
        $this->assertSame(3, $balance->used_days);
        $this->assertSame(15, $balance->remaining_days);
    }

    public function test_approve_blocked_when_insufficient_balance(): void
    {
        $this->seedBalance(18, 17);
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 3);

        $this->expectException(\DomainException::class);
        $this->expectExceptionMessage('Solde de congés insuffisant');

        $this->transitionService->approve($absence, $this->manager);
    }

    public function test_approve_does_not_check_balance_for_maladie(): void
    {
        $this->seedBalance(18, 18);
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), AbsenceType::MALADIE, 3);

        $approved = $this->transitionService->approve($absence, $this->manager);

        $this->assertSame('APPROUVEE', $approved->status->value);
        $balance = $this->employee->leaveBalances()->where('year', now()->year)->where('type', AbsenceType::CONGE_PAYE)->first();
        $this->assertSame(18, $balance->used_days);
    }

    public function test_hr_admin_can_approve_employee_absence(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 2);

        $approved = $this->transitionService->approve($absence, $this->hrAdmin);

        $this->assertSame('APPROUVEE', $approved->status->value);
    }

    public function test_employee_cannot_approve(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 2);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->transitionService->approve($absence, $this->employee);
    }

    public function test_manager_cannot_approve_own_absence(): void
    {
        $absence = Absence::create([
            'company_id' => $this->company->id,
            'user_id' => $this->manager->id,
            'type' => AbsenceType::CONGE_PAYE,
            'start_date' => Carbon::today()->addDays(3)->toDateString(),
            'end_date' => Carbon::today()->addDays(7)->toDateString(),
            'duration_days' => 2,
            'status' => AbsenceStatus::EN_ATTENTE,
        ]);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->transitionService->approve($absence, $this->manager);
    }

    public function test_manager_cannot_approve_absence_of_other_team(): void
    {
        $otherManager = User::create([
            'name' => 'Other Manager',
            'first_name' => 'Other',
            'last_name' => 'Manager',
            'email' => 'other.mgr@leave.test',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'MANAGER',
            'status' => 'ACTIVE',
        ]);
        $otherEmployee = User::create([
            'name' => 'Other Employee',
            'first_name' => 'Other',
            'last_name' => 'Employee',
            'email' => 'other.emp@leave.test',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'manager_id' => $otherManager->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);

        $absence = Absence::create([
            'company_id' => $this->company->id,
            'user_id' => $otherEmployee->id,
            'type' => AbsenceType::CONGE_PAYE,
            'start_date' => Carbon::today()->addDays(3)->toDateString(),
            'end_date' => Carbon::today()->addDays(7)->toDateString(),
            'duration_days' => 2,
            'status' => AbsenceStatus::EN_ATTENTE,
        ]);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->transitionService->approve($absence, $this->manager);
    }

    public function test_reject_requires_reason(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 2);

        $this->expectException(\DomainException::class);
        $this->transitionService->reject($absence, $this->manager, '');
    }

    public function test_employee_can_cancel_own_pending_absence(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 2);

        $cancelled = $this->transitionService->cancel($absence, $this->employee);

        $this->assertSame('ANNULEE', $cancelled->status->value);
        $balance = $this->employee->leaveBalances()->where('year', now()->year)->first();
        $this->assertSame(0, $balance->used_days);
    }

    public function test_employee_cannot_cancel_other_absence(): void
    {
        $absence = Absence::create([
            'company_id' => $this->company->id,
            'user_id' => $this->manager->id,
            'type' => AbsenceType::CONGE_PAYE,
            'start_date' => Carbon::today()->addDays(3)->toDateString(),
            'end_date' => Carbon::today()->addDays(7)->toDateString(),
            'duration_days' => 2,
            'status' => AbsenceStatus::EN_ATTENTE,
        ]);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->transitionService->cancel($absence, $this->employee);
    }

    public function test_hr_admin_can_cancel_approved_absence_and_restore_balance(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 4);
        $approved = $this->transitionService->approve($absence, $this->manager);

        $cancelled = $this->transitionService->cancel($approved, $this->hrAdmin);

        $this->assertSame('ANNULEE', $cancelled->status->value);
        $balance = $this->employee->leaveBalances()->where('year', now()->year)->first();
        $this->assertSame(0, $balance->used_days);
        $this->assertSame(18, $balance->remaining_days);
    }

    public function test_employee_cannot_cancel_approved_absence(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 2);
        $approved = $this->transitionService->approve($absence, $this->manager);

        $this->expectException(\Illuminate\Auth\Access\AuthorizationException::class);
        $this->transitionService->cancel($approved, $this->employee);
    }

    public function test_reference_code_format(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(3), Carbon::today()->addDays(7), duration: 2);

        $this->assertMatchesRegularExpression('/^ABS-' . now()->year . '-\d{3}$/', $absence->reference_code);
    }

    public function test_garde_fou_declaration_refused_on_approved_leave(): void
    {
        $absence = $this->createAbsence(Carbon::today(), Carbon::today()->addDays(4), duration: 3);
        $this->transitionService->approve($absence, $this->manager);

        $attendanceService = new AttendanceDeclarationService();

        $this->expectException(\DomainException::class);
        $this->expectExceptionMessage('congé approuvé');

        $attendanceService->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT, 7.5);
    }

    public function test_garde_fou_declaration_allowed_outside_leave_period(): void
    {
        $absence = $this->createAbsence(Carbon::today()->addDays(10), Carbon::today()->addDays(14), duration: 3);
        $this->transitionService->approve($absence, $this->manager);

        $attendanceService = new AttendanceDeclarationService();

        $declaration = $attendanceService->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT, 7.5);

        $this->assertSame('EN_ATTENTE', $declaration->validation_status->value);
        $this->assertCount(1, AttendanceDeclaration::all());
    }

    public function test_garde_fou_pending_absence_does_not_block_declaration(): void
    {
        $this->createAbsence(Carbon::today(), Carbon::today()->addDays(4), duration: 3);

        $attendanceService = new AttendanceDeclarationService();

        $declaration = $attendanceService->declare($this->employee, Carbon::today(), AttendanceStatus::PRESENT, 7.5);

        $this->assertNotNull($declaration);
    }
}
