import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AbsenceService } from '../../../core/services/absence.service';
import { AuthService } from '../../../core/services/auth.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';
import { TeamAttendanceApprovalComponent } from '../team-approval/team-approval.component';
import { AttendanceStatusBadgeComponent } from '../attendance-status-badge/attendance-status-badge.component';

@Component({
  selector: 'app-admin-attendance',
  standalone: true,
  imports: [DatePipe, DecimalPipe, FormsModule, TeamAttendanceApprovalComponent, AttendanceStatusBadgeComponent],
  templateUrl: './admin-attendance.component.html',
})
export class AdminAttendancePageComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);
  private readonly absenceService = inject(AbsenceService);
  readonly authService = inject(AuthService);

  readonly todayStr = new Date().toISOString().slice(0, 10);
  readonly allEmployees = signal<Employee[]>([]);
  readonly todayDeclarations = signal<AttendanceDeclaration[]>([]);
  readonly monthDeclarations = signal<AttendanceDeclaration[]>([]);
  readonly onLeaveIds = signal<Set<number>>(new Set());
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));

  readonly filteredMonthDeclarations = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    return this.monthDeclarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
  });

  readonly companyMonthSummary = computed(() => {
    const employees = this.allEmployees();
    const decls = this.filteredMonthDeclarations();
    return employees.map((e) => {
      const userDecls = decls.filter((d) => d.user_id === e.id);
      const validated = userDecls.filter((d) => d.validation_status === 'VALIDEE' as AttendanceValidationStatus);
      return {
        employee: e,
        presentDays: validated.filter((d) => d.status === 'PRESENT').length,
        absentDays: userDecls.filter((d) => d.status === 'ABSENT').length,
        totalHours: validated.reduce((sum, d) => sum + (d.hours_worked ?? 0), 0),
      };
    });
  });

  readonly companyMonthTotal = computed(() => {
    const rows = this.companyMonthSummary();
    return {
      presentDays: rows.reduce((s, r) => s + r.presentDays, 0),
      absentDays: rows.reduce((s, r) => s + r.absentDays, 0),
      totalHours: rows.reduce((s, r) => s + r.totalHours, 0),
    };
  });

  readonly historyEmployeeFilter = signal<number | null>(null);
  readonly pageSize = 15;
  readonly currentPage = signal(1);

  readonly filteredHistory = computed(() => {
    let list = this.filteredMonthDeclarations();
    const empFilter = this.historyEmployeeFilter();
    if (empFilter) list = list.filter((d) => d.user_id === empFilter);
    return list;
  });

  readonly paginatedHistory = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredHistory().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredHistory().length / this.pageSize))
  );

  readonly companyTodayStatus = computed(() => {
    const employees = this.allEmployees();
    const today = this.todayStr;
    const todayDecls = this.todayDeclarations();
    const onLeave = this.onLeaveIds();
    return employees.map((e) => ({
      employee: e,
      declaration: todayDecls.find((d) => d.user_id === e.id) ?? null,
      isOnLeave: onLeave.has(e.id),
    }));
  });

  ngOnInit(): void {
    this.loadEmployees();
    this.loadToday();
    this.loadMonth();
    this.loadLeaves();
  }

  private loadLeaves(): void {
    this.absenceService.getOnLeaveToday(this.todayStr).subscribe({
      next: (ids) => this.onLeaveIds.set(new Set(ids)),
    });
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees({ per_page: 1000 }).subscribe({
      next: (res) => {
        this.allEmployees.set(res.data);
      },
    });
  }

  private loadToday(): void {
    this.attendanceService.getDeclarations({ date: this.todayStr }).subscribe({
      next: (declarations) => this.todayDeclarations.set(declarations),
    });
  }

  private loadMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const dateFrom = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const dateTo = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    this.loading.set(true);
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (declarations) => {
        this.monthDeclarations.set(declarations);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement des déclarations.');
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

  filterByEmployee(userId: number | null): void {
    this.historyEmployeeFilter.set(userId);
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  exportCsv(): void {
    const rows = this.filteredMonthDeclarations()
      .filter((d) => d.validation_status === 'VALIDEE' as AttendanceValidationStatus)
      .map((d) => {
        const emp = this.allEmployees().find((e) => e.id === d.user_id);
        return {
          employe: emp ? `${emp.first_name} ${emp.last_name}` : `#${d.user_id}`,
          date: d.date,
          statut: d.status === 'PRESENT' ? 'Présent' : 'Absent',
          heures: d.hours_worked?.toFixed(2) ?? '',
        };
      });

    const header = 'Employé,Date,Statut,Heures';
    const csv = [header, ...rows.map((r) => `${r.employe},${r.date},${r.statut},${r.heures}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `presences_company_${this.currentMonth()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
