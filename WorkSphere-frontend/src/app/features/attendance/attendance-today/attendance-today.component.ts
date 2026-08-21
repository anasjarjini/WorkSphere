import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DailyDeclarationComponent } from '../daily-declaration/daily-declaration.component';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';

@Component({
  selector: 'app-attendance-today',
  standalone: true,
  imports: [DailyDeclarationComponent],
  templateUrl: './attendance-today.component.html',
})
export class AttendanceTodayComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);

  readonly declarations = signal<any[]>([]);
  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));

  readonly summary = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const monthDecls = this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
    const present = monthDecls.filter((d) => d.status === 'PRESENT');
    return {
      daysPresent: present.length,
      daysAbsent: monthDecls.filter((d) => d.status === 'ABSENT').length,
      pendingCount: monthDecls.filter((d) => d.validation_status === 'EN_ATTENTE' as AttendanceValidationStatus).length,
      unjustified: monthDecls.filter((d) => d.status === 'ABSENT' && d.validation_status !== 'VALIDEE' as AttendanceValidationStatus).length,
    };
  });

  ngOnInit(): void {
    this.loadMonth();
  }

  private loadMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const dateFrom = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const dateTo = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => this.declarations.set(decls),
    });
  }
}
