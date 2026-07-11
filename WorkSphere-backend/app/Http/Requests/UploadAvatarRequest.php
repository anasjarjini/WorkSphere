<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadAvatarRequest extends FormRequest
{
    /**
     * Authentifié obligatoirement (route protégée par auth:sanctum).
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation pour l'upload de l'avatar.
     *
     * - avatar : requis, fichier image, formats jpg/jpeg/png uniquement, max 2MB
     */
    public function rules(): array
    {
        return [
            'avatar' => ['required', 'file', 'mimes:jpg,jpeg,png', 'max:2048'],
        ];
    }

    /**
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'avatar.required' => 'Le fichier avatar est requis.',
            'avatar.file'     => 'L\'avatar doit être un fichier.',
            'avatar.mimes'    => 'L\'avatar doit être au format JPG, JPEG ou PNG.',
            'avatar.max'      => 'L\'avatar ne peut pas dépasser 2 Mo.',
        ];
    }
}
