import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceRequestService } from '../../../../core/services/service-request.service';
import { DepartmentService } from '../../../../core/services/department.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Department } from '../../../../core/models/department.model';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './request-form.component.html'
})
export class RequestFormComponent implements OnInit {
  private readonly requestService = inject(ServiceRequestService);
  private readonly departmentService = inject(DepartmentService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly user = this.authService.currentUser;
  readonly departments = signal<Department[]>([]);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);

  formData = {
    title: '',
    description: '',
    to_department_id: null as number | null,
    project_id: null as number | null,
    priority: ''
  };

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    if (role === 'HR_ADMIN') return '/admin';
    if (role === 'MANAGER') return '/manager';
    return '/employee';
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
    if (!this.formData.to_department_id) {
      this.errorMessage.set('Veuillez sélectionner un département destinataire.');
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    const payload: any = { ...this.formData };
    if (!payload.to_department_id) delete payload.to_department_id;
    if (!payload.project_id) delete payload.project_id;
    if (!payload.priority) delete payload.priority;

    this.requestService.createRequest(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/requests`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || 'Erreur lors de la création.');
      }
    });
  }
}
