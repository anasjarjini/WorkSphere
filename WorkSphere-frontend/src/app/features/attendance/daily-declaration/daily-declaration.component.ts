import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { AbsenceService } from '../../../core/services/absence.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';

@Component({
  selector: 'app-daily-declaration',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './daily-declaration.component.html',
})
export class DailyDeclarationComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly absenceService = inject(AbsenceService);

  readonly today = new Date().toISOString().slice(0, 10);
  readonly isPresent = signal(true);
  readonly saving = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly onApprovedLeave = signal(false);
  readonly leaveLoading = signal(true);

  readonly declaration = signal<AttendanceDeclaration | null>(null);
  readonly isLocked = computed(() =>
    this.declaration()?.validation_status === ('VALIDEE' as AttendanceValidationStatus)
  );
  readonly badgeClass = computed(() => {
    const status = this.declaration()?.validation_status;
    if (status === ('VALIDEE' as AttendanceValidationStatus)) return 'badge-validated';
    if (status === ('REJETEE' as AttendanceValidationStatus)) return 'badge-rejected';
    if (status === ('EN_ATTENTE' as AttendanceValidationStatus)) return 'badge-pending';
    return '';
  });
  readonly badgeLabel = computed(() => {
    const status = this.declaration()?.validation_status;
    if (status === ('VALIDEE' as AttendanceValidationStatus)) return 'Validée';
    if (status === ('REJETEE' as AttendanceValidationStatus)) return 'Rejetée';
    if (status === ('EN_ATTENTE' as AttendanceValidationStatus)) return 'En attente';
    return '';
  });

  ngOnInit(): void {
    this.checkApprovedLeave();
    this.loadTodayDeclaration();
  }

  private checkApprovedLeave(): void {
    this.absenceService.isOnLeave(this.today).subscribe({
      next: (res) => {
        this.onApprovedLeave.set(res.is_on_leave);
        this.leaveLoading.set(false);
      },
      error: () => this.leaveLoading.set(false),
    });
  }

  private loadTodayDeclaration(): void {
    this.attendanceService.getDeclarations({ date: this.today }).subscribe({
      next: (declarations) => {
        if (declarations.length > 0) {
          const decl = declarations[0];
          this.declaration.set(decl);
          this.isPresent.set(decl.status === 'PRESENT');
        }
      },
    });
  }

  onSubmit(): void {
    if (this.isLocked()) return;

    this.error.set(null);
    this.success.set(null);

    this.saving.set(true);
    this.attendanceService.declare({
      date: this.today,
      status: this.isPresent() ? 'PRESENT' : 'ABSENT',
    }).subscribe({
      next: (decl) => {
        this.declaration.set(decl);
        this.success.set('Déclaration enregistrée.');
        this.saving.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Erreur lors de l\'enregistrement.');
        this.saving.set(false);
      },
    });
  }
}
