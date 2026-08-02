import { Component, computed, input } from '@angular/core';
import { AbsenceStatus, AbsenceType } from '../../../core/models/absence.model';

@Component({
  selector: 'app-leave-status-badge',
  standalone: true,
  template: `
    <span [class]="badgeClass()">{{ label() }}</span>
  `,
})
export class LeaveStatusBadgeComponent {
  readonly status = input<AbsenceStatus | null>(null);
  readonly type = input<AbsenceType | null>(null);
  readonly size = input<'sm' | 'md'>('sm');

  readonly label = computed(() => {
    switch (this.status()) {
      case 'EN_ATTENTE': return 'En attente';
      case 'APPROUVEE': return 'Approuvée';
      case 'REJETEE': return 'Rejetée';
      case 'ANNULEE': return 'Annulée';
      default: return '';
    }
  });

  readonly badgeClass = computed(() => {
    const base = 'inline-flex items-center text-xs font-medium rounded-full';
    const sizeClass = this.size() === 'sm' ? 'px-2.5 py-1' : 'px-3 py-1.5';
    switch (this.status()) {
      case 'EN_ATTENTE': return `${base} ${sizeClass} bg-warning-light text-warning-dark`;
      case 'APPROUVEE': return `${base} ${sizeClass} bg-success-light text-success-dark`;
      case 'REJETEE': return `${base} ${sizeClass} bg-error-container text-error`;
      case 'ANNULEE': return `${base} ${sizeClass} bg-background-alt text-text-muted`;
      default: return `${base} ${sizeClass} bg-background-alt text-text-muted`;
    }
  });
}
