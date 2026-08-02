import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';

interface SummaryRow {
  employee: Employee;
  presentDays: number;
  absentDays: number;
  totalHours: number;
}

@Component({
  selector: 'app-hr-attendance-monthly',
  standalone: true,
  imports: [DecimalPipe, DatePipe],
  templateUrl: './hr-attendance-monthly.component.html',
})
export class HrAttendanceMonthlyComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);

  readonly allEmployees = signal<Employee[]>([]);
  readonly declarations = signal<any[]>([]);
  readonly loading = signal(false);
  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));

  readonly monthDeclarations = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    return this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
  });

  readonly summary = computed(() => {
    const monthDecls = this.monthDeclarations();
    return this.allEmployees().map((e) => {
      const userDecls = monthDecls.filter((d) => d.user_id === e.id);
      const validated = userDecls.filter((d) => d.validation_status === 'VALIDEE' as AttendanceValidationStatus);
      return {
        employee: e,
        presentDays: validated.filter((d) => d.status === 'PRESENT').length,
        absentDays: userDecls.filter((d) => d.status === 'ABSENT').length,
        totalHours: validated.reduce((sum: number, d: any) => sum + (d.hours_worked ?? 0), 0),
      };
    });
  });

  readonly totals = computed(() => ({
    presentDays: this.summary().reduce((s, r) => s + r.presentDays, 0),
    absentDays: this.summary().reduce((s, r) => s + r.absentDays, 0),
    totalHours: this.summary().reduce((s, r) => s + r.totalHours, 0),
  }));

  readonly departments = computed(() => {
    const map = new Map<number, { name: string; rows: SummaryRow[] }>();
    this.summary().forEach((row) => {
      const deptId = row.employee.department?.id ?? 0;
      if (!map.has(deptId)) map.set(deptId, { name: row.employee.department?.name ?? 'Sans département', rows: [] });
      map.get(deptId)!.rows.push(row);
    });
    return Array.from(map.values()).map((g) => {
      const total = g.rows.length;
      const presentDays = g.rows.reduce((s, r) => s + r.presentDays, 0);
      const absentDays = g.rows.reduce((s, r) => s + r.absentDays, 0);
      const workedDays = presentDays + absentDays;
      const avgPresent = total ? presentDays / total : 0;
      const conformity = workedDays > 0 ? Math.round((presentDays / workedDays) * 100) : 0;
      return {
        name: g.name,
        size: total,
        avgPresent: Math.round(avgPresent * 10) / 10,
        conformity,
        totalHours: g.rows.reduce((s, r) => s + r.totalHours, 0),
      };
    });
  });

  readonly overallConformity = computed(() => {
    const t = this.totals();
    const worked = t.presentDays + t.absentDays;
    return worked > 0 ? Math.round((t.presentDays / worked) * 100) : 0;
  });

  readonly nonConformingCount = computed(() => this.departments().filter((d) => d.conformity < 90).length);

  ngOnInit(): void {
    this.loadEmployees();
    this.loadMonth();
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees({ per_page: 1000 }).subscribe({
      next: (res) => this.allEmployees.set(res.data),
    });
  }

  private loadMonth(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const dateFrom = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const dateTo = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;

    this.loading.set(true);
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => { this.declarations.set(decls); this.loading.set(false); },
      error: () => this.loading.set(false),
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

  exportCsv(): void {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const rows = this.declarations()
      .filter((d) => {
        const dDate = new Date(d.date);
        return dDate.getFullYear() === year && dDate.getMonth() === month - 1
          && d.validation_status === 'VALIDEE' as AttendanceValidationStatus;
      })
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
