<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class ActivateAccountRequest extends FormRequest
{
    /**
     * Tout le monde peut accéder à cet endpoint (l'employé n'est pas encore authentifié).
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation.
     *
     * - token    : doit exister dans la table activation_tokens → 422 immédiat si token inexistant/falsifié
     * - password : règles strictes employé (différentes de l'admin RH à l'inscription)
     *              min 8 car. | mixedCase (maj+min) | chiffre | caractère spécial
     * - password_confirmation : géré automatiquement par la règle 'confirmed' sur password
     */
    public function rules(): array
    {
        return [
            'token' => ['required', 'string', 'exists:activation_tokens,token'],

            'password' => [
                'required',
                'string',
                'confirmed',
                Password::min(8)
                    ->mixedCase()   // au moins 1 majuscule + 1 minuscule
                    ->numbers()     // au moins 1 chiffre
                    ->symbols(),    // au moins 1 caractère spécial (!@#$%...)
            ],

            // 'password_confirmation' est géré implicitement par 'confirmed' ci-dessus.
            // On l'ajoute en 'required' pour un message d'erreur explicite si absent.
            'password_confirmation' => ['required', 'string'],
        ];
    }

    /**te employé via token reçu par emailte employé via token reçu par email
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'token.required'            => 'Le token d\'activation est requis.',
            'token.exists'              => 'Ce lien d\'activation est invalide ou n\'existe pas.',
            'password.required'         => 'Le mot de passe est requis.',
            'password.confirmed'        => 'La confirmation du mot de passe ne correspond pas.',
            'password_confirmation.required' => 'La confirmation du mot de passe est requise.',
        ];
    }
}
