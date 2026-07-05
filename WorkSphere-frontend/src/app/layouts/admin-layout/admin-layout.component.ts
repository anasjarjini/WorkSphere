import { Component, inject, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, CommonModule],
  template: `
    <div class="flex min-h-screen bg-background w-full">
      
      <!-- Mobile Header -->
      <div class="md:hidden bg-surface border-b border-border p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-30">
        <span class="font-heading text-xl font-bold text-primary">WorkSphere</span>
        <button (click)="toggleMobileMenu()" class="text-text p-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Sidebar Overlay -->
      @if (isMobileMenuOpen()) {
        <div class="fixed inset-0 bg-text/50 z-40 md:hidden" (click)="toggleMobileMenu()"></div>
      }

      <nav class="fixed md:sticky top-0 h-screen z-50 w-64 bg-surface border-r border-border flex flex-col py-6 px-4 shrink-0 transition-transform duration-300 md:translate-x-0"
           [class.-translate-x-full]="!isMobileMenuOpen()"
           [class.translate-x-0]="isMobileMenuOpen()">
        
        <div class="px-3 mb-8 flex justify-between items-center">
          <span class="font-heading text-xl font-bold text-primary">WorkSphere</span>
          <button (click)="toggleMobileMenu()" class="md:hidden text-text-secondary hover:text-text p-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <ul class="flex flex-col gap-1 flex-1">
          <li>
            <a routerLink="/admin/dashboard" routerLinkActive="bg-primary-50 text-primary font-semibold" [routerLinkActiveOptions]="{exact: true}" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors hover:bg-primary-50 hover:text-primary cursor-pointer" (click)="isMobileMenuOpen.set(false)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a routerLink="/admin/employees" routerLinkActive="bg-primary-50 text-primary font-semibold" [routerLinkActiveOptions]="{exact: true}" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors hover:bg-primary-50 hover:text-primary cursor-pointer" (click)="isMobileMenuOpen.set(false)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Employés
            </a>
          </li>
          <li class="ml-6 border-l-2 border-border pl-3">
            <a routerLink="/admin/employees/import" routerLinkActive="bg-primary-50 text-primary font-semibold" class="flex items-center gap-3 px-3 py-2 rounded-md text-text-secondary text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary cursor-pointer" (click)="isMobileMenuOpen.set(false)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              Import CSV
            </a>
          </li>
          <li>
            <a routerLink="/admin/settings" routerLinkActive="bg-primary-50 text-primary font-semibold" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors hover:bg-primary-50 hover:text-primary cursor-pointer" (click)="isMobileMenuOpen.set(false)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              Paramètres
            </a>
          </li>
          <li>
            <a routerLink="/admin/profile" routerLinkActive="bg-primary-50 text-primary font-semibold" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors hover:bg-primary-50 hover:text-primary cursor-pointer" (click)="isMobileMenuOpen.set(false)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Profil
            </a>
          </li>
        </ul>

        <div class="border-t border-border pt-4 flex items-center justify-between mt-auto">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-full bg-primary text-text-inverse font-semibold text-xs flex items-center justify-center">
              {{ avatarInitials() }}
            </div>
            <div class="flex flex-col">
              <span class="text-[0.8125rem] font-semibold text-text leading-tight">{{ user()?.name }}</span>
              <span class="text-[0.6875rem] text-text-secondary">Admin RH</span>
            </div>
          </div>
          <button class="bg-transparent border border-border text-text-secondary p-2 rounded-md cursor-pointer flex items-center transition-colors hover:bg-error-light hover:border-error/20 hover:text-error" (click)="onLogout()" title="Déconnexion">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </nav>

      <main class="flex-1 flex flex-col w-full min-w-0 pt-16 md:pt-0">
        <div class="flex-1 p-6 sm:p-8">
          <app-breadcrumb />
          <router-outlet />
        </div>
      </main>
    </div>
  `,
  styles: []
})
export class AdminLayoutComponent {
  private readonly authService = inject(AuthService);
  readonly user = this.authService.currentUser;
  isMobileMenuOpen = signal(false);

  readonly avatarInitials = computed(() => {
    const name = this.user()?.name || '';
    if (!name) return 'AD';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  });

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  onLogout(): void {
    this.authService.logout().subscribe();
  }
}
