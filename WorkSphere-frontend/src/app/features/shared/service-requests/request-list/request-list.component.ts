import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ServiceRequestService } from '../../../../core/services/service-request.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ServiceRequest, RequestStatus } from '../../../../core/models/service-request.model';

const STATUS_LABELS: Record<RequestStatus, string> = {
  PENDING: 'En attente', APPROVED: 'Approuvée', IN_DEVELOPMENT: 'En développement',
  TESTING: 'En test', DEPLOYED: 'Déployée', REJECTED: 'Rejetée'
};

const STATUS_CLASSES: Record<RequestStatus, string> = {
  PENDING: 'bg-accent-light text-accent-dark',
  APPROVED: 'bg-info-light text-info-dark',
  IN_DEVELOPMENT: 'bg-primary-light text-primary-dark',
  TESTING: 'bg-warning-light text-warning-dark',
  DEPLOYED: 'bg-success-light text-success-dark',
  REJECTED: 'bg-error-light text-error-dark'
};

@Component({
  selector: 'app-request-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './request-list.component.html'
})
export class RequestListComponent {
  private readonly requestService = inject(ServiceRequestService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly user = this.authService.currentUser;
  readonly requests = signal<ServiceRequest[]>([]);
  readonly loading = signal(true);
  readonly selectedStatus = signal<RequestStatus | 'ALL'>('ALL');

  readonly baseRoute = computed(() => {
    const role = this.user()?.role;
    if (role === 'HR_ADMIN') return '/admin';
    if (role === 'MANAGER') return '/manager';
    return '/employee';
  });

  readonly statuses: (RequestStatus | 'ALL')[] = ['ALL', 'PENDING', 'APPROVED', 'IN_DEVELOPMENT', 'TESTING', 'DEPLOYED', 'REJECTED'];

  readonly filteredRequests = computed(() => {
    const list = this.requests();
    const status = this.selectedStatus();
    if (status === 'ALL') return list;
    return list.filter(r => r.status === status);
  });

  constructor() {
    const role = this.user()?.role;
    const obs$ = role === 'MANAGER'
      ? this.requestService.getDepartmentRequests()
      : role === 'HR_ADMIN'
        ? this.requestService.getRequests()
        : this.requestService.getMyRequests();

    obs$.subscribe({
      next: (data) => {
        this.requests.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getStatusLabel(status: RequestStatus): string {
    return STATUS_LABELS[status];
  }

  getStatusClass(status: RequestStatus): string {
    return STATUS_CLASSES[status];
  }

  newRequest(): void {
    this.router.navigate([`${this.baseRoute()}/requests/new`]);
  }

  viewRequest(request: ServiceRequest): void {
    this.router.navigate([`${this.baseRoute()}/requests/${request.id}`]);
  }
}
