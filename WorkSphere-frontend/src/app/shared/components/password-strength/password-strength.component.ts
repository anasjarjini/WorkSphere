import { Component, computed, input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PasswordStrengthClass = 'strength-none' | 'strength-weak' | 'strength-medium' | 'strength-strong';

export interface PasswordStrengthInfo {
  percent: number;
  label: string;
  class: PasswordStrengthClass;
}

export interface PasswordRequirements {
  minLength: boolean;
  hasUpper: boolean;
  hasLower: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
}

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (password()) {
      <div class="mt-2.5 p-2.5 bg-background border border-border rounded-md">
        <div class="h-1 bg-border rounded-full overflow-hidden relative">
          <div
            class="h-full rounded-full transition-all duration-300"
            [ngClass]="{
              'bg-error': strengthInfo().class === 'strength-weak',
              'bg-warning': strengthInfo().class === 'strength-medium',
              'bg-success': strengthInfo().class === 'strength-strong'
            }"
            [style.width.%]="strengthInfo().percent"
          ></div>
        </div>
        <div class="flex justify-between text-xs mt-1">
          <span class="text-text-muted">Sécurité :</span>
          <span
            class="font-semibold"
            [ngClass]="{
              'text-error': strengthInfo().class === 'strength-weak',
              'text-warning': strengthInfo().class === 'strength-medium',
              'text-success': strengthInfo().class === 'strength-strong'
            }"
          >
            {{ strengthInfo().label }}
          </span>
        </div>
      </div>
    }

    <div class="mt-3 flex flex-col gap-1.5 pl-1">
      <div
        class="text-xs flex items-center gap-2 transition-colors duration-200"
        [ngClass]="requirements().minLength ? 'text-accent-dark font-medium' : 'text-text-muted'"
      >
        <span
          class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
          [ngClass]="requirements().minLength ? 'bg-success scale-125' : 'bg-slate-300'"
        ></span>
        <span>Au moins 8 caractères</span>
      </div>
      <div
        class="text-xs flex items-center gap-2 transition-colors duration-200"
        [ngClass]="requirements().hasUpper ? 'text-accent-dark font-medium' : 'text-text-muted'"
      >
        <span
          class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
          [ngClass]="requirements().hasUpper ? 'bg-success scale-125' : 'bg-slate-300'"
        ></span>
        <span>Au moins une lettre majuscule (A-Z)</span>
      </div>
      <div
        class="text-xs flex items-center gap-2 transition-colors duration-200"
        [ngClass]="requirements().hasLower ? 'text-accent-dark font-medium' : 'text-text-muted'"
      >
        <span
          class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
          [ngClass]="requirements().hasLower ? 'bg-success scale-125' : 'bg-slate-300'"
        ></span>
        <span>Au moins une lettre minuscule (a-z)</span>
      </div>
      <div
        class="text-xs flex items-center gap-2 transition-colors duration-200"
        [ngClass]="requirements().hasNumber ? 'text-accent-dark font-medium' : 'text-text-muted'"
      >
        <span
          class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
          [ngClass]="requirements().hasNumber ? 'bg-success scale-125' : 'bg-slate-300'"
        ></span>
        <span>Au moins un chiffre (0-9)</span>
      </div>
      <div
        class="text-xs flex items-center gap-2 transition-colors duration-200"
        [ngClass]="requirements().hasSymbol ? 'text-accent-dark font-medium' : 'text-text-muted'"
      >
        <span
          class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
          [ngClass]="requirements().hasSymbol ? 'bg-success scale-125' : 'bg-slate-300'"
        ></span>
        <span>Au moins un symbole spécial (!&#64;#$...)</span>
      </div>
    </div>

    @if (confirmPassword()) {
      <div class="flex items-center gap-1 text-xs mt-2">
        @if (passwordsMatch()) {
          <span class="text-success font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Les mots de passe correspondent.
          </span>
        } @else {
          <span class="text-error font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Les mots de passe ne correspondent pas.
          </span>
        }
      </div>
    }
  `
})
export class PasswordStrengthComponent {
  /** Valeur actuelle du mot de passe (signal du parent) */
  readonly password = input<string>('');

  /** Valeur actuelle de la confirmation du mot de passe (optionnelle) */
  readonly confirmPassword = input<string>('');

  /** Calcul des exigences du mot de passe */
  readonly requirements = computed<PasswordRequirements>(() => {
    const pwd = this.password();
    return {
      minLength: pwd.length >= 8,
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
    };
  });

  /** Pourcentage de validation du mot de passe */
  readonly strengthInfo = computed<PasswordStrengthInfo>(() => {
    const reqs = this.requirements();
    const met = [
      reqs.minLength,
      reqs.hasUpper,
      reqs.hasLower,
      reqs.hasNumber,
      reqs.hasSymbol
    ].filter(Boolean).length;
    const percent = met * 20;

    if (percent === 0) return { percent, label: 'Inexistant', class: 'strength-none' as const };
    if (percent <= 40) return { percent, label: 'Faible', class: 'strength-weak' as const };
    if (percent <= 80) return { percent, label: 'Moyen', class: 'strength-medium' as const };
    return { percent, label: 'Fort', class: 'strength-strong' as const };
  });

  /** Vérifie si les mots de passe saisis correspondent */
  readonly passwordsMatch = computed(() => {
    const pwd = this.password();
    const cpwd = this.confirmPassword();
    return pwd && cpwd && pwd === cpwd;
  });
}
