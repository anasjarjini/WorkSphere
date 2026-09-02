<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'role' => $this->role,
            'status' => $this->status,
            'job_title' => $this->job_title,
            'department' => $this->whenLoaded('department', fn () => $this->department ? [
                'id' => $this->department->id,
                'name' => $this->department->name,
                'company_id' => $this->department->company_id,
            ] : null),
            'company' => $this->whenLoaded('company', fn () => $this->company ? [
                'id' => $this->company->id,
                'name' => $this->company->name,
                'slug' => $this->company->slug,
            ] : null),
            'hire_date' => $this->hire_date?->format('Y-m-d'),
            'salary' => $this->when(
                $request->user()?->role === 'HR_ADMIN' || $request->user()?->id === $this->id,
                $this->salary
            ),
            'is_active' => $this->status === 'ACTIVE',
            'avatar_url' => $this->avatar_url,
            'last_active_at' => $this->last_active_at,
            'created_at' => $this->created_at,
        ];
    }
}
