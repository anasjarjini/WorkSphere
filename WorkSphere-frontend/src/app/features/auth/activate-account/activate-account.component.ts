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
  selector: 'app-activate-account',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, PasswordStrengthComponent],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  // Jetons d'état
  readonly token = signal<string | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  // Signaux pour la saisie utilisateur (permet d'afficher la validation en temps réel)
  readonly passwordValue = signal<string>('');
  readonly confirmPasswordValue = signal<string>('');

  // Formulaire d'activation
  readonly activateForm = this.fb.nonNullable.group({
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/), // Une majuscule
      Validators.pattern(/[a-z]/), // Une minuscule
      Validators.pattern(/[0-9]/), // Un chiffre
      Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/) // Un caractère spécial
    ]],
    password_confirmation: ['', [Validators.required]]
  }, { validators: [passwordMatchValidator] });

  ngOnInit(): void {
    // Récupérer le token depuis l'URL /activate?token=xxx
    const urlToken = this.route.snapshot.queryParamMap.get('token');
    this.token.set(urlToken);

    if (!urlToken) {
      this.errorMessage.set("Le token d'activation est manquant dans l'URL. Veuillez utiliser le lien fourni dans l'email d'invitation.");
      return;
    }

    // Suivre les changements de valeur pour les calculs de force en temps réel
    this.activateForm.controls.password.valueChanges.subscribe(val => {
      this.passwordValue.set(val || '');
    });

    this.activateForm.controls.password_confirmation.valueChanges.subscribe(val => {
      this.confirmPasswordValue.set(val || '');
    });
  }

  onSubmit(): void {
    const currentToken = this.token();
    if (!currentToken) {
      this.errorMessage.set("Opération impossible : aucun token d'activation présent.");
      return;
    }

    if (this.activateForm.invalid) {
      this.activateForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    const { password, password_confirmation } = this.activateForm.getRawValue();

    this.authService.activateAccount(currentToken, password, password_confirmation).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.successMessage.set("Votre compte a été activé avec succès ! Connexion automatique...");
        
        // Redirection temporisée après 2 secondes pour laisser le temps de lire le message
        setTimeout(() => {
          const user = this.authService.currentUser();
          const role = user?.roles && user.roles.length > 0 ? user.roles[0].name : '';
          const redirectPath = this.authService.getRedirectPathForRole(role);
          this.router.navigate([redirectPath]);
        }, 2000);
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading.set(false);
        
        if (err.status === 410) {
          // Token expiré ou déjà utilisé
          this.errorMessage.set(err.error?.message || "Le lien d'activation a expiré ou a déjà été utilisé.");
        } else if (err.status === 422) {
          // Erreur de validation backend
          const errors = err.error?.errors;
          if (errors && typeof errors === 'object') {
            const firstErrKey = Object.keys(errors)[0];
            const messages = errors[firstErrKey];
            if (Array.isArray(messages) && messages.length > 0) {
              this.errorMessage.set(messages[0]);
              return;
            }
          }
          this.errorMessage.set(err.error?.message || "Erreurs de validation détectées.");
        } else {
          this.errorMessage.set("Une erreur est survenue lors de l'activation. Veuillez contacter votre administrateur.");
        }
      }
    });
  }

  isFieldInvalid(fieldName: 'password' | 'password_confirmation'): boolean {
    const control = this.activateForm.get(fieldName);
    if (!control) return false;
    
    // Pour la confirmation, on vérifie aussi l'erreur au niveau du groupe
    if (fieldName === 'password_confirmation') {
      return (control.invalid && (control.dirty || control.touched)) || 
             (this.activateForm.hasError('passwordMismatch') && control.touched);
    }

    return control.invalid && (control.dirty || control.touched);
  }
}
