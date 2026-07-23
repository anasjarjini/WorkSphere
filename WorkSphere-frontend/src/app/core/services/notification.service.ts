import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface Notification {
  id: string;
  type: string;
  data: {
    message?: string;
    [key: string]: any;
  };
  read_at: string | null;
  created_at: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  readonly unreadCount = signal(0);
  readonly notifications = signal<Notification[]>([]);
  readonly loading = signal(false);

  fetchUnreadCount(): void {
    this.http.get<{ unread_count: number }>(`${this.apiUrl}/notifications/unread-count`).subscribe({
      next: (res) => this.unreadCount.set(res.unread_count),
    });
  }

  fetchNotifications(): void {
    this.loading.set(true);
    this.http.get<{ data: Notification[] }>(`${this.apiUrl}/notifications`).subscribe({
      next: (res) => {
        this.notifications.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  markAsRead(id: string): void {
    this.http.patch(`${this.apiUrl}/notifications/${id}/read`, {}).subscribe({
      next: () => {
        this.notifications.update((list) =>
          list.map((n) => (n.id === id ? { ...n, read_at: new Date().toISOString() } : n))
        );
        this.unreadCount.update((c) => Math.max(0, c - 1));
      },
    });
  }

  markAllAsRead(): void {
    this.http.patch(`${this.apiUrl}/notifications/read-all`, {}).subscribe({
      next: () => {
        this.notifications.update((list) =>
          list.map((n) => (n.read_at ? n : { ...n, read_at: new Date().toISOString() }))
        );
        this.unreadCount.set(0);
      },
    });
  }

  incrementUnreadCount(): void {
    this.unreadCount.update((c) => c + 1);
  }
}
