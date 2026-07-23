import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  templateUrl: './file-uploader.component.html'
})
export class FileUploaderComponent {
  readonly accept = input<string>('*');
  readonly maxSizeMB = input<number>(10);
  readonly label = input<string>('Fichier');
  readonly fileSelected = output<File>();

  readonly isDragOver = signal(false);
  readonly selectedFile = signal<File | null>(null);
  readonly errorMessage = signal<string | null>(null);

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }

  onDragLeave(): void {
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) this.validateAndEmit(file);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.validateAndEmit(file);
    input.value = '';
  }

  clear(): void {
    this.selectedFile.set(null);
    this.errorMessage.set(null);
  }

  private validateAndEmit(file: File): void {
    this.errorMessage.set(null);
    const maxBytes = this.maxSizeMB() * 1024 * 1024;
    if (file.size > maxBytes) {
      this.errorMessage.set(`Le fichier ne peut pas dépasser ${this.maxSizeMB()} Mo.`);
      return;
    }
    this.selectedFile.set(file);
    this.fileSelected.emit(file);
  }

  protected formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }
}
