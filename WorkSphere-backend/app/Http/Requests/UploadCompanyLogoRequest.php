<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadCompanyLogoRequest extends FormRequest
{
    /**
     * Seul un administrateur RH peut uploader le logo.
     * Protégé par auth:sanctum + role:administrateur_rh sur la route.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Règles de validation pour l'upload du logo.
     *
     * - logo  : requis, fichier image, formats jpg/jpeg/png uniquement, max 2MB
     *
     * Note : max:2048 est en kilobytes (Ko), donc 2048 Ko = 2 Mo.
     */
    public function rules(): array
    {
        return [
            'logo' => ['required', 'file', 'mimes:jpg,jpeg,png', 'max:2048'],
        ];
    }

    /**
     * Messages d'erreur personnalisés en français.
     */
    public function messages(): array
    {
        return [
            'logo.required' => 'Le fichier logo est requis.',
            'logo.file'     => 'Le logo doit être un fichier.',
            'logo.mimes'    => 'Le logo doit être au format JPG, JPEG ou PNG.',
            'logo.max'      => 'Le logo ne peut pas dépasser 2 Mo.',
        ];
    }
}
