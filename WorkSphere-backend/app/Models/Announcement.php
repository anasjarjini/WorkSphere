<?php

namespace App\Models;

use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Announcement extends Model
{
    use SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'department_id',
        'creator_id',
        'title',
        'content',
        'type',
        'meeting_date',
        'meeting_link',
        'training_link',
    ];

    protected $casts = [
        'meeting_date' => 'datetime',
    ];

    protected $attributes = [
        'type' => 'GENERAL',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function scopeVisibleTo($query, User $user)
    {
        return $query->where('company_id', $user->company_id)
            ->where(function ($q) use ($user) {
                $q->whereNull('department_id')
                  ->orWhere('department_id', $user->department_id);
            });
    }
}
