<?php

namespace Tests\Feature;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Enums\AnnouncementScope;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Enums\TaskStatus;
use App\Models\Absence;
use App\Models\Announcement;
use App\Models\AttendanceDeclaration;
use App\Models\Company;
use App\Models\Department;
use App\Models\LeaveBalance;
use App\Models\Project;
use App\Models\PublicHoliday;
use App\Models\ServiceRequest;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EmployeeDashboardStatsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Carbon::setTestNow(Carbon::parse('2026-09-04 10:30:00'));
    }

    protected function tearDown(): void
    {
        Carbon::setTestNow();

        parent::tearDown();
    }

    public function test_employee_dashboard_returns_personal_scoped_priorities(): void
    {
        $company = $this->createCompany('alpha');
        $product = $this->createDepartment($company, 'Produit');
        $support = $this->createDepartment($company, 'Support');
        $manager = $this->createUser($company, $product, 'manager@alpha.test', 'MANAGER');
        $otherManager = $this->createUser($company, $support, 'other-manager@alpha.test', 'MANAGER');
        $employee = $this->createUser($company, $product, 'employee@alpha.test', manager: $manager);
        $otherEmployee = $this->createUser(
            $company,
            $support,
            'private@alpha.test',
            manager: $otherManager,
        );

        $todayDeclaration = $this->createAttendance(
            $employee,
            Carbon::today(),
            AttendanceStatus::PRESENT,
            AttendanceValidationStatus::EN_ATTENTE,
        );
        $this->createAttendance(
            $employee,
            Carbon::today()->subDays(2),
            AttendanceStatus::ABSENT,
            AttendanceValidationStatus::VALIDEE,
        );
        $this->createAttendance(
            $employee,
            Carbon::today()->subDays(3),
            AttendanceStatus::PRESENT,
            AttendanceValidationStatus::REJETEE,
        );
        $this->createAttendance(
            $otherEmployee,
            Carbon::today(),
            AttendanceStatus::ABSENT,
            AttendanceValidationStatus::VALIDEE,
        );

        LeaveBalance::create([
            'company_id' => $company->id,
            'user_id' => $employee->id,
            'year' => 2026,
            'type' => AbsenceType::CONGE_PAYE,
            'allocated_days' => 20,
            'used_days' => 5,
            'carried_over_days' => 2,
        ]);

        $this->createAbsence(
            $employee,
            AbsenceStatus::EN_ATTENTE,
            Carbon::today()->addDays(6),
            Carbon::today()->addDays(7),
        );
        $approvedAbsence = $this->createAbsence(
            $employee,
            AbsenceStatus::APPROUVEE,
            Carbon::today()->addDays(12),
            Carbon::today()->addDays(14),
        );
        $this->createAbsence(
            $otherEmployee,
            AbsenceStatus::APPROUVEE,
            Carbon::today()->addDay(),
            Carbon::today()->addDays(2),
        );

        $project = $this->createProject($company, $manager, 'Application mobile');
        $privateProject = $this->createProject($company, $otherManager, 'Projet privé');
        $overdueTask = $this->createTask(
            $company,
            $project,
            $manager,
            $employee,
            'Corriger le parcours de connexion',
            TaskStatus::TODO,
            Carbon::today()->subDay(),
            'HIGH',
        );
        $dueTodayTask = $this->createTask(
            $company,
            $project,
            $manager,
            $employee,
            'Préparer la démonstration',
            TaskStatus::IN_PROGRESS,
            Carbon::today(),
        );
        $this->createTask(
            $company,
            $project,
            $manager,
            $employee,
            'Relire les spécifications',
            TaskStatus::REVIEW,
            Carbon::today()->addDays(4),
            'LOW',
        );
        $this->createTask(
            $company,
            $project,
            $manager,
            $employee,
            'Maquette validée',
            TaskStatus::DONE,
            Carbon::today()->subDays(4),
        );
        $this->createTask(
            $company,
            $privateProject,
            $otherManager,
            $otherEmployee,
            'Tâche confidentielle',
            TaskStatus::TODO,
            Carbon::today()->subDays(10),
        );

        $pendingRequest = $this->createServiceRequest(
            $company,
            $employee,
            $product,
            $support,
            'Accès au serveur de test',
            'PENDING',
        );
        $this->createServiceRequest(
            $company,
            $employee,
            $product,
            $support,
            'Installation terminée',
            'DEPLOYED',
        );
        $this->createServiceRequest(
            $company,
            $otherEmployee,
            $support,
            $product,
            'Demande confidentielle',
            'PENDING',
        );

        $companyAnnouncement = $this->createAnnouncement(
            $company,
            $manager,
            'Nouvelle politique hybride',
            AnnouncementScope::COMPANY,
            null,
            Carbon::now()->subHours(2),
        );
        $teamAnnouncement = $this->createAnnouncement(
            $company,
            $manager,
            'Réunion de l’équipe Produit',
            AnnouncementScope::TEAM,
            $manager,
            Carbon::now()->subHour(),
        );
        $this->createAnnouncement(
            $company,
            $otherManager,
            'Annonce privée Support',
            AnnouncementScope::TEAM,
            $otherManager,
            Carbon::now(),
        );

        PublicHoliday::create([
            'company_id' => null,
            'name' => 'Fête nationale',
            'date' => Carbon::today()->addDays(5),
        ]);
        PublicHoliday::create([
            'company_id' => $company->id,
            'name' => 'Journée entreprise',
            'date' => Carbon::today()->addDays(10),
        ]);

        $otherCompany = $this->createCompany('beta');
        $otherDepartment = $this->createDepartment($otherCompany, 'Confidentiel');
        $externalManager = $this->createUser(
            $otherCompany,
            $otherDepartment,
            'manager@beta.test',
            'MANAGER',
        );
        $externalEmployee = $this->createUser(
            $otherCompany,
            $otherDepartment,
            'employee@beta.test',
            manager: $externalManager,
        );
        $externalProject = $this->createProject($otherCompany, $externalManager, 'Projet société B');
        $this->createTask(
            $otherCompany,
            $externalProject,
            $externalManager,
            $externalEmployee,
            'Tâche société B',
            TaskStatus::TODO,
            Carbon::today()->subDay(),
        );
        $this->createAnnouncement(
            $otherCompany,
            $externalManager,
            'Annonce société B',
            AnnouncementScope::COMPANY,
            null,
            Carbon::now(),
        );
        PublicHoliday::create([
            'company_id' => $otherCompany->id,
            'name' => 'Jour privé B',
            'date' => Carbon::today()->addDay(),
        ]);

        $response = $this->actingAs($employee)->getJson('/api/employee/dashboard/stats');

        $response->assertOk()
            ->assertJson([
                'profile' => [
                    'department' => ['id' => $product->id, 'name' => 'Produit'],
                    'manager' => [
                        'id' => $manager->id,
                        'email' => 'manager@alpha.test',
                    ],
                ],
                'today_attendance' => [
                    'status' => 'PRESENT',
                    'is_on_leave' => false,
                    'declaration_id' => $todayDeclaration->id,
                    'validation_status' => 'EN_ATTENTE',
                ],
                'task_summary' => [
                    'todo' => 1,
                    'in_progress' => 1,
                    'review' => 1,
                    'done' => 1,
                    'overdue' => 1,
                    'due_today' => 1,
                    'total' => 4,
                    'open' => 3,
                    'completion_rate' => 25.0,
                ],
                'attendance_month' => [
                    'present' => 1,
                    'absent' => 1,
                    'pending' => 1,
                    'rejected' => 1,
                    'declared_days' => 2,
                    'presence_rate' => 50.0,
                ],
                'leave_summary' => [
                    'paid_balance' => [
                        'configured' => true,
                        'allocated_days' => 20,
                        'carried_over_days' => 2,
                        'used_days' => 5,
                        'remaining_days' => 17,
                        'usage_rate' => 22.7,
                    ],
                    'pending_requests' => 1,
                    'approved_upcoming' => 1,
                ],
                'request_summary' => [
                    'total' => 2,
                    'active' => 1,
                    'pending' => 1,
                ],
                'next_holiday' => [
                    'name' => 'Fête nationale',
                ],
            ])
            ->assertJsonPath('priority_tasks.0.id', $overdueTask->id)
            ->assertJsonPath('priority_tasks.1.id', $dueTodayTask->id)
            ->assertJsonPath('leave_summary.next_absence.id', $approvedAbsence->id)
            ->assertJsonPath('request_summary.items.0.id', $pendingRequest->id)
            ->assertJsonPath('announcements.0.id', $teamAnnouncement->id)
            ->assertJsonPath('announcements.1.id', $companyAnnouncement->id)
            ->assertJsonCount(3, 'priority_tasks')
            ->assertJsonCount(2, 'request_summary.items')
            ->assertJsonCount(2, 'announcements')
            ->assertJsonMissing(['title' => 'Tâche confidentielle'])
            ->assertJsonMissing(['title' => 'Demande confidentielle'])
            ->assertJsonMissing(['title' => 'Annonce privée Support'])
            ->assertJsonMissing(['title' => 'Annonce société B'])
            ->assertJsonMissing(['name' => 'Jour privé B']);

        $this->assertNotEmpty($response->json('last_updated_at'));
    }

    public function test_approved_leave_takes_precedence_over_a_today_declaration(): void
    {
        $company = $this->createCompany('leave');
        $department = $this->createDepartment($company, 'Design');
        $manager = $this->createUser($company, $department, 'manager@leave.test', 'MANAGER');
        $employee = $this->createUser($company, $department, 'employee@leave.test', manager: $manager);

        $this->createAttendance(
            $employee,
            Carbon::today(),
            AttendanceStatus::PRESENT,
            AttendanceValidationStatus::VALIDEE,
        );
        $this->createAbsence(
            $employee,
            AbsenceStatus::APPROUVEE,
            Carbon::today(),
            Carbon::today()->addDay(),
        );

        $this->actingAs($employee)
            ->getJson('/api/employee/dashboard/stats')
            ->assertOk()
            ->assertJsonPath('today_attendance.status', 'ON_LEAVE')
            ->assertJsonPath('today_attendance.is_on_leave', true);
    }

    public function test_employee_dashboard_is_restricted_to_employees(): void
    {
        $company = $this->createCompany('roles');
        $department = $this->createDepartment($company, 'RH');
        $manager = $this->createUser($company, $department, 'manager@roles.test', 'MANAGER');
        $hrAdmin = $this->createUser($company, $department, 'hr@roles.test', 'HR_ADMIN');

        $this->actingAs($manager)
            ->getJson('/api/employee/dashboard/stats')
            ->assertForbidden();

        $this->actingAs($hrAdmin)
            ->getJson('/api/employee/dashboard/stats')
            ->assertForbidden();
    }

    private function createCompany(string $slug): Company
    {
        return Company::create([
            'name' => ucfirst($slug),
            'slug' => $slug,
            'domain' => $slug.'.test',
            'is_active' => true,
        ]);
    }

    private function createDepartment(Company $company, string $name): Department
    {
        return Department::create([
            'company_id' => $company->id,
            'name' => $name,
        ]);
    }

    private function createUser(
        Company $company,
        Department $department,
        string $email,
        string $role = 'EMPLOYE',
        ?User $manager = null,
    ): User {
        $firstName = ucfirst((string) strtok(explode('@', $email)[0], '-.'));

        return User::create([
            'name' => $firstName.' User',
            'first_name' => $firstName,
            'last_name' => 'User',
            'email' => $email,
            'password' => 'secret',
            'company_id' => $company->id,
            'department_id' => $department->id,
            'manager_id' => $manager?->id,
            'job_title' => $role === 'MANAGER' ? 'Lead' : 'Designer',
            'hire_date' => '2025-01-10',
            'role' => $role,
            'status' => 'ACTIVE',
        ]);
    }

    private function createAttendance(
        User $user,
        Carbon $date,
        AttendanceStatus $status,
        AttendanceValidationStatus $validationStatus,
    ): AttendanceDeclaration {
        return AttendanceDeclaration::create([
            'company_id' => $user->company_id,
            'user_id' => $user->id,
            'date' => $date->toDateString(),
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
                'EMP',
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

    private function createProject(Company $company, User $creator, string $name): Project
    {
        return Project::forceCreate([
            'company_id' => $company->id,
            'creator_id' => $creator->id,
            'name' => $name,
            'reference_code' => 'EMP-PRJ-'.$company->id.'-'.(Project::withoutGlobalScopes()->count() + 1),
            'progress_percentage' => 30,
            'start_date' => Carbon::today()->subMonth(),
            'end_date' => Carbon::today()->addMonth(),
        ]);
    }

    private function createTask(
        Company $company,
        Project $project,
        User $creator,
        User $assignee,
        string $title,
        TaskStatus $status,
        Carbon $dueDate,
        string $priority = 'MEDIUM',
    ): Task {
        return Task::forceCreate([
            'company_id' => $company->id,
            'project_id' => $project->id,
            'creator_id' => $creator->id,
            'user_id' => $assignee->id,
            'title' => $title,
            'reference_code' => 'EMP-TSK-'.$company->id.'-'.(Task::withoutGlobalScopes()->count() + 1),
            'status' => $status,
            'priority' => $priority,
            'due_date' => $dueDate->toDateString(),
        ]);
    }

    private function createServiceRequest(
        Company $company,
        User $creator,
        Department $fromDepartment,
        Department $toDepartment,
        string $title,
        string $status,
    ): ServiceRequest {
        return ServiceRequest::create([
            'company_id' => $company->id,
            'from_department_id' => $fromDepartment->id,
            'to_department_id' => $toDepartment->id,
            'creator_id' => $creator->id,
            'title' => $title,
            'reference_code' => 'EMP-REQ-'.$company->id.'-'.(ServiceRequest::withoutGlobalScopes()->count() + 1),
            'status' => $status,
            'priority' => 'MEDIUM',
        ]);
    }

    private function createAnnouncement(
        Company $company,
        User $creator,
        string $title,
        AnnouncementScope $scope,
        ?User $targetManager,
        Carbon $publishedAt,
    ): Announcement {
        return Announcement::create([
            'company_id' => $company->id,
            'creator_id' => $creator->id,
            'title' => $title,
            'content' => '<p>Une information importante pour les collaborateurs.</p>',
            'type' => 'GENERAL',
            'target_scope' => $scope,
            'target_manager_id' => $targetManager?->id,
            'status' => 'published',
            'published_at' => $publishedAt,
        ]);
    }
}
