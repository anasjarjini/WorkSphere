import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationService, Notification } from '../../../core/services/notification.service';

interface NotificationTypeMeta {
  label: string;
  icon: 'clock' | 'calendar' | 'check' | 'x' | 'clipboard' | 'message';
  colorClass: string;
  route: string;
  defaultMessage: string;
}

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './notification-bell.component.html',
})
export class NotificationBellComponent implements OnInit, OnDestroy {
  private readonly notificationService = inject(NotificationService);

  readonly unreadCount = this.notificationService.unreadCount;
  readonly notifications = this.notificationService.notifications;
  readonly isOpen = signal(false);

  private static readonly TYPE_META: Record<string, NotificationTypeMeta> = {
    leave_request_created: { label: 'Demande de congé', icon: 'calendar', colorClass: 'bg-primary/10 text-primary', route: '/manager/team/leaves/validation', defaultMessage: 'Nouvelle demande de congé à valider' },
    leave_request_approved: { label: 'Congé approuvé', icon: 'check', colorClass: 'bg-success/10 text-success', route: '/employee/leaves/history', defaultMessage: 'Votre demande de congé a été approuvée' },
    leave_request_rejected: { label: 'Congé refusé', icon: 'x', colorClass: 'bg-error/10 text-error', route: '/employee/leaves/history', defaultMessage: 'Votre demande de congé a été refusée' },
    attendance_pending: { label: 'Déclaration en attente', icon: 'clipboard', colorClass: 'bg-primary/10 text-primary', route: '/manager/attendance/validation', defaultMessage: 'Nouvelle déclaration de présence à valider' },
    attendance_validated: { label: 'Déclaration validée', icon: 'check', colorClass: 'bg-success/10 text-success', route: '/employee/attendance/history', defaultMessage: 'Votre déclaration de présence a été validée' },
    attendance_rejected: { label: 'Déclaration refusée', icon: 'x', colorClass: 'bg-error/10 text-error', route: '/employee/attendance/history', defaultMessage: 'Votre déclaration de présence a été refusée' },
    clock_in_reminder: { label: 'Rappel de présence', icon: 'clock', colorClass: 'bg-primary/10 text-primary', route: '/employee/attendance', defaultMessage: 'Rappel de présence' },
    pending_approvals: { label: 'Déclarations en attente', icon: 'clipboard', colorClass: 'bg-primary/10 text-primary', route: '/manager/attendance', defaultMessage: 'Déclarations en attente' },
    task_assigned: { label: 'Tâche assignée', icon: 'calendar', colorClass: 'bg-primary/10 text-primary', route: '', defaultMessage: 'Une tâche vous a été assignée' },
    task_status_changed: { label: 'Statut de tâche', icon: 'check', colorClass: 'bg-primary/10 text-primary', route: '', defaultMessage: 'Le statut d\'une tâche a changé' },
    task_comment: { label: 'Commentaire', icon: 'message', colorClass: 'bg-primary/10 text-primary', route: '', defaultMessage: 'Nouveau commentaire sur une tâche' },
    task_deadline_reminder: { label: 'Échéance de tâche', icon: 'clock', colorClass: 'bg-warning/10 text-warning', route: '', defaultMessage: 'Une tâche arrive à échéance' },
    announcement_created: { label: 'Annonce', icon: 'message', colorClass: 'bg-primary/10 text-primary', route: '', defaultMessage: 'Nouvelle annonce publiée' },
  };

  ngOnInit(): void {
    this.notificationService.startPolling(30000);
  }

  ngOnDestroy(): void {
    this.notificationService.stopPolling();
  }

  toggleDropdown(): void {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.notificationService.fetchNotifications();
    }
  }

  closeDropdown(): void {
    this.isOpen.set(false);
  }

  markAsRead(notification: Notification): void {
    this.notificationService.markAsRead(notification.id);
  }

  markAllAsRead(): void {
    this.notificationService.markAllAsRead();
  }

  getType(notification: Notification): string {
    return notification.data?.['type'] ?? notification.type.split('\\').pop()?.replace(/Notification$/, '') ?? '';
  }

  getMeta(notification: Notification): NotificationTypeMeta {
    return NotificationBellComponent.TYPE_META[this.getType(notification)]
      ?? { label: 'Notification', icon: 'clipboard', colorClass: 'bg-background-alt text-text-secondary', route: '', defaultMessage: notification.data?.['message'] ?? '' };
  }

  getRoute(notification: Notification): string {
    return notification.data?.['route'] || this.getMeta(notification).route;
  }

  getMessage(notification: Notification): string {
    return notification.data?.['message'] || this.getMeta(notification).defaultMessage;
  }
}
