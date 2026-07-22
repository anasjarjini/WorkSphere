import { Component, inject, signal, computed, OnInit, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CdkDragDrop, CdkDragStart, CdkDragEnd, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ProjectService } from '../../../../core/services/project.service';
import { TaskService } from '../../../../core/services/task.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { ToastService } from '../../../../shared/services/toast.service';
import { EmployeeService } from '../../../../core/services/employee.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { TaskDetailPanelComponent } from './task-detail-panel.component';
import { Task, TaskStatus } from '../../../../core/models/task.model';
import { Employee } from '../../../../core/models/employee.model';
import { getValidDropColumns } from './valid-drop-columns';

const STATUS_LABELS: Record<TaskStatus, string> = {
  TODO: 'À faire', IN_PROGRESS: 'En cours', REVIEW: 'En révision', DONE: 'Terminé',
};

const PRIORITY_CLASSES: Record<string, string> = {
  LOW: 'bg-background-alt text-text-secondary',
  MEDIUM: 'bg-info-light text-info',
  HIGH: 'bg-warning-light text-warning-dark',
  CRITICAL: 'bg-error-light text-error-dark',
};

const PRIORITY_LABELS: Record<string, string> = {
  LOW: 'Faible', MEDIUM: 'Moyenne', HIGH: 'Haute', CRITICAL: 'Critique',
};

const PRIORITY_COLORS: Record<string, string> = {
  LOW: '#94A3B8', MEDIUM: '#0D9488', HIGH: '#F59E0B', CRITICAL: '#EF4444',
};

const CHART_COLORS = ['#6366F1', '#0EA5E9', '#F59E0B', '#10B981'];

const CSS_VAR = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const CHART_TOOLTIP_BG = (): string => CSS_VAR('--color-tooltip') || '#1E293B';
const CHART_GRID_COLOR = (): string => CSS_VAR('--color-border') || '#E2E8F0';
const CHART_TICK_MUTED = (): string => CSS_VAR('--color-text-muted') || '#64748B';

const STATUS_TRANSITION_LABELS: Record<string, string> = {
  'TODO': 'Créées',
  'TODO→IN_PROGRESS': 'Démarrées',
  'IN_PROGRESS→REVIEW': 'En révision',
  'REVIEW→DONE': 'Terminées',
};

const TASK_STATUSES: TaskStatus[] = ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'];

