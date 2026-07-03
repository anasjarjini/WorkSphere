import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  template: `
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto; text-align: center;">
      <h1>Bienvenue {{ user()?.name }}</h1>
      <p style="color: var(--color-text-muted);">Espace Manager</p>
      <button class="btn btn-primary" (click)="onLogout()" style="margin-top: 1rem;">
        Se déconnecter
      </button>
    </div>
  `
})
export class ManagerDashboardComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
