import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../../core/services/task.service';
import { EmployeeService } from '../../../../core/services/employee.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Employee } from '../../../../core/models/employee.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly taskService = inject(TaskService);
  private readonly employeeService = inject(EmployeeService);
  private readonly authService = inject(AuthService);

  readonly user = this.authService.currentUser;
  readonly teamMembers = signal<Employee[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);

  protected projectId!: number;

  readonly today = new Date().toISOString().split('T')[0];

  formData = {
    title: '',
    description: '',
    priority: '',
    due_date: '',
    user_id: null as number | null
  };

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    return role === 'HR_ADMIN' ? '/admin' : '/manager';
  });

  ngOnInit(): void {
    const pid = this.route.snapshot.paramMap.get('projectId');
    if (!pid) {
      this.errorMessage.set('Projet non spécifié.');
      return;
    }
    this.projectId = +pid;
    this.loadTeamMembers();
  }

  private loadTeamMembers(): void {
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (res) => this.teamMembers.set(res.data),
      error: () => {}
    });
  }

  onSubmit(): void {
    if (!this.formData.title.trim()) {
      this.errorMessage.set('Le titre est requis.');
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    const payload: any = { ...this.formData };
    if (!payload.user_id) delete payload.user_id;

    this.taskService.createTask(this.projectId, payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/projects/${this.projectId}`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || 'Erreur lors de la création.');
      }
    });
  }
}
