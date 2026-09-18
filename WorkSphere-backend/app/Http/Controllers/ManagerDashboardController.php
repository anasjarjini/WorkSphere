<?php

namespace App\Http\Controllers;

use App\Enums\AbsenceStatus;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Enums\TaskStatus;
use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class ManagerDashboardController extends Controller
{
    public function stats(Request $request): JsonResponse
    {
        $manager = $request->user();
        $today = Carbon::today();

        $teamMembers = User::query()
            ->where('company_id', $manager->company_id)
            ->where('manager_id', $manager->id)
            ->where('role', '!=', 'HR_ADMIN')
            ->with('department:id,name')
            ->orderBy('first_name')
            ->orderBy('last_name')
            ->get([
                'id',
                'company_id',
                'department_id',
                'first_name',
                'last_name',
                'email',
                'job_title',
                'status',
            ]);

        $teamIds = $teamMembers->pluck('id');
        $activeTeamIds = $teamMembers
            ->where('status', 'ACTIVE')
            ->pluck('id');

        $todayDeclarations = AttendanceDeclaration::query()
            ->where('company_id', $manager->company_id)
            ->whereIn('user_id', $activeTeamIds)
            ->whereDate('date', $today)
            ->where('validation_status', '!=', AttendanceValidationStatus::REJETEE->value)
            ->get(['user_id', 'status'])
            ->keyBy('user_id');

        $onLeaveIds = Absence::query()
            ->where('company_id', $manager->company_id)
            ->whereIn('user_id', $activeTeamIds)
            ->where('status', AbsenceStatus::APPROUVEE->value)
            ->whereDate('start_date', '<=', $today)
            ->whereDate('end_date', '>=', $today)
            ->pluck('user_id')
            ->unique()
            ->values();

        $onLeaveLookup = array_fill_keys($onLeaveIds->all(), true);
        $present = 0;
        $absent = 0;

        foreach ($todayDeclarations as $userId => $declaration) {
            if (isset($onLeaveLookup[$userId])) {
                continue;
            }

            if ($declaration->status === AttendanceStatus::PRESENT) {
                $present++;
            } elseif ($declaration->status === AttendanceStatus::ABSENT) {
                $absent++;
            }
        }

        $activeMembers = $activeTeamIds->count();
        $onLeave = $onLeaveIds->count();
        $notDeclared = max(0, $activeMembers - $onLeave - $present - $absent);
        $expectedMembers = max(0, $activeMembers - $onLeave);
        $presenceRate = $expectedMembers > 0
            ? round(($present / $expectedMembers) * 100, 1)
            : 0.0;

        $pendingLeaves = Absence::query()
            ->where('company_id', $manager->company_id)
            ->whereIn('user_id', $teamIds)
            ->where('status', AbsenceStatus::EN_ATTENTE->value)
            ->count();

        $pendingAttendance = AttendanceDeclaration::query()
            ->where('company_id', $manager->company_id)
            ->whereIn('user_id', $teamIds)
            ->where('validation_status', AttendanceValidationStatus::EN_ATTENTE->value)
            ->count();

        $taskQuery = $this->relevantTasks(
            (int) $manager->company_id,
            (int) $manager->id,
            $teamIds,
        );

        $taskStatusCounts = (clone $taskQuery)
            ->selectRaw('status, COUNT(*) as aggregate')
            ->groupBy('status')
            ->pluck('aggregate', 'status');

        $todoTasks = (int) ($taskStatusCounts[TaskStatus::TODO->value] ?? 0);
        $inProgressTasks = (int) ($taskStatusCounts[TaskStatus::IN_PROGRESS->value] ?? 0);
        $reviewTasks = (int) ($taskStatusCounts[TaskStatus::REVIEW->value] ?? 0);
        $doneTasks = (int) ($taskStatusCounts[TaskStatus::DONE->value] ?? 0);
        $totalTasks = $todoTasks + $inProgressTasks + $reviewTasks + $doneTasks;
        $overdueTasks = (clone $taskQuery)
            ->where('status', '!=', TaskStatus::DONE->value)
            ->whereNotNull('due_date')
            ->whereDate('due_date', '<', $today)
            ->count();

        $projectQuery = $this->relevantProjects(
            (int) $manager->company_id,
            (int) $manager->id,
            $teamIds,
        );

        $totalProjects = (clone $projectQuery)->count();
        $activeProjects = (clone $projectQuery)->where('status', 'EN_COURS')->count();
        $atRiskProjects = (clone $projectQuery)
            ->where('status', '!=', 'TERMINE')
            ->whereNotNull('end_date')
            ->whereDate('end_date', '<', $today)
            ->count();

        $projects = (clone $projectQuery)
            ->withCount([
                'tasks as tasks_count' => fn (Builder $query) => $this
                    ->constrainRelevantTaskActors($query, (int) $manager->id, $teamIds),
                'tasks as tasks_done_count' => fn (Builder $query) => $this
                    ->constrainRelevantTaskActors($query, (int) $manager->id, $teamIds)
                    ->where('status', TaskStatus::DONE->value),
                'tasks as tasks_overdue_count' => fn (Builder $query) => $this
                    ->constrainRelevantTaskActors($query, (int) $manager->id, $teamIds)
                    ->where('status', '!=', TaskStatus::DONE->value)
                    ->whereNotNull('due_date')
                    ->whereDate('due_date', '<', $today),
            ])
            ->orderByRaw(
                "CASE WHEN end_date < ? AND status != 'TERMINE' THEN 0 ELSE 1 END",
                [$today->toDateString()],
            )
            ->orderByRaw("CASE priority WHEN 'critical' THEN 0 WHEN 'high' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END")
            ->orderBy('end_date')
            ->limit(5)
            ->get([
                'id',
                'company_id',
                'name',
                'reference_code',
                'status',
                'priority',
                'progress_percentage',
                'end_date',
            ])
            ->map(fn (Project $project): array => [
                'id' => $project->id,
                'name' => $project->name,
                'reference_code' => $project->reference_code,
                'status' => $project->status,
                'priority' => $project->priority,
                'progress_percentage' => $project->progress_percentage,
                'end_date' => $project->end_date?->toDateString(),
                'is_at_risk' => $project->status !== 'TERMINE'
                    && $project->end_date?->lt($today),
                'tasks_total' => (int) $project->tasks_count,
                'tasks_done' => (int) $project->tasks_done_count,
                'tasks_overdue' => (int) $project->tasks_overdue_count,
            ]);

        $priorityTasks = (clone $taskQuery)
            ->where('status', '!=', TaskStatus::DONE->value)
            ->with([
                'assignedUser:id,first_name,last_name',
                'project:id,name,reference_code',
            ])
            ->orderByRaw(
                'CASE WHEN due_date < ? THEN 0 ELSE 1 END',
                [$today->toDateString()],
            )
            ->orderByRaw("CASE priority WHEN 'HIGH' THEN 0 WHEN 'MEDIUM' THEN 1 ELSE 2 END")
            ->orderByRaw('CASE WHEN due_date IS NULL THEN 1 ELSE 0 END')
            ->orderBy('due_date')
            ->limit(5)
            ->get([
                'id',
                'company_id',
                'project_id',
                'user_id',
                'creator_id',
                'title',
                'reference_code',
                'status',
                'priority',
                'due_date',
            ])
            ->map(fn (Task $task): array => [
                'id' => $task->id,
                'title' => $task->title,
                'reference_code' => $task->reference_code,
                'status' => $task->status->value,
                'priority' => $task->priority,
                'due_date' => $task->due_date?->toDateString(),
                'is_overdue' => $task->due_date?->lt($today) ?? false,
                'assignee' => $task->assignedUser ? [
                    'id' => $task->assignedUser->id,
                    'first_name' => $task->assignedUser->first_name,
                    'last_name' => $task->assignedUser->last_name,
                ] : null,
                'project' => $task->project ? [
                    'id' => $task->project->id,
                    'name' => $task->project->name,
                    'reference_code' => $task->project->reference_code,
                ] : null,
            ]);

        $upcomingAbsences = Absence::query()
            ->where('company_id', $manager->company_id)
            ->whereIn('user_id', $teamIds)
            ->where('status', AbsenceStatus::APPROUVEE->value)
            ->whereDate('end_date', '>=', $today)
            ->whereDate('start_date', '<=', $today->copy()->addDays(30))
            ->with('user:id,first_name,last_name,job_title')
            ->orderBy('start_date')
            ->limit(5)
            ->get([
                'id',
                'company_id',
                'user_id',
                'type',
                'start_date',
                'end_date',
                'duration_days',
            ])
            ->map(fn (Absence $absence): array => [
                'id' => $absence->id,
                'type' => $absence->type->value,
                'start_date' => $absence->start_date->toDateString(),
                'end_date' => $absence->end_date->toDateString(),
                'duration_days' => $absence->duration_days,
                'user' => $absence->user ? [
                    'id' => $absence->user->id,
                    'first_name' => $absence->user->first_name,
                    'last_name' => $absence->user->last_name,
                    'job_title' => $absence->user->job_title,
                ] : null,
            ]);

        $teamPreview = $teamMembers
            ->take(6)
            ->map(function (User $member) use ($todayDeclarations, $onLeaveLookup): array {
                $attendanceStatus = 'NOT_DECLARED';

                if ($member->status !== 'ACTIVE') {
                    $attendanceStatus = 'INACTIVE';
                } elseif (isset($onLeaveLookup[$member->id])) {
                    $attendanceStatus = 'ON_LEAVE';
                } elseif ($declaration = $todayDeclarations->get($member->id)) {
                    $attendanceStatus = $declaration->status->value;
                }

                return [
                    'id' => $member->id,
                    'first_name' => $member->first_name,
                    'last_name' => $member->last_name,
                    'email' => $member->email,
                    'job_title' => $member->job_title,
                    'status' => $member->status,
                    'department' => $member->department ? [
                        'id' => $member->department->id,
                        'name' => $member->department->name,
                    ] : null,
                    'attendance_status' => $attendanceStatus,
                ];
            });

        return response()->json([
            'team_size' => $teamMembers->count(),
            'active_members' => $activeMembers,
            'presence_today' => [
                'present' => $present,
                'absent' => $absent,
                'on_leave' => $onLeave,
                'not_declared' => $notDeclared,
                'total' => $activeMembers,
                'rate' => $presenceRate,
            ],
            'pending_approvals' => [
                'leave_requests' => $pendingLeaves,
                'attendance_declarations' => $pendingAttendance,
                'total' => $pendingLeaves + $pendingAttendance,
            ],
            'task_summary' => [
                'todo' => $todoTasks,
                'in_progress' => $inProgressTasks,
                'review' => $reviewTasks,
                'done' => $doneTasks,
                'overdue' => $overdueTasks,
                'total' => $totalTasks,
                'completion_rate' => $totalTasks > 0
                    ? round(($doneTasks / $totalTasks) * 100, 1)
                    : 0.0,
            ],
            'projects_summary' => [
                'total' => $totalProjects,
                'active' => $activeProjects,
                'at_risk' => $atRiskProjects,
                'items' => $projects,
            ],
            'priority_tasks' => $priorityTasks,
            'upcoming_absences' => $upcomingAbsences,
            'team_members' => $teamPreview,
            'last_updated_at' => now()->toIso8601String(),
        ]);
    }

    private function relevantTasks(
        int $companyId,
        int $managerId,
        Collection $teamIds,
    ): Builder {
        return $this->constrainRelevantTaskActors(
            Task::query()->where('company_id', $companyId),
            $managerId,
            $teamIds,
        );
    }

    private function constrainRelevantTaskActors(
        Builder $query,
        int $managerId,
        Collection $teamIds,
    ): Builder {
        return $query->where(function (Builder $actorQuery) use ($managerId, $teamIds): void {
            $actorQuery->where('creator_id', $managerId);

            if ($teamIds->isNotEmpty()) {
                $actorQuery->orWhereIn('user_id', $teamIds);
            }
        });
    }

    private function relevantProjects(
        int $companyId,
        int $managerId,
        Collection $teamIds,
    ): Builder {
        return Project::query()
            ->where('company_id', $companyId)
            ->where(function (Builder $query) use ($managerId, $teamIds): void {
                $query->where('creator_id', $managerId);

                if ($teamIds->isNotEmpty()) {
                    $query->orWhereHas(
                        'tasks',
                        fn (Builder $taskQuery) => $taskQuery->whereIn('user_id', $teamIds),
                    );
                }
            });
    }
}
