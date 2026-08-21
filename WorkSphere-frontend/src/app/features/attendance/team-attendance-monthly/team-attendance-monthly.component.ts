import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-team-attendance-monthly',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './team-attendance-monthly.component.html',
})
export class TeamAttendanceMonthlyComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);

  readonly teamMembers = signal<Employee[]>([]);
  readonly declarations = signal<any[]>([]);
  readonly loading = signal(false);
  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));

  readonly summary = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const monthDecls = this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
    return this.teamMembers().map((m) => {
      const userDecls = monthDecls.filter((d) => d.user_id === m.id);
      const validated = userDecls.filter((d) => d.validation_status === 'VALIDEE' as AttendanceValidationStatus);
      return {
        employee: m,
        presentDays: validated.filter((d) => d.status === 'PRESENT').length,
        absentDays: userDecls.filter((d) => d.status === 'ABSENT').length,
      };
    });
  });

  readonly stats = computed(() => {
    const rows = this.summary();
    const totalPresent = rows.reduce((sum, r) => sum + r.presentDays, 0);
    const totalAbsent = rows.reduce((sum, r) => sum + r.absentDays, 0);
    const total = totalPresent + totalAbsent;
    const rate = total > 0 ? Math.round((totalPresent / total) * 100) : 0;
    return {
      totalPresent,
      totalAbsent,
      rate,
      size: this.teamMembers().length,
    };
  });

  ngOnInit(): void {
    this.loadTeam();
    this.loadMonth();
  }

  private loadTeam(): void {
    this.employeeService.getManagerTeam().subscribe({
      next: (res) => this.teamMembers.set(res.data),
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
        const emp = this.teamMembers().find((m) => m.id === d.user_id);
        return {
          employe: emp ? `${emp.first_name} ${emp.last_name}` : `#${d.user_id}`,
          date: d.date,
          statut: d.status === 'PRESENT' ? 'Présent' : 'Absent',
        };
      });

    const header = 'Employé,Date,Statut';
    const csv = [header, ...rows.map((r) => `${r.employe},${r.date},${r.statut}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `presences_${this.currentMonth()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  monthLabel(): string {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const label = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1));
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  initials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  roleLabel(role?: string): string {
    switch (role) {
      case 'EMPLOYE': return 'Employé';
      case 'MANAGER': return 'Manager';
      case 'HR_ADMIN': return 'RH Admin';
      default: return 'Membre';
    }
  }

  statusLabel(status?: string): string {
    switch (status) {
      case 'ACTIVE': return 'Actif';
      case 'INACTIVE': return 'Inactif';
      case 'PENDING_ACTIVATION': return 'En attente';
      case 'SUSPENDED': return 'Suspendu';
      default: return 'Actif';
    }
  }
}
