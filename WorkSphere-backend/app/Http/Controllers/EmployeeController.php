<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Affiche la liste paginée et filtrable des employés (utilisateurs de l'entreprise).
     *
     * Query params:
     * - search      : recherche LIKE sur first_name, last_name, email
     * - role        : filtre exact sur le rôle ENUM (MANAGER|EMPLOYEE)
     * - department  : filtre exact sur le département (nom)
     * - is_active   : filtre exact (true/false)
     * - per_page    : nombre d'éléments par page (défaut: 15)
     */
    public function index(Request $request): EmployeeCollection
    {
        $companyId = $request->user()->company_id;

        $query = User::where('company_id', $companyId);

        // Exclure l'Admin RH de la liste des employés
        $query->where('role', '!=', 'HR_ADMIN');

        // ── Recherche full-text sur first_name, last_name, email ──
        $driver = DB::connection()->getDriverName();
        $likeOperator = $driver === 'pgsql' ? 'ilike' : 'like';

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search, $likeOperator) {
                $q->where('first_name', $likeOperator, "%{$search}%")
                  ->orWhere('last_name', $likeOperator, "%{$search}%")
                  ->orWhere('email', $likeOperator, "%{$search}%");
            });
        }

        // ── Filtre par département (nom) ──
        if ($request->filled('department')) {
            $query->whereHas('department', function ($q) use ($request) {
                $q->where('name', $request->department);
            });
        }

        // ── Filtre par statut ──
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // ── Filtre par rôle (nouvel ENUM: MANAGER|EMPLOYEE) ──
        if ($request->filled('role')) {
            $query->where('role', $request->role);
        }

        $perPage = max(1, min(100, (int) ($request->per_page ?? 10)));
        $users = $query->with('department')->paginate($perPage);

        return new EmployeeCollection($users);
    }

    /**
     * Bascule le statut actif/inactif d'un utilisateur.
     * Interdit pour HR_ADMIN (retourne 403).
     */
    public function toggleStatus(User $employee, Request $request): JsonResponse
    {
        $user = $employee;

        if ($user->company_id !== $request->user()->company_id) {
            return response()->json([
                'message' => 'Action non autorisée.',
            ], 403);
        }

        // ── Garde-fou : interdiction de désactiver l'Admin RH ──
        if ($user->role === 'HR_ADMIN') {
            return response()->json([
                'message' => 'Impossible de désactiver le compte Administrateur RH',
            ], 403);
        }

        $user->status = $user->status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
        $user->save();

        $statusLabel = $user->status === 'ACTIVE' ? 'activé' : 'désactivé';

        return response()->json([
            'message'  => "Employé {$statusLabel} avec succès.",
            'employee' => new UserResource($user),
        ]);
    }

    /**
     * Soft delete un utilisateur.
     * Interdit pour HR_ADMIN (retourne 403).
     */
    public function destroy(User $employee, Request $request): JsonResponse
    {
        $user = $employee;

        if ($user->company_id !== $request->user()->company_id) {
            return response()->json([
                'message' => 'Action non autorisée.',
            ], 403);
        }

        // ── Garde-fou : interdiction de supprimer l'Admin RH ──
        if ($user->role === 'HR_ADMIN') {
            return response()->json([
                'message' => 'Impossible de supprimer le compte Administrateur RH',
            ], 403);
        }

        $user->delete(); // soft delete

        return response()->json([
            'message' => 'Employé supprimé avec succès.',
        ]);
    }
}
