<?php

namespace App\Notifications;

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class AnnouncementCreatedNotification extends Notification
{
    use Queueable;

    public function __construct(
        private readonly Announcement $announcement
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        $authorName = $this->announcement->creator?->first_name . ' ' . $this->announcement->creator?->last_name;
        $scope = $this->announcement->target_scope?->label() ?? "Toute l'entreprise";

        $route = match ($notifiable->role) {
            'MANAGER' => '/manager/announcements',
            'HR_ADMIN' => '/admin/announcements',
            default => '/employee/announcements',
        };

        return [
            'message' => trim("$authorName a publié une annonce ($scope) : " . $this->announcement->title),
            'type' => 'announcement_created',
            'route' => $route,
            'announcement_id' => $this->announcement->id,
            'title' => $this->announcement->title,
        ];
    }
}
