import { Component, OnInit, inject, signal, computed, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee, PaginatedResponse, EmployeeQueryParams } from '../../../core/models/employee.model';
import { ImageUrlService } from '../../../core/services/image-url.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule, FormsModule, AvatarComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private readonly employeeService = inject(EmployeeService);
  readonly imageUrlService = inject(ImageUrlService);

  readonly employees = signal<Employee[]>([]);
  readonly total = signal(0);
  readonly currentPage = signal(1);
  readonly lastPage = signal(0);
  readonly perPage = signal(10);
  readonly from = signal<number | null>(null);
  readonly to = signal<number | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly searchTerm = signal('');
  readonly roleFilter = signal('');
  readonly departmentFilter = signal('');
  readonly statusFilter = signal('');

  readonly selectedIds = signal<Set<number>>(new Set());

  private readonly searchSubject = new Subject<string>();
  private readonly subscriptions: Subscription[] = [];

  readonly isFiltered = computed(() =>
    !!this.searchTerm() || !!this.roleFilter() || !!this.departmentFilter() || !!this.statusFilter()
  );

  readonly allSelected = computed(() => {
    const emp = this.employees();
    const sel = this.selectedIds();
    return emp.length > 0 && emp.every(e => sel.has(e.id));
  });

  readonly selectedCount = computed(() => this.selectedIds().size);

  readonly pageNumbers = computed(() => {
    const current = this.currentPage();
    const last = this.lastPage();
    if (last <= 7) {
      return Array.from({ length: last }, (_, i) => i + 1);
    }
    const pages: number[] = [];
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push(-1);
      pages.push(last);
    } else if (current >= last - 3) {
      pages.push(1);
      pages.push(-1);
      for (let i = last - 4; i <= last; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push(-1);
      for (let i = current - 1; i <= current + 1; i++) pages.push(i);
      pages.push(-1);
      pages.push(last);
    }
    return pages;
  });

  ngOnInit(): void {
    const searchSub = this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadEmployees();
    });
    this.subscriptions.push(searchSub);
    this.loadEmployees();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private buildQueryParams(page: number): EmployeeQueryParams {
    const params: EmployeeQueryParams = { page, per_page: this.perPage() };
    if (this.searchTerm()) params.search = this.searchTerm();
    if (this.roleFilter()) params.role = this.roleFilter();
    if (this.departmentFilter()) params.department = this.departmentFilter();
    if (this.statusFilter()) params.status = this.statusFilter();
    return params;
  }

  private applyPaginationMeta(response: PaginatedResponse<Employee>): void {
    this.total.set(response.meta.total);
    this.currentPage.set(response.meta.current_page);
    this.lastPage.set(response.meta.last_page);
    this.perPage.set(response.meta.per_page);
    this.from.set(response.meta.from);
    this.to.set(response.meta.to);
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
    this.searchSubject.next(value);
  }

  onRoleChange(value: string): void {
    this.roleFilter.set(value);
    this.currentPage.set(1);
    this.loadEmployees();
  }

  onDepartmentChange(value: string): void {
    this.departmentFilter.set(value);
    this.currentPage.set(1);
    this.loadEmployees();
  }

  onStatusChange(value: string): void {
    this.statusFilter.set(value);
    this.currentPage.set(1);
    this.loadEmployees();
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.roleFilter.set('');
    this.departmentFilter.set('');
    this.statusFilter.set('');
    this.currentPage.set(1);
    this.loadEmployees();
  }

  loadEmployees(page?: number): void {
    const pageToLoad = page ?? this.currentPage();
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    this.selectedIds.set(new Set());

    this.employeeService.getEmployees(this.buildQueryParams(pageToLoad)).subscribe({
      next: (response: PaginatedResponse<Employee>) => {
        this.employees.set(response.data);
        this.applyPaginationMeta(response);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.employees.set([]);
        if (err.status === 0) {
          this.error.set('Impossible de contacter le serveur. Vérifiez votre connexion.');
        } else {
          this.error.set(err.error?.message || 'Une erreur est survenue lors du chargement des employés.');
        }
      }
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.lastPage() || page === this.currentPage()) return;
    this.currentPage.set(page);
    this.loadEmployees(page);
  }

  toggleSelectAll(): void {
    if (this.allSelected()) {
      this.selectedIds.set(new Set());
    } else {
      this.selectedIds.set(new Set(this.employees().map(e => e.id)));
    }
  }

  toggleSelect(id: number): void {
    const sel = new Set(this.selectedIds());
    if (sel.has(id)) {
      sel.delete(id);
    } else {
      sel.add(id);
    }
    this.selectedIds.set(sel);
  }

  clearSelection(): void {
    this.selectedIds.set(new Set());
  }

  bulkDelete(): void {
    const count = this.selectedCount();
    if (count === 0) return;
    const confirmed = window.confirm(`Supprimer ${count} employé${count > 1 ? 's' : ''} ?`);
    if (!confirmed) return;
    this.loading.set(true);
    const ids = Array.from(this.selectedIds());
    this.employeeService.bulkDeleteEmployees(ids).subscribe({
      next: (response) => {
        this.successMessage.set(response.message || `${ids.length} employé(s) supprimé(s).`);
        this.loading.set(false);
        this.loadEmployees();
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Une erreur est survenue lors de la suppression.');
      }
    });
  }

  toggleStatus(employee: Employee): void {
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    this.employeeService.toggleStatus(employee.id).subscribe({
      next: () => {
        this.successMessage.set('Statut de l\'employé mis à jour avec succès.');
        this.loading.set(false);
        this.loadEmployees();
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        if (err.status === 403) {
          this.error.set(err.error?.message || 'Action non autorisée.');
        } else {
          this.error.set(err.error?.message || 'Une erreur est survenue.');
        }
      }
    });
  }

  confirmDelete(employee: Employee): void {
    const fullName = `${employee.first_name} ${employee.last_name}`;
    const confirmed = window.confirm(`Êtes-vous sûr de vouloir supprimer ${fullName} ?`);
    if (!confirmed) return;
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: (response) => {
        this.successMessage.set(response.message);
        this.loading.set(false);
        this.loadEmployees();
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        if (err.status === 403) {
          this.error.set(err.error?.message || 'Action non autorisée.');
        } else {
          this.error.set(err.error?.message || 'Une erreur est survenue lors de la suppression.');
        }
      }
    });
  }

  isAdminRh(role: string): boolean {
    return role === 'HR_ADMIN';
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'HR_ADMIN':
        return 'bg-primary-100 text-primary-dark';
      case 'MANAGER':
        return 'bg-accent-light text-accent-dark';
      case 'EMPLOYEE':
        return 'bg-info-light text-primary-dark';
      default:
        return 'bg-background-alt text-text-muted';
    }
  }

  dismissSuccess(): void {
    this.successMessage.set(null);
  }

  dismissError(): void {
    this.error.set(null);
  }
}
