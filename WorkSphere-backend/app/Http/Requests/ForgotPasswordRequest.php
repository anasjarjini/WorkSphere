<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ForgotPasswordRequest extends FormRequest
{
    /**
     * Tout le monde peut demander un reset de mot de passe.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation.
     *
     * volontairement PAS de règle unique|exists sur l'email :
     * on ne veut PAS révéler si un email existe en base (sécurité anti-énumération).
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
        ];
    }

    /**
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'email.required' => 'L\'adresse email est requise.',
            'email.email'    => 'Veuillez fournir une adresse email valide.',
        ];
    }
}
