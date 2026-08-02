<?php

namespace App\Notifications;

use App\Models\Absence;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class LeaveRequestRejectedNotification extends Notification
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
            'message' => 'Votre demande de congé ' . $this->absence->reference_code . ' a été rejetée : '
                . ($this->absence->rejection_reason ?: 'Motif non précisé') . '.',
            'type' => 'leave_request_rejected',
            'route' => '/employee/leaves/history',
            'absence_id' => $this->absence->id,
            'reference_code' => $this->absence->reference_code,
        ];
    }
}
