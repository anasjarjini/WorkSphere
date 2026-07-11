<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Announcement extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'department_id',
        'title',
        'content',
        'type',
        'meeting_date',
        'meeting_link',
        'training_link',
    ];

    protected function casts(): array
    {
        return [
            'meeting_date' => 'datetime',
        ];
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
