import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 bg-background">
      <div class="bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-sm w-full max-w-md transition-all duration-200 hover:shadow-md">

        @if (!submitted()) {
          <!-- État initial : formulaire -->
          <div class="text-center mb-8 flex flex-col items-center">
            <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1 class="font-heading text-2xl font-bold text-text-heading">Mot de passe oublié</h1>
            <p class="font-sans text-sm text-text-secondary mt-1">
              Saisissez votre adresse email pour recevoir un lien de réinitialisation
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

          <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
            <div class="flex flex-col gap-1.5">
              <label for="email" class="font-sans text-[0.8125rem] font-semibold uppercase tracking-wider text-text">Adresse Email</label>
              <input
                id="email"
                type="email"
                formControlName="email"
                placeholder="nom@entreprise.com"
                class="w-full px-4 py-3 bg-surface border rounded-md font-sans text-[0.9375rem] text-text transition-all duration-150 placeholder:text-text-muted placeholder:opacity-70 focus:outline-none focus:ring-2 disabled:bg-background-alt disabled:text-text-muted disabled:cursor-not-allowed"
                [class.border-border]="!isFieldInvalid('email')"
                [class.focus:border-border-focus]="!isFieldInvalid('email')"
                [class.focus:ring-primary/15]="!isFieldInvalid('email')"
                [class.border-error]="isFieldInvalid('email')"
                [class.focus:border-error]="isFieldInvalid('email')"
                [class.focus:ring-error/15]="isFieldInvalid('email')"
                autocomplete="email"
              />
              @if (isFieldInvalid('email')) {
                <span class="text-xs font-medium text-error-dark mt-1 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Veuillez saisir une adresse email valide.
                </span>
              }
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-text-inverse font-sans text-[0.9375rem] font-semibold px-6 py-3 rounded-md shadow-sm transition-all duration-200 hover:bg-primary-hover hover:shadow-md hover:-translate-y-px active:translate-y-0 active:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2"
              [disabled]="isLoading() || forgotForm.invalid"
            >
              @if (isLoading()) {
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
                Envoi en cours...
              } @else {
                Envoyer le lien
              }
            </button>
          </form>
        } @else {
          <!-- État succès : confirmation avec icône -->
          <div class="text-center flex flex-col items-center">
            <div class="w-16 h-16 bg-success-light text-success rounded-full flex items-center justify-center mb-6 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 class="font-heading text-xl font-semibold text-text-heading mb-3">Email envoyé</h2>
            <p class="font-sans text-sm text-text-secondary leading-relaxed mb-6">
              Si un compte existe avec cette adresse email, vous recevrez un lien de réinitialisation de mot de passe sous quelques minutes.
            </p>
            <p class="font-sans text-xs text-text-muted mb-8">
              Pensez à vérifier vos spams si vous ne trouvez pas l'email.
            </p>
            <a
              routerLink="/login"
              class="font-sans text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-150 cursor-pointer"
            >
              Retour à la connexion
            </a>
          </div>
        }

        @if (!submitted()) {
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
export class ForgotPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly submitted = signal<boolean>(false);

  readonly forgotForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit(): void {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { email } = this.forgotForm.getRawValue();

    this.authService.forgotPassword(email).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.submitted.set(true);
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading.set(false);
        if (err.status === 422) {
          const errors = err.error?.errors;
          if (errors && typeof errors === 'object') {
            const firstKey = Object.keys(errors)[0];
            const messages = errors[firstKey];
            if (Array.isArray(messages) && messages.length > 0) {
              this.errorMessage.set(messages[0]);
              return;
            }
          }
        } else if (err.status === 429) {
          this.errorMessage.set('Trop de tentatives. Veuillez réessayer dans une minute.');
          return;
        }
        // Comme l'API retourne toujours 200 (même pour email inexistant),
        // une erreur ici est technique ou due au rate limiting.
        // On affiche quand même succès pour ne pas révéler d'info.
        this.isLoading.set(false);
        this.submitted.set(true);
      }
    });
  }

  isFieldInvalid(fieldName: 'email'): boolean {
    const control = this.forgotForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
