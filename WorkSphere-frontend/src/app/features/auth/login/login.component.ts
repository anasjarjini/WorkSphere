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

  // Signaux pour gérer le chargement et les erreurs d'API
  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  // Formulaire Réactif de Connexion
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
      next: () => {
        this.isLoading.set(false);
        const user = this.authService.currentUser();
        const role = user?.roles && user.roles.length > 0 ? user.roles[0].name : '';
        const redirectPath = this.authService.getRedirectPathForRole(role);
        this.router.navigate([redirectPath]);
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

  // Helpers pour l'affichage des erreurs de validation dans le HTML
  isFieldInvalid(fieldName: 'email' | 'password'): boolean {
    const control = this.loginForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
