import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Announcement, AnnouncementScope, AnnouncementStatus } from '../../../../core/models/announcement.model';
import { User } from '../../../../core/models/user.model';

export type AnnouncementTab = 'published' | 'draft' | 'archived';

@Component({
  selector: 'app-announcement-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './announcement-admin.component.html'
})
export class AnnouncementAdminComponent {
  private readonly announcementService = inject(AnnouncementService);
  private readonly authService = inject(AuthService);

  readonly user = this.authService.currentUser;
  readonly announcements = signal<Announcement[]>([]);
  readonly managers = signal<User[]>([]);
  readonly loading = signal(true);
  readonly search = signal('');
  readonly activeTab = signal<AnnouncementTab>('published');
  readonly modalOpen = signal(false);
  readonly modalSaving = signal(false);
  readonly modalError = signal<string | null>(null);

  editingId: number | null = null;

  formData = {
    title: '',
    content: '',
    target_scope: 'COMPANY' as AnnouncementScope,
    target_manager_id: null as number | null
  };

  constructor() {
    this.announcementService.getManagers().subscribe({
      next: (data) => this.managers.set(data),
      error: () => {}
    });
    this.load();
  }

  readonly isTeamScope = computed(() => this.formData.target_scope === 'TEAM');

  readonly modalTitle = computed(() => this.editingId ? 'Modifier l\'annonce' : 'Nouvelle Annonce');

  readonly filtered = computed(() => {
    const query = this.search().trim().toLowerCase();
    if (!query) return this.announcements();
    return this.announcements().filter((a) =>
      a.title.toLowerCase().includes(query) || a.content.toLowerCase().includes(query)
    );
  });

  readonly statTitle = computed(() => this.activeTab() === 'draft' ? 'Brouillons en cours' : 'Annonces actives');
  readonly statCount = computed(() => this.announcements().length);

  readonly restoredCount = computed(() => this.announcements().length);

  readonly lastActivity = computed(() => {
    if (!this.announcements().length) return '—';
    const latest = this.announcements().reduce((a, b) =>
      new Date(b.updated_at ?? b.created_at ?? 0).getTime() > new Date(a.updated_at ?? a.created_at ?? 0).getTime() ? b : a
    );
    const date = latest.updated_at ?? latest.created_at;
    return date ? this.formatRelative(date) : '—';
  });

  switchTab(tab: AnnouncementTab): void {
    if (this.activeTab() === tab) return;
    this.activeTab.set(tab);
    this.search.set('');
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.announcementService.getAnnouncements(this.activeTab()).subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  openCreateModal(): void {
    this.editingId = null;
    this.formData = {
      title: '',
      content: '',
      target_scope: 'COMPANY',
      target_manager_id: null
    };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }

  openEditModal(announcement: Announcement): void {
    this.editingId = announcement.id;
    this.formData = {
      title: announcement.title,
      content: announcement.content,
      target_scope: announcement.target_scope ?? 'COMPANY',
      target_manager_id: announcement.target_manager_id ?? null
    };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }

  closeModal(): void {
    if (this.modalSaving()) return;
    this.modalOpen.set(false);
    this.modalError.set(null);
  }

  submit(status: AnnouncementStatus): void {
    if (!this.formData.title.trim()) {
      this.modalError.set('Le titre est requis.');
      return;
    }
    if (!this.formData.content.trim()) {
      this.modalError.set('Le contenu est requis.');
      return;
    }

    const payload: any = {
      title: this.formData.title.trim(),
      content: this.formData.content.trim(),
      target_scope: this.formData.target_scope,
      status
    };

    if (this.formData.target_scope === 'TEAM') {
      if (!this.formData.target_manager_id) {
        this.modalError.set('Le manager cible est requis pour une annonce d\'équipe.');
        return;
      }
      payload.target_manager_id = this.formData.target_manager_id;
    }

    this.modalSaving.set(true);
    this.modalError.set(null);

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

  publish(announcement: Announcement): void {
    this.announcementService.updateAnnouncement(announcement.id, { status: 'published' }).subscribe({
      next: () => this.load(),
      error: () => {}
    });
  }

  archive(announcement: Announcement): void {
    const confirmed = window.confirm(`Archiver l'annonce « ${announcement.title} » ?`);
    if (!confirmed) return;
    this.announcementService.deleteAnnouncement(announcement.id).subscribe({
      next: () => this.load(),
      error: () => {}
    });
  }

  restore(announcement: Announcement): void {
    this.announcementService.updateAnnouncement(announcement.id, { status: 'published' }).subscribe({
      next: () => this.load(),
      error: () => {}
    });
  }

  forceDelete(announcement: Announcement): void {
    const confirmed = window.confirm(`Supprimer définitivement l'annonce « ${announcement.title} » ? Cette action est irréversible.`);
    if (!confirmed) return;
    this.announcementService.forceDeleteAnnouncement(announcement.id).subscribe({
      next: () => this.load(),
      error: () => {}
    });
  }

  getScopeLabel(scope: AnnouncementScope): string {
    return scope === 'COMPANY' ? 'COMPANY' : 'TEAM';
  }

  getScopeClass(scope: AnnouncementScope): string {
    return scope === 'COMPANY'
      ? 'bg-surface-container-high text-primary'
      : 'bg-tertiary-fixed text-on-tertiary-fixed';
  }

  getStatusLabel(status: AnnouncementStatus): string {
    return status === 'draft' ? 'Brouillon' : status === 'archived' ? 'Archivé' : 'Publié';
  }

  getStatusClass(status: AnnouncementStatus): string {
    if (status === 'draft') return 'bg-surface-variant text-on-surface-variant';
    if (status === 'archived') return 'bg-surface-container-highest text-on-surface-variant';
    return 'bg-secondary-container text-on-secondary-container';
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'MEETING': return 'event';
      case 'TRAINING': return 'school';
      case 'POLICY': return 'policy';
      default: return 'celebration';
    }
  }

  formatRelative(value: string): string {
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

  formatPublishedDate(announcement: Announcement): string {
    const date = announcement.published_at ?? announcement.created_at;
    return date ? this.formatRelative(date) : '—';
  }

  managerName(announcement: Announcement): string {
    const manager = announcement.targetManager;
    return manager ? `${manager.first_name} ${manager.last_name}` : '';
  }
}
