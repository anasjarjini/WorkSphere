<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     *
     */
    public function rules(): array
    {
        return [
            'company_name' => ['required', 'string', 'max:255'],
            'company_email' => ['nullable', 'email'],
            'admin_first_name' => ['required', 'string', 'max:255'],
            'admin_last_name' => ['required', 'string', 'max:255'],
            'admin_email' => ['required', 'email', 'unique:users,email'],
            'admin_password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }

    public function messages(): array
    {
        return [
            'company_name.required' => 'Le nom de l\'entreprise est requis.',
            'company_name.max' => 'Le nom de l\'entreprise ne peut pas dépasser 255 caractères.',
            'company_email.email' => 'L\'email de l\'entreprise n\'est pas valide.',
            'admin_first_name.required' => 'Le prénom de l\'administrateur est requis.',
            'admin_last_name.required' => 'Le nom de l\'administrateur est requis.',
            'admin_email.required' => 'L\'email de l\'administrateur est requis.',
            'admin_email.email' => 'L\'email de l\'administrateur n\'est pas valide.',
            'admin_email.unique' => 'Cet email est déjà utilisé.',
            'admin_password.required' => 'Le mot de passe est requis.',
            'admin_password.min' => 'Le mot de passe doit faire au moins 8 caractères.',
            'admin_password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
        ];
    }
}
