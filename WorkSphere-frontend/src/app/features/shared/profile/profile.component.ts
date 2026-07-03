import { Component, inject, computed } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile-page">
      <h1 class="page-title">Mon Profil</h1>

      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar-large">{{ avatarInitials() }}</div>
          <div>
            <h2>{{ user()?.name }}</h2>
            <p class="text-muted">{{ user()?.email }}</p>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-box">
            <span class="box-label">Rôle</span>
            <span class="box-value">{{ roleName() }}</span>
          </div>
          <div class="info-box">
            <span class="box-label">Statut</span>
            <span class="box-value" [class.active]="user()?.is_active">
              {{ user()?.is_active ? 'Actif' : 'Inactif' }}
            </span>
          </div>
          @if (user()?.company; as company) {
            <div class="info-box">
              <span class="box-label">Entreprise</span>
              <span class="box-value">{{ company.name }}</span>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-page {
      max-width: 640px;
    }

    .page-title {
      font-family: var(--font-family-title);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }

    .profile-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem;
      box-shadow: var(--shadow-soft-ui);
    }

    .profile-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--color-border);
    }

    .avatar-large {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: var(--color-accent);
      color: var(--color-text-inverse);
      font-weight: 700;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .profile-header h2 {
      font-family: var(--font-family-title);
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-text-main);
      margin-bottom: 0.125rem;
    }

    .text-muted {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    @media (max-width: 500px) {
      .info-grid { grid-template-columns: 1fr; }
    }

    .info-box {
      border: 1px solid var(--color-border);
      padding: 1rem 1.25rem;
      border-radius: var(--radius-md);
    }

    .box-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: block;
      margin-bottom: 0.25rem;
    }

    .box-value {
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-text-main);
    }

    .box-value.active {
      color: var(--color-success);
      font-weight: 600;
    }
  `]
})
export class ProfileComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;

  readonly avatarInitials = computed(() => {
    const name = this.user()?.name || '';
    if (!name) return 'PR';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  });

  readonly roleName = computed(() => {
    const roles = this.user()?.roles;
    if (!roles || roles.length === 0) return 'Utilisateur';
    const roleMap: Record<string, string> = {
      'administrateur_rh': 'Admin RH',
      'manager': 'Manager',
      'employe': 'Employé'
    };
    return roleMap[roles[0].name] || roles[0].name;
  });
}