interface Column {
  status: TaskStatus; label: string; tasks: Task[];
}

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [RouterModule, DragDropModule, FormsModule, AvatarComponent, TaskDetailPanelComponent, BaseChartDirective, DatePipe],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './task-board.component.html',
})
export class TaskBoardComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);
  private readonly taskService = inject(TaskService);
  private readonly authService = inject(AuthService);
  private readonly imageUrlService = inject(ImageUrlService);
  private readonly toast = inject(ToastService);
  private readonly employeeService = inject(EmployeeService);

  readonly user = this.authService.currentUser;
  readonly projectId = signal<number>(0);
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly selectedTask = signal<Task | null>(null);
  readonly panelOpen = signal(false);
  readonly bulkMode = signal(false);
  readonly assignDropdownTaskId = signal<number | null>(null);
  readonly selectedIds = signal<Set<number>>(new Set());

  // Filters
  readonly searchQuery = signal('');
  readonly filterPriority = signal<string | null>(null);
  readonly filterAssignee = signal<number | null>(null);

  readonly projectName = signal('');
  readonly projectRef = signal('');
  readonly allTasks = signal<Task[]>([]);
  readonly allTeamMembers = signal<Employee[]>([]);

  // ── Filtered tasks ──

  readonly filteredTasks = computed(() => {
    let tasks = this.allTasks();
    const q = this.searchQuery().toLowerCase();
    if (q) tasks = tasks.filter((t) => t.title.toLowerCase().includes(q) || t.reference_code.toLowerCase().includes(q));
    const prio = this.filterPriority();
    if (prio) tasks = tasks.filter((t) => t.priority === prio);
    const assignee = this.filterAssignee();
    if (assignee) tasks = tasks.filter((t) => t.user_id === assignee);
    return tasks;
  });

  readonly activeFiltersCount = computed(() =>
    (this.searchQuery() ? 1 : 0) + (this.filterPriority() ? 1 : 0) + (this.filterAssignee() ? 1 : 0)
  );

  readonly assigneeOptions = computed(() =>
    this.allTeamMembers().map((m) => ({
      id: m.id,
      first_name: m.first_name,
      last_name: m.last_name,
      avatar_url: m.avatar_url,
    }))
  );

  // ── Stats ──

  readonly Math = Math;
  readonly circumference = 2 * Math.PI * 52;

  readonly totalTasks = computed(() => this.allTasks().length);
  readonly overdueTasks = computed(() => this.allTasks().filter((t) => t.due_date && new Date(t.due_date) < new Date() && t.status !== 'DONE').length);
  readonly inProgressTasks = computed(() => this.allTasks().filter((t) => t.status === 'IN_PROGRESS').length);
  readonly completedTasks = computed(() => this.allTasks().filter((t) => t.status === 'DONE').length);
  readonly completionRate = computed(() => this.totalTasks() > 0 ? Math.round((this.completedTasks() / this.totalTasks()) * 100) : 0);
  readonly dashOffset = computed(() => this.circumference * (1 - this.completionRate() / 100));

  // ── Donut chart ──

  readonly donutData = computed<ChartConfiguration<'doughnut'>['data']>(() => {
    const tasks = this.filteredTasks();
    const counts = TASK_STATUSES.map((s) => tasks.filter((t) => t.status === s).length);
    return {
      labels: TASK_STATUSES.map((s) => STATUS_LABELS[s]),
      datasets: [{
        data: counts,
        backgroundColor: CHART_COLORS,
        borderColor: '#ffffff', borderWidth: 2,
        hoverBorderColor: '#ffffff', hoverBorderWidth: 3,
      }],
    };
  });

  readonly donutOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true, maintainAspectRatio: false, cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { family: 'DM Sans', size: 11 }, color: CHART_TICK_MUTED(), padding: 12, usePointStyle: true, pointStyleWidth: 10 },
      },
      tooltip: {
        backgroundColor: CHART_TOOLTIP_BG(),
        titleFont: { family: 'DM Sans', size: 12, weight: 'bold' },
        bodyFont: { family: 'DM Sans', size: 11 }, padding: 10, cornerRadius: 4,
        callbacks: {
          label: (context) => {
            const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
            const pct = total > 0 ? Math.round((context.parsed / total) * 100) : 0;
            return ` ${context.label}: ${context.parsed} (${pct}%)`;
          },
        },
      },
    },
  };

  // ── Bar chart ──

  readonly barData = computed<ChartConfiguration<'bar'>['data']>(() => {
    const tasks = this.filteredTasks();
    const priorities = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
    const counts = priorities.map((p) => tasks.filter((t) => t.priority === p).length);
    return {
      labels: priorities.map((p) => PRIORITY_LABELS[p]),
      datasets: [{
        data: counts,
        backgroundColor: priorities.map((p) => PRIORITY_COLORS[p]),
        borderRadius: 4, borderSkipped: false,
      }],
    };
  });

  readonly barOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false, indexAxis: 'y',
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: CHART_TOOLTIP_BG(), titleFont: { family: 'DM Sans', size: 12, weight: 'bold' }, bodyFont: { family: 'DM Sans', size: 11 }, padding: 10, cornerRadius: 4 },
    },
    scales: {
      x: { beginAtZero: true, ticks: { stepSize: 1, font: { family: 'DM Sans', size: 10 }, color: CHART_TICK_MUTED() }, grid: { color: CHART_GRID_COLOR() } },
      y: { ticks: { font: { family: 'DM Sans', size: 11 }, color: CHART_TICK_MUTED() }, grid: { display: false } },
    },
  };

  // ── Funnel chart (Flow) ──

  readonly funnelData = computed(() => {
    const tasks = this.filteredTasks();
    const maxCount = Math.max(1, tasks.length);
    return TASK_STATUSES.map((s) => {
      const count = tasks.filter((t) => t.status === s).length;
      return { label: STATUS_LABELS[s], count, pct: Math.round((count / maxCount) * 100) };
    });
  });

  // ── Columns ──

  readonly columns = computed<Column[]>(() => {
    const tasks = this.filteredTasks();
    return TASK_STATUSES.map((status) => ({
      status, label: STATUS_LABELS[status],
      tasks: tasks.filter((t) => t.status === status),
    }));
  });

  readonly connectedDropLists = computed(() =>
    this.columns().map((_, i) => `cdk-drop-list-${i}`)
  );

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    return role === 'HR_ADMIN' ? '/admin' : '/manager';
  });

  readonly isManager = computed(() => this.user()?.role === 'MANAGER' || this.user()?.role === 'HR_ADMIN');

  // ── Drag & drop visual state ──

  readonly draggingValidStatuses = signal<TaskStatus[]>([]);
  readonly isDragging = signal(false);

  onDragStarted(event: CdkDragStart): void {
    const task = event.source.data as Task;
    const valid = getValidDropColumns(task, this.user());
    this.draggingValidStatuses.set(valid);
    this.isDragging.set(true);
  }

  onDragEnded(_event: CdkDragEnd): void {
    this.draggingValidStatuses.set([]);
    this.isDragging.set(false);
  }

  canDropToColumn(status: TaskStatus): boolean {
    if (!this.isDragging()) return true;
    return this.draggingValidStatuses().includes(status);
  }

  isTaskDraggable(task: Task): boolean {
    if (this.bulkMode()) return false;
    return task.status !== 'DONE';
  }

  // ── Bulk selection ──

  readonly allSelected = computed(() => {
    const ids = this.selectedIds();
    return this.filteredTasks().length > 0 && this.filteredTasks().every((t) => ids.has(t.id));
  });

  toggleBulkMode(): void {
    this.bulkMode.update((v) => !v);
    this.selectedIds.set(new Set());
  }

  toggleSelect(taskId: number): void {
    this.selectedIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(taskId)) next.delete(taskId); else next.add(taskId);
      return next;
    });
  }

  toggleSelectAll(): void {
    if (this.allSelected()) {
      this.selectedIds.set(new Set());
    } else {
      this.selectedIds.set(new Set(this.filteredTasks().map((t) => t.id)));
    }
  }

  bulkUpdateStatus(status: string): void {
    const ids = [...this.selectedIds()];
    const taskStatus = status as TaskStatus;
    this.toast.info(`Mise à jour de ${ids.length} tâche(s) vers "${STATUS_LABELS[taskStatus]}"...`);
    ids.forEach((id) => {
      this.taskService.updateStatus(id, taskStatus).subscribe({
        next: () => {
          this.selectedIds.update((s) => { const n = new Set(s); n.delete(id); return n; });
          this.loadTasks(this.projectId());
          this.toast.success(`Tâche #${id} mise à jour.`);
        },
        error: () => this.toast.error(`Erreur sur la tâche #${id}.`),
      });
    });
  }

  bulkAssign(userId: number): void {
    const ids = [...this.selectedIds()];
    this.toast.info(`Assignation de ${ids.length} tâche(s)...`);
    ids.forEach((id) => {
      this.taskService.assignTask(id, userId).subscribe({
        next: () => {
          this.selectedIds.update((s) => { const n = new Set(s); n.delete(id); return n; });
          this.loadTasks(this.projectId());
        },
        error: () => this.toast.error(`Erreur sur la tâche #${id}.`),
      });
    });
  }

  // ── Single assign ──

  toggleAssignDropdown(taskId: number): void {
    this.assignDropdownTaskId.update((v) => (v === taskId ? null : taskId));
  }

  assignToTask(taskId: number, userId: number | null): void {
    this.assignDropdownTaskId.set(null);
    this.taskService.assignTask(taskId, userId).subscribe({
      next: () => { this.loadTasks(this.projectId()); this.toast.success(userId ? 'Tâche assignée.' : 'Tâche désassignée.'); },
      error: () => this.toast.error("Erreur lors de l'assignation."),
    });
  }

  @HostListener('document:click')
  closeAssignDropdown(): void {
    this.assignDropdownTaskId.set(null);
  }

  // ── Lifecycle ──

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectId.set(+id);
      this.loadProject(+id);
      this.loadTasks(+id);
    }
    const role = this.user()?.role;
    if (role === 'HR_ADMIN') {
      this.employeeService.getEmployees({ per_page: 100 }).subscribe({
        next: (res) => this.allTeamMembers.set(res.data),
      });
    } else {
      this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
        next: (res) => this.allTeamMembers.set(res.data),
      });
    }
  }

  private loadProject(projectId: number): void {
    this.projectService.getProject(projectId).subscribe({
      next: (project) => {
        this.projectName.set(project.name);
        this.projectRef.set(project.reference_code);
      },
    });
  }

  private loadTasks(projectId: number): void {
    this.taskService.getProjectTasks(projectId).subscribe({
      next: (data) => {
        this.allTasks.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set('Erreur lors du chargement des tâches.');
      },
    });
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.filterPriority.set(null);
    this.filterAssignee.set(null);
  }

  getPriorityClass(priority?: string): string {
    return PRIORITY_CLASSES[priority || ''] || 'bg-background-alt text-text-secondary';
  }

  getPriorityLabel(priority?: string): string {
    return PRIORITY_LABELS[priority || ''] || priority || '';
  }

  isOverdue(dueDate?: string): boolean {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }

  onDrop(event: CdkDragDrop<Task[]>, targetStatus: TaskStatus): void {
    if (this.bulkMode()) return;
    const task = event.item.data as Task;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.taskService.reorder(task.id, event.currentIndex).subscribe();
      return;
    }

    const previousStatus = task.status;
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

    if (task.status !== targetStatus) {
      const updatedTask = { ...task, status: targetStatus };
      this.allTasks.update((tasks) => tasks.map((t) => (t.id === task.id ? updatedTask : t)));

      this.taskService.updateStatus(task.id, targetStatus).subscribe({
        error: () => {
          const rollback = { ...task, status: previousStatus };
          this.allTasks.update((tasks) => tasks.map((t) => (t.id === task.id ? rollback : t)));
          this.toast.error(`Action non autorisée : impossible de passer de "${STATUS_LABELS[previousStatus]}" à "${STATUS_LABELS[targetStatus]}".`);
        },
      });
    }

    this.taskService.reorder(task.id, event.currentIndex).subscribe();
  }

  openPanel(task: Task): void {
    if (this.bulkMode()) return;
    this.selectedTask.set(task);
    this.panelOpen.set(true);
  }

  closePanel(): void {
    this.panelOpen.set(false);
    this.selectedTask.set(null);
  }

  onTaskUpdated(updatedTask: Task): void {
    this.allTasks.update((tasks) => tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    this.selectedTask.set(updatedTask);
  }

  newTask(): void {
    this.router.navigate([`${this.baseRoute()}/projects/${this.projectId()}/tasks/new`]);
  }

  backToProject(): void {
    this.router.navigate([`${this.baseRoute()}/projects/${this.projectId()}`]);
  }

  getColumnBorderClass(status: TaskStatus): string {
    switch (status) {
      case 'TODO': return 'border-outline';
      case 'IN_PROGRESS': return 'border-primary';
      case 'REVIEW': return 'border-tertiary';
      case 'DONE': return 'border-secondary';
    }
  }

  getColumnDotClass(status: TaskStatus): string {
    switch (status) {
      case 'TODO': return 'bg-outline';
      case 'IN_PROGRESS': return 'bg-primary animate-pulse';
      case 'REVIEW': return 'bg-tertiary';
      case 'DONE': return 'bg-secondary';
    }
  }

  protected readonly STATUS_LABELS = STATUS_LABELS;
  protected readonly PRIORITY_LABELS = PRIORITY_LABELS;
  protected readonly TASK_STATUSES = TASK_STATUSES;
}
