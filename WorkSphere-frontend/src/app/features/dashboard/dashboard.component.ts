import { Component, inject, computed } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <div class="dashboard-layout">
      <!-- Navbar Haute -->
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-brand">
            <span class="brand-text">WorkSphere</span>
            @if (user()?.company) {
              <span class="company-badge">{{ user()?.company?.name }}</span>
            }
          </div>
          
          <div class="nav-user flex items-center gap-3">
            <div class="user-avatar">
              {{ avatarInitials() }}
            </div>
            <div class="user-info flex-col">
              <span class="user-name">{{ user()?.name }}</span>
              <span class="user-role">{{ roleName() }}</span>
            </div>
            <button (click)="onLogout()" class="btn btn-logout" title="Se déconnecter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logout-icon">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Zone Principale -->
      <main class="dashboard-content">
        <div class="welcome-card">
          <div class="welcome-header">
            <h1 class="welcome-title">Bienvenue, {{ user()?.name }} !</h1>
            <p class="welcome-subtitle">Ravi de vous revoir sur votre espace WorkSphere.</p>
          </div>

          <div class="info-grid">
            <div class="info-box">
              <span class="box-label">Adresse Email</span>
              <span class="box-value">{{ user()?.email }}</span>
            </div>
            
            <div class="info-box">
              <span class="box-label">Statut du Compte</span>
              <span class="box-value badge-success">
                {{ user()?.is_active ? 'Actif' : 'Inactif' }}
              </span>
            </div>

            @if (user()?.employee; as emp) {
              <div class="info-box">
                <span class="box-label">Poste</span>
                <span class="box-value">{{ emp.job_title || 'Non renseigné' }}</span>
              </div>

              <div class="info-box">
                <span class="box-label">Département</span>
                <span class="box-value">{{ emp.department || 'Non renseigné' }}</span>
              </div>
            }
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: var(--bg-primary);
    }

    .navbar {
      background-color: var(--bg-surface);
      border-bottom: 1px solid var(--color-border);
      height: 64px;
      display: flex;
      align-items: center;
      padding: 0 2rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-text {
      font-family: var(--font-family-title);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary);
      letter-spacing: -0.02em;
    }

    .company-badge {
      background-color: var(--color-accent-light);
      color: var(--color-accent);
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.625rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(37, 99, 235, 0.1);
    }

    .user-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background-color: var(--color-primary);
      color: var(--color-text-inverse);
      font-weight: 600;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-sm);
    }

    .user-info {
      text-align: left;
    }

    .user-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-text-main);
      display: block;
      line-height: 1.2;
    }

    .user-role {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      display: block;
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
      justify-content: center;
      transition: all var(--transition-fast);
    }

    .btn-logout:hover {
      background-color: var(--color-error-light);
      border-color: rgba(239, 68, 68, 0.2);
      color: var(--color-error);
    }

    .logout-icon {
      width: 18px;
      height: 18px;
    }

    /* Contenu du Dashboard */
    .dashboard-content {
      flex: 1;
      padding: 3rem 2rem;
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
    }

    .welcome-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 3rem;
      box-shadow: var(--shadow-soft-ui);
      text-align: left;
    }

    .welcome-header {
      margin-bottom: 2.5rem;
    }

    .welcome-title {
      font-family: var(--font-family-title);
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--color-primary);
      letter-spacing: -0.03em;
      margin-bottom: 0.5rem;
    }

    .welcome-subtitle {
      color: var(--color-text-muted);
      font-size: 1rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
    }

    .info-box {
      border: 1px solid var(--color-border);
      padding: 1.25rem;
      border-radius: var(--radius-md);
      background-color: #fafbfc;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .box-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .box-value {
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-main);
    }

    .badge-success {
      color: var(--color-success);
      font-weight: 600;
    }

    .gap-3 { gap: 0.75rem; }
  `]
})
export class DashboardComponent {
  private readonly authService = inject(AuthService);

  readonly user = this.authService.currentUser;

  // Calcul des initiales pour l'avatar
  readonly avatarInitials = computed(() => {
    const name = this.user()?.name || '';
    if (!name) return 'WS';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  });

  // Nom lisible du rôle Spatie
  readonly roleName = computed(() => {
    const roles = this.user()?.roles;
    if (!roles || roles.length === 0) return 'Utilisateur';
    const roleMap: Record<string, string> = {
      'administrateur_rh': 'Admin RH',
      'employe': 'Employé'
    };
    return roleMap[roles[0].name] || roles[0].name;
  });

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
