import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AbsenceService } from '../../../core/services/absence.service';
import { AttendanceDeclaration } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';
import { AttendanceStatusBadgeComponent } from '../attendance-status-badge/attendance-status-badge.component';

@Component({
  selector: 'app-team-attendance-today',
  standalone: true,
  imports: [DatePipe, FormsModule, AttendanceStatusBadgeComponent],
  templateUrl: './team-attendance-today.component.html',
})
export class TeamAttendanceTodayComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);
  private readonly absenceService = inject(AbsenceService);

  readonly todayStr = new Date().toISOString().slice(0, 10);
  readonly teamMembers = signal<Employee[]>([]);
  readonly todayDeclarations = signal<AttendanceDeclaration[]>([]);
  readonly onLeaveIds = signal<Set<number>>(new Set());
  readonly loading = signal(false);
  readonly searchQuery = signal('');

  // Modal Signals
  readonly selectedEmployeeForHistory = signal<Employee | null>(null);
  readonly employeeHistory = signal<AttendanceDeclaration[]>([]);
  readonly loadingHistory = signal(false);
  readonly selectedEmployeeForEdit = signal<{ employee: Employee; declaration: AttendanceDeclaration | null } | null>(null);
  readonly editSelectedStatus = signal<'PRESENT' | 'ABSENT' | null>(null);
  readonly processingAction = signal(false);
  readonly rejectionReason = signal('');

  readonly teamStatus = computed(() => {
    const members = this.teamMembers();
    const todayDecls = this.todayDeclarations();
    const onLeave = this.onLeaveIds();
    const query = this.searchQuery().toLowerCase().trim();

    let list = members.map((m) => ({
      employee: m,
      declaration: todayDecls.find((d) => d.user_id === m.id) ?? null,
      isOnLeave: onLeave.has(m.id),
    }));

    if (query) {
      list = list.filter((i) => {
        const fullName = `${i.employee.first_name} ${i.employee.last_name}`.toLowerCase();
        const email = (i.employee.email || '').toLowerCase();
        const job = (i.employee.job_title || '').toLowerCase();
        return fullName.includes(query) || email.includes(query) || job.includes(query);
      });
    }

    return list;
  });

  readonly counts = computed(() => {
    const decls = this.todayDeclarations();
    const members = this.teamMembers();
    const leave = members.filter((m) => this.onLeaveIds().has(m.id)).length;
    const present = decls.filter((d) => d.status === 'PRESENT').length;
    const pending = decls.filter((d) => d.validation_status === 'EN_ATTENTE').length;
    const absent = decls.filter((d) => d.status === 'ABSENT').length;
    return {
      present,
      pending,
      absent,
      leave,
      notDeclared: Math.max(0, members.length - decls.length - leave),
      total: members.length,
      rate: members.length > 0 ? Math.round((present / members.length) * 100) : 0,
    };
  });

  ngOnInit(): void {
    this.loadTeam();
    this.loadToday();
    this.loadLeaves();
  }

  private loadLeaves(): void {
    this.absenceService.getOnLeaveToday(this.todayStr).subscribe({
      next: (ids) => this.onLeaveIds.set(new Set(ids)),
    });
  }

  private loadTeam(): void {
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (res) => this.teamMembers.set(res.data),
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
    const reason = this.rejectionReason().trim() || 'Rejeté par le manager';
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
}

