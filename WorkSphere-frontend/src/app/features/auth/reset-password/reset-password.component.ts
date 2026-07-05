import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PasswordStrengthComponent } from '../../../shared/components/password-strength/password-strength.component';

/**
 * Validateur personnalisé pour vérifier que le mot de passe et sa confirmation correspondent.
 */
const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('password_confirmation');

  if (!password || !confirmPassword) return null;
  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, PasswordStrengthComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 bg-background">
      <div class="bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-sm w-full max-w-md transition-all duration-200 hover:shadow-md">

        @if (!token() || !email()) {
          <!-- Erreur critique : token ou email manquant dans l'URL -->
          <div class="text-center flex flex-col items-center">
            <div class="w-16 h-16 bg-error-light text-error rounded-full flex items-center justify-center mb-6 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h2 class="font-heading text-xl font-semibold text-text-heading mb-3">Lien de réinitialisation invalide</h2>
            <p class="font-sans text-sm text-text-secondary leading-relaxed mb-8">
              Le lien que vous avez utilisé est incomplet ou invalide. Veuillez faire une nouvelle demande de réinitialisation.
            </p>
            <a
              routerLink="/forgot-password"
              class="w-full bg-primary text-text-inverse font-sans text-[0.9375rem] font-semibold px-6 py-3 rounded-md shadow-sm transition-all duration-200 hover:bg-primary-hover hover:shadow-md hover:-translate-y-px active:translate-y-0 active:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-center inline-block"
            >
              Demander un nouveau lien
            </a>
          </div>
        } @else if (successMessage()) {
          <!-- État succès : confirmation avec redirection automatique -->
          <div class="text-center flex flex-col items-center">
            <div class="w-16 h-16 bg-success-light text-success rounded-full flex items-center justify-center mb-6 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 class="font-heading text-xl font-semibold text-text-heading mb-3">Mot de passe réinitialisé</h2>
            <p class="font-sans text-sm text-text-secondary leading-relaxed mb-2">
              Votre mot de passe a été modifié avec succès.
            </p>
            <p class="font-sans text-xs text-text-muted mb-8">
              Vous allez être redirigé vers la page de connexion dans {{ countdown }} secondes...
            </p>
            <a
              routerLink="/login"
              class="font-sans text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-150 cursor-pointer"
            >
              Se connecter maintenant
            </a>
          </div>
        } @else {
          <!-- Formulaire de nouveau mot de passe -->
          <div class="text-center mb-8 flex flex-col items-center">
            <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1 class="font-heading text-2xl font-bold text-text-heading">Nouveau mot de passe</h1>
            <p class="font-sans text-sm text-text-secondary mt-1">
              Choisissez un mot de passe sécurisé pour votre compte
            </p>
          </div>

          @if (errorMessage()) {
            <div class="bg-error-light border border-error/20 rounded-md p-4 mb-6 flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-error shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span class="text-sm font-medium text-error-dark">{{ errorMessage() }}</span>
            </div>
          }

          <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
            <!-- Champ Nouveau Mot de passe -->
            <div class="flex flex-col gap-1.5">
              <label for="password" class="font-sans text-[0.8125rem] font-semibold uppercase tracking-wider text-text">Nouveau mot de passe</label>
              <input
                id="password"
                type="password"
                formControlName="password"
                placeholder="Saisissez un mot de passe fort"
                class="w-full px-4 py-3 bg-surface border rounded-md font-sans text-[0.9375rem] text-text transition-all duration-150 placeholder:text-text-muted placeholder:opacity-70 focus:outline-none focus:ring-2 disabled:bg-background-alt disabled:text-text-muted disabled:cursor-not-allowed"
                [class.border-border]="!isFieldInvalid('password')"
                [class.focus:border-border-focus]="!isFieldInvalid('password')"
                [class.focus:ring-primary/15]="!isFieldInvalid('password')"
                [class.border-error]="isFieldInvalid('password')"
                [class.focus:border-error]="isFieldInvalid('password')"
                [class.focus:ring-error/15]="isFieldInvalid('password')"
                autocomplete="new-password"
              />

              <!-- Indicateur de force du mot de passe (composant partagé) -->
              <app-password-strength
                [password]="passwordValue()"
                [confirmPassword]="confirmPasswordValue()"
              />
            </div>

            <!-- Champ Confirmation -->
            <div class="flex flex-col gap-1.5">
              <label for="password_confirmation" class="font-sans text-[0.8125rem] font-semibold uppercase tracking-wider text-text">Confirmez le mot de passe</label>
              <input
                id="password_confirmation"
                type="password"
                formControlName="password_confirmation"
                placeholder="Confirmez votre mot de passe"
                class="w-full px-4 py-3 bg-surface border rounded-md font-sans text-[0.9375rem] text-text transition-all duration-150 placeholder:text-text-muted placeholder:opacity-70 focus:outline-none focus:ring-2 disabled:bg-background-alt disabled:text-text-muted disabled:cursor-not-allowed"
                [class.border-border]="!isFieldInvalid('password_confirmation')"
                [class.focus:border-border-focus]="!isFieldInvalid('password_confirmation')"
                [class.focus:ring-primary/15]="!isFieldInvalid('password_confirmation')"
                [class.border-error]="isFieldInvalid('password_confirmation')"
                [class.focus:border-error]="isFieldInvalid('password_confirmation')"
                [class.focus:ring-error/15]="isFieldInvalid('password_confirmation')"
                autocomplete="new-password"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-accent text-text-inverse font-sans text-[0.9375rem] font-semibold px-6 py-3 rounded-md shadow-sm transition-all duration-200 hover:bg-accent-hover hover:shadow-md hover:-translate-y-px active:translate-y-0 active:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2"
              [disabled]="isLoading() || resetForm.invalid"
            >
              @if (isLoading()) {
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
                Réinitialisation en cours...
              } @else {
                Réinitialiser mon mot de passe
              }
            </button>
          </form>

          <div class="flex justify-center mt-6">
            <a routerLink="/login" class="font-sans text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-150 cursor-pointer">
              Retour à la connexion
            </a>
          </div>
        }
      </div>
    </div>
  `
})
export class ResetPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly token = signal<string | null>(null);
  readonly email = signal<string | null>(null);

  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly passwordValue = signal<string>('');
  readonly confirmPasswordValue = signal<string>('');

  readonly countdown = signal<number>(3);
  private countdownInterval: ReturnType<typeof setInterval> | null = null;

  readonly resetForm = this.fb.nonNullable.group({
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/),
      Validators.pattern(/[a-z]/),
      Validators.pattern(/[0-9]/),
      Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/)
    ]],
    password_confirmation: ['', [Validators.required]]
  }, { validators: [passwordMatchValidator] });

  ngOnInit(): void {
    const urlToken = this.route.snapshot.queryParamMap.get('token');
    const urlEmail = this.route.snapshot.queryParamMap.get('email');

    this.token.set(urlToken);
    this.email.set(urlEmail);

    // Suivre les changements de valeur pour le composant de force du mot de passe
    this.resetForm.controls.password.valueChanges.subscribe(val => {
      this.passwordValue.set(val || '');
    });

    this.resetForm.controls.password_confirmation.valueChanges.subscribe(val => {
      this.confirmPasswordValue.set(val || '');
    });
  }

  onSubmit(): void {
    const currentToken = this.token();
    const currentEmail = this.email();

    if (!currentToken || !currentEmail) {
      this.errorMessage.set("Opération impossible : token ou email manquant.");
      return;
    }

    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { password, password_confirmation } = this.resetForm.getRawValue();

    this.authService.resetPassword({
      token: currentToken,
      email: currentEmail,
      password,
      password_confirmation
    }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.successMessage.set("Votre mot de passe a été réinitialisé avec succès !");
        this.startCountdown();
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading.set(false);

        if (err.status === 400 || err.status === 422) {
          this.errorMessage.set(
            err.error?.message ||
            "Ce lien de réinitialisation est invalide ou a expiré. Veuillez faire une nouvelle demande."
          );
        } else if (err.status === 403) {
          this.errorMessage.set(
            err.error?.message ||
            "Ce compte n'est pas encore activé. Vérifiez votre email pour le lien d'activation initial."
          );
        } else if (err.status === 429) {
          this.errorMessage.set("Trop de tentatives. Veuillez réessayer dans une minute.");
        } else {
          this.errorMessage.set("Une erreur est survenue. Veuillez réessayer.");
        }
      }
    });
  }

  private startCountdown(): void {
    this.countdown.set(3);
    this.countdownInterval = setInterval(() => {
      this.countdown.update(val => val - 1);
      if (this.countdown() <= 0) {
        if (this.countdownInterval) {
          clearInterval(this.countdownInterval);
          this.countdownInterval = null;
        }
        this.router.navigate(['/login']);
      }
    }, 1000);
  }

  isFieldInvalid(fieldName: 'password' | 'password_confirmation'): boolean {
    const control = this.resetForm.get(fieldName);
    if (!control) return false;

    if (fieldName === 'password_confirmation') {
      return (control.invalid && (control.dirty || control.touched)) ||
             (this.resetForm.hasError('passwordMismatch') && control.touched);
    }

    return control.invalid && (control.dirty || control.touched);
  }
}
