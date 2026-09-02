<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActivateAccountRequest;
use App\Http\Requests\ResendActivationRequest;
use App\Http\Resources\UserResource;
use App\Jobs\SendActivationEmailJob;
use App\Models\ActivationToken;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AccountActivationController extends Controller
{
    /**
     * Activer un compte employé via le token reçu par email.
     *
     * Flux :
     *  1. Récupère l'ActivationToken (+ User eager-loaded) — le token existe forcément (validé par FormRequest)
     *  2. Vérifie que le token n'est pas expiré           → 410 Gone si expiré
     *  3. Vérifie que le token n'a pas déjà été utilisé   → 410 Gone si déjà utilisé
     *  4. Transaction DB : active le User + marque le token utilisé
     *  5. Ouvre une session Sanctum HttpOnly et retourne l'utilisateur
     *
     * TODO: Implémenter POST /api/activate/resend pour régénérer un nouveau token d'activation
     *       lorsque l'ancien est expiré. Ce futur endpoint devra :
     *       - Valider l'email de l'employé concerné
     *       - Vérifier que l'utilisateur existe, appartient à la bonne entreprise, et n'est pas encore actif
     *       - Invalider l'ancien token (ou le laisser tel quel, au choix)
     *       - Générer un nouveau ActivationToken (token + expires_at)
     *       - Envoyer un nouvel email avec le lien d'activation
     */
    public function store(ActivateAccountRequest $request)
    {
        // ─── Étape 1 : Récupérer le token avec son User (+ employee + roles pour la réponse finale) ───
        // On sait que le token existe grâce à la règle 'exists:activation_tokens,token' du FormRequest.
        /** @var ActivationToken $activationToken */
        $activationToken = ActivationToken::with(['user'])
            ->where('token', $request->token)
            ->first();

        $user = $activationToken->user;

        // ─── Étape 2 : Vérifier que le token n'est pas expiré ───────────────────────────────────────
        if ($activationToken->expires_at->isPast()) {
            return response()->json([
                'message' => 'Ce lien a expiré. Veuillez demander un nouveau lien à votre administrateur.',
                'error' => 'token_expired',
            ], 410);
        }

        // ─── Étape 3 : Vérifier que le token n'a pas déjà été utilisé ───────────────────────────────
        if ($activationToken->used_at !== null) {
            return response()->json([
                'message' => 'Ce compte a déjà été activé. Vous pouvez vous connecter directement.',
                'error' => 'token_already_used',
            ], 410);
        }

        // ─── Étape 4 : Transaction DB — activation du compte ───────────────────────────────────────
        DB::transaction(function () use ($request, $user, $activationToken) {

            // 4a. Activer l'utilisateur
            $user->update([
                'password' => Hash::make($request->password),
                'status' => 'ACTIVE',
            ]);

            // 4b. Marquer le token comme utilisé
            $activationToken->update([
                'used_at' => now(),
            ]);

        });

        // ─── Étape 5 : Réponse de succès ─────────────────────────────────────────────────────────────
        // Rafraîchir le user pour inclure les données mises à jour (status = ACTIVE)
        $user->refresh();
        Auth::guard('web')->login($user);
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Compte activé avec succès.',
            'user' => new UserResource($user),
        ], 200);
    }

    /**
     * Régénérer un nouveau token d'activation lorsque l'ancien est expiré.
     */
    public function resend(ResendActivationRequest $request)
    {
        $genericResponse = [
            'message' => 'Si cet email correspond à un compte en attente, un nouveau lien d\'activation vous sera envoyé.',
        ];

        $user = User::where('email', $request->email)->first();

        if (! $user || $user->status === 'ACTIVE') {
            return response()->json($genericResponse);
        }

        // Créer un nouveau token d'activation
        $activationToken = ActivationToken::create([
            'user_id' => $user->id,
            'token' => Str::random(64),
            'expires_at' => now()->addDays(7),
            'used_at' => null,
        ]);

        // Envoyer le nouvel email
        SendActivationEmailJob::dispatch($user, $activationToken);

        return response()->json($genericResponse);
    }
}
