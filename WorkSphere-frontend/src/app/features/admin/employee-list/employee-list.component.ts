import { Component, OnInit, inject, signal, computed, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee, PaginatedResponse, EmployeeQueryParams } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private readonly employeeService = inject(EmployeeService);

  // ── État des données ──────────────────────────────────────────
  readonly employees = signal<Employee[]>([]);
  readonly total = signal(0);
  readonly currentPage = signal(1);
  readonly lastPage = signal(0);
  readonly perPage = signal(15);
  readonly from = signal<number | null>(null);
  readonly to = signal<number | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  // ── État des filtres ──────────────────────────────────────────
  readonly searchTerm = signal('');
  readonly roleFilter = signal('');
  readonly departmentFilter = signal('');
  readonly statusFilter = signal('');

  // ── Subject pour le debounce de la recherche ───────────────────
  private readonly searchSubject = new Subject<string>();
  private readonly subscriptions: Subscription[] = [];

  // ── Computed : la liste est-elle vide après filtrage ? ────────
  readonly isFiltered = computed(() =>
    !!this.searchTerm() || !!this.roleFilter() || !!this.departmentFilter() || !!this.statusFilter()
  );

  // ── Computed : numéros de page à afficher dans la pagination ──
  readonly pageNumbers = computed(() => {
    const current = this.currentPage();
    const last = this.lastPage();
    if (last <= 7) {
      return Array.from({ length: last }, (_, i) => i + 1);
    }

    const pages: number[] = [];
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push(-1); // ellipsis sentinel
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

  // ── Initialisation ────────────────────────────────────────────
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

  // ── Gestion des changements de filtres ────────────────────────
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

  // ── Chargement de la liste (appel API) ────────────────────────
  loadEmployees(page?: number): void {
    const pageToLoad = page ?? this.currentPage();
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);

    const params: EmployeeQueryParams = {
      page: pageToLoad,
      per_page: this.perPage(),
    };

    if (this.searchTerm()) params.search = this.searchTerm();
    if (this.roleFilter()) params.role = this.roleFilter();
    if (this.departmentFilter()) params.department = this.departmentFilter();
    if (this.statusFilter()) params.is_active = this.statusFilter();

    this.employeeService.getEmployees(params).subscribe({
      next: (response: PaginatedResponse<Employee>) => {
        this.employees.set(response.data);
        this.total.set(response.total);
        this.currentPage.set(response.current_page);
        this.lastPage.set(response.last_page);
        this.perPage.set(response.per_page);
        this.from.set(response.from);
        this.to.set(response.to);
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

  // ── Pagination ────────────────────────────────────────────────
  goToPage(page: number): void {
    if (page < 1 || page > this.lastPage() || page === this.currentPage()) return;
    this.currentPage.set(page);
    this.loadEmployees(page);
  }

  // ── Toggle statut ─────────────────────────────────────────────
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

  // ── Suppression avec confirmation ─────────────────────────────
  confirmDelete(employee: Employee): void {
    const fullName = `${employee.first_name} ${employee.last_name}`;
    const confirmed = window.confirm(
      `Êtes-vous sûr de vouloir supprimer ${fullName} ?\nCette action est réversible (suppression logique).`
    );

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

  // ── Helpers ───────────────────────────────────────────────────
  isAdminRh(role: string): boolean {
    return role === 'administrateur_rh';
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'administrateur_rh':
        return 'bg-primary-100 text-primary-dark';
      case 'manager':
        return 'bg-accent-light text-accent-dark';
      case 'employe':
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
