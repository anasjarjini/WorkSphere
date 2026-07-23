<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'company_id' => $this->company_id,
            'creator' => $this->whenLoaded('creator', fn () => $this->creator ? [
                'id' => $this->creator->id,
                'first_name' => $this->creator->first_name,
                'last_name' => $this->creator->last_name,
            ] : null),
            'name' => $this->name,
            'reference_code' => $this->reference_code,
            'description' => $this->description,
            'status' => $this->status,
            'priority' => $this->priority,
            'progress_percentage' => $this->progress_percentage,
            'start_date' => $this->start_date?->format('Y-m-d'),
            'end_date' => $this->end_date?->format('Y-m-d'),
            'estimated_budget' => $this->estimated_budget,
            'actual_cost' => $this->actual_cost,
            'currency' => $this->currency,
            'cahier_charges_url' => $this->cahier_charges_url,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'tasks_count' => $this->tasks_count ?? 0,
        ];
    }
}
