/**
 * Layout principal de l'espace Manager.
 * Sidebar avec navigation team/profil, topbar avec breadcrumb et menu utilisateur.
 */

import { Component, inject, computed, signal, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';
import { CompanyBrandComponent } from '../../shared/components/company-brand/company-brand.component';
import { ImageUrlService } from '../../core/services/image-url.service';
import { ThemeSwitcherComponent } from '../../shared/components/theme-switcher/theme-switcher.component';
import { NotificationBellComponent } from '../../shared/components/notification-bell/notification-bell.component';

@Component({
  selector: 'app-manager-layout',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent],
  templateUrl: './manager-layout.component.html',
  styles: []
})
export class ManagerLayoutComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly user = this.authService.currentUser;
  readonly userName = computed(() => this.authService.displayName(this.user()));
  isMobileMenuOpen = signal(false);
  isNotificationOpen = signal(false);
  isProfileMenuOpen = signal(false);
  readonly showNotificationBadge = signal(false);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly currentAvatarUrl = computed(() =>
    this.imageUrlService.resolve(this.user()?.avatar_url)
  );
  readonly roleLabel = computed(() => 'Manager');

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  /**
   * Bascule le menu notifications et ferme le menu profil.
   */
  toggleNotifications(): void {
    this.isNotificationOpen.update(v => !v);
    this.isProfileMenuOpen.set(false);
  }

  /**
   * Bascule le menu profil et ferme le menu notifications.
   */
  toggleProfileMenu(): void {
    this.isProfileMenuOpen.update(v => !v);
    this.isNotificationOpen.set(false);
  }

  /**
   * Navigue vers la page de profil.
   */
  navigateToProfile(): void {
    this.isProfileMenuOpen.set(false);
    this.router.navigate(['/manager/profile']);
  }

  /**
   * Déconnecte l'utilisateur.
   */
  onLogout(): void {
    this.authService.logout().subscribe();
  }

  /**
   * Ferme les menus ouverts au clic en dehors.
   */
  @HostListener('document:click')
  onDocumentClick(): void {
    this.isNotificationOpen.set(false);
    this.isProfileMenuOpen.set(false);
  }
}
