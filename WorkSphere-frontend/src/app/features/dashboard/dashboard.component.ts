import { Component, inject, computed } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen flex flex-col bg-background">
      <!-- Navbar Haute -->
      <nav class="bg-surface border-b border-border h-16 flex items-center px-4 md:px-8 shadow-sm">
        <div class="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div class="flex items-center gap-3">
            <span class="font-heading text-xl font-bold text-primary tracking-tight">WorkSphere</span>
            @if (user()?.company) {
              <span class="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-accent/10 hidden sm:inline-block">{{ user()?.company?.name }}</span>
            }
          </div>
          
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-primary text-text-inverse font-semibold text-sm flex items-center justify-center shadow-sm">
              {{ avatarInitials() }}
            </div>
            <div class="hidden sm:flex flex-col text-left">
              <span class="text-sm font-semibold text-text leading-tight">{{ user()?.name }}</span>
              <span class="text-xs text-text-muted">{{ roleName() }}</span>
            </div>
            <button (click)="onLogout()" class="bg-transparent border border-border text-text-muted p-2 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-error-light hover:border-error/20 hover:text-error" title="Se déconnecter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Zone Principale -->
      <main class="flex-1 py-8 md:py-12 px-4 md:px-8 w-full max-w-4xl mx-auto">
        <div class="bg-surface border border-border rounded-xl p-6 sm:p-12 shadow-sm text-left">
          <div class="mb-8 md:mb-10">
            <h1 class="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-2">Bienvenue, {{ user()?.name }} !</h1>
            <p class="text-text-secondary text-sm md:text-base">Ravi de vous revoir sur votre espace WorkSphere.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div class="border border-border p-4 md:p-5 rounded-md bg-slate-50 flex flex-col gap-1 transition-colors hover:border-primary/30">
              <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Adresse Email</span>
              <span class="text-sm md:text-base font-medium text-text">{{ user()?.email }}</span>
            </div>
            
            <div class="border border-border p-4 md:p-5 rounded-md bg-slate-50 flex flex-col gap-1 transition-colors hover:border-primary/30">
              <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Statut du Compte</span>
              <span class="text-sm md:text-base font-semibold" [class.text-success]="user()?.is_active" [class.text-error]="!user()?.is_active">
                {{ user()?.is_active ? 'Actif' : 'Inactif' }}
              </span>
            </div>

            @if (user()?.employee; as emp) {
              <div class="border border-border p-4 md:p-5 rounded-md bg-slate-50 flex flex-col gap-1 transition-colors hover:border-primary/30">
                <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Poste</span>
                <span class="text-sm md:text-base font-medium text-text">{{ emp.job_title || 'Non renseigné' }}</span>
              </div>

              <div class="border border-border p-4 md:p-5 rounded-md bg-slate-50 flex flex-col gap-1 transition-colors hover:border-primary/30">
                <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Département</span>
                <span class="text-sm md:text-base font-medium text-text">{{ emp.department || 'Non renseigné' }}</span>
              </div>
            }
          </div>
        </div>
      </main>
    </div>
  `,
  styles: []
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
