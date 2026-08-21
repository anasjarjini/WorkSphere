import { Component, inject, signal, computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { Announcement, AnnouncementScope } from '../../../../core/models/announcement.model';

@Component({
  selector: 'app-announcement-feed',
  standalone: true,
  imports: [RouterModule, AvatarComponent],
  templateUrl: './announcement-feed.component.html'
})
export class AnnouncementFeedComponent {
  private readonly announcementService = inject(AnnouncementService);
  private readonly authService = inject(AuthService);
  private readonly imageUrlService = inject(ImageUrlService);
  private readonly router = inject(Router);

  readonly user = this.authService.currentUser;
  readonly announcements = signal<Announcement[]>([]);
  readonly loading = signal(true);

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    if (role === 'HR_ADMIN') return '/admin';
    if (role === 'MANAGER') return '/manager';
    return '/employee';
  });

  readonly isManagerOrAdmin = computed(() => {
    const role = this.user()?.role;
    return role === 'MANAGER' || role === 'HR_ADMIN';
  });

  readonly isAdmin = computed(() => this.user()?.role === 'HR_ADMIN');

  constructor() {
    this.loadAnnouncements();
  }

  formatDate(announcement: Announcement): string {
    const date = announcement.published_at ?? announcement.created_at;
    return date ? new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  }

  private loadAnnouncements(): void {
    this.loading.set(true);
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getScopeLabel(announcement: Announcement): string {
    if (announcement.target_scope === 'COMPANY') {
      return "Toute l'entreprise";
    }
    const user = this.user();
    if (user && (user.id === announcement.target_manager_id || user.manager_id === announcement.target_manager_id)) {
      return 'Mon équipe';
    }
    const manager = announcement.targetManager;
    return manager ? `Équipe de ${manager.first_name} ${manager.last_name}` : 'Équipe';
  }

  getScopeClass(scope: AnnouncementScope): string {
    return scope === 'COMPANY'
      ? 'bg-primary-light text-primary-dark'
      : 'bg-accent-light text-accent-dark';
  }

  canManage(announcement: Announcement): boolean {
    const user = this.user();
    if (!user) return false;
    return user.id === announcement.creator_id;
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }

  newAnnouncement(): void {
    this.router.navigate([`${this.baseRoute()}/announcements/new`]);
  }

  editAnnouncement(announcement: Announcement): void {
    this.router.navigate([`${this.baseRoute()}/announcements/${announcement.id}/edit`]);
  }

  deleteAnnouncement(announcement: Announcement): void {
    const confirmed = window.confirm(`Supprimer l'annonce « ${announcement.title} » ?`);
    if (!confirmed) return;

    this.announcementService.deleteAnnouncement(announcement.id).subscribe({
      next: () => {
        this.announcements.update((list) => list.filter((a) => a.id !== announcement.id));
      },
      error: () => {}
    });
  }
}
