/**
 * Page de création d'un compte entreprise (inscription).
 * Formulaire complet avec validation, mapping des erreurs API 422 sur les champs,
 * et redirection automatique après succès.
 */

import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PasswordStrengthComponent } from '../../../shared/components/password-strength/password-strength.component';

/**
 * Validateur personnalisé pour vérifier que le mot de passe admin et sa confirmation correspondent.
 */
const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('admin_password');
  const confirmPassword = control.get('admin_password_confirmation');

  if (!password || !confirmPassword) return null;
  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, PasswordStrengthComponent],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.scss'
})
export class RegisterCompanyComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly passwordValue = signal<string>('');
  readonly confirmPasswordValue = signal<string>('');

  // Formulaire d'inscription (structure plate correspondant au payload backend)
  readonly registerForm = this.fb.nonNullable.group({
    // Section Entreprise
    company_name: ['', [Validators.required]],
    company_email: ['', [Validators.email]], // Optionnel, mais validé si rempli
    
    // Section Admin RH
    admin_first_name: ['', [Validators.required]],
    admin_last_name: ['', [Validators.required]],
    admin_email: ['', [Validators.required, Validators.email]],
    admin_password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/), // Une majuscule
      Validators.pattern(/[a-z]/), // Une minuscule
      Validators.pattern(/[0-9]/), // Un chiffre
      Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/) // Un caractère spécial
    ]],
    admin_password_confirmation: ['', [Validators.required]]
  }, { validators: [passwordMatchValidator] });


  // La logique de force du mot de passe est maintenant dans le composant partagé PasswordStrengthComponent

  /**
   * Initialise les écouteurs de changement pour les signaux de mot de passe (force en temps réel).
   */
  ngOnInit(): void {
    // Écoute des changements pour les signaux du mot de passe
    this.registerForm.controls.admin_password.valueChanges.subscribe(val => {
      this.passwordValue.set(val || '');
    });

    this.registerForm.controls.admin_password_confirmation.valueChanges.subscribe(val => {
      this.confirmPasswordValue.set(val || '');
    });
  }

  /**
   * Soumet le formulaire d'inscription à l'API. Gère les erreurs de validation 422 avec mapping par champ.
   */
  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    // On efface les éventuelles erreurs serveur précédentes sur les champs
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      if (control?.hasError('serverError')) {
          // On supprime l'erreur serverError sans toucher aux autres
          const errors = { ...control.errors };
          delete errors['serverError'];
          control.setErrors(Object.keys(errors).length ? errors : null);
      }
    });


    const payload = this.registerForm.getRawValue();

    this.authService.registerCompany(payload).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.successMessage.set("Votre entreprise a été créée avec succès ! Connexion en cours...");
        
        setTimeout(() => {
          const user = this.authService.currentUser();
          const role = user?.role || '';
          const redirectPath = this.authService.getRedirectPathForRole(role);
          this.router.navigate([redirectPath]);
        }, 1500);
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading.set(false);
        
        if (err.status === 422 && err.error?.errors) {
          // Mapping des erreurs de validation API sur les champs du formulaire Angular
          const apiErrors = err.error.errors;
          let firstErrorMessage: string | null = null;

          Object.keys(apiErrors).forEach(field => {
            const control = this.registerForm.get(field);
            const messages = apiErrors[field];
            
            if (messages && messages.length > 0) {
                if (!firstErrorMessage) firstErrorMessage = messages[0];
                
                if (control) {
                    control.setErrors({ serverError: messages[0] });
                    control.markAsTouched();
                }
            }
          });
          
          this.errorMessage.set(firstErrorMessage || "Veuillez corriger les erreurs dans le formulaire.");
        } else {
          this.errorMessage.set("Une erreur est survenue, réessayez plus tard.");
        }
      }
    });
  }

  /**
   * Helper pour déterminer si un champ spécifique est invalide
   */
  isFieldInvalid(fieldName: string): boolean {
    const control = this.registerForm.get(fieldName);
    if (!control) return false;
    
    // Cas spécial pour la confirmation du mot de passe
    if (fieldName === 'admin_password_confirmation') {
      return (control.invalid && (control.dirty || control.touched)) || 
             (this.registerForm.hasError('passwordMismatch') && control.touched);
    }

    return control.invalid && (control.dirty || control.touched);
  }
  
/**
   * Récupère le message d'erreur serveur d'un champ (mapping 422).
   * @param fieldName Nom du champ
   * @returns Message d'erreur ou null
   */
  getServerError(fieldName: string): string | null {
      const control = this.registerForm.get(fieldName);
      return control?.getError('serverError') || null;
  }
}
