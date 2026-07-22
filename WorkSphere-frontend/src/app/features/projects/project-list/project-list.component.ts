import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProjectService } from '../../../core/services/project.service';
import { AuthService } from '../../../core/services/auth.service';
import { Project, ProjectStatus } from '../../../core/models/project.model';

const STATUS_LABELS: Record<ProjectStatus, string> = {
  PLANIFICATION: 'Planification',
  EN_COURS: 'En cours',
  EN_PAUSE: 'En pause',
  TERMINE: 'Terminé'
};

const STATUS_CLASSES: Record<ProjectStatus, string> = {
  PLANIFICATION: 'bg-accent-light text-accent-dark border-accent/20',
  EN_COURS: 'bg-info-light text-info-dark border-info/20',
  EN_PAUSE: 'bg-warning-light text-warning-dark border-warning/20',
  TERMINE: 'bg-success-light text-success-dark border-success/20'
};

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
  private readonly projectService = inject(ProjectService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly user = this.authService.currentUser;
  readonly projects = signal<Project[]>([]);
  readonly loading = signal(true);
  readonly selectedStatus = signal<ProjectStatus | 'ALL'>('ALL');

  readonly isManagerOrAdmin = computed(() => {
    const role = this.user()?.role;
    return role === 'MANAGER' || role === 'HR_ADMIN';
  });

  readonly filteredProjects = computed(() => {
    const list = this.projects();
    const status = this.selectedStatus();
    if (status === 'ALL') return list;
    return list.filter(p => p.status === status);
  });

  readonly statuses: (ProjectStatus | 'ALL')[] = ['ALL', 'PLANIFICATION', 'EN_COURS', 'EN_PAUSE', 'TERMINE'];

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getStatusLabel(status: ProjectStatus): string {
    return STATUS_LABELS[status];
  }

  getStatusClass(status: ProjectStatus): string {
    return STATUS_CLASSES[status];
  }

  newProject(): void {
    const role = this.user()?.role;
    const base = role === 'HR_ADMIN' ? '/admin' : '/manager';
    this.router.navigate([`${base}/projects/new`]);
  }

  viewProject(project: Project): void {
    const role = this.user()?.role;
    const base = role === 'HR_ADMIN' ? '/admin' : '/manager';
    this.router.navigate([`${base}/projects/${project.id}`]);
  }
}
