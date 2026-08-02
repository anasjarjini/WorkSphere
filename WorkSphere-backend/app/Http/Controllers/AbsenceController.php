<?php

namespace App\Http\Controllers;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Models\Absence;
use App\Models\User;
use App\Notifications\LeaveRequestCreatedNotification;
use App\Services\AbsenceStatusTransitionService;
use App\Services\LeaveBalanceService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AbsenceController extends Controller
{
    public function __construct(
        private readonly AbsenceStatusTransitionService $transitionService,
        private readonly LeaveBalanceService $leaveBalanceService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = Absence::with('user', 'approver');

        if ($user->role !== 'HR_ADMIN') {
            if ($user->role === 'MANAGER') {
                $managedUserIds = $user->managedUsers()->pluck('id');
                $query->where(function ($q) use ($user, $managedUserIds) {
                    $q->where('user_id', $user->id)
                        ->orWhereIn('user_id', $managedUserIds);
                });
            } else {
                $query->where('user_id', $user->id);
            }
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        if ($request->filled('type')) {
            $query->where('type', $request->input('type'));
        }

        if ($request->filled('date_from')) {
            $query->where('end_date', '>=', $request->input('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->where('start_date', '<=', $request->input('date_to'));
        }

        if ($request->filled('user_id')) {
            $query->where('user_id', $request->input('user_id'));
        }

        if ($request->filled('queue')) {
            if ($request->input('queue') === 'manager') {
                $query->where('status', AbsenceStatus::EN_ATTENTE)
                    ->where('user_id', '!=', $user->id);
            } elseif ($request->input('queue') === 'rh') {
                $query->where('status', AbsenceStatus::EN_ATTENTE);
            }
        }

        return response()->json($query->latest()->get());
    }

    public function store(Request $request): JsonResponse
    {
        Gate::authorize('create', Absence::class);

        $user = $request->user();

        $validated = $request->validate([
            'type' => 'required|in:CONGE_PAYE,MALADIE,SANS_SOLDE,AUTRE',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'reason' => 'nullable|string|max:1000',
            'justificatif_path' => 'nullable|string|max:255',
        ]);

        if ($user->role === 'HR_ADMIN') {
            return response()->json(['message' => 'L\'administrateur RH ne peut pas créer de demande de congé.'], 422);
        }

        $start = Carbon::parse($validated['start_date']);
        $end = Carbon::parse($validated['end_date']);

        if ($start->lessThan(Carbon::today()->startOfDay())) {
            return response()->json(['message' => 'La demande doit commencer aujourd\'hui ou plus tard.'], 422);
        }

        $durationDays = $this->leaveBalanceService->calculateWorkingDays($start, $end, $user->company_id);

        if ($durationDays < 1) {
            return response()->json(['message' => 'La période demandée ne contient aucun jour ouvré.'], 422);
        }

        $overlap = Absence::where('user_id', $user->id)
            ->where('status', '!=', AbsenceStatus::ANNULEE->value)
            ->where('end_date', '>=', $validated['start_date'])
            ->where('start_date', '<=', $validated['end_date'])
            ->exists();

        if ($overlap) {
            return response()->json(['message' => 'Vous avez déjà une demande de congé sur cette période.'], 422);
        }

        if (! $this->leaveBalanceService->hasSufficientBalance($user, AbsenceType::from($validated['type']), $durationDays)) {
            return response()->json([
                'message' => 'Solde de congés insuffisant pour cette demande ('
                    . $durationDays . ' jour(s) ouvré(s) demandé(s)).',
            ], 422);
        }

        try {
            $absence = Absence::create([
                'company_id' => $user->company_id,
                'user_id' => $user->id,
                'type' => $validated['type'],
                'start_date' => $validated['start_date'],
                'end_date' => $validated['end_date'],
                'duration_days' => $durationDays,
                'reason' => $validated['reason'] ?? null,
                'justificatif_path' => $validated['justificatif_path'] ?? null,
                'status' => AbsenceStatus::EN_ATTENTE,
            ]);

            $absence->load('user', 'approver');

            if ($manager = $this->resolveApproverFor($user)) {
                $manager->notify(new LeaveRequestCreatedNotification($absence));
            }

            return response()->json($absence, 201);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function approve(Absence $absence, Request $request): JsonResponse
    {
        try {
            $absence = $this->transitionService->approve($absence, $request->user());
            $absence->load('user', 'approver');

            return response()->json($absence);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function reject(Absence $absence, Request $request): JsonResponse
    {
        $validated = $request->validate([
            'reason' => 'required|string|min:3',
        ]);

        try {
            $absence = $this->transitionService->reject($absence, $request->user(), $validated['reason']);
            $absence->load('user', 'approver');

            return response()->json($absence);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function cancel(Absence $absence, Request $request): JsonResponse
    {
        try {
            $absence = $this->transitionService->cancel($absence, $request->user());
            $absence->load('user', 'approver');

            return response()->json($absence);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function isOnLeave(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'date' => 'required|date',
        ]);

        $onLeave = Absence::where('company_id', $request->user()->company_id)
            ->where('user_id', $request->user()->id)
            ->where('status', AbsenceStatus::APPROUVEE)
            ->whereDate('start_date', '<=', $validated['date'])
            ->whereDate('end_date', '>=', $validated['date'])
            ->exists();

        return response()->json(['is_on_leave' => $onLeave]);
    }

    public function workingDays(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $days = $this->leaveBalanceService->calculateWorkingDays(
            Carbon::parse($validated['start_date']),
            Carbon::parse($validated['end_date']),
            $request->user()->company_id
        );

        return response()->json(['working_days' => $days]);
    }

    public function myBalances(Request $request): JsonResponse
    {
        $user = $request->user();

        $balances = $user->leaveBalances()
            ->withoutGlobalScopes()
            ->where('company_id', $user->company_id)
            ->where('year', now()->year)
            ->orderBy('type')
            ->get();

        return response()->json($balances);
    }

    public function teamBalances(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = \App\Models\LeaveBalance::query()
            ->with('user:id,first_name,last_name,email,department_id')
            ->where('year', now()->year);

        if ($user->role === 'MANAGER') {
            $managedUserIds = $user->managedUsers()->pluck('id');
            $query->whereIn('user_id', $managedUserIds);
        }

        return response()->json($query->orderBy('user_id')->get());
    }

    public function holidays(Request $request): JsonResponse
    {
        $companyId = $request->user()->company_id;

        $holidays = \App\Models\PublicHoliday::query()
            ->where(fn ($q) => $q->whereNull('company_id')->orWhere('company_id', $companyId))
            ->orderBy('date')
            ->get();

        return response()->json($holidays);
    }

    public function storeHoliday(Request $request): JsonResponse
    {
        if ($request->user()->role !== 'HR_ADMIN') {
            return response()->json(['message' => 'Action réservée à l\'administrateur RH.'], 403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'date' => 'required|date|unique:public_holidays,date',
        ]);

        $holiday = \App\Models\PublicHoliday::create([
            'company_id' => $request->user()->company_id,
            'name' => $validated['name'],
            'date' => $validated['date'],
        ]);

        return response()->json($holiday, 201);
    }

    public function destroyHoliday(\App\Models\PublicHoliday $publicHoliday, Request $request): JsonResponse
    {
        if ($publicHoliday->company_id !== $request->user()->company_id
            || $request->user()->role !== 'HR_ADMIN') {
            return response()->json(['message' => 'Jour férié introuvable.'], 404);
        }

        $publicHoliday->delete();

        return response()->json(['message' => 'Jour férié supprimé.']);
    }

    /**
     * Résout le destinataire d'une demande à valider : le manager direct,
     * sinon l'administrateur RH de la société.
     */
    private function resolveApproverFor(User $user): ?User
    {
        if ($user->manager) {
            return $user->manager;
        }

        return User::where('company_id', $user->company_id)
            ->where('role', 'HR_ADMIN')
            ->where('status', 'ACTIVE')
            ->first();
    }
}
