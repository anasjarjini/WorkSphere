import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface p-6 rounded-xl border border-border shadow-sm">
        <div>
          <h1 class="font-heading text-2xl font-bold text-primary">Tableau de bord Manager</h1>
          <p class="font-sans text-[0.9375rem] text-text-secondary mt-1">Bienvenue, <span class="font-semibold text-text">{{ user()?.name }}</span>. Voici l'aperçu de votre équipe.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-surface border border-border rounded-xl p-6 shadow-sm transition-shadow duration-200 hover:shadow-md group">
          <div class="flex items-center justify-between mb-4">
            <span class="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider">Membres de l'équipe</span>
            <div class="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
          </div>
          <div class="text-3xl font-heading font-bold text-text-heading">--</div>
        </div>
        
        <div class="bg-surface border border-border rounded-xl p-6 shadow-sm transition-shadow duration-200 hover:shadow-md group">
          <div class="flex items-center justify-between mb-4">
            <span class="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider">Congés en cours</span>
            <div class="w-10 h-10 rounded-full bg-primary-50 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
          </div>
          <div class="text-3xl font-heading font-bold text-text-heading">--</div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ManagerDashboardComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
