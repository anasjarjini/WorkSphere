<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class ClockInReminderNotification extends Notification
{
    use Queueable;

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'message' => "N'oubliez pas de declarer votre presence pour aujourd'hui.",
            'type' => 'clock_in_reminder',
            'route' => '/employee/attendance',
        ];
    }
}
