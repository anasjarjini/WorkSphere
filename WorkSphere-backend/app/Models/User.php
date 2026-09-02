<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

#[Fillable([
    'name', 'email', 'password', 'company_id', 'avatar',
    'first_name', 'last_name', 'department_id', 'manager_id',
    'marital_status', 'bank_account_iban',
    'emergency_contact_name', 'emergency_contact_phone',
    'address', 'job_title', 'hire_date', 'salary', 'role', 'status',
])]
#[Hidden([
    'password',
    'remember_token',
    'salary',
    'bank_account_iban',
    'marital_status',
    'emergency_contact_name',
    'emergency_contact_phone',
    'address',
])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    protected static function booted(): void
    {
        static::creating(function (self $user): void {
            $user->ensureRequiredAttributes();
        });

        static::saving(function (self $user): void {
            $user->ensureRequiredAttributes();
        });
    }

    /**
     * Les attributs qui doivent être inclus dans la sérialisation JSON
     * même s'ils ne sont pas dans la base de données (accesseurs dynamiques).
     */
    protected $appends = ['avatar_url', 'is_online'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'hire_date' => 'date',
            'salary' => 'decimal:2',
            'last_active_at' => 'datetime',
        ];
    }

    /**
     * Indique si l'utilisateur est considéré comme "en ligne".
     * Actif si `last_active_at` est dans la dernière minute.
     */
    public function getIsOnlineAttribute(): bool
    {
        if (! $this->last_active_at) {
            return false;
        }

        return $this->last_active_at->gt(now()->subMinute());
    }

    /**
     * Backwards-compatible method used by tests and callers.
     */
    public function isOnline(): bool
    {
        return $this->getIsOnlineAttribute();
    }

    /**
     * Accesseur : retourne l'URL complète de l'avatar via le disque 'public'.
     * Retourne null si aucun avatar n'est défini.
     */
    public function getAvatarUrlAttribute(): ?string
    {
        if (! $this->avatar) {
            return null;
        }

        return Storage::disk('public')->url($this->avatar);
    }

    public function getFullNameAttribute(): string
    {
        return trim(implode(' ', array_filter([$this->first_name, $this->last_name])));
    }

    public function ensureRequiredAttributes(): void
    {
        $name = trim((string) $this->name);
        $firstName = trim((string) $this->first_name);
        $lastName = trim((string) $this->last_name);

        if ($name !== '') {
            if ($firstName === '' && $lastName === '') {
                $parts = preg_split('/\s+/', $name) ?: [];
                $first = trim((string) ($parts[0] ?? ''));
                $last = trim((string) implode(' ', array_slice($parts, 1)));

                $this->first_name = $first !== '' ? $first : $name;
                $this->last_name = $last;
            }
        } elseif ($firstName !== '' || $lastName !== '') {
            $this->name = trim(implode(' ', array_filter([$firstName, $lastName])));
        } else {
            $email = trim((string) $this->email);
            $derivedName = $email !== '' ? explode('@', $email)[0] : 'Utilisateur';
            $this->name = $derivedName;
            $this->first_name = $derivedName;
            $this->last_name = '';
        }

        $email = trim((string) $this->email);
        if ($email === '') {
            $baseName = trim((string) $this->name);
            $baseEmail = Str::slug($baseName !== '' ? $baseName : 'utilisateur');
            $this->email = strtolower($baseEmail).'-'.Str::random(6).'@worksphere.local';
        }

        if (empty($this->password)) {
            $this->password = Hash::make(Str::random(32));
        }
    }

    // ── Relations principales ──

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Le manager de cet utilisateur (auto-référence).
     */
    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    /**
     * Les utilisateurs gérés par cet utilisateur (auto-référence inverse).
     */
    public function managedUsers()
    {
        return $this->hasMany(User::class, 'manager_id');
    }

    // ── Relations ──

    public function activationTokens()
    {
        return $this->hasMany(ActivationToken::class);
    }

    // ── Relations tâches ──

    public function taskAssignments()
    {
        return $this->hasMany(TaskAssignment::class);
    }

    public function taskComments()
    {
        return $this->hasMany(TaskComment::class);
    }

    // ── Relations présences ──

    public function attendanceDeclarations()
    {
        return $this->hasMany(AttendanceDeclaration::class);
    }

    // ── Relations congés ──

    public function absences()
    {
        return $this->hasMany(Absence::class);
    }

    public function leaveBalances()
    {
        return $this->hasMany(LeaveBalance::class);
    }
}
