import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="admin-dashboard">
      <div class="dashboard-card">
        <h1>Bienvenue, {{ user()?.name }}</h1>
        <p class="dashboard-subtitle">Espace Administrateur RH</p>

        <div class="dashboard-actions">
          <a routerLink="/admin/employees/import" class="btn btn-accent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Importer des employés
          </a>
        </div>

        <button class="btn btn-primary" (click)="onLogout()" style="margin-top: 1rem;">
          Se déconnecter
        </button>
      </div>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: var(--bg-primary);
    }

    .dashboard-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-soft-ui);
      padding: 3rem;
      text-align: center;
      max-width: 480px;
      width: 100%;
    }

    .dashboard-card h1 {
      font-family: var(--font-family-title);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }

    .dashboard-subtitle {
      font-size: 0.9375rem;
      color: var(--color-text-muted);
      margin-bottom: 2rem;
    }

    .dashboard-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .dashboard-actions .btn {
      width: 100%;
    }
  `]
})
export class AdminDashboardComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
