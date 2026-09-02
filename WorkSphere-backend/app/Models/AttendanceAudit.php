<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AttendanceAudit extends Model
{
    protected $fillable = [
        'attendance_declaration_id',
        'user_id',
        'old_status',
        'new_status',
        'old_validation_status',
        'new_validation_status',
        'reason',
    ];

    public function declaration(): BelongsTo
    {
        return $this->belongsTo(AttendanceDeclaration::class, 'attendance_declaration_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
