import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../../../core/services/employee.service';
import { ImportResult } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employee-import',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-import.component.html',
  styleUrl: './employee-import.component.scss'
})
export class EmployeeImportComponent {
  private readonly employeeService = inject(EmployeeService);

  // ── État du composant ──────────────────────────────────────────
  readonly selectedFile = signal<File | null>(null);
  readonly isUploading = signal<boolean>(false);
  readonly importResult = signal<ImportResult | null>(null);
  readonly errorMessage = signal<string | null>(null);
  readonly frontendError = signal<string | null>(null);
  readonly isDragOver = signal<boolean>(false);

  // ── Helpers d'affichage ────────────────────────────────────────
  readonly fileLabel = (): string => {
    const file = this.selectedFile();
    if (!file) return 'Aucun fichier sélectionné';
    return file.name;
  };

  readonly fileSize = (): string => {
    const file = this.selectedFile();
    if (!file) return '';
    return this.formatFileSize(file.size);
  };

  private formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }

  // ── Téléchargement du modèle CSV ───────────────────────────────
  downloadTemplate(): void {
    const headers = 'first_name,last_name,email,role,job_title,department,hire_date,salary';
    const exampleRow = 'Ahmed,Bennani,ahmed@example.com,employe,Développeur,IT,15/03/2023,8000';
    const commentLine = '# first_name,last_name,email,role,job_title,department,hire_date,salary';
    const content = `${headers}\n${commentLine}\n${exampleRow}\n`;

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'modele_import_employes.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // ── Gestion du fichier (drag & drop + input file) ──────────────
  onFileSelected(event: Event): void {
    this.resetErrors();
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.validateAndSetFile(input.files[0]);
    // Reset input value pour permettre de re-sélectionner le même fichier
    input.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    this.resetErrors();

    if (!event.dataTransfer?.files || event.dataTransfer.files.length === 0) return;
    this.validateAndSetFile(event.dataTransfer.files[0]);
  }

  removeFile(): void {
    this.selectedFile.set(null);
    this.resetErrors();
  }

  private validateAndSetFile(file: File): void {
    this.frontendError.set(null);

    // Validation extension
    if (!file.name.toLowerCase().endsWith('.csv')) {
      this.frontendError.set('Seuls les fichiers au format .csv sont acceptés.');
      return;
    }

    // Validation taille max (10 Mo)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      this.frontendError.set(`Le fichier est trop volumineux (${this.formatFileSize(file.size)}). Taille maximale : 10 Mo.`);
      return;
    }

    this.selectedFile.set(file);
  }

  private resetErrors(): void {
    this.frontendError.set(null);
    this.errorMessage.set(null);
    this.importResult.set(null);
  }

  // ── Envoi du fichier à l'API ───────────────────────────────────
  onSubmit(): void {
    const file = this.selectedFile();
    if (!file) return;

    this.isUploading.set(true);
    this.errorMessage.set(null);
    this.importResult.set(null);

    this.employeeService.importEmployees(file).subscribe({
      next: (result) => {
        this.isUploading.set(false);
        this.importResult.set(result);
        // Vider la zone d'upload pour permettre un nouvel import
        this.selectedFile.set(null);
      },
      error: (err: HttpErrorResponse) => {
        this.isUploading.set(false);

        if (err.status === 422 && err.error?.errors?.file) {
          this.frontendError.set(err.error.errors.file.join(' '));
        } else if (err.status === 422 && err.error?.message) {
          this.frontendError.set(err.error.message);
        } else {
          this.errorMessage.set('Une erreur inattendue est survenue lors de l\'import. Veuillez réessayer.');
        }
      }
    });
  }

  // ── Réinitialisation ───────────────────────────────────────────
  resetImport(): void {
    this.selectedFile.set(null);
    this.importResult.set(null);
    this.errorMessage.set(null);
    this.frontendError.set(null);
  }
}
