<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyRequest extends FormRequest
{
    /**
     * Seul un administrateur RH peut modifier les infos de l'entreprise.
     * La route est protégée par auth:sanctum + role:administrateur_rh,
     * donc on peut autoriser toutes les requêtes qui arrivent jusqu'ici.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation pour la mise à jour des informations entreprise.
     *
     * - name    : requis (toujours un nom d'entreprise)
     * - email   : optionnel, mais valide si rempli
     * - phone   : optionnel, max 20 caractères
     * - address : optionnel, max 500 caractères
     *
     * Note : le slug n'est PAS modifiable — il est exclu volontairement.
     */
    public function rules(): array
    {
        return [
            'name'    => ['required', 'string', 'max:255'],
            'email'   => ['nullable', 'email'],
            'phone'   => ['nullable', 'string', 'max:20'],
            'address' => ['nullable', 'string', 'max:500'],
        ];
    }

    /**
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'name.required'  => 'Le nom de l\'entreprise est requis.',
            'name.max'       => 'Le nom de l\'entreprise ne peut pas dépasser 255 caractères.',
            'email.email'    => 'Veuillez fournir une adresse email valide.',
            'phone.max'      => 'Le numéro de téléphone ne peut pas dépasser 20 caractères.',
            'address.max'    => 'L\'adresse ne peut pas dépasser 500 caractères.',
        ];
    }
}
