<?php

namespace App\Http\Controllers;

use App\Enums\AbsenceStatus;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\Department;
use App\Models\User;
use BackedEnum;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class DashboardController extends Controller
{
    private const RECENT_HIRES_DAYS = 30;

    private const UPCOMING_ABSENCES_DAYS = 7;

    private const DASHBOARD_LIST_LIMIT = 5;

    /**
     * Obtenir les indicateurs de pilotage du tableau de bord RH.
     *
     * Toutes les requetes sont explicitement limitees a l'entreprise connectee.
     * User ne porte volontairement pas le scope global BelongsToCompany.
     */
    public function stats(Request $request): JsonResponse
    {
        $companyId = (int) $request->user()->company_id;
        $today = Carbon::today();
        $baseQuery = $this->employeeQuery($companyId);

        $totalEmployees = (clone $baseQuery)->count();
        $statusTotals = (clone $baseQuery)
            ->select('users.status')
            ->selectRaw('COUNT(*) as aggregate')
            ->groupBy('users.status')
            ->pluck('aggregate', 'users.status');

        $statusCounts = [
            'active' => (int) $statusTotals->get('ACTIVE', 0),
            'pending_activation' => (int) $statusTotals->get('PENDING_ACTIVATION', 0),
            'inactive' => (int) $statusTotals->get('INACTIVE', 0),
            // SUSPENDED n'est pas encore produit par l'application, mais reste
            // expose pour que l'API soit prete lorsque ce statut sera utilise.
            'suspended' => (int) $statusTotals->get('SUSPENDED', 0),
        ];

        $activeCount = $statusCounts['active'];
        // Compatibilite : pending_count signifiait historiquement "non actif".
        $pendingCount = $totalEmployees - $activeCount;
        $managersCount = (clone $baseQuery)->where('users.role', 'MANAGER')->count();
        $regularEmployeesCount = (clone $baseQuery)->where('users.role', 'EMPLOYE')->count();

        $departmentDistribution = (clone $baseQuery)
            ->join('departments', function ($join) use ($companyId): void {
                $join->on('users.department_id', '=', 'departments.id')
                    ->where('departments.company_id', '=', $companyId)
                    ->whereNull('departments.deleted_at');
            })
            ->selectRaw('departments.id as department_id, departments.name as department, COUNT(*) as count')
            ->groupBy('departments.id', 'departments.name')
            ->orderByDesc('count')
            ->orderBy('departments.name')
            ->get()
            ->map(fn ($row) => [
                'department_id' => (int) $row->department_id,
                'department' => $row->department,
                'count' => (int) $row->count,
            ])
            ->values();

        // Contrairement a l'ancienne implementation, les departements vides
        // font bien partie des departements configures.
        $departmentsCount = Department::query()
            ->where('departments.company_id', $companyId)
            ->count();

        $employeesWithoutDepartment = (clone $baseQuery)
            ->where(function (Builder $query) use ($companyId): void {
                $query->whereNull('users.department_id')
                    ->orWhereDoesntHave('department', fn (Builder $departmentQuery) => $departmentQuery
                        ->where('departments.company_id', $companyId));
            })
            ->count();

        // Seuls les EMPLOYE doivent avoir un manager direct. Un MANAGER sans
        // manager n'est donc pas signale comme anomalie de configuration.
        $employeesWithoutManagerQuery = clone $baseQuery;
        $this->whereMissingValidManager($employeesWithoutManagerQuery, $companyId);
        $employeesWithoutManager = $employeesWithoutManagerQuery->count();

        $recentHiresStart = $today->copy()->subDays(self::RECENT_HIRES_DAYS - 1);
        $recentHiresQuery = (clone $baseQuery)
            ->whereBetween('users.hire_date', [
                $recentHiresStart->toDateString(),
                $today->toDateString(),
            ]);

        $recentHiresCount = (clone $recentHiresQuery)->count();
        $recentHires = (clone $recentHiresQuery)
            ->with('department:id,name')
            ->orderByDesc('users.hire_date')
            ->orderByDesc('users.id')
            ->limit(self::DASHBOARD_LIST_LIMIT)
            ->get([
                'users.id',
                'users.first_name',
                'users.last_name',
                'users.email',
                'users.job_title',
                'users.hire_date',
                'users.status',
                'users.department_id',
            ])
            ->map(fn (User $user) => $this->userSummary($user))
            ->values();

        $activeEmployeeIds = (clone $baseQuery)
            ->where('users.status', 'ACTIVE')
            ->pluck('users.id');

        $presenceToday = $this->presenceToday($companyId, $today, $activeEmployeeIds);
        $incompleteProfiles = $this->incompleteProfilesCount($baseQuery, $companyId);
        $leaveRequestsPending = $this->pendingLeaveRequestsCount($companyId);
        $attendancePending = $this->pendingAttendanceDeclarationsCount($companyId);

        $pendingActions = [
            'leave_requests' => $leaveRequestsPending,
            'attendance_declarations' => $attendancePending,
            'incomplete_profiles' => $incompleteProfiles,
            'total' => $leaveRequestsPending + $attendancePending + $incompleteProfiles,
        ];

        $employeesForTrend = (clone $baseQuery)->get([
            'users.hire_date',
            'users.created_at',
        ]);
        $headcountTrend = $this->headcountTrend($employeesForTrend, $today);
        $upcomingAbsences = $this->upcomingAbsences($companyId, $today);

        $recentActivity = $recentHires
            ->map(fn (array $hire) => [
                'id' => 'new_hire_'.$hire['id'],
                'type' => 'NEW_HIRE',
                'occurred_at' => $hire['hire_date'],
                'user' => $hire,
            ])
            ->values();

        return response()->json([
            // Champs historiques conserves pour les consommateurs existants.
            'total_employees' => $totalEmployees,
            'active_count' => $activeCount,
            'pending_count' => $pendingCount,
            'managers_count' => $managersCount,
            'regular_employees_count' => $regularEmployeesCount,
            'departments_count' => $departmentsCount,
            'department_distribution' => $departmentDistribution,
            'recent_hires_count' => $recentHiresCount,

            // Nouveaux indicateurs du centre de pilotage RH.
            'status_counts' => $statusCounts,
            'employees_without_department' => $employeesWithoutDepartment,
            'employees_without_manager' => $employeesWithoutManager,
            'recent_hires' => $recentHires,
            'presence_today' => $presenceToday,
            'pending_actions' => $pendingActions,
            'headcount_trend' => $headcountTrend,
            'upcoming_absences' => $upcomingAbsences,
            'recent_activity' => $recentActivity,
            'last_updated_at' => now()->toIso8601String(),
        ]);
    }

    private function employeeQuery(int $companyId): Builder
    {
        return User::query()
            ->where('users.company_id', $companyId)
            ->where('users.role', '!=', 'HR_ADMIN');
    }

    /**
     * @param  Collection<int, int>  $activeEmployeeIds
     * @return array{present: int, absent: int, on_leave: int, not_declared: int, total: int, rate: float}
     */
    private function presenceToday(int $companyId, Carbon $today, Collection $activeEmployeeIds): array
    {
        $total = $activeEmployeeIds->count();

        if ($total === 0) {
            return [
                'present' => 0,
                'absent' => 0,
                'on_leave' => 0,
                'not_declared' => 0,
                'total' => 0,
                'rate' => 0.0,
            ];
        }

        $onLeaveIds = Absence::query()
            ->where('absences.company_id', $companyId)
            ->whereIn('absences.user_id', $activeEmployeeIds)
            ->where('absences.status', AbsenceStatus::APPROUVEE->value)
            ->whereDate('absences.start_date', '<=', $today->toDateString())
            ->whereDate('absences.end_date', '>=', $today->toDateString())
            ->pluck('absences.user_id')
            ->unique()
            ->values();

        // Une absence approuvee a priorite sur une eventuelle declaration du
        // meme jour. Une declaration rejetee redevient "non declaree".
        $declarations = AttendanceDeclaration::query()
            ->where('attendance_declarations.company_id', $companyId)
            ->whereDate('attendance_declarations.date', $today->toDateString())
            ->whereIn('attendance_declarations.user_id', $activeEmployeeIds)
            ->whereNotIn('attendance_declarations.user_id', $onLeaveIds)
            ->where('attendance_declarations.validation_status', '!=', AttendanceValidationStatus::REJETEE->value)
            ->get(['attendance_declarations.user_id', 'attendance_declarations.status']);

        $present = $declarations
            ->filter(fn (AttendanceDeclaration $declaration) => $this->enumValue($declaration->status) === AttendanceStatus::PRESENT->value)
            ->pluck('user_id')
            ->unique()
            ->count();
        $absent = $declarations
            ->filter(fn (AttendanceDeclaration $declaration) => $this->enumValue($declaration->status) === AttendanceStatus::ABSENT->value)
            ->pluck('user_id')
            ->unique()
            ->count();
        $onLeave = $onLeaveIds->count();
        $notDeclared = max(0, $total - $onLeave - $present - $absent);
        $rate = round(($present / $total) * 100, 1);

        return [
            'present' => $present,
            'absent' => $absent,
            'on_leave' => $onLeave,
            'not_declared' => $notDeclared,
            'total' => $total,
            'rate' => $rate,
        ];
    }

    private function incompleteProfilesCount(Builder $baseQuery, int $companyId): int
    {
        return (clone $baseQuery)
            ->where(function (Builder $query) use ($companyId): void {
                $query->whereNull('users.first_name')
                    ->orWhere('users.first_name', '')
                    ->orWhereNull('users.last_name')
                    ->orWhere('users.last_name', '')
                    ->orWhereNull('users.job_title')
                    ->orWhere('users.job_title', '')
                    ->orWhereNull('users.hire_date')
                    ->orWhereNull('users.department_id')
                    ->orWhere(function (Builder $managerQuery) use ($companyId): void {
                        $this->whereMissingValidManager($managerQuery, $companyId);
                    });
            })
            ->count();
    }

    private function whereMissingValidManager(Builder $query, int $companyId): void
    {
        $query->where('users.role', 'EMPLOYE')
            ->where(function (Builder $missingManagerQuery) use ($companyId): void {
                $missingManagerQuery->whereNull('users.manager_id')
                    ->orWhereNotExists(function ($managerQuery) use ($companyId): void {
                        $managerQuery->selectRaw('1')
                            ->from('users as managers')
                            ->whereColumn('managers.id', 'users.manager_id')
                            ->where('managers.company_id', $companyId)
                            ->where('managers.role', 'MANAGER')
                            ->whereNull('managers.deleted_at');
                    });
            });
    }

    private function pendingLeaveRequestsCount(int $companyId): int
    {
        return Absence::query()
            ->where('absences.company_id', $companyId)
            ->where('absences.status', AbsenceStatus::EN_ATTENTE->value)
            ->whereHas('user', fn (Builder $query) => $query
                ->where('users.company_id', $companyId)
                ->where('users.role', '!=', 'HR_ADMIN'))
            ->count();
    }

    private function pendingAttendanceDeclarationsCount(int $companyId): int
    {
        return AttendanceDeclaration::query()
            ->where('attendance_declarations.company_id', $companyId)
            ->where('attendance_declarations.validation_status', AttendanceValidationStatus::EN_ATTENTE->value)
            ->whereHas('user', fn (Builder $query) => $query
                ->where('users.company_id', $companyId)
                ->where('users.role', 'MANAGER'))
            ->count();
    }

    /**
     * Construit une tendance cumulative sur les douze derniers mois.
     * hire_date est utilisee en priorite, created_at servant de repli pour les
     * anciens profils qui n'ont pas encore de date d'embauche.
     *
     * @param  Collection<int, User>  $employees
     * @return Collection<int, array{month: string, label: string, count: int, hires: int}>
     */
    private function headcountTrend(Collection $employees, Carbon $today): Collection
    {
        $effectiveDates = $employees
            ->map(function (User $user): ?CarbonInterface {
                $effectiveDate = $user->hire_date ?? $user->created_at;

                if (! $effectiveDate) {
                    return null;
                }

                return $effectiveDate instanceof CarbonInterface
                    ? $effectiveDate->copy()
                    : Carbon::parse($effectiveDate);
            })
            ->filter();

        return collect(range(11, 0))
            ->map(function (int $monthsAgo) use ($effectiveDates, $today): array {
                $month = $today->copy()->startOfMonth()->subMonths($monthsAgo);
                $periodStart = $month->copy()->startOfMonth();
                $periodEnd = $month->isSameMonth($today)
                    ? $today->copy()->endOfDay()
                    : $month->copy()->endOfMonth()->endOfDay();

                return [
                    'month' => $month->format('Y-m'),
                    'label' => $month->copy()->locale('fr')->translatedFormat('M Y'),
                    'count' => $effectiveDates
                        ->filter(fn (CarbonInterface $date) => $date->lessThanOrEqualTo($periodEnd))
                        ->count(),
                    'hires' => $effectiveDates
                        ->filter(fn (CarbonInterface $date) => $date->betweenIncluded($periodStart, $periodEnd))
                        ->count(),
                ];
            })
            ->values();
    }

    /**
     * @return Collection<int, array<string, mixed>>
     */
    private function upcomingAbsences(int $companyId, Carbon $today): Collection
    {
        $windowEnd = $today->copy()->addDays(self::UPCOMING_ABSENCES_DAYS - 1);

        return Absence::query()
            ->where('absences.company_id', $companyId)
            ->where('absences.status', AbsenceStatus::APPROUVEE->value)
            ->whereDate('absences.start_date', '<=', $windowEnd->toDateString())
            ->whereDate('absences.end_date', '>=', $today->toDateString())
            ->whereHas('user', fn (Builder $query) => $query
                ->where('users.company_id', $companyId)
                ->where('users.role', '!=', 'HR_ADMIN')
                ->where('users.status', 'ACTIVE'))
            ->with('user.department:id,name')
            ->orderBy('absences.start_date')
            ->orderBy('absences.id')
            ->limit(self::DASHBOARD_LIST_LIMIT)
            ->get()
            ->map(fn (Absence $absence) => [
                'id' => $absence->id,
                'start_date' => $absence->start_date?->toDateString(),
                'end_date' => $absence->end_date?->toDateString(),
                'duration_days' => (int) $absence->duration_days,
                'type' => $this->enumValue($absence->type),
                'user' => $absence->user ? $this->userSummary($absence->user) : null,
            ])
            ->values();
    }

    /**
     * @return array<string, mixed>
     */
    private function userSummary(User $user): array
    {
        return [
            'id' => $user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email,
            'job_title' => $user->job_title,
            'hire_date' => $user->hire_date?->toDateString(),
            'status' => $user->status,
            'department' => $user->department ? [
                'id' => $user->department->id,
                'name' => $user->department->name,
            ] : null,
        ];
    }

    private function enumValue(mixed $value): mixed
    {
        return $value instanceof BackedEnum ? $value->value : $value;
    }
}
