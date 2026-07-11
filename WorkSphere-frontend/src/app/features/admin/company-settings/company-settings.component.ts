/**
 * Page des paramètres de l'entreprise (Administrateur RH).
 * Permet de modifier le logo, le nom, l'email, le téléphone et l'adresse.
 */

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyService } from '../../../core/services/company.service';
import { Company } from '../../../core/models/company.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageUploaderComponent } from '../../../shared/components/image-uploader/image-uploader.component';
import { ImageUrlService } from '../../../core/services/image-url.service';

@Component({
  selector: 'app-company-settings',
  standalone: true,
  imports: [ReactiveFormsModule, ImageUploaderComponent],
  templateUrl: './company-settings.component.html',
})
export class CompanySettingsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly companyService = inject(CompanyService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly company = signal<Company | null>(null);
  readonly isLoading = signal(false);

  readonly isLogoUploading = signal(false);
  readonly logoSuccessMessage = signal<string | null>(null);
  readonly logoErrorMessage = signal<string | null>(null);

  readonly isFormSubmitting = signal(false);
  readonly formSuccessMessage = signal<string | null>(null);
  readonly formErrorMessage = signal<string | null>(null);

  readonly resolvedLogoUrl = computed(() => {
    const url = this.company()?.logo_url ?? null;
    if (!url) return null;
    return this.imageUrlService.resolve(url);
  });

  readonly companyForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phone: [''],
    address: ['']
  });

  /**
   * Charge les informations de l'entreprise au démarrage.
   */
  ngOnInit(): void {
    this.loadCompany();
  }

  private loadCompany(): void {
    this.isLoading.set(true);
    this.companyService.getCompany().subscribe({
      next: (response) => {
        this.company.set(response.company);
        this.companyForm.patchValue({
          name: response.company.name,
          email: response.company.email ?? '',
          phone: response.company.phone ?? '',
          address: response.company.address ?? ''
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.formErrorMessage.set('Impossible de charger les informations de l\'entreprise.');
      }
    });
  }

  /**
   * Gère la sélection d'un nouveau logo et appelle l'API d'upload.
   * @param file Fichier image sélectionné
   */
  onLogoSelected(file: File): void {
    this.isLogoUploading.set(true);
    this.logoSuccessMessage.set(null);
    this.logoErrorMessage.set(null);

    this.companyService.uploadLogo(file).subscribe({
      next: (response) => {
        this.isLogoUploading.set(false);
        this.logoSuccessMessage.set('Logo mis à jour avec succès.');
        // Mettre à jour l'affichage avec la nouvelle URL
        const updated = { ...(this.company() ?? {}), logo_url: response.logo_url } as Company;
        this.company.set(updated);
        this.companyService.setCompany(updated);
      },
      error: (err: HttpErrorResponse) => {
        this.isLogoUploading.set(false);
        if (err.status === 422 && err.error?.errors?.logo) {
          this.logoErrorMessage.set(err.error.errors.logo[0]);
        } else {
          this.logoErrorMessage.set('Une erreur est survenue lors de l\'upload du logo.');
        }
      }
    });
  }

  /**
   * Soumet le formulaire de mise à jour des informations de l'entreprise.
   */
  onSubmit(): void {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }

    this.isFormSubmitting.set(true);
    this.formSuccessMessage.set(null);
    this.formErrorMessage.set(null);

    const payload = this.companyForm.getRawValue();

    this.companyService.updateCompany(payload).subscribe({
      next: (response) => {
        this.isFormSubmitting.set(false);
        this.company.set(response.company);
        this.formSuccessMessage.set('Informations mises à jour avec succès.');
      },
      error: (err: HttpErrorResponse) => {
        this.isFormSubmitting.set(false);
        if (err.status === 422 && err.error?.errors) {
          const apiErrors = err.error.errors;
          let firstMessage: string | null = null;
          Object.keys(apiErrors).forEach(field => {
            const control = this.companyForm.get(field);
            const messages = apiErrors[field];
            if (messages && messages.length > 0) {
              if (!firstMessage) firstMessage = messages[0];
              if (control) {
                control.setErrors({ serverError: messages[0] });
                control.markAsTouched();
              }
            }
          });
          this.formErrorMessage.set(firstMessage || 'Veuillez corriger les erreurs dans le formulaire.');
        } else {
          this.formErrorMessage.set('Une erreur est survenue. Veuillez réessayer.');
        }
      }
    });
  }

  /**
   * Vérifie si un champ du formulaire est invalide.
   */
  isFieldInvalid(fieldName: string): boolean {
    const control = this.companyForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  /**
   * Récupère l'erreur serveur d'un champ (mapping 422).
   */
  getServerError(fieldName: string): string | null {
    const control = this.companyForm.get(fieldName);
    return control?.getError('serverError') || null;
  }
}
