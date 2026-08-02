<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'domain',
        'modules_enabled',
        'email',
        'phone',
        'address',
        'logo',
        'is_active',
        'default_annual_leave_days',
    ];

    /**
     * Les attributs qui doivent être inclus dans la sérialisation JSON
     * même s'ils ne sont pas dans la base de données (accesseurs dynamiques).
     */
    protected $appends = ['logo_url'];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'modules_enabled' => 'array',
            'default_annual_leave_days' => 'integer',
        ];
    }

    /**
     * Accesseur : retourne l'URL complète du logo via le disque 'public'.
     * Retourne null si aucun logo n'est défini.
     */
    public function getLogoUrlAttribute(): ?string
    {
        if (! $this->logo) {
            return null;
        }

        return url(Storage::disk('public')->url($this->logo));
    }

    // ── Relations ──

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function serviceRequests()
    {
        return $this->hasMany(ServiceRequest::class);
    }

    public function departments()
    {
        return $this->hasMany(Department::class);
    }

    public function hasAdminRh(): bool
    {
        return $this->users()->where('role', 'HR_ADMIN')->exists();
    }

    /**
     * Raccourci : toutes les annonces de l'entreprise via ses départements.
     */
    public function announcements()
    {
        return $this->hasManyThrough(Announcement::class, Department::class);
    }
}
