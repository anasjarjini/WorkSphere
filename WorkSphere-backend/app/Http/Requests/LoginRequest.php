<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Login est un endpoint public — tout le monde peut tenter de se connecter.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation minimales pour le login.
     *
     * On valide uniquement le format, PAS l'existence en base (c'est le rôle du controller,
     * pour retourner un 401 générique sans révéler si l'email existe ou non).
     */
    public function rules(): array
    {
        return [
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'email.required'    => "L'adresse email est requise.",
            'email.email'       => "L'adresse email n'est pas valide.",
            'password.required' => 'Le mot de passe est requis.',
        ];
    }
}
