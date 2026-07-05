<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Display a paginated, filterable listing of employees.
     *
     * Query params:
     * - search      : recherche LIKE insensible à la casse sur first_name, last_name, email
     * - role        : filtre exact sur le rôle Spatie (manager|employe)
     * - department  : filtre exact sur le département
     * - is_active   : filtre exact (true/false) sur le statut du User associé
     * - per_page    : nombre d'éléments par page (défaut: 15)
     */
    public function index(Request $request): JsonResponse
    {
        $query = Employee::query()
            ->with(['user' => function ($q) {
                $q->with('roles');
            }]);

        // ── Recherche full-text sur first_name, last_name, email ──
        // Portabilité : PostgreSQL nécessite ILIKE, MySQL/SQLite utilisent LIKE
        $driver = DB::connection()->getDriverName();
        $likeOperator = $driver === 'pgsql' ? 'ilike' : 'like';

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search, $likeOperator) {
                $q->where('first_name', $likeOperator, "%{$search}%")
                  ->orWhere('last_name', $likeOperator, "%{$search}%")
                  ->orWhereHas('user', function ($uq) use ($search, $likeOperator) {
                      $uq->where('email', $likeOperator, "%{$search}%");
                  });
            });
        }

        // ── Filtre par département ──
        if ($request->filled('department')) {
            $query->where('department', $request->department);
        }

        // ── Filtre par statut actif/inactif (sur le User) ──
        if ($request->filled('is_active')) {
            $isActive = filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
            if ($isActive !== null) {
                $query->whereHas('user', function ($q) use ($isActive) {
                    $q->where('is_active', $isActive);
                });
            }
        }

        // ── Filtre par rôle Spatie (manager | employe) ──
        if ($request->filled('role')) {
            $role = $request->role;
            $query->whereHas('user', function ($q) use ($role) {
                $q->role($role);
            });
        }

        $perPage = max(1, min(100, (int) ($request->per_page ?? 15)));
        $employees = $query->paginate($perPage);

        // Transformer la réponse pour exposer les données du User au même niveau
        $employees->getCollection()->transform(function (Employee $employee) {
            return [
                'id'          => $employee->id,
                'first_name'  => $employee->first_name,
                'last_name'   => $employee->last_name,
                'email'       => $employee->user?->email,
                'role'        => $employee->user?->roles?->first()?->name,
                'job_title'   => $employee->job_title,
                'department'  => $employee->department,
                'hire_date'   => $employee->hire_date?->format('Y-m-d'),
                'salary'      => $employee->salary,
                'is_active'   => $employee->user?->is_active,
            ];
        });

        return response()->json($employees);
    }

    /**
     * Toggle the active status of an employee's user account.
     * Interdit pour l'administrateur_rh (retourne 403).
     */
    public function toggleStatus(Employee $employee): JsonResponse
    {
        $user = $employee->user;

        if (! $user) {
            return response()->json(['message' => 'Utilisateur introuvable.'], 404);
        }

        // ── Garde-fou : interdiction de désactiver l'Admin RH ──
        if ($user->hasRole('administrateur_rh')) {
            return response()->json([
                'message' => 'Impossible de désactiver le compte Administrateur RH',
            ], 403);
        }

        $user->is_active = ! $user->is_active;
        $user->save();

        $status = $user->is_active ? 'activé' : 'désactivé';

        return response()->json([
            'message'   => "Employé {$status} avec succès.",
            'employee'  => [
                'id'         => $employee->id,
                'first_name' => $employee->first_name,
                'last_name'  => $employee->last_name,
                'email'      => $user->email,
                'is_active'  => $user->is_active,
            ],
        ]);
    }

    /**
     * Soft delete an employee and their associated user.
     * Interdit pour l'administrateur_rh (retourne 403).
     * Les deux suppressions sont faites dans une même transaction.
     */
    public function destroy(Employee $employee): JsonResponse
    {
        $user = $employee->user;

        if (! $user) {
            return response()->json(['message' => 'Utilisateur introuvable.'], 404);
        }

        // ── Garde-fou : interdiction de supprimer l'Admin RH ──
        if ($user->hasRole('administrateur_rh')) {
            return response()->json([
                'message' => 'Impossible de supprimer le compte Administrateur RH',
            ], 403);
        }

        DB::transaction(function () use ($employee, $user) {
            $employee->delete();    // soft delete
            $user->delete();        // soft delete
        });

        return response()->json([
            'message' => 'Employé supprimé avec succès.',
        ]);
    }
}
