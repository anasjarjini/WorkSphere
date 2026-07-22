import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../../../core/services/employee.service';
import { ImportResult } from '../../../core/models/employee.model';

interface CsvHeader {
  name: string;
  mappedField: string;
  sampleValue: string;
}

const WORKSPHERE_FIELDS = [
  { value: 'skip', label: '— Ignorer' },
  { value: 'first_name', label: 'Prénom' },
  { value: 'last_name', label: 'Nom' },
  { value: 'email', label: 'Email' },
  { value: 'role', label: 'Rôle (MANAGER/EMPLOYEE)' },
  { value: 'job_title', label: 'Poste' },
  { value: 'department_id', label: 'Département' },
  { value: 'hire_date', label: "Date d'embauche" },
  { value: 'salary', label: 'Salaire' },
  { value: 'phone', label: 'Téléphone' },
  { value: 'address', label: 'Adresse' },
  { value: 'birth_date', label: 'Date de naissance' },
  { value: 'contract_type', label: 'Type de contrat' },
];

const KNOWN_MAPPINGS: Record<string, string> = {
  'full name': 'first_name',
  'first name': 'first_name',
  'first_name': 'first_name',
  'last name': 'last_name',
  'last_name': 'last_name',
  'email': 'email',
  'e-mail': 'email',
  'contact email': 'email',
  'contact_email': 'email',
  'role': 'role',
  'job title': 'job_title',
  'job_title': 'job_title',
  'position': 'job_title',
  'department': 'department_id',
  'dept': 'department_id',
  'dept. code': 'department_id',
  'dept code': 'department_id',
  'department code': 'department_id',
  'department_code': 'department_id',
  'hire date': 'hire_date',
  'hire_date': 'hire_date',
  'joining date': 'hire_date',
  'start date': 'hire_date',
  'salary': 'salary',
  'monthly salary': 'salary',
  'annual salary': 'salary',
  'phone': 'phone',
  'telephone': 'phone',
  'address': 'address',
  'birth date': 'birth_date',
  'birth_date': 'birth_date',
  'date of birth': 'birth_date',
  'contract type': 'contract_type',
  'contract_type': 'contract_type',
};

@Component({
  selector: 'app-employee-import',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './employee-import.component.html',
  styleUrl: './employee-import.component.scss'
})
export class EmployeeImportComponent {
  private readonly employeeService = inject(EmployeeService);

  readonly currentStep = signal<number>(1);
  readonly selectedFile = signal<File | null>(null);
  readonly isUploading = signal<boolean>(false);
  readonly importResult = signal<ImportResult | null>(null);
  readonly errorMessage = signal<string | null>(null);
  readonly frontendError = signal<string | null>(null);
  readonly isDragOver = signal<boolean>(false);
  readonly csvHeaders = signal<CsvHeader[]>([]);

  readonly stepClass = (step: number): string => {
    const current = this.currentStep();
    if (step < current) return 'bg-success text-text-inverse';
    if (step === current) return 'bg-primary text-text-inverse';
    return 'bg-background-alt text-text-muted';
  };

  readonly stepLabelClass = (step: number): string => {
    const current = this.currentStep();
    if (step <= current) return 'text-primary';
    return 'text-text-muted';
  };

  readonly stepLineClass = (step: number): string => {
    if (step < this.currentStep()) return 'bg-primary';
    return 'bg-border';
  };

  protected readonly fields = WORKSPHERE_FIELDS;

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

  goToNextStep(): void {
    if (this.currentStep() === 1 && this.csvHeaders().length > 0) {
      this.currentStep.set(2);
    } else if (this.currentStep() === 2) {
      this.onSubmit();
    }
  }

  goToPrevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  updateMapping(index: number, field: string): void {
    this.csvHeaders.update(headers =>
      headers.map((h, i) => i === index ? { ...h, mappedField: field } : h)
    );
  }

  downloadTemplate(): void {
    const headers = 'first_name,last_name,email,role,job_title,department,hire_date,salary';
    const exampleRow = 'Ahmed,Bennani,ahmed@example.com,EMPLOYEE,Développeur,IT,15/03/2023,8000';
    const content = `${headers}\n${exampleRow}\n`;

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

  onFileSelected(event: Event): void {
    this.resetErrors();
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.validateAndSetFile(input.files[0]);
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
    this.csvHeaders.set([]);
    this.resetErrors();
  }

  triggerFileInput(): void {
    const input = document.querySelector<HTMLInputElement>('input[type="file"]');
    input?.click();
  }

  private validateAndSetFile(file: File): void {
    this.frontendError.set(null);

    if (!file.name.toLowerCase().endsWith('.csv')) {
      this.frontendError.set('Seuls les fichiers au format .csv sont acceptés.');
      return;
    }

    const maxSize = 20 * 1024 * 1024;
    if (file.size > maxSize) {
      this.frontendError.set(`Le fichier est trop volumineux (${this.formatFileSize(file.size)}). Taille maximale : 20 Mo.`);
      return;
    }

    this.selectedFile.set(file);
    this.parseCsvHeaders(file);
  }

  private parseCsvHeaders(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const lines = text.split('\n').filter(l => l.trim() && !l.startsWith('#'));
      if (lines.length === 0) return;

      const headerLine = lines[0];
      const headers = headerLine.split(',').map(h => h.trim().replace(/^"|"$/g, ''));
      const sampleLine = lines.length > 1 ? lines[1] : '';
      const sampleValues = sampleLine.split(',').map(v => v.trim().replace(/^"|"$/g, ''));

      const mapped: CsvHeader[] = headers.map((name, i) => ({
        name,
        mappedField: KNOWN_MAPPINGS[name.toLowerCase()] || 'skip',
        sampleValue: sampleValues[i] || '',
      }));

      this.csvHeaders.set(mapped);
      this.currentStep.set(1);
    };
    reader.readAsText(file, 'UTF-8');
  }

  private resetErrors(): void {
    this.frontendError.set(null);
    this.errorMessage.set(null);
    this.importResult.set(null);
  }

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
        this.currentStep.set(3);
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

  resetImport(): void {
    this.selectedFile.set(null);
    this.importResult.set(null);
    this.errorMessage.set(null);
    this.frontendError.set(null);
    this.csvHeaders.set([]);
    this.currentStep.set(1);
  }
}
