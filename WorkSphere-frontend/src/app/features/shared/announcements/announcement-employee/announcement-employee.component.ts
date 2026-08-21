import { Component, computed, inject, signal } from '@angular/core';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { Announcement, AnnouncementStatus } from '../../../../core/models/announcement.model';

@Component({
  selector: 'app-announcement-employee',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './announcement-employee.component.html'
})
export class AnnouncementEmployeeComponent {
  private readonly announcementService = inject(AnnouncementService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly announcements = signal<Announcement[]>([]);
  readonly loading = signal(true);
  readonly status = signal<AnnouncementStatus>('published');
  readonly sort = signal<'desc' | 'asc'>('desc');

  constructor() {
    this.load();
  }

  readonly visible = computed(() => {
    const list = [...this.announcements()];
    const dir = this.sort() === 'desc' ? 1 : -1;
    list.sort((a, b) => {
      const da = new Date(a.published_at ?? a.created_at ?? 0).getTime();
      const db = new Date(b.published_at ?? b.created_at ?? 0).getTime();
      return (db - da) * dir;
    });
    return list;
  });

  readonly archivedMode = computed(() => this.status() === 'archived');

  load(): void {
    this.loading.set(true);
    this.announcementService.getAnnouncements(this.status()).subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  toggleArchives(): void {
    this.status.set(this.status() === 'published' ? 'archived' : 'published');
    this.load();
  }

  changeSort(value: string): void {
    this.sort.set(value === 'asc' ? 'asc' : 'desc');
  }

  scopeLabel(scope: string): string {
    return scope === 'TEAM' ? 'Mon équipe' : 'Toute l\'entreprise';
  }

  scopeClass(scope: string): string {
    return scope === 'TEAM'
      ? 'bg-secondary-container/30 text-on-secondary-container'
      : 'bg-primary-container/10 text-primary';
  }

  authorName(announcement: Announcement): string {
    const creator = announcement.creator;
    return creator ? `${creator.first_name} ${creator.last_name}` : '';
  }

  authorTitle(announcement: Announcement): string {
    const creator = announcement.creator;
    if (!creator) return '';
    return creator.job_title || this.roleLabel(creator.role);
  }

  roleLabel(role: string): string {
    switch (role) {
      case 'HR_ADMIN': return 'DRH';
      case 'MANAGER': return 'Manager';
      default: return 'Employé';
    }
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }

  formatDate(value: string | undefined): string {
    if (!value) return '—';
    const date = new Date(value);
    const diffMs = Date.now() - date.getTime();
    const minutes = Math.floor(diffMs / 60000);

    if (minutes < 1) return 'À l\'instant';
    if (minutes < 60) return `Il y a ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `Aujourd'hui, ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
    const days = Math.floor(hours / 24);
    if (days === 1) return `Hier, ${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
