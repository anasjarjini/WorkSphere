import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceRequestService } from '../../../../core/services/service-request.service';
import { EmployeeService } from '../../../../core/services/employee.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ServiceRequest, RequestStatus } from '../../../../core/models/service-request.model';
import { Employee } from '../../../../core/models/employee.model';

const STATUS_LABELS: Record<RequestStatus, string> = {
  PENDING: 'En attente', APPROVED: 'Approuvée', IN_DEVELOPMENT: 'En développement',
  TESTING: 'En test', DEPLOYED: 'Déployée', REJECTED: 'Rejetée'
};

const STATUS_CLASSES: Record<RequestStatus, string> = {
  PENDING: 'bg-accent-light text-accent-dark', APPROVED: 'bg-info-light text-info-dark',
  IN_DEVELOPMENT: 'bg-primary-light text-primary-dark',
  TESTING: 'bg-warning-light text-warning-dark',
  DEPLOYED: 'bg-success-light text-success-dark',
  REJECTED: 'bg-error-light text-error-dark'
};

@Component({
  selector: 'app-request-detail',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './request-detail.component.html'
})
export class RequestDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly requestService = inject(ServiceRequestService);
  private readonly employeeService = inject(EmployeeService);
  private readonly authService = inject(AuthService);

  readonly user = this.authService.currentUser;
  readonly request = signal<ServiceRequest | null>(null);
  readonly employees = signal<Employee[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly rejectionReason = signal('');
  readonly selectedDeveloperId = signal<number | null>(null);

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    if (role === 'HR_ADMIN') return '/admin';
    if (role === 'MANAGER') return '/manager';
    return '/employee';
  });

  private requestId!: number;

  readonly canApprove = computed(() => {
    const r = this.request();
    return r?.status === 'PENDING' && (this.user()?.role === 'HR_ADMIN' || this.user()?.role === 'MANAGER');
  });

  readonly canAssignDeveloper = computed(() => {
    return this.request()?.status === 'APPROVED' && (this.user()?.role === 'HR_ADMIN' || this.user()?.role === 'MANAGER');
  });

  readonly canStartDevelopment = computed(() => {
    const r = this.request();
    return r?.status === 'IN_DEVELOPMENT' && r?.developer_id === this.user()?.id;
  });

  readonly canApproveDeployment = computed(() => {
    const r = this.request();
    return r?.status === 'TESTING' && (this.user()?.role === 'HR_ADMIN' || this.user()?.role === 'MANAGER');
  });

  readonly isRejected = computed(() => this.request()?.status === 'REJECTED');

  readonly showActions = computed(() => {
    return this.canApprove() || this.canAssignDeveloper() || this.canStartDevelopment() || this.canApproveDeployment();
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.requestId = +id;
      this.loadRequest(+id);
      this.loadEmployees();
    }
  }

  private loadRequest(id: number): void {
    this.requestService.getRequest(id).subscribe({
      next: (data) => {
        this.request.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees({ per_page: 100 }).subscribe({
      next: (res) => this.employees.set(res.data),
      error: () => {}
    });
  }

  getStatusLabel(status: RequestStatus): string {
    return STATUS_LABELS[status];
  }

  getStatusClass(status: RequestStatus): string {
    return STATUS_CLASSES[status];
  }

  approve(): void {
    this.saving.set(true);
    this.requestService.approve(this.requestId).subscribe({
      next: (r) => { this.request.set(r); this.saving.set(false); },
      error: () => this.saving.set(false)
    });
  }

  reject(): void {
    if (!this.rejectionReason().trim()) return;
    this.saving.set(true);
    this.requestService.reject(this.requestId, this.rejectionReason()).subscribe({
      next: (r) => { this.request.set(r); this.saving.set(false); },
      error: () => this.saving.set(false)
    });
  }

  assignDeveloper(): void {
    const devId = this.selectedDeveloperId();
    if (!devId) return;
    this.saving.set(true);
    this.requestService.assignDeveloper(this.requestId, devId).subscribe({
      next: (r) => { this.request.set(r); this.saving.set(false); },
      error: () => this.saving.set(false)
    });
  }

  updateStatus(status: RequestStatus): void {
    this.saving.set(true);
    this.requestService.updateStatus(this.requestId, status).subscribe({
      next: (r) => { this.request.set(r); this.saving.set(false); },
      error: () => this.saving.set(false)
    });
  }
}
