<?php

namespace App\Http\Controllers;

use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Models\AttendanceDeclaration;
use App\Services\AttendanceDeclarationService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class AttendanceDeclarationController extends Controller
{
    public function __construct(
        private readonly AttendanceDeclarationService $attendanceDeclarationService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = AttendanceDeclaration::where('company_id', $user->company_id)
            ->with('user', 'validator');

        if ($user->role !== 'HR_ADMIN') {
            if ($user->role === 'MANAGER') {
                $managedUserIds = $user->managedUsers()->pluck('id');
                
                if ($request->input('scope') === 'team') {
                    $query->whereIn('user_id', $managedUserIds);
                } else {
                    $query->where(function ($q) use ($user, $managedUserIds) {
                        $q->where('user_id', $user->id)
                            ->orWhereIn('user_id', $managedUserIds);
                    });
                }
            } else {
                $query->where('user_id', $user->id);
            }
        }

        if ($request->filled('date')) {
            $query->where('date', $request->input('date'));
        }

        if ($request->filled('date_from')) {
            $query->where('date', '>=', $request->input('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->where('date', '<=', $request->input('date_to'));
        }

        if ($request->filled('validation_status')) {
            $query->where('validation_status', $request->input('validation_status'));
        }

        if ($request->filled('queue')) {
            if ($request->input('queue') === 'manager') {
                $query->where('validation_status', AttendanceValidationStatus::EN_ATTENTE)
                      ->where('user_id', '!=', $user->id);
            } elseif ($request->input('queue') === 'rh') {
                $query->where('validation_status', AttendanceValidationStatus::EN_ATTENTE)
                    ->where('user_id', '!=', $user->id) // HR shouldn't validate themselves in the global queue
                    ->whereHas('user', fn ($q) => $q->where('role', 'MANAGER'));
            }
        }

        if ($request->filled('user_id')) {
            $query->where('user_id', $request->input('user_id'));
        }

        $declarations = $query->latest()->get();

        return response()->json($declarations);
    }

    public function store(Request $request): JsonResponse
    {
        Gate::authorize('create', AttendanceDeclaration::class);

        $validated = $request->validate([
            'date' => 'required|date',
            'status' => 'required|in:PRESENT,ABSENT',
            'user_id' => [
                'sometimes',
                'integer',
                Rule::exists('users', 'id')->where('company_id', $request->user()->company_id),
            ],
        ]);

        $actor = $request->user();
        $targetUser = $actor;

        if (isset($validated['user_id']) && $validated['user_id'] !== $actor->id) {
            if ($actor->role === 'HR_ADMIN') {
                $targetUser = \App\Models\User::find($validated['user_id']);
            } elseif ($actor->role === 'MANAGER') {
                $isTeamMember = $actor->managedUsers()->where('id', $validated['user_id'])->exists();
                if ($isTeamMember) {
                    $targetUser = \App\Models\User::find($validated['user_id']);
                } else {
                    return response()->json(['message' => 'Non autorisé.'], 403);
                }
            } else {
                return response()->json(['message' => 'Non autorisé.'], 403);
            }
        } else {
            if ($actor->role === 'HR_ADMIN') {
                return response()->json(['message' => 'L\'administrateur RH ne doit pas déclarer de présence pour lui-même.'], 403);
            }
        }

        try {
            $declaration = $this->attendanceDeclarationService->declare(
                $targetUser,
                Carbon::parse($validated['date']),
                AttendanceStatus::from($validated['status'])
            );

            // Si c'est un manager ou RH qui déclare pour quelqu'un d'autre, on valide automatiquement
            if ($targetUser->id !== $actor->id) {
                $declaration = $this->attendanceDeclarationService->approve($declaration, $actor);
            } else {
                $declaration->load('user', 'validator');
            }

            return response()->json($declaration, 201);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function approve(AttendanceDeclaration $attendanceDeclaration, Request $request): JsonResponse
    {
        try {
            $declaration = $this->attendanceDeclarationService->approve(
                $attendanceDeclaration,
                $request->user()
            );

            $declaration->load('user', 'validator');

            return response()->json($declaration);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function reject(AttendanceDeclaration $attendanceDeclaration, Request $request): JsonResponse
    {
        $validated = $request->validate([
            'reason' => 'required|string',
        ]);

        try {
            $declaration = $this->attendanceDeclarationService->reject(
                $attendanceDeclaration,
                $request->user(),
                $validated['reason']
            );

            $declaration->load('user', 'validator');

            return response()->json($declaration);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function update(AttendanceDeclaration $attendanceDeclaration, Request $request): JsonResponse
    {
        $validated = $request->validate([
            'status' => 'sometimes|in:PRESENT,ABSENT',
            'validation_status' => 'sometimes|in:EN_ATTENTE,VALIDEE,REJETEE',
            'rejection_reason' => 'nullable|string',
        ]);

        try {
            $declaration = $this->attendanceDeclarationService->adminUpdate(
                $attendanceDeclaration,
                $validated,
                $request->user()
            );

            return response()->json($declaration);
        } catch (\DomainException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function bulkApprove(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'declaration_ids' => 'required|array',
            'declaration_ids.*' => 'integer|exists:attendance_declarations,id',
        ]);

        $result = $this->attendanceDeclarationService->bulkApprove(
            $validated['declaration_ids'],
            $request->user()
        );

        return response()->json($result);
    }
}
