/**
 * Page de réinitialisation du mot de passe.
 * Récupère token et email depuis l'URL, affiche le formulaire de nouveau mot de passe,
 * et redirige automatiquement vers la page de connexion après succès.
 */

import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
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
  imports: [ReactiveFormsModule, RouterModule, PasswordStrengthComponent],
  templateUrl: './reset-password.component.html'
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

  /**
   * Extrait token et email des queryParams de l'URL, initialise les écouteurs des mots de passe.
   */
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

  /**
   * Soumet le nouveau mot de passe avec le token et l'email.
   * En cas de succès, démarre un compte à rebours avant redirection vers /login.
   */
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

  /**
   * Démarre un compte à rebours de 3 secondes puis redirige vers la page de connexion.
   */
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

  /**
   * Vérifie si un champ est invalide (inclut l'erreur passwordMismatch pour la confirmation).
   */
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
