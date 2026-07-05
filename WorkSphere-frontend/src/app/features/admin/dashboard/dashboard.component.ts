import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface p-6 rounded-xl border border-border shadow-sm">
        <div>
          <h1 class="font-heading text-2xl font-bold text-primary">Tableau de bord Admin RH</h1>
          <p class="font-sans text-[0.9375rem] text-text-secondary mt-1">Bienvenue, <span class="font-semibold text-text">{{ user()?.name }}</span>. Voici l'aperçu de votre espace.</p>
        </div>
        <div class="flex items-center gap-3">
          <a routerLink="/admin/employees" class="bg-transparent text-primary border border-primary font-sans text-[0.9375rem] font-semibold px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-primary-50 hover:border-primary-hover cursor-pointer flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Voir tous les employés
          </a>
          <a routerLink="/admin/employees/import" class="bg-primary text-text-inverse font-sans text-[0.9375rem] font-semibold px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:bg-primary-hover hover:-translate-y-px active:translate-y-0 active:shadow-sm flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            Importer
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- KPI 1 -->
        <div class="bg-surface border border-border rounded-xl p-6 shadow-sm transition-shadow duration-200 hover:shadow-md group">
          <div class="flex items-center justify-between mb-4">
            <span class="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider">Total Employés</span>
            <div class="w-10 h-10 rounded-full bg-primary-50 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
          </div>
          <div class="text-3xl font-heading font-bold text-text-heading">--</div>
        </div>
        
        <!-- KPI 2 -->
        <div class="bg-surface border border-border rounded-xl p-6 shadow-sm transition-shadow duration-200 hover:shadow-md group">
          <div class="flex items-center justify-between mb-4">
            <span class="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider">Départements</span>
            <div class="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </div>
          </div>
          <div class="text-3xl font-heading font-bold text-text-heading">--</div>
        </div>

        <!-- KPI 3 -->
        <div class="bg-surface border border-border rounded-xl p-6 shadow-sm transition-shadow duration-200 hover:shadow-md group">
          <div class="flex items-center justify-between mb-4">
            <span class="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider">Demandes en attente</span>
            <div class="w-10 h-10 rounded-full bg-warning/10 text-warning flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
          </div>
          <div class="text-3xl font-heading font-bold text-text-heading">--</div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AdminDashboardComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
