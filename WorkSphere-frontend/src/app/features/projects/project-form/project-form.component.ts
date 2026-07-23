import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../../core/services/project.service';
import { AuthService } from '../../../core/services/auth.service';
import { FileUploaderComponent } from '../../../shared/components/file-uploader/file-uploader.component';
import { Project } from '../../../core/models/project.model';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [RouterModule, FormsModule, FileUploaderComponent],
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly user = this.authService.currentUser;
  readonly isEdit = signal(false);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly title = computed(() => this.isEdit() ? 'Modifier le projet' : 'Nouveau projet');

  formData = {
    name: '',
    description: '',
    priority: '',
    status: 'PLANIFICATION',
    progress_percentage: 0,
    start_date: '',
    end_date: '',
    estimated_budget: null as number | null,
    currency: 'MAD'
  };

  protected cahierChargesFile: File | null = null;

  protected updateProgress(value: number): void {
    this.formData.progress_percentage = Math.max(0, Math.min(100, value));
    this.formData.status = this.formData.progress_percentage === 0 ? 'PLANIFICATION'
      : this.formData.progress_percentage === 100 ? 'TERMINE'
      : 'EN_COURS';
  }
  private projectId: number | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit.set(true);
      this.projectId = +id;
      this.loadProject(+id);
    }
  }

  private loadProject(id: number): void {
    this.loading.set(true);
    this.projectService.getProject(id).subscribe({
      next: (project) => {
        this.formData = {
          name: project.name,
          description: project.description || '',
          priority: project.priority || '',
          status: project.status || 'PLANIFICATION',
          progress_percentage: project.progress_percentage ?? 0,
          start_date: project.start_date || '',
          end_date: project.end_date || '',
          estimated_budget: project.estimated_budget ?? null,
          currency: project.currency || 'MAD'
        };
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set('Erreur lors du chargement du projet.');
      }
    });
  }

  onCahierChargesSelected(file: File): void {
    this.cahierChargesFile = file;
  }

  get baseRoute(): string {
    const role = this.user()?.role;
    return role === 'HR_ADMIN' ? '/admin' : '/manager';
  }

  onSubmit(): void {
    if (!this.formData.name.trim()) {
      this.errorMessage.set('Le nom du projet est requis.');
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    const payload: any = {};
    payload['name'] = this.formData.name;
    if (this.formData.description) payload['description'] = this.formData.description;
    payload['status'] = this.formData.status;
    if (this.formData.priority) payload['priority'] = this.formData.priority;
    payload['progress_percentage'] = this.formData.progress_percentage;
    if (this.formData.start_date) payload['start_date'] = this.formData.start_date;
    if (this.formData.end_date) payload['end_date'] = this.formData.end_date;
    if (this.formData.estimated_budget !== null) payload['estimated_budget'] = this.formData.estimated_budget;
    payload['currency'] = this.formData.currency;

    const project$ = this.isEdit() && this.projectId
      ? this.projectService.updateProject(this.projectId, payload)
      : this.projectService.createProject(payload);

    project$.pipe(
      switchMap(project => {
        if (this.cahierChargesFile) {
          return this.projectService.uploadCahierCharges(project.id, this.cahierChargesFile);
        }
        return of(null);
      })
    ).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute}/projects`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || err.statusText || 'Une erreur est survenue lors de l\'enregistrement.');
      }
    });
  }
}
