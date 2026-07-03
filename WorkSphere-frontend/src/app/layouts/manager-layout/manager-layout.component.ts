import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-manager-layout',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent],
  template: `
    <div class="layout">
      <nav class="sidebar">
        <div class="sidebar-brand">
          <span class="brand-text">WorkSphere</span>
        </div>

        <ul class="sidebar-nav">
          <li>
            <a routerLink="/manager/dashboard" routerLinkActive="active" class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a routerLink="/manager/team" routerLinkActive="active" class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Mon équipe
            </a>
          </li>
          <li>
            <a routerLink="/manager/profile" routerLinkActive="active" class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Profil
            </a>
          </li>
        </ul>

        <div class="sidebar-footer">
          <div class="user-info">
            <div class="user-avatar">{{ avatarInitials() }}</div>
            <div class="user-details">
              <span class="user-name">{{ user()?.name }}</span>
              <span class="user-role">Manager</span>
            </div>
          </div>
          <button class="btn-logout" (click)="onLogout()" title="Déconnexion">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </nav>

      <main class="main-content">
        <app-breadcrumb />
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      min-height: 100vh;
      background-color: var(--bg-primary);
    }

    .sidebar {
      width: 260px;
      background-color: var(--bg-surface);
      border-right: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      padding: 1.5rem 1rem;
      flex-shrink: 0;
    }

    .sidebar-brand {
      padding: 0 0.75rem;
      margin-bottom: 2rem;
    }

    .brand-text {
      font-family: var(--font-family-title);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    .sidebar-nav {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.625rem 0.75rem;
      border-radius: var(--radius-md);
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all var(--transition-fast);
    }

    .nav-item:hover {
      background-color: var(--color-accent-light);
      color: var(--color-accent);
    }

    .nav-item.active {
      background-color: var(--color-accent-light);
      color: var(--color-accent);
      font-weight: 600;
    }

    .sidebar-footer {
      border-top: 1px solid var(--color-border);
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 0.625rem;
    }

    .user-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background-color: var(--color-accent);
      color: var(--color-text-inverse);
      font-weight: 600;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .user-details {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--color-text-main);
      line-height: 1.2;
    }

    .user-role {
      font-size: 0.6875rem;
      color: var(--color-text-muted);
    }

    .btn-logout {
      background: transparent;
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      padding: 0.5rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all var(--transition-fast);
    }

    .btn-logout:hover {
      background-color: var(--color-error-light);
      border-color: rgba(239, 68, 68, 0.2);
      color: var(--color-error);
    }

    .main-content {
      flex: 1;
      padding: 1.5rem 2rem;
      overflow-y: auto;
    }
  `]
})
export class ManagerLayoutComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;

  readonly avatarInitials = computed(() => {
    const name = this.user()?.name || '';
    if (!name) return 'MG';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  });

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
