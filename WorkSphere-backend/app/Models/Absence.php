<?php

namespace App\Models;

use App\Enums\AbsenceStatus;
use App\Enums\AbsenceType;
use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Absence extends Model
{
    use SoftDeletes, BelongsToCompany;

    protected $fillable = [
        'company_id',
        'user_id',
        'approver_id',
        'type',
        'reference_code',
        'start_date',
        'end_date',
        'duration_days',
        'reason',
        'status',
        'rejection_reason',
        'justificatif_path',
        'approved_at',
        'rejected_at',
    ];

    protected $appends = ['justificatif_url'];

    protected function casts(): array
    {
        return [
            'type' => AbsenceType::class,
            'status' => AbsenceStatus::class,
            'start_date' => 'date',
            'end_date' => 'date',
            'duration_days' => 'integer',
            'approved_at' => 'datetime',
            'rejected_at' => 'datetime',
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Absence $absence) {
            if (empty($absence->reference_code) && $absence->company_id) {
                $absence->reference_code = self::generateReferenceCode($absence->company_id);
            }
        });
    }

    public static function generateReferenceCode(int $companyId): string
    {
        $year = now()->year;
        $prefix = "ABS-{$year}-";

        $lastAbsence = static::withoutGlobalScopes()
            ->where('company_id', $companyId)
            ->where('reference_code', 'like', "{$prefix}%")
            ->orderByDesc('reference_code')
            ->first();

        $nextNumber = 1;
        if ($lastAbsence && $lastAbsence->reference_code) {
            $lastNumber = (int) substr($lastAbsence->reference_code, -3);
            $nextNumber = $lastNumber + 1;
        }

        return $prefix . str_pad((string) $nextNumber, 3, '0', STR_PAD_LEFT);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approver_id');
    }

    public function getJustificatifUrlAttribute(): ?string
    {
        return $this->justificatif_path
            ? Storage::disk('public')->url($this->justificatif_path)
            : null;
    }
}
