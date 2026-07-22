import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { ProjectService } from '../../../core/services/project.service';
import { TaskService } from '../../../core/services/task.service';
import { Employee } from '../../../core/models/employee.model';
import { Project } from '../../../core/models/project.model';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './dashboard.component.html'
})
export class ManagerDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly employeeService = inject(EmployeeService);
  private readonly projectService = inject(ProjectService);
  private readonly taskService = inject(TaskService);

  readonly user = this.authService.currentUser;
  readonly userName = computed(() => this.authService.displayName(this.user()));
  loading = signal(true);
  loadedTeams = signal(false);
  loadedProjects = signal(false);
  loadedTasks = signal(false);
  teamMembers = signal<Employee[]>([]);
  projects = signal<Project[]>([]);
  tasks = signal<Task[]>([]);

  teamCount = computed(() => this.teamMembers().length);
  activeProjects = computed(() => this.projects().filter(p => p.status === 'EN_COURS').length);
  pendingTasks = computed(() => this.projects().reduce((sum, p) => sum + (p.tasks_count || 0), 0));
  overdueTasks = computed(() => this.projects().filter(p => {
    if (!p.end_date || p.status === 'TERMINE') return false;
    return new Date(p.end_date) < new Date();
  }).length);

  todoTasks = computed(() => this.tasks().filter(t => t.status === 'TODO').length);
  inProgressTasks = computed(() => this.tasks().filter(t => t.status === 'IN_PROGRESS').length);
  reviewTasks = computed(() => this.tasks().filter(t => t.status === 'REVIEW').length);
  doneTasks = computed(() => this.tasks().filter(t => t.status === 'DONE').length);
  totalTaskCount = computed(() => this.tasks().length);

  taskPct = computed(() => {
    const total = this.totalTaskCount();
    if (total === 0) return { todo: 0, inProgress: 0, review: 0, done: 0 };
    return {
      todo: Math.round((this.todoTasks() / total) * 100),
      inProgress: Math.round((this.inProgressTasks() / total) * 100),
      review: Math.round((this.reviewTasks() / total) * 100),
      done: Math.round((this.doneTasks() / total) * 100),
    };
  });

  donutGradient = computed(() => {
    const p = this.taskPct();
    const colors = ['#7c3aed', '#0d9488', '#f59e0b', '#ef4444'];
    const segments = [p.todo, p.inProgress, p.review, p.done];
    const stops: string[] = [];
    let current = 0;
    for (let i = 0; i < segments.length; i++) {
      if (segments[i] === 0) continue;
      const start = current;
      const end = current + segments[i];
      stops.push(`${colors[i]} ${start}% ${end}%`);
      current = end;
    }
    if (stops.length === 0) return 'conic-gradient(#e8dfee 0% 100%)';
    return `conic-gradient(${stops.join(', ')})`;
  });

  projectProgress = computed(() =>
    this.projects().slice(0, 3).map(p => ({
      name: p.name,
      progress: p.progress_percentage ?? 0,
      team: p.creator?.first_name ?? 'Équipe',
      deadline: p.end_date ? new Date(p.end_date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) : ''
    }))
  );

  ngOnInit(): void {
    this.loadTeam();
    this.loadProjects();
    this.loadTasks();
  }

  private checkLoaded(): void {
    if (this.loadedTeams() && this.loadedProjects() && this.loadedTasks()) {
      this.loading.set(false);
    }
  }

  getInitials(first: string, last: string): string {
    return `${(first?.[0] || '').toUpperCase()}${(last?.[0] || '').toUpperCase()}`;
  }

  loadTeam(): void {
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (response) => {
        this.teamMembers.set(response.data.filter((e) => e.role !== 'HR_ADMIN'));
        this.loadedTeams.set(true);
        this.checkLoaded();
      },
      error: () => {
        this.teamMembers.set([]);
        this.loadedTeams.set(true);
        this.checkLoaded();
      },
    });
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
        this.loadedProjects.set(true);
        this.checkLoaded();
      },
      error: () => {
        this.projects.set([]);
        this.loadedProjects.set(true);
        this.checkLoaded();
      },
    });
  }

  loadTasks(): void {
    this.taskService.getManagerCreatedTasks().subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
        this.loadedTasks.set(true);
        this.checkLoaded();
      },
      error: () => {
        this.tasks.set([]);
        this.loadedTasks.set(true);
        this.checkLoaded();
      },
    });
  }
}
