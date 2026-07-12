/**
 * Composant d'indicateur de force de mot de passe.
 * Affiche une barre de progression, les exigences remplies/restantes,
 * et une vérification de confirmation si fournie.
 */

import { Component, computed, input, Signal } from '@angular/core';


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
  imports: [],
  templateUrl: './password-strength.component.html'
})
export class PasswordStrengthComponent {
  readonly password = input<string>('');
  readonly confirmPassword = input<string>('');

  readonly requirements = computed<PasswordRequirements>(() => {
    const pwd = this.password();
    return {
      minLength: pwd.length >= 8,
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSymbol: /[^A-Za-z0-9]/.test(pwd)
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

  /**
   * Vérifie si les mots de passe saisis correspondent.
   */
  readonly passwordsMatch = computed(() => {
    const pwd = this.password();
    const cpwd = this.confirmPassword();
    return pwd && cpwd && pwd === cpwd;
  });
}
