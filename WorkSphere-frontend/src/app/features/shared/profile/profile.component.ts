import { Component, ElementRef, inject, computed, OnInit, signal, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { ProfileService } from '../../../core/services/profile.service';
import { ImageUrlService } from '../../../core/services/image-url.service';

 const ROLE_LABELS: Record<string, string> = {
  HR_ADMIN: 'Admin RH',
  MANAGER: 'Manager',
  EMPLOYEE: 'Employé',
};
 
const DEFAULT_ROLE_LABEL = 'Utilisateur';
 

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly profileService = inject(ProfileService);
  private readonly imageUrlService = inject(ImageUrlService);

  @ViewChild('avatarInput') private readonly avatarInput?: ElementRef<HTMLInputElement>;

  readonly user = this.authService.currentUser;

  readonly isAvatarUploading = signal(false);
  readonly avatarSuccessMessage = signal<string | null>(null);
  readonly avatarErrorMessage = signal<string | null>(null);

  readonly currentAvatarUrl = computed(() =>
    this.imageUrlService.resolve(this.user()?.avatar_url)
  );

  readonly roleName = computed(() => {
    const role = this.user()?.role;
    if (!role) return DEFAULT_ROLE_LABEL;
    return ROLE_LABELS[role] ?? role;
  });

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (response) => this.authService.currentUser.set(response.user),
      error: () => {
        this.avatarErrorMessage.set('Impossible de charger le profil.');
      },
    });
  }

  triggerAvatarUpload(): void {
    this.avatarInput?.nativeElement.click();
  }

  onAvatarFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.uploadAvatar(file);
    }
    // Permet de re-sélectionner le même fichier deux fois de suite
    input.value = '';
  }

  private uploadAvatar(file: File): void {
    this.isAvatarUploading.set(true);
    this.avatarSuccessMessage.set(null);
    this.avatarErrorMessage.set(null);

    this.profileService.uploadAvatar(file).subscribe({
      next: (response) => {
        this.isAvatarUploading.set(false);
        this.avatarSuccessMessage.set('Avatar mis à jour avec succès.');

        const current = this.authService.currentUser();
        if (current) {
          this.authService.currentUser.set({ ...current, avatar_url: response.avatar_url });
        }
      },
      error: (err: HttpErrorResponse) => {
        this.isAvatarUploading.set(false);
        this.avatarErrorMessage.set(this.resolveUploadErrorMessage(err));
      },
    });
  }

  private resolveUploadErrorMessage(err: HttpErrorResponse): string {
    if (err.status === 422 && err.error?.errors?.avatar?.[0]) {
      return err.error.errors.avatar[0];
    }
    return "Une erreur est survenue lors de l'upload de l'avatar.";
  }
}