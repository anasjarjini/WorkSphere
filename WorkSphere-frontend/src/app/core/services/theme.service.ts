/**
 * Service de gestion du thème Light / Dark / System.
 * - Persiste le choix dans localStorage (clé 'theme-preference')
 * - Applique la classe 'dark' sur <html> selon le thème résolu
 * - Écoute les changements de préférence OS en temps réel (mode System)
 * - Doit être initialisé au démarrage (APP_INITIALIZER) pour éviter le FOUC
 */

import { Injectable, signal, computed, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme-preference';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  /** Préférence choisie par l'utilisateur */
  readonly theme = signal<ThemeMode>(this.readStoredTheme());

  /** Thème réellement appliqué (résout 'system' en 'light' ou 'dark') */
  readonly resolvedTheme = computed<'light' | 'dark'>(() => {
    const t = this.theme();
    if (t !== 'system') return t;
    if (this.isBrowser) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  private systemMediaQuery: MediaQueryList | null = null;
  private readonly systemChangeHandler = () => {
    if (this.theme() === 'system') {
      this.applyTheme();
    }
  };

  constructor() {
    if (!this.isBrowser) return;

    // Applique le thème immédiatement à la construction du service
    this.applyTheme();

    // Écoute les changements de préférence OS
    this.systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemMediaQuery.addEventListener('change', this.systemChangeHandler);

    // Réagit aux changements du signal theme
    effect(() => {
      this.theme(); // lecture pour créer la dépendance
      this.applyTheme();
    });
  }

  /**
   * Définit le thème, persiste dans localStorage et applique immédiatement.
   */
  setTheme(theme: ThemeMode): void {
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    this.theme.set(theme);
  }

  /**
   * Lit la préférence sauvegardée depuis localStorage.
   */
  private readStoredTheme(): ThemeMode {
    if (!this.isBrowser) return 'system';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    return 'system';
  }

  /**
   * Applique ou retire la classe 'dark' sur <html>.
   */
  private applyTheme(): void {
    if (!this.isBrowser) return;
    const isDark = this.resolvedTheme() === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
  }
}
