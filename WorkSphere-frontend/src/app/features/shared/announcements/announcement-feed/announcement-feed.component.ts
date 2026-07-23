import { Component, inject, signal, computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { Announcement, AnnouncementType } from '../../../../core/models/announcement.model';

const TYPE_LABELS: Record<AnnouncementType, string> = {
  GENERAL: 'Général', MEETING: 'Réunion', TRAINING: 'Formation', POLICY: 'Politique'
};

const TYPE_CLASSES: Record<AnnouncementType, string> = {
  GENERAL: 'bg-primary-light text-primary-dark',
  MEETING: 'bg-accent-light text-accent-dark',
  TRAINING: 'bg-info-light text-info-dark',
  POLICY: 'bg-warning-light text-warning-dark'
};

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

  constructor() {
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getTypeLabel(type: AnnouncementType): string {
    return TYPE_LABELS[type];
  }

  getTypeClass(type: AnnouncementType): string {
    return TYPE_CLASSES[type];
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }

  newAnnouncement(): void {
    const router = inject(Router);
    router.navigate([`${this.baseRoute()}/announcements/new`]);
  }
}
