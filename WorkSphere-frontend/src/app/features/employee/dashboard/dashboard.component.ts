/**
 * Dashboard de l'espace Employé.
 * Affiche les informations personnelles (ex: solde de congés — à venir).
 */

import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html'
})
export class EmployeeDashboardComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;
  readonly userName = computed(() => this.authService.displayName(this.user()));

  /**
   * Déconnecte l'utilisateur.
   */
  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
