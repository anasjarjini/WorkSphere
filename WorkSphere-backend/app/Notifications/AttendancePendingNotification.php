<?php

namespace App\Notifications;

use App\Models\AttendanceDeclaration;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class AttendancePendingNotification extends Notification
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
        $isManager = $notifiable instanceof User && $notifiable->role === 'MANAGER';

        $detail = $this->declaration->status === 'PRESENT'
            ? 'sa présence'
            : 'son absence';

        return [
            'message' => $this->declaration->user->first_name . ' ' . $this->declaration->user->last_name
                . ' a déclaré ' . $detail . ' le '
                . $this->declaration->date . ' — à valider.',
            'type' => 'attendance_pending',
            'route' => $isManager ? '/manager/attendance/validation' : '/admin/attendance/validation',
            'declaration_id' => $this->declaration->id,
            'date' => $this->declaration->date,
        ];
    }
}
