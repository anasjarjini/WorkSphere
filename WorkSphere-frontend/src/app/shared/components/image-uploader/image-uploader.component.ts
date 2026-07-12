/**
 * Composant d'upload d'image avec glisser-déposer (drag & drop),
 * preview locale, validation de format/taille, et support des shapes cercle/carré.
 */

import { Component, input, output, signal, effect, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent implements OnDestroy {
  readonly currentImageUrl = input<string | null>(null);
  readonly shape = input<'circle' | 'square'>('square');
  readonly maxSizeMB = input<number>(2);
  readonly fileSelected = output<File>();

  readonly isDragOver = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly previewUrl = signal<string | null>(null);

  /** Stocke l'URL de l'objet pour la nettoyer dans OnDestroy */
  private currentObjectUrl: string | null = null;

  constructor() {
    effect(() => {
      // Quand le parent met à jour currentImageUrl (upload réussi), on efface la preview locale
      if (this.currentImageUrl() && this.previewUrl()) {
        this.clearPreview();
      }
    });
  }

  private maxSizeBytes(): number {
    return this.maxSizeMB() * 1024 * 1024;
  }

  /**
   * Nettoie l'URL de l'objet pour éviter les fuites mémoire.
   */
  ngOnDestroy(): void {
    this.revokeObjectUrl();
  }

  private clearPreview(): void {
    this.revokeObjectUrl();
    this.previewUrl.set(null);
  }

  private revokeObjectUrl(): void {
    if (this.currentObjectUrl) {
      URL.revokeObjectURL(this.currentObjectUrl);
      this.currentObjectUrl = null;
    }
  }

  /**
   * Gère le survol d'un élément glissé (drag over) pour l'effet visuel.
   */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }

  onDragLeave(): void {
    this.isDragOver.set(false);
  }

  /**
   * Gère le dépôt d'un fichier par glisser-déposer.
   */
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.validateAndEmit(file);
    }
  }

  /**
   * Gère la sélection d'un fichier via le bouton de l'input file.
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.validateAndEmit(file);
    }
    // Reset input so the same file can be re-selected
    input.value = '';
  }

  /**
   * Valide le format MIME et la taille du fichier, puis crée une preview locale et émet le fichier.
   * @param file Fichier sélectionné par l'utilisateur
   */
  private validateAndEmit(file: File): void {
    this.errorMessage.set(null);

    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      this.errorMessage.set('Format non accepté. Utilisez JPG, JPEG ou PNG.');
      return;
    }

    if (file.size > this.maxSizeBytes()) {
      this.errorMessage.set(`Le fichier ne peut pas dépasser ${this.maxSizeMB()} Mo.`);
      return;
    }

    this.revokeObjectUrl();
    this.currentObjectUrl = URL.createObjectURL(file);
    this.previewUrl.set(this.currentObjectUrl);

    this.fileSelected.emit(file);
  }
}
