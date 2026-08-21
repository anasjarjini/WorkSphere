import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';

@Component({
  selector: 'app-attendance-monthly-summary',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './attendance-monthly-summary.component.html',
})
export class AttendanceMonthlySummaryComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);

  readonly declarations = signal<any[]>([]);
  readonly loading = signal(false);
  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));

  readonly monthLabel = computed(() => {
    const [y, m] = this.currentMonth().split('-').map(Number);
    const d = new Date(y, m - 1, 1);
    return d.toLocaleDateString('fr', { month: 'long', year: 'numeric' });
  });

  readonly monthDeclarations = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    return this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
  });

  readonly summary = computed(() => {
    const decls = this.monthDeclarations();
    const present = decls.filter((d) => d.status === 'PRESENT');
    const totalDays = new Date(Number(this.currentMonth().split('-')[0]), Number(this.currentMonth().split('-')[1]), 0).getDate();
    return {
      daysPresent: present.length,
      daysAbsent: decls.filter((d) => d.status === 'ABSENT').length,
      pendingCount: decls.filter((d) => d.validation_status === 'EN_ATTENTE' as AttendanceValidationStatus).length,
      totalDays,
      presencePercent: totalDays > 0 ? Math.round((present.length / totalDays) * 100) : 0,
    };
  });

  readonly weeks = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const decls = this.monthDeclarations();
    const weeksData: { label: string; range: string; status: string; }[] = [];
    const firstDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0);
    let weekStart = new Date(firstDate);

    while (weekStart <= lastDate) {
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      if (weekEnd > lastDate) weekEnd.setDate(lastDate.getDate());

      const weekDecls = decls.filter((d) => {
        const dDate = new Date(d.date);
        return dDate >= weekStart && dDate <= weekEnd;
      });
      const pending = weekDecls.some((d) => d.validation_status === 'EN_ATTENTE' as AttendanceValidationStatus);
      const weekNum = Math.ceil((weekStart.getDate() + firstDate.getDay()) / 7);

      weeksData.push({
        label: `Semaine ${weekNum + (firstDate.getDay() > 0 ? 0 : 0)}`,
        range: `${weekStart.getDate()} ${weekStart.toLocaleDateString('fr', { month: 'short' })} - ${weekEnd.getDate()} ${weekEnd.toLocaleDateString('fr', { month: 'short' })}`,
        status: pending ? 'pending' : weekDecls.length > 0 ? 'validated' : 'empty',
      });

      weekStart.setDate(weekStart.getDate() + 7);
    }
    return weeksData;
  });

  readonly chartHeights = computed(() => {
    const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    return dayNames.map((_, i) => {
      const office = 30 + Math.sin(i * 1.2) * 30 + 10;
      return {
        height: office,
        type: i % 3 === 0 ? 'remote' as const : 'office' as const,
      };
    });
  });

  ngOnInit(): void {
    this.loadMonth();
  }

  private loadMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const dateFrom = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const dateTo = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    this.loading.set(true);
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => { this.declarations.set(decls); this.loading.set(false); },
      error: () => { this.loading.set(false); },
    });
  }

  previousMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const d = new Date(year, month - 2, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    this.loadMonth();
  }

  nextMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const d = new Date(year, month, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    this.loadMonth();
  }
}
