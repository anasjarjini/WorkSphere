import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { DailyDeclarationComponent } from '../daily-declaration/daily-declaration.component';

@Component({
  selector: 'app-employee-attendance',
  standalone: true,
  imports: [DatePipe, DailyDeclarationComponent],
  templateUrl: './employee-attendance.component.html',
})
export class EmployeeAttendancePageComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);

  readonly todayStr = new Date().toISOString().slice(0, 10);
  readonly declarations = signal<AttendanceDeclaration[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly currentMonth = signal<string>(new Date().toISOString().slice(0, 7));

  readonly monthDeclarations = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    return this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
  });

  readonly monthValidated = computed(() =>
    this.monthDeclarations().filter((d) => d.validation_status === 'VALIDEE' as AttendanceValidationStatus)
  );

  readonly daysPresent = computed(() =>
    this.monthValidated().filter((d) => d.status === 'PRESENT').length
  );

  readonly daysAbsent = computed(() =>
    this.monthDeclarations().filter((d) => d.status === 'ABSENT').length
  );

  readonly pendingCount = computed(() =>
    this.monthDeclarations().filter((d) => d.validation_status === 'EN_ATTENTE' as AttendanceValidationStatus).length
  );

  readonly rejectedDeclarations = computed(() =>
    this.monthDeclarations().filter((d) => d.validation_status === 'REJETEE' as AttendanceValidationStatus)
  );

  // Pagination
  readonly pageSize = 15;
  readonly currentPage = signal(1);

  readonly paginatedDeclarations = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.monthDeclarations().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.monthDeclarations().length / this.pageSize))
  );

  readonly correctionDate = signal<string | null>(null);
  readonly correctionStatus = signal<'PRESENT' | 'ABSENT'>('PRESENT');
  readonly correctionSaving = signal(false);
  readonly correctionError = signal<string | null>(null);

  ngOnInit(): void {
    this.loadMonth();
  }

  loadMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const dateFrom = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const dateTo = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    this.loading.set(true);
    this.error.set(null);
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (declarations) => {
        this.declarations.set(declarations);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du charvement des déclarations.');
      },
    });
  }

  previousMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const d = new Date(year, month - 2, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    this.currentPage.set(1);
    this.loadMonth();
  }

  nextMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const d = new Date(year, month, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    this.currentPage.set(1);
    this.loadMonth();
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  openCorrection(decl: AttendanceDeclaration): void {
    this.correctionDate.set(decl.date);
    this.correctionStatus.set(decl.status);
    this.correctionError.set(null);
  }

  closeCorrection(): void {
    this.correctionDate.set(null);
    this.correctionError.set(null);
  }

  submitCorrection(): void {
    const date = this.correctionDate();
    if (!date) return;

    this.correctionSaving.set(true);
    this.correctionError.set(null);

    this.attendanceService.declare({
      date,
      status: this.correctionStatus(),
    }).subscribe({
      next: () => {
        this.correctionSaving.set(false);
        this.closeCorrection();
        this.loadMonth();
      },
      error: (err) => {
        this.correctionSaving.set(false);
        this.correctionError.set(err.error?.message || 'Erreur lors de la correction.');
      },
    });
  }
}
