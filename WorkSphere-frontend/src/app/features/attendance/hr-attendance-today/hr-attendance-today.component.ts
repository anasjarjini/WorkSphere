import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AbsenceService } from '../../../core/services/absence.service';
import { ExportService } from '../../../core/services/export.service';
import { AttendanceDeclaration } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';
import { AttendanceStatusBadgeComponent } from '../attendance-status-badge/attendance-status-badge.component';

type StatusFilter = 'TOUS' | 'PRESENT' | 'EN_ATTENTE' | 'EN_CONGE' | 'ABSENT' | 'NOT_DECLARED';

@Component({
  selector: 'app-hr-attendance-today',
  standalone: true,
  imports: [DatePipe, FormsModule, AttendanceStatusBadgeComponent],
  templateUrl: './hr-attendance-today.component.html',
})
export class HrAttendanceTodayComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);
  private readonly absenceService = inject(AbsenceService);
  private readonly exportService = inject(ExportService);

  readonly todayStr = new Date().toISOString().slice(0, 10);
  readonly allEmployees = signal<Employee[]>([]);
  readonly todayDeclarations = signal<AttendanceDeclaration[]>([]);
  readonly onLeaveIds = signal<Set<number>>(new Set());
  readonly loading = signal(false);
  readonly statusFilter = signal<StatusFilter>('TOUS');
  readonly searchQuery = signal('');
  readonly pageSize = 10;
  readonly currentPage = signal(1);

  // Modal Signals
  readonly selectedEmployeeForHistory = signal<Employee | null>(null);
  readonly employeeHistory = signal<AttendanceDeclaration[]>([]);
  readonly loadingHistory = signal(false);
  readonly selectedEmployeeForEdit = signal<{ employee: Employee; declaration: AttendanceDeclaration | null } | null>(null);
  readonly editSelectedStatus = signal<'PRESENT' | 'ABSENT' | null>(null);
  readonly processingAction = signal(false);
  readonly rejectionReason = signal('');

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
    if (!d) return 'NOT_DECLARED' as StatusFilter;
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
      not_declared: items.filter((i) => this.statusOf(i) === 'NOT_DECLARED').length,
    };
  });

  readonly filteredStatus = computed(() => {
    const filter = this.statusFilter();
    const query = this.searchQuery().toLowerCase().trim();
    let list = this.companyStatus();

    if (filter !== 'TOUS') {
      list = list.filter((i) => this.statusOf(i) === filter);
    }

    if (query) {
      list = list.filter((i) => {
        const fullName = `${i.employee.first_name} ${i.employee.last_name}`.toLowerCase();
        const email = (i.employee.email || '').toLowerCase();
        const dept = (i.employee.department?.name || '').toLowerCase();
        const role = this.roleLabel(i.employee.role).toLowerCase();
        return fullName.includes(query) || email.includes(query) || dept.includes(query) || role.includes(query);
      });
    }

    return list;
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

  onSearchChange(query: string): void {
    this.searchQuery.set(query);
    this.currentPage.set(1);
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

  statusLabel(item: { employee: Employee; declaration: AttendanceDeclaration | null }): string {
    switch (this.statusOf(item)) {
      case 'PRESENT': return 'Présent';
      case 'EN_ATTENTE': return 'En attente';
      case 'EN_CONGE': return 'En congé';
      default: return 'Absent';
    }
  }

  lastDeclarationLabel(item: { employee: Employee; declaration: AttendanceDeclaration | null }): string {
    const d = item.declaration;
    if (!d) return '—';
    if (d.date === this.todayStr) {
      return "Aujourd'hui, déclaré";
    }
    return new Date(d.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  }

  // Modal Handlers
  openHistoryModal(emp: Employee): void {
    this.selectedEmployeeForHistory.set(emp);
    this.loadingHistory.set(true);
    this.attendanceService.getDeclarations({ user_id: emp.id }).subscribe({
      next: (decls) => {
        this.employeeHistory.set(decls);
        this.loadingHistory.set(false);
      },
      error: () => {
        this.employeeHistory.set([]);
        this.loadingHistory.set(false);
      }
    });
  }

  closeHistoryModal(): void {
    this.selectedEmployeeForHistory.set(null);
    this.employeeHistory.set([]);
  }

  openEditModal(item: { employee: Employee; declaration: AttendanceDeclaration | null }): void {
    this.selectedEmployeeForEdit.set(item);
    this.editSelectedStatus.set(item.declaration?.status ?? null);
    this.rejectionReason.set('');
  }

  closeEditModal(): void {
    this.selectedEmployeeForEdit.set(null);
    this.rejectionReason.set('');
  }

  approveDeclaration(declId: number): void {
    this.processingAction.set(true);
    this.attendanceService.approve(declId).subscribe({
      next: () => {
        this.processingAction.set(false);
        this.closeEditModal();
        this.loadToday();
      },
      error: () => {
        this.processingAction.set(false);
      }
    });
  }

  rejectDeclaration(declId: number): void {
    this.processingAction.set(true);
    const reason = this.rejectionReason().trim() || 'Rejeté par administrateur/manager';
    this.attendanceService.reject(declId, reason).subscribe({
      next: () => {
        this.processingAction.set(false);
        this.closeEditModal();
        this.loadToday();
      },
      error: () => {
        this.processingAction.set(false);
      }
    });
  }

  forceDeclare(status: 'PRESENT' | 'ABSENT'): void {
    const editData = this.selectedEmployeeForEdit();
    if (!editData) return;
    const userId = editData.employee.id;
    this.processingAction.set(true);
    
    if (editData.declaration) {
      this.attendanceService.update(editData.declaration.id, { status, validation_status: 'VALIDEE' }).subscribe({
        next: () => {
          this.processingAction.set(false);
          this.closeEditModal();
          this.loadToday();
        },
        error: () => {
          this.processingAction.set(false);
          this.closeEditModal();
        }
      });
    } else {
      // @ts-ignore
      this.attendanceService.declare({ date: this.todayStr, status, user_id: userId }).subscribe({
        next: () => {
          this.processingAction.set(false);
          this.closeEditModal();
          this.loadToday();
        },
        error: () => {
          this.processingAction.set(false);
          this.closeEditModal();
        }
      });
    }
  }

  exportCsv(): void {
    const period = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    const rows = this.filteredStatus()
      .filter((item) => item.declaration?.validation_status === 'VALIDEE')
      .map((item) => [
      `${item.employee.first_name} ${item.employee.last_name}`,
      item.employee.email,
      item.employee.department?.name ?? '—',
      this.roleLabel(item.employee.role),
      this.lastDeclarationLabel(item),
      this.statusLabel(item),
    ]);
    this.exportService.csv(
      `presences_aujourdhui_${this.todayStr}.csv`,
      ['Collaborateur', 'Email', 'Département', 'Rôle', 'Dernière déclaration', 'Statut'],
      rows,
      { title: 'Statut Global de l\'Entreprise', period }
    );
  }
}

