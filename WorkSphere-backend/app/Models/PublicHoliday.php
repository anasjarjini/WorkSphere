<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PublicHoliday extends Model
{
    protected $fillable = [
        'company_id',
        'name',
        'date',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
        ];
    }

    /**
     * Relation company nullable : un férié sans company_id est partagé
     * par toutes les companies (férié national).
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
