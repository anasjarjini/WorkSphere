<?php

namespace App\Models;

use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskComment extends Model
{
    use SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'task_id',
        'user_id',
        'comment',
        'is_edited',
        'edited_at',
        'parent_id',
    ];

    protected $appends = ['content'];

    protected $casts = [
        'is_edited' => 'boolean',
        'edited_at' => 'datetime',
    ];

    public function getContentAttribute(): ?string
    {
        return $this->attributes['comment'] ?? null;
    }

    public function markAsEdited(): void
    {
        $this->is_edited = true;
        $this->edited_at = now();
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(TaskComment::class, 'parent_id');
    }

    public function replies(): HasMany
    {
        return $this->hasMany(TaskComment::class, 'parent_id');
    }
}
