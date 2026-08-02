<?php

namespace App\Notifications;

use App\Models\Absence;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class LeaveRequestApprovedNotification extends Notification
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
        return [
            'message' => 'Votre demande de congé ' . $this->absence->reference_code . ' a été approuvée ('
                . $this->absence->duration_days . ' j).',
            'type' => 'leave_request_approved',
            'route' => '/employee/leaves/history',
            'absence_id' => $this->absence->id,
            'reference_code' => $this->absence->reference_code,
        ];
    }
}
