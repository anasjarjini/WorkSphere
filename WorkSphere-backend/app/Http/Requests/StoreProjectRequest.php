<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|in:PLANIFICATION,EN_COURS,EN_PAUSE,TERMINE',
            'priority' => 'nullable|in:low,medium,high,critical',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'progress_percentage' => 'nullable|integer|min:0|max:100',
            'estimated_budget' => 'nullable|numeric|min:0',
            'currency' => 'nullable|string|size:3',
        ];
    }
}
