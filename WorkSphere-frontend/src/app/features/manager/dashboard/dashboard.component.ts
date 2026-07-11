/**
 * Dashboard de l'espace Manager.
 * Affiche les KPI de l'équipe (effectif, actifs, départements)
 * et la liste des membres de l'équipe.
 */

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html'
})
export class ManagerDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly employeeService = inject(EmployeeService);

  readonly user = this.authService.currentUser;
  readonly userName = computed(() => this.authService.displayName(this.user()));
  loading = signal(true);
  teamMembers = signal<Employee[]>([]);

  activeCount = computed(() => this.teamMembers().filter((e) => e.status === 'ACTIVE').length);

  departmentsCount = computed(() => {
    const depts = new Set(this.teamMembers().filter((e) => e.department).map((e) => e.department));
    return depts.size;
  });

  ngOnInit(): void {
    this.loadTeam();
  }

  /**
   * Extrait les initiales d'un employé.
   */
  getInitials(first: string, last: string): string {
    return `${(first?.[0] || '').toUpperCase()}${(last?.[0] || '').toUpperCase()}`;
  }

  /**
   * Charge les membres de l'équipe depuis l'API.
   */
  loadTeam(): void {
    this.loading.set(true);
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (response) => {
        // Filtrer les administrateurs_rh (le manager ne doit pas se voir lui-même comme admin)
        this.teamMembers.set(response.data.filter((e) => e.role !== 'HR_ADMIN'));
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.teamMembers.set([]);
        this.loading.set(false);
        console.error('Erreur chargement équipe (dashboard):', err);
      },
    });
  }

  /**
   * Déconnecte l'utilisateur.
   */
  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
