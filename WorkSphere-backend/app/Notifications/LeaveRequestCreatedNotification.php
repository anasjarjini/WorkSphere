<?php

namespace App\Notifications;

use App\Models\Absence;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class LeaveRequestCreatedNotification extends Notification
{
    use Queueable;

    public function __construct(
        private readonly Absence $absence
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        $isManager = $notifiable instanceof User && $notifiable->role === 'MANAGER';

        return [
            'message' => $this->absence->user->first_name . ' ' . $this->absence->user->last_name
                . ' a demandé un ' . $this->absence->type->label() . ' ('
                . $this->absence->duration_days . ' j) — ' . $this->absence->reference_code . '.',
            'type' => 'leave_request_created',
            'route' => $isManager ? '/manager/team/leaves/validation' : '/admin/hr/leaves/validation',
            'absence_id' => $this->absence->id,
            'reference_code' => $this->absence->reference_code,
        ];
    }
}
