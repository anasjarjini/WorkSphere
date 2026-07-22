<?php

namespace App\Models;

use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'creator_id',
        'name',
        'description',
        'status',
        'priority',
        'progress_percentage',
        'start_date',
        'end_date',
        'estimated_budget',
        'actual_cost',
        'currency',
        'cahier_charges_path',
        'cahier_charges_original_name',
    ];

    protected $appends = ['cahier_charges_url'];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'progress_percentage' => 'integer',
        'estimated_budget' => 'decimal:2',
        'actual_cost' => 'decimal:2',
    ];

    protected $attributes = [
        'status' => 'PLANIFICATION',
        'priority' => 'medium',
        'progress_percentage' => 0,
        'actual_cost' => 0.00,
        'currency' => 'MAD',
    ];

    protected static function booted(): void
    {
        static::creating(function (Project $project) {
            if (empty($project->reference_code) && $project->company_id) {
                $project->reference_code = self::generateReferenceCode($project->company_id);
            }
        });

        static::saving(function (Project $project) {
            if ($project->progress_percentage === 0) {
                $project->status = 'PLANIFICATION';
            } elseif ($project->progress_percentage === 100) {
                $project->status = 'TERMINE';
            } elseif ($project->progress_percentage > 0 && $project->progress_percentage < 100) {
                $project->status = 'EN_COURS';
            }
        });
    }

    public static function generateReferenceCode(int $companyId): string
    {
        $year = now()->year;
        $prefix = "PRJ-{$year}-";

        $lastProject = static::withoutGlobalScopes()
            ->where('company_id', $companyId)
            ->where('reference_code', 'like', "{$prefix}%")
            ->orderByDesc('reference_code')
            ->first();

        $nextNumber = 1;
        if ($lastProject && $lastProject->reference_code) {
            $lastNumber = (int) substr($lastProject->reference_code, -3);
            $nextNumber = $lastNumber + 1;
        }

        return $prefix . str_pad((string) $nextNumber, 3, '0', STR_PAD_LEFT);
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function serviceRequests(): HasMany
    {
        return $this->hasMany(ServiceRequest::class);
    }

    public function getCahierChargesUrlAttribute(): ?string
    {
        return $this->cahier_charges_path
            ? \Illuminate\Support\Facades\Storage::disk('public')->url($this->cahier_charges_path)
            : null;
    }
}
