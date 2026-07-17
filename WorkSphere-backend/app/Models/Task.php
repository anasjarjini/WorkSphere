<?php

namespace App\Models;

use App\Enums\TaskStatus;
use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'project_id',
        'user_id',
        'creator_id',
        'title',
        'reference_code',
        'description',
        'status',
        'priority',
        'order_position',
        'due_date',
        'estimated_hours',
        'actual_hours',
        'completed_at',
    ];

    protected $casts = [
        'due_date' => 'date',
        'completed_at' => 'datetime',
        'order_position' => 'integer',
        'estimated_hours' => 'integer',
        'actual_hours' => 'integer',
        'status' => TaskStatus::class,
    ];

    protected $attributes = [
        'status' => 'TODO',
        'priority' => 'MEDIUM',
        'order_position' => 0,
    ];

    protected static function booted(): void
    {
        static::creating(function (Task $task) {
            if (empty($task->reference_code) && $task->company_id) {
                $task->reference_code = self::generateReferenceCode($task->company_id);
            }
        });
    }

    public static function generateReferenceCode(int $companyId): string
    {
        $year = now()->year;
        $prefix = "TSK-{$year}-";

        $lastTask = static::withoutGlobalScopes()
            ->where('company_id', $companyId)
            ->where('reference_code', 'like', "{$prefix}%")
            ->orderByDesc('reference_code')
            ->first();

        $nextNumber = 1;
        if ($lastTask && $lastTask->reference_code) {
            $lastNumber = (int) substr($lastTask->reference_code, -3);
            $nextNumber = $lastNumber + 1;
        }

        return $prefix . str_pad((string) $nextNumber, 3, '0', STR_PAD_LEFT);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function statusHistories(): HasMany
    {
        return $this->hasMany(TaskStatusHistory::class);
    }

    public function assignmentHistories(): HasMany
    {
        return $this->hasMany(TaskAssignmentHistory::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(TaskComment::class);
    }

    public function dependencies(): HasMany
    {
        return $this->hasMany(TaskDependency::class, 'task_id');
    }

    public function dependents(): HasMany
    {
        return $this->hasMany(TaskDependency::class, 'depends_on_task_id');
    }

    public function attachments(): HasMany
    {
        return $this->hasMany(TaskAttachment::class);
    }
}
