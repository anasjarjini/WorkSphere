<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Connexion d'un utilisateur.
     *
     * Ordre des vérifications (important pour la sécurité) :
     *  1. User introuvable par email  ──┐
     *  2. Password incorrect          ──┴── 401 identique → empêche l'user enumeration attack
     *  3. status !== 'ACTIVE'        ──── 403 compte non activé
     *  4. Tout OK                     ──── 200 + session Sanctum HttpOnly
     *
     * Le rate limiting (throttle:5,1) est appliqué directement sur la route dans api.php,
     * ce qui bloque l'IP après 5 tentatives par minute avant même d'atteindre ce controller.
     */
    public function login(LoginRequest $request)
    {
        // ─── Étape 1 & 2 : Vérifier email + password (bloc fusionné pour éviter l'user enumeration) ──
        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Identifiants invalides.',
            ], 401);
        }

        // ─── Étape 3 : Vérifier que le compte est activé ─────────────────────────────────────────────
        // Cette vérification arrive APRÈS la validation email+password pour ne pas révéler
        // qu'un email existe dans la base (si on vérifiait is_active en premier avec un message
        // différent, un attaquant pourrait déduire l'existence du compte).
        if ($user->status !== 'ACTIVE') {
            return response()->json([
                'message' => "Votre compte n'est pas encore activé. Vérifiez votre email pour le lien d'activation.",
                'error' => 'account_inactive',
            ], 403);
        }

        // ─── Étape 4 : Authentification réussie ──────────────────────────────────────────────────────
        // Charger les relations utiles pour le frontend (employee, company)
        $user->load('company');

        Auth::guard('web')->login($user);
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Connexion réussie.',
            'user' => new UserResource($user),
        ], 200);
    }

    /**
     * Déconnexion — invalide uniquement la session courante du navigateur.
     *
     * Route protégée par auth:sanctum → $request->user() est toujours défini ici.
     */
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Déconnecté avec succès.',
        ], 200);
    }

    /**
     * Retourne l'utilisateur actuellement connecté avec toutes ses relations.
     *
     * Utilisé par le frontend Angular au chargement de l'app pour :
     *  - Vérifier si la session est toujours valide
     *  - Récupérer les infos fraîches de l'utilisateur (rôle, profil employé, entreprise)
     *
     * Route protégée par auth:sanctum.
     */
    public function me(Request $request)
    {
        $user = $request->user()->load('company', 'department');

        return response()->json([
            'user' => new UserResource($user),
        ], 200);
    }
}
