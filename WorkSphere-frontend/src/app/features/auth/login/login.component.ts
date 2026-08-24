/**
 * Page de connexion (login).
 * Formulaire email/mot de passe avec gestion des erreurs API (401, 403)
 * et redirection vers le dashboard adapté au rôle.
 */

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  readonly loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  /**
   * Soumet le formulaire d'authentification
   */
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        // Debug: log API response and computed redirect to help diagnose why
        // the app might remain on the login page despite a stored token.


        const user = this.authService.currentUser();
        const role = user?.role || '';
        const redirectPath = this.authService.getRedirectPathForRole(role);
        // Use window.location.href instead of this.router.navigate
        // to force a full Angular bootstrap on the new route.
        // This bypasses any strict timing issues with guards and signals
        // that could cancel the navigation right after login.
        window.location.href = redirectPath;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading.set(false);
        
        if (err.status === 401) {
          this.errorMessage.set('Identifiants invalides.');
        } else if (err.status === 403) {
          // Message précis renvoyé par l'API pour un compte inactif
          const apiMessage = err.error?.message || "Votre compte n'est pas encore activé.";
          this.errorMessage.set(apiMessage);
        } else {
          this.errorMessage.set('Une erreur inattendue est survenue. Veuillez réessayer.');
        }
      }
    });
  }

  /**
   * Vérifie si un champ est invalide pour afficher les messages d'erreur.
   * @param fieldName Nom du champ à vérifier
   * @returns true si le champ est invalide et a été touché
   */
  isFieldInvalid(fieldName: 'email' | 'password'): boolean {
    const control = this.loginForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
