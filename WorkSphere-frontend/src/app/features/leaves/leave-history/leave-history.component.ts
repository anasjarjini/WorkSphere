import { Component, OnInit, inject, signal, computed, input } from '@angular/core';
import { AbsenceService } from '../../../core/services/absence.service';
import { Absence, AbsenceStatus } from '../../../core/models/absence.model';
import { LeaveStatusBadgeComponent } from '../leave-status-badge/leave-status-badge.component';

type HistoryScope = 'mine' | 'team' | 'all';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [LeaveStatusBadgeComponent],
  templateUrl: './leave-history.component.html',
})
export class LeaveHistoryComponent implements OnInit {
  readonly scope = input<HistoryScope>('mine');

  private readonly absenceService = inject(AbsenceService);

  readonly absences = signal<Absence[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly statusFilter = signal<AbsenceStatus | 'TOUS'>('TOUS');
  readonly cancellingId = signal<number | null>(null);

  readonly filters: { value: AbsenceStatus | 'TOUS'; label: string }[] = [
    { value: 'TOUS', label: 'Toutes' },
    { value: 'EN_ATTENTE', label: 'En attente' },
    { value: 'APPROUVEE', label: 'Approuvées' },
    { value: 'REJETEE', label: 'Rejetées' },
    { value: 'ANNULEE', label: 'Annulées' },
  ];

  readonly filteredAbsences = computed(() => {
    const filter = this.statusFilter();
    if (filter === 'TOUS') return this.absences();
    return this.absences().filter((a) => a.status === filter);
  });

  readonly countByStatus = computed(() => {
    const counts: Record<string, number> = { TOUS: this.absences().length };
    for (const a of this.absences()) {
      counts[a.status] = (counts[a.status] ?? 0) + 1;
    }
    return counts;
  });

  ngOnInit(): void {
    this.loadAbsences();
  }

  loadAbsences(): void {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getAbsences().subscribe({
      next: (absences) => {
        this.absences.set(absences);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement de l\'historique.');
      },
    });
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

  setFilter(filter: AbsenceStatus | 'TOUS'): void {
    this.statusFilter.set(filter);
  }

  canCancel(absence: Absence): boolean {
    return this.scope() === 'mine' && absence.status === 'EN_ATTENTE';
  }

  onCancel(absence: Absence): void {
    this.cancellingId.set(absence.id);
    this.error.set(null);
    this.success.set(null);

    this.absenceService.cancel(absence.id).subscribe({
      next: () => {
        this.absences.update((list) =>
          list.map((a) => (a.id === absence.id ? { ...a, status: 'ANNULEE' as AbsenceStatus } : a))
        );
        this.cancellingId.set(null);
        this.success.set(`Demande ${absence.reference_code} annulée.`);
      },
      error: (err) => {
        this.cancellingId.set(null);
        this.error.set(err.error?.message || 'Erreur lors de l\'annulation.');
      },
    });
  }

  formatPeriod(absence: Absence): string {
    const start = new Date(absence.start_date);
    const end = new Date(absence.end_date);
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    const fmt = (d: Date) => `${d.getDate()} ${d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')} ${d.getFullYear()}`;
    if (start.getTime() === end.getTime()) return fmt(start);
    if (sameMonth) return `${start.getDate()} - ${fmt(end)}`;
    return `${fmt(start)} → ${fmt(end)}`;
  }
}
