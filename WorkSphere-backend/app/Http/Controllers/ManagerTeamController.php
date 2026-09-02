<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManagerTeamController extends Controller
{
    /**
     * Affiche l'équipe visible par le manager connecté.
     *
     * Priorité :
     * 1. Utilisateurs explicitement rattachés via manager_id.
     * 2. Si aucun rattachement n'existe encore, utilisateurs du même département.
     * 3. Si le manager n'a pas de département, collaborateurs de la même entreprise.
     */
    public function index(Request $request): EmployeeCollection
    {
        /** @var User $manager */
        $manager = $request->user();

        $query = User::query()
            ->where('company_id', $manager->company_id)
            ->where('role', '!=', 'HR_ADMIN');

        $hasAssignedTeam = User::where('company_id', $manager->company_id)
            ->where('manager_id', $manager->id)
            ->exists();

        if ($hasAssignedTeam) {
            $query->where('manager_id', $manager->id);
        } elseif ($manager->department_id !== null) {
            $query->where('department_id', $manager->department_id);
        }

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

        if ($request->filled('department')) {
            $query->whereHas('department', function ($q) use ($request) {
                $q->where('name', $request->department);
            });
        }

        if ($request->filled('role')) {
            $query->where('role', $request->role);
        }

        $perPage = max(1, min(100, (int) ($request->per_page ?? 15)));
        $users = $query->with('department')->orderBy('first_name')->orderBy('last_name')->paginate($perPage);

        return new EmployeeCollection($users);
    }
}
