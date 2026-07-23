import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { TaskService } from '../../../core/services/task.service';
import { AuthService } from '../../../core/services/auth.service';
import { ImageUrlService } from '../../../core/services/image-url.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { Project } from '../../../core/models/project.model';
import { Task, TaskStatus } from '../../../core/models/task.model';

const STATUS_LABELS: Record<string, string> = {
  PLANIFICATION: 'Planification', EN_COURS: 'En cours',
  EN_PAUSE: 'En pause', TERMINE: 'Terminé'
};

const STATUS_CLASSES: Record<string, string> = {
  PLANIFICATION: 'bg-accent-light text-accent-dark',
  EN_COURS: 'bg-info-light text-info-dark',
  EN_PAUSE: 'bg-warning-light text-warning-dark',
  TERMINE: 'bg-success-light text-success-dark'
};

const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  TODO: 'À faire', IN_PROGRESS: 'En cours', REVIEW: 'Révision', DONE: 'Terminé'
};

const TASK_STATUS_CLASSES: Record<TaskStatus, string> = {
  TODO: 'bg-background-alt text-text-secondary',
  IN_PROGRESS: 'bg-info-light text-info-dark',
  REVIEW: 'bg-warning-light text-warning-dark',
  DONE: 'bg-success-light text-success-dark'
};

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterModule, AvatarComponent, DatePipe],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);
  private readonly taskService = inject(TaskService);
  private readonly authService = inject(AuthService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly user = this.authService.currentUser;
  readonly project = signal<Project | null>(null);
  readonly tasks = signal<Task[]>([]);
  readonly loading = signal(true);
  readonly viewMode = signal<'list' | 'kanban'>('list');

  readonly isManager = computed(() => this.user()?.role === 'MANAGER');

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    return role === 'HR_ADMIN' ? '/admin' : '/manager';
  });

  readonly creatorAvatarUrl = computed(() => {
    const p = this.project();
    if (!p?.creator) return null;
    return this.imageUrlService.resolve(p.creator.avatar_url);
  });

  readonly cahierChargesUrl = computed(() => {
    const p = this.project();
    return p?.cahier_charges_url ? this.imageUrlService.resolve(p.cahier_charges_url) : null;
  });

  readonly doneTasksCount = computed(() => this.tasks().filter(t => t.status === 'DONE').length);

  readonly circleDashoffset = computed(() => {
    const p = this.project();
    if (!p) return 440;
    return 440 - (p.progress_percentage / 100) * 440;
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProject(+id);
      if (this.isManager()) {
        this.loadTasks(+id);
      } else {
        this.loading.set(false);
      }
    }
  }

  private loadProject(id: number): void {
    this.projectService.getProject(id).subscribe({
      next: (data) => {
        this.project.set(data);
        if (!this.isManager()) this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  private loadTasks(projectId: number): void {
    this.taskService.getProjectTasks(projectId).subscribe({
      next: (data) => {
        this.tasks.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getStatusLabel(status: string): string {
    return STATUS_LABELS[status] || status;
  }

  getStatusClass(status: string): string {
    return STATUS_CLASSES[status] || '';
  }

  getTaskStatusLabel(status: TaskStatus): string {
    return TASK_STATUS_LABELS[status];
  }

  getTaskStatusClass(status: TaskStatus): string {
    return TASK_STATUS_CLASSES[status];
  }

  getPriorityClass(priority: string): string {
    switch ((priority || '').toLowerCase()) {
      case 'critique':
      case 'haute':
      case 'high':
      case 'critical':
        return 'bg-error/10 text-error';
      case 'moyenne':
      case 'medium':
        return 'bg-tertiary-fixed/50 text-on-tertiary-fixed-variant';
      case 'basse':
      case 'low':
        return 'bg-outline-variant/30 text-outline';
      default:
        return 'bg-background-alt text-text-muted';
    }
  }

  editProject(): void {
    const project = this.project();
    if (project) {
      this.router.navigate([`${this.baseRoute()}/projects/${project.id}/edit`]);
    }
  }

  deleteProject(): void {
    const project = this.project();
    if (!project) return;
    const confirmed = window.confirm(`Supprimer le projet "${project.name}" ? Cette action est irréversible.`);
    if (!confirmed) return;
    this.projectService.deleteProject(project.id).subscribe({
      next: () => this.router.navigate([`${this.baseRoute()}/projects`]),
      error: () => {}
    });
  }

  newTask(): void {
    const project = this.project();
    if (project) {
      this.router.navigate([`${this.baseRoute()}/projects/${project.id}/tasks/new`]);
    }
  }

  viewTask(task: Task): void {
    this.router.navigate([`/tasks/${task.id}`]);
  }

  startTask(task: Task): void {
    this.taskService.updateStatus(task.id, 'IN_PROGRESS').subscribe(() => {
      this.tasks.update(list => list.map(t => t.id === task.id ? { ...t, status: 'IN_PROGRESS' } : t));
    });
  }

  submitTask(task: Task): void {
    const targetStatus: TaskStatus = task.status === 'IN_PROGRESS' ? 'REVIEW' : 'REVIEW';
    this.taskService.updateStatus(task.id, targetStatus).subscribe(() => {
      this.tasks.update(list => list.map(t => t.id === task.id ? { ...t, status: targetStatus } : t));
    });
  }

  viewKanban(): void {
    const project = this.project();
    if (project) {
      this.router.navigate([`${this.baseRoute()}/projects/${project.id}/board`]);
    }
  }

  getAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }
}
