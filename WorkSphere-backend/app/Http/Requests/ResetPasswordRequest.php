<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class ResetPasswordRequest extends FormRequest
{
    /**
     * Tout le monde peut réinitialiser son mot de passe (aucun token préalable requis).
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation.
     *
     * - token    : token récupéré depuis l'URL (dans le lien envoyé par email)
     * - email    : email associé au token
     * - password : règles strictes identiques à l'activation
     *              min 8 car. | mixedCase (maj+min) | chiffre | symbole
     * - password_confirmation : géré implicitement par 'confirmed'
     */
    public function rules(): array
    {
        return [
            'token'    => ['required', 'string'],
            'email'    => ['required', 'email'],

            'password' => [
                'required',
                'string',
                'confirmed',
                Password::min(8)
                    ->mixedCase()
                    ->numbers()
                    ->symbols(),
            ],

            'password_confirmation' => ['required', 'string'],
        ];
    }

    /**
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'token.required'                 => 'Le token de réinitialisation est requis.',
            'email.required'                 => 'L\'adresse email est requise.',
            'email.email'                    => 'Veuillez fournir une adresse email valide.',
            'password.required'              => 'Le mot de passe est requis.',
            'password.confirmed'             => 'La confirmation du mot de passe ne correspond pas.',
            'password_confirmation.required' => 'La confirmation du mot de passe est requise.',
        ];
    }
}
