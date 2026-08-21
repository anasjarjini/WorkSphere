import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { Announcement } from '../../../../core/models/announcement.model';

@Component({
  selector: 'app-announcement-manager',
  standalone: true,
  imports: [FormsModule, AvatarComponent],
  templateUrl: './announcement-manager.component.html'
})
export class AnnouncementManagerComponent {
  private readonly announcementService = inject(AnnouncementService);
  private readonly authService = inject(AuthService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly user = this.authService.currentUser;
  readonly announcements = signal<Announcement[]>([]);
  readonly loading = signal(true);
  readonly tab = signal<'all' | 'team'>('all');
  readonly modalOpen = signal(false);
  readonly modalSaving = signal(false);
  readonly modalError = signal<string | null>(null);

  editingId: number | null = null;

  formData = { title: '', content: '' };

  constructor() {
    this.load();
  }

  readonly filtered = computed(() => {
    if (this.tab() === 'team') {
      return this.announcements().filter((a) => a.target_scope === 'TEAM');
    }
    return this.announcements();
  });

  readonly lastCompanyAnnouncement = computed(() =>
    this.announcements().find((a) => a.target_scope === 'COMPANY') ?? null
  );

  readonly modalTitle = computed(() => this.editingId ? 'Modifier l\'annonce' : 'Nouvelle Annonce');

  load(): void {
    this.loading.set(true);
    this.announcementService.getAnnouncements('published').subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  switchTab(tab: 'all' | 'team'): void {
    this.tab.set(tab);
  }

  openCreateModal(): void {
    this.editingId = null;
    this.formData = { title: '', content: '' };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }

  openEditModal(announcement: Announcement): void {
    this.editingId = announcement.id;
    this.formData = { title: announcement.title, content: announcement.content };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }

  closeModal(): void {
    if (this.modalSaving()) return;
    this.modalOpen.set(false);
    this.modalError.set(null);
  }

  submit(): void {
    if (!this.formData.title.trim()) {
      this.modalError.set('Le titre est requis.');
      return;
    }
    if (!this.formData.content.trim()) {
      this.modalError.set('Le contenu est requis.');
      return;
    }

    this.modalSaving.set(true);
    this.modalError.set(null);

    const payload: any = {
      title: this.formData.title.trim(),
      content: this.formData.content.trim(),
      target_scope: 'TEAM'
    };

    const request = this.editingId
      ? this.announcementService.updateAnnouncement(this.editingId, payload)
      : this.announcementService.createAnnouncement(payload);

    request.subscribe({
      next: () => {
        this.modalSaving.set(false);
        this.modalOpen.set(false);
        this.load();
      },
      error: (err) => {
        this.modalSaving.set(false);
        this.modalError.set(err.error?.message || 'Erreur lors de l\'enregistrement.');
      }
    });
  }

  deleteAnnouncement(announcement: Announcement): void {
    const confirmed = window.confirm(`Archiver l'annonce « ${announcement.title} » ?`);
    if (!confirmed) return;
    this.announcementService.deleteAnnouncement(announcement.id).subscribe({
      next: () => this.load(),
      error: () => {}
    });
  }

  canManage(announcement: Announcement): boolean {
    const user = this.user();
    return !!user && user.id === announcement.creator_id;
  }

  isMine(announcement: Announcement): boolean {
    return this.canManage(announcement);
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
      case 'HR_ADMIN': return 'RH';
      case 'MANAGER': return 'Manager';
      default: return 'Employé';
    }
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }

  formatRelative(value: string | undefined): string {
    if (!value) return '—';
    const date = new Date(value);
    const diffMs = Date.now() - date.getTime();
    const minutes = Math.floor(diffMs / 60000);

    if (minutes < 1) return 'À l\'instant';
    if (minutes < 60) return `Il y a ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `Il y a ${hours} h`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Hier';
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  scopeLabel(scope: string): string {
    return scope === 'TEAM' ? 'Équipe' : 'Entreprise';
  }

  isCompany(announcement: Announcement): boolean {
    return announcement.target_scope === 'COMPANY';
  }
}
