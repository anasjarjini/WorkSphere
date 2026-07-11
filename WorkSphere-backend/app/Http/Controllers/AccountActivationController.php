<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActivateAccountRequest;
use App\Http\Requests\ResendActivationRequest;
use App\Http\Resources\UserResource;
use App\Models\ActivationToken;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AccountActivationController extends Controller
{
    /**
     * Activer un compte employé via le token reçu par email.
     *
     * Flux :
     *  1. Récupère l'ActivationToken (+ User eager-loaded) — le token existe forcément (validé par FormRequest)
     *  2. Vérifie que le token n'est pas expiré           → 410 Gone si expiré
     *  3. Vérifie que le token n'a pas déjà été utilisé   → 410 Gone si déjà utilisé
     *  4. Transaction DB : active le User + marque le token utilisé + génère Sanctum token
     *  5. Retourne { message, user (employee + roles), token }
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
                'error'   => 'token_expired',
            ], 410);
        }

        // ─── Étape 3 : Vérifier que le token n'a pas déjà été utilisé ───────────────────────────────
        if ($activationToken->used_at !== null) {
            return response()->json([
                'message' => 'Ce compte a déjà été activé. Vous pouvez vous connecter directement.',
                'error'   => 'token_already_used',
            ], 410);
        }

        // ─── Étape 4 : Transaction DB — activation + génération du token Sanctum ────────────────────
        $sanctumToken = DB::transaction(function () use ($request, $user, $activationToken) {

            // 4a. Activer l'utilisateur
            $user->update([
                'password' => Hash::make($request->password),
                'status'   => 'ACTIVE',
            ]);

            // 4b. Marquer le token comme utilisé
            $activationToken->update([
                'used_at' => now(),
            ]);

            // 4c. Générer le token Sanctum (connexion automatique post-activation)
            return $user->createToken('auth_token')->plainTextToken;
        });

        // ─── Étape 5 : Réponse de succès ─────────────────────────────────────────────────────────────
        // Rafraîchir le user pour inclure les données mises à jour (status = ACTIVE)
        $user->refresh();

        return response()->json([
            'message' => 'Compte activé avec succès.',
            'user'    => new UserResource($user),
            'token'   => $sanctumToken,
        ], 200);
    }

    /**
     * Régénérer un nouveau token d'activation lorsque l'ancien est expiré.
     */
    public function resend(ResendActivationRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (! $user) {
            // Pour des raisons de sécurité, on ne révèle pas que l'email n'existe pas.
            return response()->json(['message' => 'Si cet email correspond à un compte en attente, un nouveau lien d\'activation vous sera envoyé.'], 200);
        }

        if ($user->status === 'ACTIVE') {
            return response()->json([
                'message' => 'Ce compte est déjà actif. Vous pouvez vous connecter.',
                'error'   => 'account_already_active'
            ], 400);
        }

        // Créer un nouveau token d'activation
        $activationToken = \App\Models\ActivationToken::create([
            'user_id'    => $user->id,
            'token'      => \Illuminate\Support\Str::random(64),
            'expires_at' => now()->addDays(7),
            'used_at'    => null,
        ]);

        // Envoyer le nouvel email
        \App\Jobs\SendActivationEmailJob::dispatch($user, $activationToken);

        return response()->json([
            'message' => 'Si cet email correspond à un compte en attente, un nouveau lien d\'activation vous sera envoyé.'
        ], 200);
    }
}
