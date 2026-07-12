/**
 * Composant de sélection du thème (Light / Dark / System).
 * Affiche un bouton avec l'icône du thème actif, et un dropdown avec les 3 options.
 * Fermeture automatique au clic en dehors via HostListener.
 */

import {
  Component, inject, signal, HostListener, ChangeDetectionStrategy
} from '@angular/core';
import { ThemeService, ThemeMode } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative" (click)="$event.stopPropagation()">
      <!-- Bouton déclencheur : icône selon le thème choisi -->
      <button
        (click)="toggleDropdown()"
        class="relative flex items-center justify-center w-10 h-10 rounded-full
               text-text-secondary transition-colors duration-200
               hover:bg-background-alt focus-visible:outline-none
               focus-visible:ring-[3px] focus-visible:ring-primary/25 cursor-pointer"
        [title]="currentLabel()"
        aria-label="Changer le thème"
      >
        @if (themeService.theme() === 'light') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        } @else if (themeService.theme() === 'dark') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        }
      </button>

      <!-- Dropdown -->
      @if (isOpen()) {
        <div
          class="absolute right-0 mt-2 w-44 bg-surface border border-border
                 rounded-xl shadow-lg z-50 overflow-hidden py-1"
          role="menu"
          aria-label="Sélection du thème"
        >
          @for (option of options; track option.value) {
            <button
              (click)="selectTheme(option.value)"
              class="w-full flex items-center gap-3 px-4 py-2.5
                     font-sans text-sm transition-colors duration-150
                     cursor-pointer text-left"
              [class.bg-primary-50]="themeService.theme() === option.value"
              [class.text-primary]="themeService.theme() === option.value"
              [class.font-semibold]="themeService.theme() === option.value"
              [class.text-text-secondary]="themeService.theme() !== option.value"
              role="menuitem"
            >
              <span class="w-4 h-4 shrink-0 flex items-center justify-center">
                @if (option.value === 'light') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                } @else if (option.value === 'dark') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                }
              </span>

              <span class="flex-1">{{ option.label }}</span>

              @if (themeService.theme() === option.value) {
                <svg class="w-3.5 h-3.5 text-primary shrink-0"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              }
            </button>
          }
        </div>
      }
    </div>
  `,
})
export class ThemeSwitcherComponent {
  readonly themeService = inject(ThemeService);
  readonly isOpen = signal(false);

  readonly options: { value: ThemeMode; label: string }[] = [
    { value: 'light',  label: 'Clair'   },
    { value: 'dark',   label: 'Sombre'  },
    { value: 'system', label: 'Système' },
  ];

  currentLabel(): string {
    const t = this.themeService.theme();
    return t === 'light' ? 'Thème clair' : t === 'dark' ? 'Thème sombre' : 'Thème système';
  }

  toggleDropdown(): void {
    this.isOpen.update(v => !v);
  }

  selectTheme(theme: ThemeMode): void {
    this.themeService.setTheme(theme);
    this.isOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.isOpen.set(false);
  }
}
