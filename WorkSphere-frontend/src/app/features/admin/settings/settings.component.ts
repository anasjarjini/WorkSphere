import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  template: `
    <div class="settings-page">
      <h1 class="page-title">Paramètres</h1>
      <p class="page-subtitle">Gérez la configuration de votre entreprise.</p>

      <div class="settings-card">
        <h2>Configuration de l'entreprise</h2>
        <p class="text-muted">Les paramètres détaillés seront disponibles prochainement.</p>
      </div>
    </div>
  `,
  styles: [`
    .settings-page {
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

    .settings-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2rem;
      box-shadow: var(--shadow-soft-ui);
    }

    .settings-card h2 {
      font-family: var(--font-family-title);
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-main);
      margin-bottom: 0.5rem;
    }

    .text-muted {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  `]
})
export class AdminSettingsComponent {}
