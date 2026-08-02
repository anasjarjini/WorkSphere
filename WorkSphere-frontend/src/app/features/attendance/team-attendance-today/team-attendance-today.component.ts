import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AbsenceService } from '../../../core/services/absence.service';
import { AttendanceDeclaration } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';
import { AttendanceStatusBadgeComponent } from '../attendance-status-badge/attendance-status-badge.component';

@Component({
  selector: 'app-team-attendance-today',
  standalone: true,
  imports: [DatePipe, AttendanceStatusBadgeComponent],
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

  readonly teamStatus = computed(() => {
    const members = this.teamMembers();
    const todayDecls = this.todayDeclarations();
    const onLeave = this.onLeaveIds();
    return members.map((m) => ({
      employee: m,
      declaration: todayDecls.find((d) => d.user_id === m.id) ?? null,
      isOnLeave: onLeave.has(m.id),
    }));
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
    this.employeeService.getManagerTeam().subscribe({
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
}
