import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { ExportService } from '../../../core/services/export.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-hr-attendance-history',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './hr-attendance-history.component.html',
})
export class HrAttendanceHistoryComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);
  private readonly exportService = inject(ExportService);

  readonly allEmployees = signal<Employee[]>([]);
  readonly declarations = signal<AttendanceDeclaration[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly currentMonth = signal(new Date().toISOString().slice(0, 7));
  readonly historyEmployeeFilter = signal<number | null>(null);
  readonly historyDeptFilter = signal<number | null>(null);
  readonly historyStatusFilter = signal<'TOUS' | AttendanceValidationStatus>('TOUS');
  readonly searchQuery = signal('');
  readonly pageSize = 15;
  readonly currentPage = signal(1);

  // Edit Modal State
  readonly selectedDeclarationForEdit = signal<AttendanceDeclaration | null>(null);
  readonly editStatus = signal<'PRESENT' | 'ABSENT'>('PRESENT');
  readonly editValidationStatus = signal<AttendanceValidationStatus>('VALIDEE');
  readonly editRejectionReason = signal('');
  readonly processingAction = signal(false);

  readonly departments = computed(() => {
    const map = new Map<number, string>();
    this.allEmployees().forEach((e) => {
      if (e.department?.id) map.set(e.department.id, e.department.name);
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  });

  readonly filteredDeclarations = computed(() => {
    const [year, month] = this.currentMonth().split('-').map(Number);
    const query = this.searchQuery().toLowerCase().trim();

    let list = this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
    });
    const empFilter = this.historyEmployeeFilter();
    if (empFilter) list = list.filter((d) => d.user_id === empFilter);
    const deptFilter = this.historyDeptFilter();
    if (deptFilter) {
      const deptIds = new Set(this.allEmployees().filter((e) => e.department?.id === deptFilter).map((e) => e.id));
      list = list.filter((d) => deptIds.has(d.user_id));
    }
    const statusFilter = this.historyStatusFilter();
    if (statusFilter !== 'TOUS') list = list.filter((d) => d.validation_status === statusFilter);

    if (query) {
      list = list.filter((d) => {
        const empName = this.employeeName(d.user_id).toLowerCase();
        const deptName = this.teamOf(d.user_id).toLowerCase();
        const dateStr = d.date.toLowerCase();
        return empName.includes(query) || deptName.includes(query) || dateStr.includes(query);
      });
    }

    return list;
  });

  readonly paginatedDeclarations = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredDeclarations().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredDeclarations().length / this.pageSize))
  );

  readonly visiblePages = computed<(number | '...')[]>(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages = new Set<number>([1, total, current - 1, current, current + 1]);
    const sorted = Array.from(pages).filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
    const result: (number | '...')[] = [];
    let prev = 0;
    for (const p of sorted) {
      if (p - prev > 1) result.push('...');
      result.push(p);
      prev = p;
    }
    return result;
  });

  ngOnInit(): void {
    this.loadEmployees();
    this.loadMonth();
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees({ per_page: 1000 }).subscribe({
      next: (res) => this.allEmployees.set(res.data),
    });
  }

  changeMonth(value: string): void {
    this.currentMonth.set(value);
    this.currentPage.set(1);
    this.loadMonth();
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

  onSearchChange(query: string): void {
    this.searchQuery.set(query);
    this.currentPage.set(1);
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

  setDeptFilter(deptId: number | null): void {
    this.historyDeptFilter.set(deptId);
    this.currentPage.set(1);
  }

  setStatusFilter(status: 'TOUS' | AttendanceValidationStatus): void {
    this.historyStatusFilter.set(status);
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) this.currentPage.set(page);
  }

  employeeName(userId: number): string {
    const emp = this.allEmployees().find((e) => e.id === userId);
    return emp ? `${emp.first_name} ${emp.last_name}` : `Employé #${userId}`;
  }

  initialsOf(userId: number): string {
    const emp = this.allEmployees().find((e) => e.id === userId);
    if (!emp) return '?';
    return `${emp.first_name.charAt(0)}${emp.last_name.charAt(0)}`.toUpperCase();
  }

  teamOf(userId: number): string {
    const emp = this.allEmployees().find((e) => e.id === userId);
    return emp?.department?.name ?? '—';
  }

  anomalyCount(d: AttendanceDeclaration): number {
    return d.status === 'ABSENT' || d.validation_status === 'REJETEE' ? 1 : 0;
  }

  statusLabel(status: AttendanceValidationStatus): string {
    switch (status) {
      case 'VALIDEE': return 'Validé';
      case 'REJETEE': return 'Rejeté';
      default: return 'En attente';
    }
  }

  openEditModal(declaration: AttendanceDeclaration): void {
    this.selectedDeclarationForEdit.set(declaration);
    this.editStatus.set(declaration.status);
    this.editValidationStatus.set(declaration.validation_status);
    this.editRejectionReason.set(declaration.rejection_reason || '');
  }

  closeEditModal(): void {
    this.selectedDeclarationForEdit.set(null);
  }

  saveDeclarationChanges(): void {
    const decl = this.selectedDeclarationForEdit();
    if (!decl) return;
    this.processingAction.set(true);

    this.attendanceService.update(decl.id, {
      status: this.editStatus(),
      validation_status: this.editValidationStatus(),
      rejection_reason: this.editValidationStatus() === 'REJETEE' ? this.editRejectionReason() : undefined,
    }).subscribe({
      next: () => {
        this.processingAction.set(false);
        this.closeEditModal();
        this.loadMonth();
      },
      error: () => {
        this.processingAction.set(false);
      }
    });
  }

  private monthLabel(): string {
    return new Date(this.currentMonth() + '-01').toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  private exportRows(): string[][] {
    return this.filteredDeclarations()
      .filter((d) => d.validation_status === 'VALIDEE')
      .map((d) => [
      new Date(d.date).toLocaleDateString('fr-FR'),
      this.employeeName(d.user_id),
      this.teamOf(d.user_id),
      this.statusLabel(d.validation_status),
      this.anomalyCount(d).toString(),
    ]);
  }

  exportPdf(): void {
    this.exportService.pdf({
      title: 'Suivi des Présences',
      subtitle: 'Espace RH',
      period: this.monthLabel(),
      columns: ['Date', 'Employé', 'Département', 'Statut', 'Anomalies'],
      rows: this.exportRows(),
      filename: `presences_historique_${this.currentMonth()}.pdf`,
    });
  }

  exportExcel(): void {
    this.exportService.xlsx({
      title: 'Suivi des Présences',
      period: this.monthLabel(),
      columns: ['Date', 'Employé', 'Département', 'Statut', 'Anomalies'],
      rows: this.exportRows(),
      filename: `presences_historique_${this.currentMonth()}.xlsx`,
      sheetName: 'Présences',
    });
  }
}

