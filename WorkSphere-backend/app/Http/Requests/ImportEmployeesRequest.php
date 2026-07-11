<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImportEmployeesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // authorization is handled by the route middleware (auth:sanctum + role)
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'file' => ['required', 'mimes:csv,txt', 'max:10240'],
        ];
    }

    public function messages(): array
    {
        return [
            'file.required' => 'Le fichier CSV est requis.',
            'file.mimes' => 'Le fichier doit être au format CSV.',
            'file.max' => 'Le fichier ne peut pas dépasser 10 Mo.',
        ];
    }
}
