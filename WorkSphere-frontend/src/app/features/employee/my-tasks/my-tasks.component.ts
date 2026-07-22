import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { TaskService } from '../../../core/services/task.service';
import { Task, TaskStatus } from '../../../core/models/task.model';

const STATUS_LABELS: Record<TaskStatus, string> = {
  TODO: 'À faire', IN_PROGRESS: 'En cours', REVIEW: 'En révision', DONE: 'Terminé'
};

const PRIORITY_LABELS: Record<string, string> = {
  LOW: 'Faible', MEDIUM: 'Moyenne', HIGH: 'Haute', CRITICAL: 'Critique',
};

const STATUS_CLASSES: Record<TaskStatus, string> = {
  TODO: 'bg-background-alt text-text-secondary',
  IN_PROGRESS: 'bg-primary-100 text-primary',
  REVIEW: 'bg-tertiary-light text-warning-dark',
  DONE: 'bg-accent-light text-accent-dark',
};

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [RouterModule, DatePipe, DecimalPipe],
  templateUrl: './my-tasks.component.html'
})
export class MyTasksComponent {
  private readonly authService = inject(AuthService);
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);

  readonly tasks = signal<Task[]>([]);
  readonly loading = signal(true);
  readonly selectedStatus = signal<TaskStatus | 'ALL'>('ALL');

  readonly statuses: (TaskStatus | 'ALL')[] = ['ALL', 'TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'];

  readonly filteredTasks = computed(() => {
    const list = this.tasks();
    const status = this.selectedStatus();
    if (status === 'ALL') return list;
    return list.filter(t => t.status === status);
  });

  readonly inProgressCount = computed(() =>
    this.tasks().filter(t => t.status === 'IN_PROGRESS' || t.status === 'REVIEW').length
  );

  readonly completedCount = computed(() =>
    this.tasks().filter(t => t.status === 'DONE').length
  );

  readonly overdueCount = computed(() =>
    this.tasks().filter(t => t.due_date && new Date(t.due_date) < new Date() && t.status !== 'DONE').length
  );

  constructor() {
    this.taskService.getMyTasks().subscribe({
      next: (data) => {
        this.tasks.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getStatusLabel(status: TaskStatus): string {
    return STATUS_LABELS[status];
  }

  getStatusClass(status: TaskStatus): string {
    return STATUS_CLASSES[status];
  }

  getPriorityLabel(priority: string | null | undefined): string {
    return PRIORITY_LABELS[priority || ''] || priority || '—';
  }

  getPriorityColor(priority: string): string {
    switch ((priority || '').toLowerCase()) {
      case 'critique':
      case 'haute':
      case 'high':
      case 'critical':
        return 'bg-error';
      case 'moyenne':
      case 'medium':
        return 'bg-tertiary';
      case 'basse':
      case 'low':
        return 'bg-secondary';
      default:
        return 'bg-text-muted';
    }
  }

  viewTask(task: Task): void {
    this.router.navigate([`/employee/tasks/${task.id}`]);
  }

  startTask(task: Task): void {
    this.taskService.updateStatus(task.id, 'IN_PROGRESS').subscribe(() => {
      this.tasks.update(list => list.map(t => t.id === task.id ? { ...t, status: 'IN_PROGRESS' } : t));
    });
  }

  submitTask(task: Task): void {
    this.taskService.updateStatus(task.id, 'REVIEW').subscribe(() => {
      this.tasks.update(list => list.map(t => t.id === task.id ? { ...t, status: 'REVIEW' } : t));
    });
  }

  isOverdue(task: Task): boolean {
    if (!task.due_date || task.status === 'DONE') return false;
    return new Date(task.due_date) < new Date();
  }

  viewProject(task: Task): void {
    if (!task.project) return;
    const role = this.authService.currentUser()?.role;
    if (role === 'HR_ADMIN') {
      this.router.navigate(['/admin/projects', task.project.id]);
    } else if (role === 'MANAGER') {
      this.router.navigate(['/manager/projects', task.project.id]);
    } else {
      this.router.navigate(['/employee/projects', task.project.id]);
    }
  }
}
