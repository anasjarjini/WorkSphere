<?php

namespace App\Models;

use App\Enums\AbsenceType;
use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class LeaveBalance extends Model
{
    use SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'user_id',
        'year',
        'type',
        'allocated_days',
        'used_days',
        'carried_over_days',
    ];

    protected $appends = ['remaining_days'];

    protected function casts(): array
    {
        return [
            'year' => 'integer',
            'type' => AbsenceType::class,
            'allocated_days' => 'integer',
            'used_days' => 'integer',
            'carried_over_days' => 'integer',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getRemainingDaysAttribute(): int
    {
        return max(0, ($this->allocated_days ?? 0) + ($this->carried_over_days ?? 0) - ($this->used_days ?? 0));
    }
}
