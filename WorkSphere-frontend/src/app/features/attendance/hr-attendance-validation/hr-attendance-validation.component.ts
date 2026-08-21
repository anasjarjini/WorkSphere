import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';
import { Employee } from '../../../core/models/employee.model';

interface ManagerGroup {
  managerId: number;
  managerName: string;
  teamName: string;
  declarations: AttendanceDeclaration[];
  dateFrom: string;
  dateTo: string;
  period: string;
  anomalies: number;
  complete: boolean;
}

@Component({
  selector: 'app-hr-attendance-validation',
  standalone: true,
  templateUrl: './hr-attendance-validation.component.html',
})
export class HrAttendanceValidationComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly employeeService = inject(EmployeeService);

  readonly declarations = signal<AttendanceDeclaration[]>([]);
  readonly allEmployees = signal<Employee[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly selectedIds = signal<Set<number>>(new Set());
  readonly rejecting = signal(false);
  readonly pageSize = 5;
  readonly currentPage = signal(1);

  readonly pendingDeclarations = computed(() =>
    this.declarations().filter((d) => d.validation_status === ('EN_ATTENTE' as AttendanceValidationStatus))
  );

  readonly managerGroups = computed<ManagerGroup[]>(() => {
    const map = new Map<number, ManagerGroup>();
    for (const d of this.pendingDeclarations()) {
      const managerId = d.user?.role === 'MANAGER' ? d.user.id : (d.user?.manager_id ?? d.user_id);
      const manager = this.allEmployees().find((e) => e.id === managerId);
      const group = map.get(managerId) ?? {
        managerId,
        managerName: manager ? `${manager.first_name} ${manager.last_name}` : (d.user?.first_name ? `${d.user.first_name} ${d.user.last_name}` : `Manager #${managerId}`),
        teamName: manager?.department?.name ?? 'Équipe',
        declarations: [],
        dateFrom: d.date,
        dateTo: d.date,
        period: '',
        anomalies: 0,
        complete: true,
      };
      group.declarations.push(d);
      if (d.date < group.dateFrom) group.dateFrom = d.date;
      if (d.date > group.dateTo) group.dateTo = d.date;
      const anomaly = d.status === 'ABSENT';
      if (anomaly) group.anomalies += 1;
      map.set(managerId, group);
    }
    const groups = [...map.values()];
    groups.forEach((g) => (g.complete = g.anomalies === 0));
    return groups;
  });

  readonly paginatedGroups = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.managerGroups().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.managerGroups().length / this.pageSize)));

  readonly selectedCount = computed(() => this.selectedIds().size);

  readonly pageStart = computed(() => (this.currentPage() - 1) * this.pageSize + 1);
  readonly pageEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.managerGroups().length));

  readonly selectAllChecked = computed(() => {
    const ids = this.managerGroups().flatMap((g) => g.declarations.map((d) => d.id));
    return ids.length > 0 && ids.every((id) => this.selectedIds().has(id));
  });

  readonly totalPending = computed(() => this.pendingDeclarations().length);
  readonly criticalCount = computed(() => this.managerGroups().filter((g) => !g.complete).length);
  readonly leaveCount = computed(() => this.pendingDeclarations().filter((d) => d.status === 'ABSENT').length);

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDeclarations();
  }

  private loadEmployees(): void {
    this.employeeService.getEmployees({ per_page: 1000 }).subscribe({
      next: (res) => this.allEmployees.set(res.data),
    });
  }

  private loadDeclarations(): void {
    this.loading.set(true);
    this.error.set(null);
    this.attendanceService.getDeclarations({ validation_status: 'EN_ATTENTE', queue: 'rh' }).subscribe({
      next: (decls) => { this.declarations.set(decls); this.loading.set(false); },
      error: () => { this.loading.set(false); this.error.set('Erreur lors du chargement des déclarations.'); },
    });
  }

  formatPeriod(decls: AttendanceDeclaration[]): string {
    const dates = decls.map((d) => new Date(d.date)).sort((a, b) => a.getTime() - b.getTime());
    if (dates.length === 0) return '—';
    const first = dates[0];
    const last = dates[dates.length - 1];
    const fmt = (d: Date, withMonth: boolean) => withMonth
      ? `${d.getDate()} ${d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')}`
      : `${d.getDate()}`;
    if (first.getMonth() === last.getMonth() && first.getFullYear() === last.getFullYear()) {
      return `${fmt(first, false)} - ${fmt(last, true)}`;
    }
    return `${fmt(first, true)} - ${fmt(last, true)}`;
  }

  teamSize(group: ManagerGroup): number {
    return group.declarations.length;
  }

  toggleSelect(id: number): void {
    this.selectedIds.update((set) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  toggleSelectAll(): void {
    if (this.selectAllChecked()) {
      this.selectedIds.set(new Set());
    } else {
      this.selectedIds.set(new Set(this.managerGroups().flatMap((g) => g.declarations.map((d) => d.id))));
    }
  }

  toggleGroup(group: ManagerGroup): void {
    const ids = group.declarations.map((d) => d.id);
    const allSelected = ids.every((id) => this.selectedIds().has(id));
    this.selectedIds.update((set) => {
      const next = new Set(set);
      if (allSelected) {
        ids.forEach((id) => next.delete(id));
      } else {
        ids.forEach((id) => next.add(id));
      }
      return next;
    });
  }

  clearSelection(): void {
    this.selectedIds.set(new Set());
  }

  onBulkReject(): void {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0) return;
    this.rejecting.set(true);
    this.error.set(null);
    this.success.set(null);
    const reason = 'Demande rejetée par l\'équipe RH';
    forkJoin(ids.map((id) => this.attendanceService.reject(id, reason))).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => !ids.includes(d.id)));
        this.selectedIds.set(new Set());
        this.rejecting.set(false);
        this.success.set(`${ids.length} déclaration(s) rejetée(s).`);
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || 'Erreur lors du rejet groupé.');
      },
    });
  }

  initialsFromName(name: string): string {
    const parts = name.trim().split(/\s+/);
    return `${parts[0]?.charAt(0) ?? ''}${parts[1]?.charAt(0) ?? ''}`.toUpperCase();
  }

  onBulkApprove(): void {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0) return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.attendanceService.bulkApprove(ids).subscribe({
      next: (result) => {
        this.declarations.update((list) => list.filter((d) => !result.approved.includes(d.id)));
        this.selectedIds.set(new Set());
        this.success.set(`${result.approved.length} déclaration(s) approuvée(s).${result.skipped.length > 0 ? ` ${result.skipped.length} ignorée(s).` : ''}`);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Erreur lors de l\'approbation groupée.');
      },
    });
  }

  approveGroup(group: ManagerGroup): void {
    const ids = group.declarations.map((d) => d.id);
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.attendanceService.bulkApprove(ids).subscribe({
      next: (result) => {
        this.declarations.update((list) => list.filter((d) => !result.approved.includes(d.id)));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          ids.forEach((id) => next.delete(id));
          return next;
        });
        this.success.set(`${result.approved.length} déclaration(s) de ${group.managerName} approuvée(s).`);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Erreur lors de l\'approbation.');
      },
    });
  }

  rejectGroup(group: ManagerGroup): void {
    const ids = group.declarations.map((d) => d.id);
    this.rejecting.set(true);
    this.error.set(null);
    this.success.set(null);
    const reason = 'Demande rejetée par l\'équipe RH';
    forkJoin(ids.map((id) => this.attendanceService.reject(id, reason))).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => !ids.includes(d.id)));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          ids.forEach((id) => next.delete(id));
          return next;
        });
        this.rejecting.set(false);
        this.success.set(`${ids.length} déclaration(s) de ${group.managerName} rejetée(s).`);
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || 'Erreur lors du rejet.');
      },
    });
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }
}
