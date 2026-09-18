<?php

namespace Tests\Feature;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Enums\TaskStatus;
use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\Company;
use App\Models\Department;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ManagerDashboardStatsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Carbon::setTestNow(Carbon::parse('2026-09-03 10:30:00'));
    }

    protected function tearDown(): void
    {
        Carbon::setTestNow();

        parent::tearDown();
    }

    public function test_manager_dashboard_returns_scoped_operational_metrics(): void
    {
        $company = $this->createCompany('alpha');
        $department = Department::create([
            'company_id' => $company->id,
            'name' => 'Produit',
        ]);
        $manager = $this->createUser($company, $department, 'manager@alpha.test', 'MANAGER');
        $otherManager = $this->createUser($company, $department, 'other-manager@alpha.test', 'MANAGER');

        $presentEmployee = $this->createUser($company, $department, 'present@alpha.test', manager: $manager);
        $absentEmployee = $this->createUser($company, $department, 'absent@alpha.test', manager: $manager);
        $leaveEmployee = $this->createUser($company, $department, 'leave@alpha.test', manager: $manager);
        $undeclaredEmployee = $this->createUser($company, $department, 'undeclared@alpha.test', manager: $manager);
        $this->createUser(
            $company,
            $department,
            'inactive@alpha.test',
            manager: $manager,
            status: 'INACTIVE',
        );
        $unrelatedEmployee = $this->createUser(
            $company,
            $department,
            'private@alpha.test',
            manager: $otherManager,
        );

        $this->createAttendance(
            $presentEmployee,
            AttendanceStatus::PRESENT,
            AttendanceValidationStatus::EN_ATTENTE,
        );
        $this->createAttendance(
            $absentEmployee,
            AttendanceStatus::ABSENT,
            AttendanceValidationStatus::VALIDEE,
        );
        $this->createAttendance(
            $leaveEmployee,
            AttendanceStatus::PRESENT,
            AttendanceValidationStatus::VALIDEE,
        );

        $approvedAbsence = $this->createAbsence(
            $leaveEmployee,
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
            $unrelatedEmployee,
            AbsenceStatus::EN_ATTENTE,
            Carbon::today()->addDay(),
            Carbon::today()->addDays(3),
        );

        $managedProject = $this->createProject(
            $company,
            $manager,
            'Refonte mobile',
            40,
            Carbon::today()->subDay(),
            'critical',
        );
        $teamProject = $this->createProject(
            $company,
            $otherManager,
            'Portail client',
            25,
            Carbon::today()->addDays(15),
        );
        $privateProject = $this->createProject(
            $company,
            $otherManager,
            'Projet privé',
            20,
            Carbon::today()->addDays(20),
        );

        $overdueTask = $this->createTask(
            $company,
            $managedProject,
            $manager,
            $presentEmployee,
            'Corriger le parcours mobile',
            TaskStatus::TODO,
            Carbon::today()->subDay(),
            'HIGH',
        );
        $this->createTask(
            $company,
            $managedProject,
            $manager,
            $unrelatedEmployee,
            'Recette terminée',
            TaskStatus::DONE,
            Carbon::today()->subDays(2),
        );
        $this->createTask(
            $company,
            $teamProject,
            $otherManager,
            $undeclaredEmployee,
            'Préparer la démonstration',
            TaskStatus::IN_PROGRESS,
            Carbon::today()->addDays(2),
        );
        $this->createTask(
            $company,
            $privateProject,
            $otherManager,
            $unrelatedEmployee,
            'Tâche confidentielle',
            TaskStatus::TODO,
            Carbon::today()->subDays(5),
        );

        $otherCompany = $this->createCompany('beta');
        $otherDepartment = Department::create([
            'company_id' => $otherCompany->id,
            'name' => 'Confidentiel',
        ]);
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
        $externalProject = $this->createProject(
            $otherCompany,
            $externalManager,
            'Projet société B',
            10,
            Carbon::today()->subDays(3),
        );
        $this->createTask(
            $otherCompany,
            $externalProject,
            $externalManager,
            $externalEmployee,
            'Tâche société B',
            TaskStatus::TODO,
            Carbon::today()->subDay(),
        );

        $response = $this->actingAs($manager)->getJson('/api/manager/dashboard/stats');

        $response->assertOk()
            ->assertJson([
                'team_size' => 5,
                'active_members' => 4,
                'presence_today' => [
                    'present' => 1,
                    'absent' => 1,
                    'on_leave' => 1,
                    'not_declared' => 1,
                    'total' => 4,
                    'rate' => 33.3,
                ],
                'pending_approvals' => [
                    'leave_requests' => 1,
                    'attendance_declarations' => 1,
                    'total' => 2,
                ],
                'task_summary' => [
                    'todo' => 1,
                    'in_progress' => 1,
                    'review' => 0,
                    'done' => 1,
                    'overdue' => 1,
                    'total' => 3,
                    'completion_rate' => 33.3,
                ],
                'projects_summary' => [
                    'total' => 2,
                    'active' => 2,
                    'at_risk' => 1,
                ],
            ])
            ->assertJsonPath('projects_summary.items.0.id', $managedProject->id)
            ->assertJsonPath('projects_summary.items.0.tasks_overdue', 1)
            ->assertJsonPath('priority_tasks.0.id', $overdueTask->id)
            ->assertJsonPath('priority_tasks.0.is_overdue', true)
            ->assertJsonPath('upcoming_absences.0.id', $approvedAbsence->id)
            ->assertJsonPath('team_members.0.email', 'absent@alpha.test')
            ->assertJsonCount(2, 'projects_summary.items')
            ->assertJsonCount(2, 'priority_tasks')
            ->assertJsonCount(1, 'upcoming_absences')
            ->assertJsonCount(5, 'team_members')
            ->assertJsonMissing(['name' => 'Projet privé'])
            ->assertJsonMissing(['title' => 'Tâche confidentielle'])
            ->assertJsonMissing(['name' => 'Projet société B']);

        $this->assertNotEmpty($response->json('last_updated_at'));
    }

    public function test_manager_dashboard_is_restricted_to_managers(): void
    {
        $company = $this->createCompany('roles');
        $department = Department::create([
            'company_id' => $company->id,
            'name' => 'RH',
        ]);
        $employee = $this->createUser($company, $department, 'employee@roles.test');
        $hrAdmin = $this->createUser($company, $department, 'hr@roles.test', 'HR_ADMIN');

        $this->actingAs($employee)
            ->getJson('/api/manager/dashboard/stats')
            ->assertForbidden();

        $this->actingAs($hrAdmin)
            ->getJson('/api/manager/dashboard/stats')
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

    private function createUser(
        Company $company,
        Department $department,
        string $email,
        string $role = 'EMPLOYE',
        ?User $manager = null,
        string $status = 'ACTIVE',
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
            'job_title' => 'Product Designer',
            'hire_date' => '2025-01-10',
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
                'MGR',
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

    private function createProject(
        Company $company,
        User $creator,
        string $name,
        int $progress,
        Carbon $endDate,
        string $priority = 'medium',
    ): Project {
        return Project::forceCreate([
            'company_id' => $company->id,
            'creator_id' => $creator->id,
            'name' => $name,
            'reference_code' => 'TEST-PRJ-'.($company->id).'-'.(Project::withoutGlobalScopes()->count() + 1),
            'progress_percentage' => $progress,
            'priority' => $priority,
            'start_date' => Carbon::today()->subMonth()->toDateString(),
            'end_date' => $endDate->toDateString(),
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
            'reference_code' => 'TEST-TSK-'.($company->id).'-'.(Task::withoutGlobalScopes()->count() + 1),
            'status' => $status,
            'priority' => $priority,
            'due_date' => $dueDate->toDateString(),
        ]);
    }
}
