import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { AttendanceDeclaration, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';

@Component({
  selector: 'app-team-approval',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './team-approval.component.html',
})
export class TeamAttendanceApprovalComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly attendanceService = inject(AttendanceDeclarationService);

  readonly declarations = signal<AttendanceDeclaration[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly selectedIds = signal<Set<number>>(new Set());
  readonly rejectDeclarationId = signal<number | null>(null);
  readonly rejectReason = signal('');
  readonly rejecting = signal(false);

  readonly selectAllChecked = computed(() => {
    const displayed = this.filteredDeclarations();
    if (displayed.length === 0) return false;
    return displayed.every((d) => this.selectedIds().has(d.id));
  });

  readonly filteredDeclarations = computed(() =>
    this.declarations().filter((d) => d.validation_status === ('EN_ATTENTE' as AttendanceValidationStatus))
  );

  readonly pageSize = 10;
  readonly currentPage = signal(1);

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredDeclarations().length / this.pageSize))
  );

  readonly paginatedDeclarations = computed(() => {
    const list = this.filteredDeclarations();
    const start = (this.currentPage() - 1) * this.pageSize;
    // Auto-adjust page if current page is now empty after approval/rejection
    if (start >= list.length && this.currentPage() > 1) {
      setTimeout(() => this.currentPage.set(this.totalPages()), 0);
    }
    return list.slice(start, start + this.pageSize);
  });

  readonly selectedCount = computed(() => this.selectedIds().size);

  readonly isManager = computed(() => this.authService.currentUser()?.role === 'MANAGER');
  readonly isHrAdmin = computed(() => this.authService.currentUser()?.role === 'HR_ADMIN');

  ngOnInit(): void {
    this.loadDeclarations();
  }

  private loadDeclarations(): void {
    this.loading.set(true);
    this.error.set(null);

    const params: { validation_status: string; queue?: string } = { validation_status: 'EN_ATTENTE' };
    const role = this.authService.currentUser()?.role;
    if (role === 'MANAGER') {
      params.queue = 'manager';
    } else if (role === 'HR_ADMIN') {
      params.queue = 'rh';
    }
    this.attendanceService.getDeclarations(params).subscribe({
      next: (declarations) => {
        this.declarations.set(declarations);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement des déclarations.');
      },
    });
  }

  toggleSelect(id: number): void {
    this.selectedIds.update((set) => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  toggleSelectAll(): void {
    if (this.selectAllChecked()) {
      this.selectedIds.set(new Set());
    } else {
      this.selectedIds.set(new Set(this.filteredDeclarations().map((d) => d.id)));
    }
  }

  onBulkApprove(): void {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0) return;

    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    this.attendanceService.bulkApprove(ids).subscribe({
      next: (result) => {
        this.declarations.update((list) =>
          list.filter((d) => !result.approved.includes(d.id))
        );
        this.selectedIds.set(new Set());
        const approvedCount = result.approved.length;
        const skippedCount = result.skipped.length;
        this.success.set(`${approvedCount} déclaration(s) approuvée(s).${skippedCount > 0 ? ` ${skippedCount} ignorée(s).` : ''}`);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Erreur lors de l\'approbation groupée.');
      },
    });
  }

  onBulkReject(): void {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0) return;

    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const reason = 'Demande rejetée par le manager';
    forkJoin(ids.map((id) => this.attendanceService.reject(id, reason))).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => !ids.includes(d.id)));
        this.selectedIds.set(new Set());
        this.loading.set(false);
        this.success.set(`${ids.length} déclaration(s) rejetée(s).`);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Erreur lors du rejet groupé.');
      },
    });
  }

  initials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  roleLabel(role?: string): string {
    switch (role) {
      case 'EMPLOYE':
        return 'Employé';
      case 'MANAGER':
        return 'Manager';
      case 'HR_ADMIN':
        return 'RH Admin';
      default:
        return 'Membre';
    }
  }

  onApprove(declaration: AttendanceDeclaration): void {
    this.loading.set(true);
    this.error.set(null);

    this.attendanceService.approve(declaration.id).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => d.id !== declaration.id));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          next.delete(declaration.id);
          return next;
        });
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Erreur lors de l\'approbation.');
      },
    });
  }

  openReject(declaration: AttendanceDeclaration): void {
    this.rejectDeclarationId.set(declaration.id);
    this.rejectReason.set('');
  }

  closeReject(): void {
    this.rejectDeclarationId.set(null);
    this.rejectReason.set('');
  }

  onReject(): void {
    const id = this.rejectDeclarationId();
    if (id === null || !this.rejectReason().trim()) return;

    this.rejecting.set(true);
    this.error.set(null);

    this.attendanceService.reject(id, this.rejectReason()).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => d.id !== id));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          next.delete(id);
          return next;
        });
        this.closeReject();
        this.rejecting.set(false);
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || 'Erreur lors du rejet.');
      },
    });
  }

  canApprove(declaration: AttendanceDeclaration): boolean {
    const user = this.authService.currentUser();
    if (!user) return false;
    if (user.id === declaration.user_id) return false;
    if (user.role === 'MANAGER') {
      return declaration.user?.manager_id === user.id && declaration.user?.role === 'EMPLOYE';
    }
    if (user.role === 'HR_ADMIN') {
      return declaration.user?.role === 'MANAGER'
        || (declaration.user?.role === 'EMPLOYE' && declaration.manager_validated_by != null);
    }
    return false;
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }
}
