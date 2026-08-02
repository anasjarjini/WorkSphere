import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AbsenceService } from '../../../core/services/absence.service';
import { AbsenceType } from '../../../core/models/absence.model';
import { LeaveBalance } from '../../../core/models/leave-balance.model';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './leave-request.component.html',
})
export class LeaveRequestComponent implements OnInit {
  private readonly absenceService = inject(AbsenceService);

  readonly today = new Date().toISOString().slice(0, 10);
  readonly type = signal<AbsenceType>('CONGE_PAYE');
  readonly startDate = signal('');
  readonly endDate = signal('');
  readonly reason = signal('');

  readonly balances = signal<LeaveBalance[]>([]);
  readonly workingDays = signal<number | null>(null);
  readonly calculating = signal(false);
  readonly submitting = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);

  readonly selectedBalance = computed(() => {
    const type = this.type();
    return this.balances().find((b) => b.type === type);
  });

  readonly balanceRemaining = computed(() => this.selectedBalance()?.remaining_days ?? null);

  readonly insufficient = computed(() => {
    const remaining = this.balanceRemaining();
    const needed = this.workingDays();
    if (remaining === null || needed === null || needed === 0) return false;
    return this.type() === 'CONGE_PAYE' && needed > remaining;
  });

  readonly typeLabel = computed(() => this.typeLabelFor(this.type()));

  ngOnInit(): void {
    this.loadBalances();
    this.recalculateDays();
  }

  private loadBalances(): void {
    this.absenceService.getMyBalances().subscribe({
      next: (balances) => this.balances.set(balances),
    });
  }

  recalculateDays(): void {
    if (!this.startDate() || !this.endDate()) {
      this.workingDays.set(null);
      return;
    }
    this.calculating.set(true);
    this.absenceService.getWorkingDays(this.startDate(), this.endDate()).subscribe({
      next: (res) => {
        this.workingDays.set(res.working_days);
        this.calculating.set(false);
      },
      error: () => {
        this.workingDays.set(null);
        this.calculating.set(false);
      },
    });
  }

  typeLabelFor(type: AbsenceType): string {
    switch (type) {
      case 'CONGE_PAYE': return 'Congé payé';
      case 'MALADIE': return 'Maladie';
      case 'SANS_SOLDE': return 'Sans solde';
      case 'AUTRE': return 'Autre';
    }
  }

  onSubmit(): void {
    this.error.set(null);
    this.success.set(null);

    if (!this.startDate() || !this.endDate()) {
      this.error.set('Veuillez renseigner les dates de début et de fin.');
      return;
    }
    if (this.endDate() < this.startDate()) {
      this.error.set('La date de fin doit être postérieure ou égale à la date de début.');
      return;
    }
    if (this.insufficient()) {
      this.error.set('Solde de congés insuffisant pour cette demande.');
      return;
    }

    this.submitting.set(true);
    this.absenceService.createAbsence({
      type: this.type(),
      start_date: this.startDate(),
      end_date: this.endDate(),
      reason: this.reason() || null,
    }).subscribe({
      next: () => {
        this.success.set('Demande de congé envoyée. Elle sera traitée par votre manager.');
        this.startDate.set('');
        this.endDate.set('');
        this.reason.set('');
        this.workingDays.set(null);
        this.loadBalances();
        this.submitting.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Erreur lors de l\'envoi de la demande.');
        this.submitting.set(false);
      },
    });
  }
}
