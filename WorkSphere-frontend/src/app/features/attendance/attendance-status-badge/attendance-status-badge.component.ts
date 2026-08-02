import { Component, computed, input } from '@angular/core';
import { AttendanceStatus, AttendanceValidationStatus } from '../../../core/models/attendance-declaration.model';

export type TodayStatusLabel = 'on_leave' | 'present_validated' | 'present_pending' | 'absent' | 'not_declared';

@Component({
  selector: 'app-attendance-status-badge',
  standalone: true,
  templateUrl: './attendance-status-badge.component.html',
})
export class AttendanceStatusBadgeComponent {
  readonly status = input<AttendanceStatus | null>(null);
  readonly validationStatus = input<AttendanceValidationStatus | null>(null);
  readonly isOnLeave = input(false);
  readonly size = input<'sm' | 'md'>('sm');
  readonly showLabel = input(true);

  readonly todayStatus = computed<TodayStatusLabel>(() => {
    if (this.isOnLeave()) return 'on_leave';
    if (!this.status()) return 'not_declared';
    if (this.status() === 'ABSENT') return 'absent';
    if (this.status() === 'PRESENT' && this.validationStatus() === 'VALIDEE') return 'present_validated';
    if (this.status() === 'PRESENT' && this.validationStatus() === 'EN_ATTENTE') return 'present_pending';
    if (this.status() === 'PRESENT' && this.validationStatus() === 'REJETEE') return 'present_pending';
    return 'not_declared';
  });

  readonly label = computed(() => {
    switch (this.todayStatus()) {
      case 'on_leave': return 'En congé';
      case 'present_validated': return 'Présent';
      case 'present_pending': return 'Présent (en attente)';
      case 'absent': return 'Absent';
      case 'not_declared': return 'Non déclaré';
    }
  });

  readonly dotClass = computed(() => {
    const base = 'w-1.5 h-1.5 rounded-full shrink-0';
    switch (this.todayStatus()) {
      case 'on_leave': return `${base} bg-info`;
      case 'present_validated': return `${base} bg-success`;
      case 'present_pending': return `${base} bg-text-muted`;
      case 'absent': return `${base} bg-warning`;
      case 'not_declared': return `${base} bg-text-muted/40`;
    }
  });

  readonly badgeClass = computed(() => {
    const base = 'inline-flex items-center gap-1.5 text-xs font-medium rounded-full';
    const sizeClass = this.size() === 'sm' ? 'px-2.5 py-1' : 'px-3 py-1.5';
    switch (this.todayStatus()) {
      case 'on_leave': return `${base} ${sizeClass} bg-info-light text-info`;
      case 'present_validated': return `${base} ${sizeClass} bg-success-light text-success-dark`;
      case 'present_pending': return `${base} ${sizeClass} bg-background-alt text-text-muted`;
      case 'absent': return `${base} ${sizeClass} bg-warning-light text-warning-dark`;
      case 'not_declared': return `${base} ${sizeClass} bg-background-alt text-text-muted/60`;
    }
  });
}
