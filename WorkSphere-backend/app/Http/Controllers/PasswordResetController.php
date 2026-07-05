<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Jobs\SendResetPasswordEmailJob;
use App\Models\User;
use Illuminate\Support\Facades\Password;

class PasswordResetController extends Controller
{
    /**
     * Demander un email de réinitialisation de mot de passe.
     *
     * SÉCURITÉ ANTI-ÉNUMÉRATION :
     *   La réponse est identique dans TOUS les cas (email existe + actif, email existe
     *   mais inactif, email inexistant) pour ne pas révéler si un email est inscrit.
     *
     * Cas réellement traités :
     *   a) Email existe + is_active = true  → génère un token + envoie l'email
     *   b) Email existe + is_active = false → NE FAIT RIEN (silencieux)
     *   c) Email n'existe pas               → NE FAIT RIEN (silencieux)
     *
     * Dans tous les cas → message de succès générique.
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        // Seulement si l'utilisateur existe ET est actif → générer le token + envoyer l'email
        if ($user && $user->is_active) {
            // Generate the plain-text token via Laravel's built-in Password broker
            $token = Password::createToken($user);

            // Dispatch the email asynchronously (via queue)
            SendResetPasswordEmailJob::dispatch($user, $token);
        }

        // Toujours retourner le même message (sécurité anti-énumération)
        return response()->json([
            'message' => 'Si ce compte existe, un email de réinitialisation a été envoyé.',
        ], 200);
    }

    /**
     * Réinitialiser le mot de passe avec le token reçu par email.
     *
     * Vue d'ensemble des cas :
     *   1. Token valide + email correspondant + comptes actif
     *      → Met à jour le password, révoque TOUS les tokens Sanctum,
     *        retourne un message de succès (sans token Sanctum — pas d'auto-login)
     *
     *   2. Token invalide / expiré
     *      → Erreur claire : "Ce lien de réinitialisation est invalide ou a expiré."
     *
     *   3. Compte inactif (is_active = false)
     *      → Retourne une erreur avant même d'appeler Password::reset()
     */
    public function resetPassword(ResetPasswordRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        // ─── Vérification : compte inactif → refus explicite ──────────────────────────────────────
        if ($user && ! $user->is_active) {
            return response()->json([
                'message' => "Ce compte n'est pas encore activé. Vérifiez votre email pour le lien d'activation initial.",
                'error'   => 'account_inactive',
            ], 403);
        }

        // ─── Tentative de réinitialisation via le Password broker natif ────────────────────────────
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                // Met à jour le mot de passe (le cast 'hashed' sur le modèle s'occupe du Hash::make)
                $user->update(['password' => $password]);

                // Révocation de TOUS les tokens Sanctum — force une reconnexion sur tous les appareils
                $user->tokens()->delete();
            }
        );

        // ─── Gestion du statut retourné par Password::reset() ──────────────────────────────────────
        if ($status === Password::PASSWORD_RESET) {
            return response()->json([
                'message' => 'Mot de passe réinitialisé avec succès. Vous pouvez maintenant vous connecter.',
            ], 200);
        }

        // Token invalide ou expiré (PASSWORD_RESET_THROTTLED, INVALID_USER, INVALID_TOKEN)
        return response()->json([
            'message' => 'Ce lien de réinitialisation est invalide ou a expiré.',
            'error'   => 'invalid_or_expired_token',
        ], 400);
    }
}
