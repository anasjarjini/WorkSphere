<?php

namespace App\Models;

use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class AttendanceDeclaration extends Model
{
    use SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'user_id',
        'date',
        'status',
        'hours_worked',
        'validation_status',
        'validated_by',
        'validated_at',
        'manager_validated_by',
        'manager_validated_at',
        'rejection_reason',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
            'status' => AttendanceStatus::class,
            'validation_status' => AttendanceValidationStatus::class,
            'hours_worked' => 'decimal:2',
            'validated_at' => 'datetime',
            'manager_validated_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function validator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'validated_by');
    }

    public function managerValidator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_validated_by');
    }
}
