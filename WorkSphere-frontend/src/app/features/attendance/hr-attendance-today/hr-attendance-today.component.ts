import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AbsenceService } from '../../../core/services/absence.service';
import { AttendanceDeclaration } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';

type StatusFilter = 'TOUS' | 'PRESENT' | 'EN_ATTENTE' | 'EN_CONGE' | 'ABSENT';

@Component({
  selector: 'app-hr-attendance-today',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './hr-attendance-today.component.html',
})
export class HrAttendanceTodayComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);
  private readonly absenceService = inject(AbsenceService);

  readonly todayStr = new Date().toISOString().slice(0, 10);
  readonly allEmployees = signal<Employee[]>([]);
  readonly todayDeclarations = signal<AttendanceDeclaration[]>([]);
  readonly onLeaveIds = signal<Set<number>>(new Set());
  readonly loading = signal(false);
  readonly statusFilter = signal<StatusFilter>('TOUS');
  readonly pageSize = 10;
  readonly currentPage = signal(1);

  readonly companyStatus = computed(() => {
    const employees = this.allEmployees();
    const todayDecls = this.todayDeclarations();
    return employees.map((e) => ({
      employee: e,
      declaration: todayDecls.find((d) => d.user_id === e.id) ?? null,
    }));
  });

  readonly statusOf = (item: { employee: Employee; declaration: AttendanceDeclaration | null }): StatusFilter => {
    if (this.onLeaveIds().has(item.employee.id)) return 'EN_CONGE' as StatusFilter;
    const d = item.declaration;
    if (!d) return 'ABSENT' as StatusFilter;
    if (d.status === 'ABSENT') return 'ABSENT' as StatusFilter;
    if (d.validation_status === 'VALIDEE') return 'PRESENT' as StatusFilter;
    return 'EN_ATTENTE' as StatusFilter;
  };

  readonly counts = computed(() => {
    const items = this.companyStatus();
    return {
      total: items.length,
      present: items.filter((i) => this.statusOf(i) === 'PRESENT').length,
      pending: items.filter((i) => this.statusOf(i) === 'EN_ATTENTE').length,
      leave: items.filter((i) => this.statusOf(i) === 'EN_CONGE').length,
      absent: items.filter((i) => this.statusOf(i) === 'ABSENT').length,
    };
  });

  readonly filteredStatus = computed(() => {
    const filter = this.statusFilter();
    if (filter === 'TOUS') return this.companyStatus();
    return this.companyStatus().filter((i) => this.statusOf(i) === filter);
  });

  readonly paginatedStatus = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredStatus().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredStatus().length / this.pageSize)));

  ngOnInit(): void {
    this.loadEmployees();
    this.loadToday();
    this.loadLeaves();
  }

  private loadLeaves(): void {
    this.absenceService.getOnLeaveToday(this.todayStr).subscribe({
      next: (ids) => this.onLeaveIds.set(new Set(ids)),
    });
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees({ per_page: 1000 }).subscribe({
      next: (res) => this.allEmployees.set(res.data),
    });
  }

  private loadToday(): void {
    this.loading.set(true);
    this.attendanceService.getDeclarations({ date: this.todayStr }).subscribe({
      next: (decls) => { this.todayDeclarations.set(decls); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  setFilter(filter: StatusFilter): void {
    this.statusFilter.set(filter);
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  initials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  roleLabel(role?: string): string {
    switch (role) {
      case 'HR_ADMIN': return 'RH';
      case 'MANAGER': return 'Manager';
      case 'EMPLOYE': return 'Employé';
      default: return 'Membre';
    }
  }
}
