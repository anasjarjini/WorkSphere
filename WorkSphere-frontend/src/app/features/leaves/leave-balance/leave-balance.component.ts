import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { AbsenceService } from '../../../core/services/absence.service';
import { LeaveBalance } from '../../../core/models/leave-balance.model';
import { AbsenceType } from '../../../core/models/absence.model';

@Component({
  selector: 'app-leave-balance',
  standalone: true,
  imports: [],
  templateUrl: './leave-balance.component.html',
})
export class LeaveBalanceComponent implements OnInit {
  readonly Math = Math;

  private readonly absenceService = inject(AbsenceService);

  readonly balances = signal<LeaveBalance[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly hasCongePaye = computed(() =>
    this.balances().some((b) => b.type === 'CONGE_PAYE')
  );

  readonly totalRemaining = computed(() =>
    this.balances().reduce((sum, b) => sum + (b.remaining_days ?? 0), 0)
  );

  readonly totalUsed = computed(() =>
    this.balances().reduce((sum, b) => sum + (b.used_days ?? 0), 0)
  );

  readonly totalAllocated = computed(() =>
    this.balances().reduce((sum, b) => sum + (b.allocated_days ?? 0) + (b.carried_over_days ?? 0), 0)
  );

  readonly year = computed(() => this.balances()[0]?.year ?? new Date().getFullYear());

  ngOnInit(): void {
    this.loadBalances();
  }

  loadBalances(): void {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getMyBalances().subscribe({
      next: (balances) => {
        this.balances.set(balances);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement du solde.');
      },
    });
  }

  typeLabel(type: AbsenceType): string {
    switch (type) {
      case 'CONGE_PAYE': return 'Congé payé';
      case 'MALADIE': return 'Maladie';
      case 'SANS_SOLDE': return 'Sans solde';
      case 'AUTRE': return 'Autre';
    }
  }

  typeIcon(type: AbsenceType): string {
    switch (type) {
      case 'CONGE_PAYE': return 'beach_access';
      case 'MALADIE': return 'medical_services';
      case 'SANS_SOLDE': return 'money_off';
      case 'AUTRE': return 'event_note';
    }
  }

  typeColor(type: AbsenceType): string {
    switch (type) {
      case 'CONGE_PAYE': return 'bg-primary/10 text-primary';
      case 'MALADIE': return 'bg-info-light text-info';
      case 'SANS_SOLDE': return 'bg-warning-light text-warning-dark';
      case 'AUTRE': return 'bg-background-alt text-text-muted';
    }
  }
}
