<?php

namespace App\Notifications;

use App\Models\AttendanceDeclaration;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class AttendanceValidatedNotification extends Notification
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
            'message' => 'Votre déclaration de présence du ' . $this->declaration->date . ' a été validée.',
            'type' => 'attendance_validated',
            'route' => '/employee/attendance/history',
            'declaration_id' => $this->declaration->id,
            'date' => $this->declaration->date,
        ];
    }
}
