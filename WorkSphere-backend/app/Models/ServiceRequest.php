<?php

namespace App\Models;

use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ServiceRequest extends Model
{
    use HasFactory, SoftDeletes, BelongsToCompany;

    protected $table = 'requests';

    protected $fillable = [
        'company_id',
        'project_id',
        'from_department_id',
        'to_department_id',
        'creator_id',
        'developer_id',
        'title',
        'reference_code',
        'description',
        'status',
        'priority',
        'rejection_reason',
        'assigned_at',
        'resolved_at',
    ];

    protected $casts = [
        'assigned_at' => 'datetime',
        'resolved_at' => 'datetime',
    ];

    protected $attributes = [
        'status' => 'PENDING',
        'priority' => 'MEDIUM',
    ];

    protected static function booted(): void
    {
        static::creating(function (ServiceRequest $request) {
            if (empty($request->reference_code) && $request->company_id) {
                $request->reference_code = self::generateReferenceCode($request->company_id);
            }
        });
    }

    public static function generateReferenceCode(int $companyId): string
    {
        $year = now()->year;
        $prefix = "REQ-{$year}-";

        $lastRequest = static::withoutGlobalScopes()
            ->where('company_id', $companyId)
            ->where('reference_code', 'like', "{$prefix}%")
            ->orderByDesc('reference_code')
            ->first();

        $nextNumber = 1;
        if ($lastRequest && $lastRequest->reference_code) {
            $lastNumber = (int) substr($lastRequest->reference_code, -3);
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

    public function fromDepartment(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'from_department_id');
    }

    public function toDepartment(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'to_department_id');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function developer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'developer_id');
    }
}
