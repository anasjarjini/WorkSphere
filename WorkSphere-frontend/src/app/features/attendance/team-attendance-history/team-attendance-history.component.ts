import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-team-attendance-history',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './team-attendance-history.component.html',
})
export class TeamAttendanceHistoryComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);

  readonly teamMembers = signal<Employee[]>([]);
  readonly declarations = signal<AttendanceDeclaration[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));
  readonly historyEmployeeFilter = signal<number | null>(null);
  readonly pageSize = 15;
  readonly currentPage = signal(1);

  readonly filteredDeclarations = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    let list = this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
    const empFilter = this.historyEmployeeFilter();
    if (empFilter) list = list.filter((d) => d.user_id === empFilter);
    return list;
  });

  readonly paginatedDeclarations = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredDeclarations().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredDeclarations().length / this.pageSize))
  );

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
    this.error.set(null);
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => { this.declarations.set(decls); this.loading.set(false); },
      error: () => { this.loading.set(false); this.error.set('Erreur lors du chargement.'); },
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

  initials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
}
