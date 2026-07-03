import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-team',
  standalone: true,
  template: `
    <div class="team-page">
      <h1 class="page-title">Mon équipe</h1>
      <p class="page-subtitle">Consultez et gérez les membres de votre équipe.</p>

      <div class="team-card">
        <p class="text-muted">La gestion d'équipe sera disponible prochainement.</p>
      </div>
    </div>
  `,
  styles: [`
    .team-page {
      max-width: 720px;
    }

    .page-title {
      font-family: var(--font-family-title);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }

    .page-subtitle {
      color: var(--color-text-muted);
      font-size: 0.9375rem;
      margin-bottom: 2rem;
    }

    .team-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem;
      box-shadow: var(--shadow-soft-ui);
    }

    .text-muted {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  `]
})
export class ManagerTeamComponent {}
