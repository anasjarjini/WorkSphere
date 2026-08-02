<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $isHrAdmin = $request->user()?->role === 'HR_ADMIN';

        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'logo_url' => $this->logo_url,
            'is_active' => $this->is_active,
        ];

        if ($isHrAdmin) {
            $data['email'] = $this->email;
            $data['phone'] = $this->phone;
            $data['address'] = $this->address;
            $data['default_annual_leave_days'] = $this->default_annual_leave_days;
        }

        return $data;
    }
}
