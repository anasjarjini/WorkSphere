/**
 * Page de gestion de l'équipe (Manager).
 * Liste des membres avec recherche, filtres (rôle, département), pagination.
 */

import { Component, OnInit, inject, signal, computed, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee, PaginatedResponse, EmployeeQueryParams } from '../../../core/models/employee.model';

@Component({
  selector: 'app-manager-team',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './team.component.html'
})
export class ManagerTeamComponent implements OnInit, OnDestroy {
  private readonly employeeService = inject(EmployeeService);

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

  readonly searchTerm = signal('');
  readonly roleFilter = signal('');
  readonly departmentFilter = signal('');

  private readonly searchSubject = new Subject<string>();
  private readonly subscriptions: Subscription[] = [];

  readonly isFiltered = computed(() =>
    !!this.searchTerm() || !!this.roleFilter() || !!this.departmentFilter()
  );

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
      this.loadTeam();
    });
    this.subscriptions.push(searchSub);
    this.loadTeam();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
    this.searchSubject.next(value);
  }

  onRoleChange(value: string): void {
    this.roleFilter.set(value);
    this.currentPage.set(1);
    this.loadTeam();
  }

  onDepartmentChange(value: string): void {
    this.departmentFilter.set(value);
    this.currentPage.set(1);
    this.loadTeam();
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.roleFilter.set('');
    this.departmentFilter.set('');
    this.currentPage.set(1);
    this.loadTeam();
  }

  loadTeam(page?: number): void {
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

    this.employeeService.getManagerTeam(params).subscribe({
      next: (response: PaginatedResponse<Employee>) => {
        this.employees.set(response.data);
        this.total.set(response.meta.total);
        this.currentPage.set(response.meta.current_page);
        this.lastPage.set(response.meta.last_page);
        this.perPage.set(response.meta.per_page);
        this.from.set(response.meta.from);
        this.to.set(response.meta.to);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.employees.set([]);
        console.error('Erreur chargement équipe:', err);
        if (err.status === 0) {
          this.error.set('Impossible de contacter le serveur. Vérifiez votre connexion.');
        } else if (err.status === 403) {
          this.error.set('Accès non autorisé à cette ressource.');
        } else {
          this.error.set(err.error?.message || 'Une erreur est survenue lors du chargement des membres.');
        }
      }
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.lastPage() || page === this.currentPage()) return;
    this.currentPage.set(page);
    this.loadTeam(page);
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'MANAGER':
        return 'bg-accent-light text-accent-dark';
      case 'EMPLOYE':
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