import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnnouncementService } from '../../../../core/services/announcement.service';
import { DepartmentService } from '../../../../core/services/department.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AnnouncementType } from '../../../../core/models/announcement.model';
import { Department } from '../../../../core/models/department.model';

@Component({
  selector: 'app-announcement-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './announcement-form.component.html'
})
export class AnnouncementFormComponent implements OnInit {
  private readonly announcementService = inject(AnnouncementService);
  private readonly departmentService = inject(DepartmentService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly user = this.authService.currentUser;
  readonly departments = signal<Department[]>([]);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);

  formData = {
    title: '',
    content: '',
    type: 'GENERAL' as AnnouncementType,
    department_id: null as number | null,
    meeting_date: '',
    meeting_link: '',
    training_link: ''
  };

  readonly isMeeting = computed(() => this.formData.type === 'MEETING');
  readonly isTraining = computed(() => this.formData.type === 'TRAINING');

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    return role === 'HR_ADMIN' ? '/admin' : '/manager';
  });

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments.set(data),
      error: () => {}
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

    const payload: any = { ...this.formData };
    if (!payload.department_id) delete payload.department_id;
    if (!payload.meeting_date) delete payload.meeting_date;
    if (!payload.meeting_link) delete payload.meeting_link;
    if (!payload.training_link) delete payload.training_link;

    this.announcementService.createAnnouncement(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/announcements`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || 'Erreur lors de la création.');
      }
    });
  }
}
