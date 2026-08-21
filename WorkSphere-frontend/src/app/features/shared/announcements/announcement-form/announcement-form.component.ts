import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AnnouncementScope } from '../../../../core/models/announcement.model';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-announcement-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './announcement-form.component.html'
})
export class AnnouncementFormComponent implements OnInit {
  private readonly announcementService = inject(AnnouncementService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly user = this.authService.currentUser;
  readonly managers = signal<User[]>([]);
  readonly saving = signal(false);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  editingId: number | null = null;

  formData = {
    title: '',
    content: '',
    target_scope: 'TEAM' as AnnouncementScope,
    target_manager_id: null as number | null
  };

  readonly isAdmin = computed(() => this.user()?.role === 'HR_ADMIN');
  readonly isManager = computed(() => this.user()?.role === 'MANAGER');

  readonly isTeamScope = computed(() => this.formData.target_scope === 'TEAM');

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    return role === 'HR_ADMIN' ? '/admin' : '/manager';
  });

  readonly pageTitle = computed(() => this.editingId ? 'Modifier l\'annonce' : 'Nouvelle annonce');

  ngOnInit(): void {
    this.loading.set(true);

    if (this.isAdmin()) {
      this.announcementService.getManagers().subscribe({
        next: (data) => this.managers.set(data),
        error: () => {}
      });
    }

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.editingId = Number(id);
        this.announcementService.getAnnouncement(this.editingId).subscribe({
          next: (ann) => {
            this.formData.title = ann.title;
            this.formData.content = ann.content;
            this.formData.target_scope = ann.target_scope ?? 'TEAM';
            this.formData.target_manager_id = ann.target_manager_id ?? null;
            this.loading.set(false);
          },
          error: () => {
            this.loading.set(false);
            this.errorMessage.set('Annonce introuvable.');
          }
        });
      } else {
        this.loading.set(false);
        if (this.isManager()) {
          this.formData.target_scope = 'TEAM';
        }
      }
    });
  }

  onSubmit(): void {
    if (!this.formData.title.trim()) {
      this.errorMessage.set('Le titre est requis.');
      return;
    }
    if (!this.formData.content.trim()) {
      this.errorMessage.set('Le contenu est requis.');
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    const payload: any = {
      title: this.formData.title.trim(),
      content: this.formData.content.trim()
    };

    if (this.isManager()) {
      payload.target_scope = 'TEAM';
    } else {
      payload.target_scope = this.formData.target_scope;
      if (this.formData.target_scope === 'TEAM' && this.formData.target_manager_id) {
        payload.target_manager_id = this.formData.target_manager_id;
      }
    }

    const request = this.editingId
      ? this.announcementService.updateAnnouncement(this.editingId, payload)
      : this.announcementService.createAnnouncement(payload);

    request.subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/announcements`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || 'Erreur lors de l\'enregistrement.');
      }
    });
  }
}
