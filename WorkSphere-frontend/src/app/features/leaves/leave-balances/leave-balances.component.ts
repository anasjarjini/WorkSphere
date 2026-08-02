import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { AbsenceService } from '../../../core/services/absence.service';
import { LeaveBalance } from '../../../core/models/leave-balance.model';
import { AbsenceType } from '../../../core/models/absence.model';

@Component({
  selector: 'app-leave-balances',
  standalone: true,
  imports: [],
  templateUrl: './leave-balances.component.html',
})
export class LeaveBalancesComponent implements OnInit {
  private readonly absenceService = inject(AbsenceService);

  readonly balances = signal<LeaveBalance[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly typeFilter = signal<AbsenceType | 'TOUS'>('TOUS');

  readonly year = computed(() => this.balances()[0]?.year ?? new Date().getFullYear());

  readonly types: { value: AbsenceType | 'TOUS'; label: string }[] = [
    { value: 'TOUS', label: 'Tous les types' },
    { value: 'CONGE_PAYE', label: 'Congé payé' },
    { value: 'MALADIE', label: 'Maladie' },
    { value: 'SANS_SOLDE', label: 'Sans solde' },
    { value: 'AUTRE', label: 'Autre' },
  ];

  readonly filteredBalances = computed(() => {
    const filter = this.typeFilter();
    if (filter === 'TOUS') return this.balances();
    return this.balances().filter((b) => b.type === filter);
  });

  ngOnInit(): void {
    this.loadBalances();
  }

  loadBalances(): void {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getTeamBalances().subscribe({
      next: (balances) => {
        this.balances.set(balances);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement des soldes.');
      },
    });
  }

  setTypeFilter(filter: AbsenceType | 'TOUS'): void {
    this.typeFilter.set(filter);
  }

  typeLabel(type: AbsenceType): string {
    switch (type) {
      case 'CONGE_PAYE': return 'Congé payé';
      case 'MALADIE': return 'Maladie';
      case 'SANS_SOLDE': return 'Sans solde';
      case 'AUTRE': return 'Autre';
    }
  }

  userKey(balance: LeaveBalance): string {
    return `${balance.user_id}-${balance.type}-${balance.year}`;
  }

  fullName(balance: LeaveBalance): string {
    const u = balance.user;
    if (!u) return `Utilisateur #${balance.user_id}`;
    return `${u.first_name} ${u.last_name}`;
  }

  initials(balance: LeaveBalance): string {
    const u = balance.user;
    if (!u) return '?';
    return `${u.first_name.charAt(0)}${u.last_name.charAt(0)}`.toUpperCase();
  }
}
