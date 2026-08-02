<?php

namespace App\Notifications;

use App\Models\AttendanceDeclaration;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class ClockOutReminderNotification extends Notification
{
    use Queueable;

    public function __construct(
        private readonly AttendanceDeclaration $declaration
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'message' => 'Vous avez declare etre present mais n\'avez pas encore saisi vos heures travaillees.',
            'declaration_id' => $this->declaration->id,
            'type' => 'clock_out_reminder',
        ];
    }
}
