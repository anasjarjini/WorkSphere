<?php

namespace App\Models;

use App\Enums\AnnouncementScope;
use App\Enums\AnnouncementStatus;
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
        'target_scope',
        'target_manager_id',
        'status',
        'published_at',
        'type',
        'meeting_date',
        'meeting_link',
        'training_link',
    ];

    protected $casts = [
        'meeting_date' => 'datetime',
        'published_at' => 'datetime',
        'target_scope' => AnnouncementScope::class,
        'status' => AnnouncementStatus::class,
    ];

    protected $attributes = [
        'type' => 'GENERAL',
        'target_scope' => 'COMPANY',
        'status' => 'published',
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

    public function targetManager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'target_manager_id');
    }

    /**
     * Annonces visibles par un utilisateur : toutes celles de sa company
     * (scope COMPANY) + les annonces TEAM dont il est le subordonné direct
     * du manager cible, le manager cible lui-même, ou le créateur.
     */
    public function scopeVisibleTo($query, User $user)
    {
        return $query->where('company_id', $user->company_id)
            ->where(function ($q) use ($user) {
                $q->where('target_scope', AnnouncementScope::COMPANY->value)
                  ->orWhere(function ($q2) use ($user) {
                      $q2->where('target_scope', AnnouncementScope::TEAM->value)
                         ->where(function ($q3) use ($user) {
                             $q3->where('target_manager_id', $user->manager_id)
                                ->orWhere('target_manager_id', $user->id)
                                ->orWhere('creator_id', $user->id);
                         });
                  });
            });
    }
}
