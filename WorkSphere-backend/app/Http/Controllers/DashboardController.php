<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    /**
     * Obtenir les statistiques du tableau de bord pour l'administrateur RH.
     * Utilise la table users avec les nouveaux champs (role ENUM, status, etc.).
     */
    public function stats(Request $request): JsonResponse
    {
        $companyId = $request->user()->company_id;

        // Requête de base : tous les utilisateurs de l'entreprise,
        // sauf ceux avec le rôle HR_ADMIN (exclure l'admin du compteur).
        $baseQuery = User::where('users.company_id', $companyId)
            ->where('users.role', '!=', 'HR_ADMIN');

        // 1. Total d'employés
        $totalEmployees = (clone $baseQuery)->count();

        // 2 & 3. Actifs vs En attente
        $activeCount = (clone $baseQuery)->where('users.status', 'ACTIVE')->count();
        $pendingCount = $totalEmployees - $activeCount;

        // 4 & 5. Répartition par rôle (Manager vs Employé)
        $managersCount = (clone $baseQuery)->where('users.role', 'MANAGER')->count();
        $regularEmployeesCount = (clone $baseQuery)->where('users.role', 'EMPLOYEE')->count();

        // 6 & 7. Distribution des départements et nombre de départements
        $departmentDistribution = (clone $baseQuery)
            ->whereNotNull('users.department_id')
            ->selectRaw('departments.name as department, count(*) as count')
            ->join('departments', 'users.department_id', '=', 'departments.id')
            ->groupBy('departments.name')
            ->orderByDesc('count')
            ->get();

        $departmentsCount = $departmentDistribution->count();

        // 8. Nouvelles embauches (30 derniers jours)
        $recentHiresCount = (clone $baseQuery)
            ->whereNotNull('users.hire_date')
            ->where('users.hire_date', '>=', now()->subDays(30))
            ->count();

        return response()->json([
            'total_employees'         => $totalEmployees,
            'active_count'            => $activeCount,
            'pending_count'           => $pendingCount,
            'managers_count'          => $managersCount,
            'regular_employees_count' => $regularEmployeesCount,
            'departments_count'       => $departmentsCount,
            'department_distribution' => $departmentDistribution,
            'recent_hires_count'      => $recentHiresCount,
        ]);
    }
}
