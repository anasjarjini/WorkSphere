/**
 * Page "Mot de passe oublié" – envoi d'un email de réinitialisation.
 * Affiche un formulaire email puis un écran de confirmation après soumission.
 * Ne révèle pas si l'email existe (sécurité).
 */

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html'
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

  /**
   * Soumet l'email pour recevoir le lien de réinitialisation.
   * En cas d'erreur, affiche quand même succès pour ne pas révéler l'existence du compte.
   */
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

  /**
   * Vérifie si le champ email est invalide.
   */
  isFieldInvalid(fieldName: 'email'): boolean {
    const control = this.forgotForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
