<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DirectoryController extends Controller
{
    /**
     * Annuaire léger des utilisateurs de l'entreprise (pour démarrer une conversation).
     *
     * Query params:
     * - search : recherche LIKE sur first_name, last_name, email
     * Limite à 30 résultats, tri alphabétique.
     */
    public function index(Request $request): JsonResponse
    {
        $search = trim((string) $request->query('search'));
        $driver = DB::connection()->getDriverName();
        $likeOperator = $driver === 'pgsql' ? 'ilike' : 'like';

        $query = User::query()
            ->where('company_id', $request->user()->company_id)
            ->where('id', '!=', $request->user()->id);

        if ($search !== '') {
            $query->where(function ($q) use ($search, $likeOperator) {
                $q->where('first_name', $likeOperator, "%{$search}%")
                    ->orWhere('last_name', $likeOperator, "%{$search}%")
                    ->orWhere('email', $likeOperator, "%{$search}%");
            });
        }

        $users = $query
            ->orderBy('first_name')
            ->orderBy('last_name')
            ->limit(30)
            ->get();

        return response()->json([
            'data' => $users->map(fn (User $user) => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'role' => $user->role,
                'job_title' => $user->job_title,
                'avatar_url' => $user->avatar_url,
                'is_online' => (bool) ($user->is_online ?? false),
            ]),
        ]);
    }
}