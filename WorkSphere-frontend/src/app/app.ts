/**
 * Composant racine de l'application (AppComponent).
 * Initialise l'état d'authentification au démarrage et affiche
 * un écran de chargement tant que l'auth n'est pas prête.
 */

import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ToastContainerComponent } from './shared/components/toast/toast.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, ToastContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly authService = inject(AuthService);
  // ThemeService est injecté ici pour garantir son initialisation
  // (constructeur → applyTheme) avant tout rendu de layout.
  private readonly themeService = inject(ThemeService);
  protected readonly isAuthReady = this.authService.authReady;

  ngOnInit(): void {
    this.authService.checkAuth().subscribe();
  }
}
