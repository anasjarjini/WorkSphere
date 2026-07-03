import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="not-found">
      <div class="not-found-card">
        <h1 class="error-code">404</h1>
        <p class="message">Page introuvable</p>
        <p class="subtitle">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <a routerLink="/" class="btn btn-accent">Retour à l'accueil</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background-color: var(--bg-primary);
    }

    .not-found-card {
      text-align: center;
      max-width: 420px;
    }

    .error-code {
      font-family: var(--font-family-title);
      font-size: 6rem;
      font-weight: 800;
      color: var(--color-accent);
      line-height: 1;
      margin-bottom: 0.5rem;
      letter-spacing: -0.05em;
    }

    .message {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text-main);
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 0.9375rem;
      color: var(--color-text-muted);
      margin-bottom: 2rem;
    }
  `]
})
export class NotFoundComponent {}
