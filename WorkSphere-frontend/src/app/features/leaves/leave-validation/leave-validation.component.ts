import { Component, OnInit, inject, signal, computed, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbsenceService } from '../../../core/services/absence.service';
import { Absence } from '../../../core/models/absence.model';
import { LeaveStatusBadgeComponent } from '../leave-status-badge/leave-status-badge.component';

@Component({
  selector: 'app-leave-validation',
  standalone: true,
  imports: [DatePipe, FormsModule, LeaveStatusBadgeComponent],
  templateUrl: './leave-validation.component.html',
})
export class LeaveValidationComponent implements OnInit {
  readonly queue = input<'manager' | 'rh'>('manager');

  private readonly absenceService = inject(AbsenceService);

  readonly absences = signal<Absence[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly rejectAbsenceId = signal<number | null>(null);
  readonly rejectReason = signal('');
  readonly rejecting = signal(false);

  readonly pendingAbsences = computed(() =>
    this.absences().filter((a) => a.status === 'EN_ATTENTE')
  );

  readonly pendingCount = computed(() => this.pendingAbsences().length);

  ngOnInit(): void {
    this.loadAbsences();
  }

  loadAbsences(): void {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getAbsences({ status: 'EN_ATTENTE', queue: this.queue() }).subscribe({
      next: (absences) => {
        this.absences.set(absences);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement des demandes de congé.');
      },
    });
  }

  initials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  typeLabel(type: string): string {
    switch (type) {
      case 'CONGE_PAYE': return 'Congé payé';
      case 'MALADIE': return 'Maladie';
      case 'SANS_SOLDE': return 'Sans solde';
      case 'AUTRE': return 'Autre';
      default: return type;
    }
  }

  typeIcon(type: string): string {
    switch (type) {
      case 'CONGE_PAYE': return 'beach_access';
      case 'MALADIE': return 'medical_services';
      case 'SANS_SOLDE': return 'money_off';
      case 'AUTRE': return 'event_note';
      default: return 'event_note';
    }
  }

  onApprove(absence: Absence): void {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    this.absenceService.approve(absence.id).subscribe({
      next: () => {
        this.absences.update((list) => list.filter((a) => a.id !== absence.id));
        this.loading.set(false);
        this.success.set(`Demande ${absence.reference_code} approuvée.`);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Erreur lors de l\'approbation.');
      },
    });
  }

  openReject(absence: Absence): void {
    this.rejectAbsenceId.set(absence.id);
    this.rejectReason.set('');
  }

  closeReject(): void {
    this.rejectAbsenceId.set(null);
    this.rejectReason.set('');
  }

  onReject(): void {
    const id = this.rejectAbsenceId();
    if (id === null || !this.rejectReason().trim()) return;

    this.rejecting.set(true);
    this.error.set(null);
    this.success.set(null);

    this.absenceService.reject(id, this.rejectReason()).subscribe({
      next: () => {
        this.absences.update((list) => list.filter((a) => a.id !== id));
        this.closeReject();
        this.rejecting.set(false);
        this.success.set('Demande rejetée.');
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || 'Erreur lors du rejet.');
      },
    });
  }
}
