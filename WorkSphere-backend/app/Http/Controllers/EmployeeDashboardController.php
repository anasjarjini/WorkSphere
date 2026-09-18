<?php

namespace App\Http\Controllers;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Enums\AnnouncementStatus;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Enums\TaskStatus;
use App\Models\Absence;
use App\Models\Announcement;
use App\Models\AttendanceDeclaration;
use App\Models\LeaveBalance;
use App\Models\PublicHoliday;
use App\Models\ServiceRequest;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EmployeeDashboardController extends Controller
{
    public function stats(Request $request): JsonResponse
    {
        $user = $request->user()->loadMissing([
            'department:id,name',
            'manager:id,company_id,first_name,last_name,email,job_title',
        ]);
        $today = Carbon::today();
        $manager = $user->manager?->company_id === $user->company_id
            ? $user->manager
            : null;

        $todayDeclaration = AttendanceDeclaration::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->whereDate('date', $today)
            ->first();

        $onLeaveToday = Absence::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->where('status', AbsenceStatus::APPROUVEE->value)
            ->whereDate('start_date', '<=', $today)
            ->whereDate('end_date', '>=', $today)
            ->exists();

        $todayAttendanceStatus = $onLeaveToday
            ? 'ON_LEAVE'
            : ($todayDeclaration?->status->value ?? 'NOT_DECLARED');

        $taskQuery = Task::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id);

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
        $dueTodayTasks = (clone $taskQuery)
            ->where('status', '!=', TaskStatus::DONE->value)
            ->whereDate('due_date', $today)
            ->count();

        $priorityTasks = (clone $taskQuery)
            ->where('status', '!=', TaskStatus::DONE->value)
            ->with([
                'project:id,name,reference_code',
                'creator:id,first_name,last_name',
            ])
            ->orderByRaw(
                'CASE WHEN due_date < ? THEN 0 WHEN due_date = ? THEN 1 ELSE 2 END',
                [$today->toDateString(), $today->toDateString()],
            )
            ->orderByRaw("CASE priority WHEN 'HIGH' THEN 0 WHEN 'MEDIUM' THEN 1 ELSE 2 END")
            ->orderByRaw('CASE WHEN due_date IS NULL THEN 1 ELSE 0 END')
            ->orderBy('due_date')
            ->limit(6)
            ->get([
                'id',
                'company_id',
                'project_id',
                'creator_id',
                'user_id',
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
                'is_due_today' => $task->due_date?->isSameDay($today) ?? false,
                'project' => $task->project ? [
                    'id' => $task->project->id,
                    'name' => $task->project->name,
                    'reference_code' => $task->project->reference_code,
                ] : null,
                'creator' => $task->creator ? [
                    'id' => $task->creator->id,
                    'first_name' => $task->creator->first_name,
                    'last_name' => $task->creator->last_name,
                ] : null,
            ]);

        $monthDeclarations = AttendanceDeclaration::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->whereBetween('date', [$today->copy()->startOfMonth(), $today->copy()->endOfMonth()])
            ->get(['status', 'validation_status']);

        $acceptedMonthDeclarations = $monthDeclarations->reject(
            fn (AttendanceDeclaration $declaration) => $declaration->validation_status
                === AttendanceValidationStatus::REJETEE,
        );
        $monthPresent = $acceptedMonthDeclarations
            ->where('status', AttendanceStatus::PRESENT)
            ->count();
        $monthAbsent = $acceptedMonthDeclarations
            ->where('status', AttendanceStatus::ABSENT)
            ->count();
        $monthDeclared = $monthPresent + $monthAbsent;

        $paidBalance = LeaveBalance::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->where('year', $today->year)
            ->where('type', AbsenceType::CONGE_PAYE->value)
            ->first();

        $pendingLeaveRequests = Absence::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->where('status', AbsenceStatus::EN_ATTENTE->value)
            ->count();

        $upcomingAbsenceQuery = Absence::query()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->where('status', AbsenceStatus::APPROUVEE->value)
            ->whereDate('end_date', '>=', $today);

        $approvedUpcomingAbsences = (clone $upcomingAbsenceQuery)->count();
        $nextAbsence = (clone $upcomingAbsenceQuery)
            ->orderBy('start_date')
            ->first();

        $requestQuery = ServiceRequest::query()
            ->where('company_id', $user->company_id)
            ->where('creator_id', $user->id);
        $activeRequestStatuses = ['PENDING', 'APPROVED', 'IN_DEVELOPMENT', 'TESTING'];
        $totalRequests = (clone $requestQuery)->count();
        $activeRequests = (clone $requestQuery)
            ->whereIn('status', $activeRequestStatuses)
            ->count();
        $pendingRequests = (clone $requestQuery)
            ->where('status', 'PENDING')
            ->count();

        $recentRequests = (clone $requestQuery)
            ->with('toDepartment:id,name')
            ->orderByRaw("CASE WHEN status IN ('PENDING', 'APPROVED', 'IN_DEVELOPMENT', 'TESTING') THEN 0 ELSE 1 END")
            ->latest('updated_at')
            ->limit(3)
            ->get([
                'id',
                'company_id',
                'to_department_id',
                'creator_id',
                'title',
                'reference_code',
                'status',
                'priority',
                'updated_at',
            ])
            ->map(fn (ServiceRequest $serviceRequest): array => [
                'id' => $serviceRequest->id,
                'title' => $serviceRequest->title,
                'reference_code' => $serviceRequest->reference_code,
                'status' => $serviceRequest->status,
                'priority' => $serviceRequest->priority,
                'updated_at' => $serviceRequest->updated_at?->toIso8601String(),
                'to_department' => $serviceRequest->toDepartment ? [
                    'id' => $serviceRequest->toDepartment->id,
                    'name' => $serviceRequest->toDepartment->name,
                ] : null,
            ]);

        $announcements = Announcement::query()
            ->visibleTo($user)
            ->where('status', AnnouncementStatus::PUBLISHED->value)
            ->with('creator:id,first_name,last_name,job_title')
            ->latest('published_at')
            ->latest('id')
            ->limit(3)
            ->get([
                'id',
                'company_id',
                'creator_id',
                'title',
                'content',
                'type',
                'target_scope',
                'published_at',
            ])
            ->map(fn (Announcement $announcement): array => [
                'id' => $announcement->id,
                'title' => $announcement->title,
                'excerpt' => Str::limit(trim(strip_tags($announcement->content)), 150),
                'type' => $announcement->type,
                'target_scope' => $announcement->target_scope->value,
                'published_at' => $announcement->published_at?->toIso8601String(),
                'creator' => $announcement->creator ? [
                    'id' => $announcement->creator->id,
                    'first_name' => $announcement->creator->first_name,
                    'last_name' => $announcement->creator->last_name,
                    'job_title' => $announcement->creator->job_title,
                ] : null,
            ]);

        $nextHoliday = PublicHoliday::query()
            ->where(function (Builder $query) use ($user): void {
                $query->whereNull('company_id')
                    ->orWhere('company_id', $user->company_id);
            })
            ->whereDate('date', '>=', $today)
            ->orderBy('date')
            ->first(['id', 'name', 'date']);

        $allocatedDays = (int) ($paidBalance?->allocated_days ?? 0);
        $carriedOverDays = (int) ($paidBalance?->carried_over_days ?? 0);
        $availableDays = $allocatedDays + $carriedOverDays;
        $usedDays = (int) ($paidBalance?->used_days ?? 0);

        return response()->json([
            'profile' => [
                'department' => $user->department ? [
                    'id' => $user->department->id,
                    'name' => $user->department->name,
                ] : null,
                'manager' => $manager ? [
                    'id' => $manager->id,
                    'first_name' => $manager->first_name,
                    'last_name' => $manager->last_name,
                    'email' => $manager->email,
                    'job_title' => $manager->job_title,
                ] : null,
            ],
            'today_attendance' => [
                'status' => $todayAttendanceStatus,
                'is_on_leave' => $onLeaveToday,
                'declaration_id' => $todayDeclaration?->id,
                'validation_status' => $todayDeclaration?->validation_status->value,
                'rejection_reason' => $todayDeclaration?->rejection_reason,
            ],
            'task_summary' => [
                'todo' => $todoTasks,
                'in_progress' => $inProgressTasks,
                'review' => $reviewTasks,
                'done' => $doneTasks,
                'overdue' => $overdueTasks,
                'due_today' => $dueTodayTasks,
                'total' => $totalTasks,
                'open' => $todoTasks + $inProgressTasks + $reviewTasks,
                'completion_rate' => $totalTasks > 0
                    ? round(($doneTasks / $totalTasks) * 100, 1)
                    : 0.0,
            ],
            'priority_tasks' => $priorityTasks,
            'attendance_month' => [
                'present' => $monthPresent,
                'absent' => $monthAbsent,
                'pending' => $monthDeclarations
                    ->where('validation_status', AttendanceValidationStatus::EN_ATTENTE)
                    ->count(),
                'rejected' => $monthDeclarations
                    ->where('validation_status', AttendanceValidationStatus::REJETEE)
                    ->count(),
                'declared_days' => $monthDeclared,
                'presence_rate' => $monthDeclared > 0
                    ? round(($monthPresent / $monthDeclared) * 100, 1)
                    : 0.0,
            ],
            'leave_summary' => [
                'paid_balance' => [
                    'configured' => $paidBalance !== null,
                    'allocated_days' => $allocatedDays,
                    'carried_over_days' => $carriedOverDays,
                    'used_days' => $usedDays,
                    'remaining_days' => max(0, $availableDays - $usedDays),
                    'usage_rate' => $availableDays > 0
                        ? round(($usedDays / $availableDays) * 100, 1)
                        : 0.0,
                ],
                'pending_requests' => $pendingLeaveRequests,
                'approved_upcoming' => $approvedUpcomingAbsences,
                'next_absence' => $nextAbsence ? [
                    'id' => $nextAbsence->id,
                    'type' => $nextAbsence->type->value,
                    'start_date' => $nextAbsence->start_date->toDateString(),
                    'end_date' => $nextAbsence->end_date->toDateString(),
                    'duration_days' => $nextAbsence->duration_days,
                    'is_current' => $nextAbsence->start_date->lte($today),
                ] : null,
            ],
            'request_summary' => [
                'total' => $totalRequests,
                'active' => $activeRequests,
                'pending' => $pendingRequests,
                'items' => $recentRequests,
            ],
            'announcements' => $announcements,
            'next_holiday' => $nextHoliday ? [
                'id' => $nextHoliday->id,
                'name' => $nextHoliday->name,
                'date' => $nextHoliday->date->toDateString(),
            ] : null,
            'last_updated_at' => now()->toIso8601String(),
        ]);
    }
}
