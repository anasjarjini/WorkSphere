import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { AuthService } from '../../../core/services/auth.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import { ThemeService } from '../../../core/services/theme.service';
import {
  DashboardPendingActions,
  DashboardPresenceToday,
  DashboardStats,
  DashboardStatusCounts,
  DashboardUpcomingAbsence,
} from '../../../core/models/dashboard.model';

const EMPTY_STATUS_COUNTS: DashboardStatusCounts = {
  active: 0,
  pending_activation: 0,
  inactive: 0,
  suspended: 0,
};

const EMPTY_PENDING_ACTIONS: DashboardPendingActions = {
  leave_requests: 0,
  attendance_declarations: 0,
  incomplete_profiles: 0,
  total: 0,
};

const EMPTY_PRESENCE: DashboardPresenceToday = {
  present: 0,
  absent: 0,
  on_leave: 0,
  not_declared: 0,
  total: 0,
  rate: 0,
};

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule, BaseChartDirective, DatePipe],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(DashboardService);
  private readonly themeService = inject(ThemeService);

  readonly userName = computed(() => this.authService.displayName(this.authService.currentUser()));
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal<string | null>(null);
  readonly stats = signal<DashboardStats | null>(null);

  readonly statusCounts = computed(() => this.stats()?.status_counts ?? EMPTY_STATUS_COUNTS);
  readonly pendingActions = computed(() => this.stats()?.pending_actions ?? EMPTY_PENDING_ACTIONS);
  readonly presence = computed(() => this.stats()?.presence_today ?? EMPTY_PRESENCE);
  readonly recentEmployees = computed(() => this.stats()?.recent_hires ?? []);
  readonly upcomingAbsences = computed(() => this.stats()?.upcoming_absences ?? []);
  readonly activationRate = computed(() => {
    const total = this.stats()?.total_employees ?? 0;
    return total > 0 ? Math.round((this.statusCounts().active / total) * 100) : 0;
  });
  readonly validationsCount = computed(
    () => this.pendingActions().leave_requests + this.pendingActions().attendance_declarations,
  );
  readonly primaryValidationRoute = computed(() =>
    this.pendingActions().attendance_declarations > this.pendingActions().leave_requests
      ? '/admin/attendance/validation'
      : '/admin/hr/leaves/validation',
  );
  readonly presenceRingBackground = computed(() => {
    const value = Math.max(0, Math.min(100, this.presence().rate));
    return `conic-gradient(#6d5ce8 0 ${value}%, var(--color-surface-container-high) ${value}% 100%)`;
  });

  readonly today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  readonly headcountChartData = computed<ChartConfiguration<'line'>['data'] | null>(() => {
    const trend = this.stats()?.headcount_trend ?? [];
    if (trend.length === 0) return null;
    const dark = this.themeService.resolvedTheme() === 'dark';

    return {
      labels: trend.map((point) => point.label),
      datasets: [
        {
          label: 'Effectif',
          data: trend.map((point) => point.count),
          borderColor: dark ? '#a5b4fc' : '#6254d9',
          backgroundColor: dark ? 'rgba(129, 140, 248, .16)' : 'rgba(98, 84, 217, .12)',
          pointBackgroundColor: dark ? '#c7d2fe' : '#6254d9',
          pointBorderColor: dark ? '#1c2541' : '#ffffff',
          pointBorderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderWidth: 2.5,
          fill: true,
          tension: 0.38,
        },
      ],
    };
  });

  readonly headcountChartOptions = computed<ChartConfiguration<'line'>['options']>(() => {
    const dark = this.themeService.resolvedTheme() === 'dark';
    const text = dark ? '#cbd5e1' : '#64748b';
    const grid = dark ? 'rgba(148, 163, 184, .12)' : 'rgba(148, 163, 184, .16)';
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: dark ? '#f8fafc' : '#172033',
          titleColor: dark ? '#172033' : '#ffffff',
          bodyColor: dark ? '#475569' : '#e2e8f0',
          padding: 12,
          cornerRadius: 10,
          displayColors: false,
          callbacks: { label: (context) => ` ${context.parsed.y} collaborateurs` },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: text, font: { family: 'DM Sans', size: 11 } },
        },
        y: {
          beginAtZero: true,
          grid: { color: grid },
          border: { display: false },
          ticks: { color: text, precision: 0, font: { family: 'DM Sans', size: 11 } },
        },
      },
    };
  });

  readonly departmentChartData = computed<ChartConfiguration<'bar'>['data'] | null>(() => {
    const distribution = this.stats()?.department_distribution ?? [];
    if (distribution.length === 0) return null;
    const dark = this.themeService.resolvedTheme() === 'dark';
    const colors = dark
      ? ['#818cf8', '#38bdf8', '#34d399', '#fbbf24', '#c084fc', '#fb7185']
      : ['#6254d9', '#3596cf', '#36a17f', '#e4a53a', '#9b69d7', '#dc7180'];

    return {
      labels: distribution.map((item) => item.department),
      datasets: [
        {
          label: 'Collaborateurs',
          data: distribution.map((item) => item.count),
          backgroundColor: distribution.map((_, index) => colors[index % colors.length]),
          borderRadius: 7,
          borderSkipped: false,
          barThickness: 12,
        },
      ],
    };
  });

  readonly departmentChartOptions = computed<ChartConfiguration<'bar'>['options']>(() => {
    const dark = this.themeService.resolvedTheme() === 'dark';
    const text = dark ? '#cbd5e1' : '#64748b';
    const grid = dark ? 'rgba(148, 163, 184, .12)' : 'rgba(148, 163, 184, .16)';
    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: dark ? '#f8fafc' : '#172033',
          titleColor: dark ? '#172033' : '#ffffff',
          bodyColor: dark ? '#475569' : '#e2e8f0',
          padding: 12,
          cornerRadius: 10,
          displayColors: false,
          callbacks: { label: (context) => ` ${context.parsed.x} collaborateurs` },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: grid },
          border: { display: false },
          ticks: { color: text, precision: 0, font: { family: 'DM Sans', size: 10 } },
        },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: text, font: { family: 'DM Sans', size: 11 } },
        },
      },
    };
  });

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    if (this.stats()) {
      this.refreshing.set(true);
    } else {
      this.loading.set(true);
    }
    this.error.set(null);

    this.dashboardService.getStats().subscribe({
      next: (stats) => {
        this.stats.set(stats);
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set('Impossible de charger les données du tableau de bord.');
        this.loading.set(false);
        this.refreshing.set(false);
      },
    });
  }

  getInitials(firstName?: string, lastName?: string): string {
    return `${firstName?.charAt(0) ?? ''}${lastName?.charAt(0) ?? ''}`.toUpperCase() || '—';
  }

  absenceLabel(type: string): string {
    const labels: Record<string, string> = {
      CONGE_PAYE: 'Congé payé',
      MALADIE: 'Maladie',
      SANS_SOLDE: 'Sans solde',
      AUTRE: 'Autre absence',
    };
    return labels[type] ?? type;
  }

  absenceTone(absence: DashboardUpcomingAbsence): string {
    const tones: Record<string, string> = {
      CONGE_PAYE: 'violet',
      MALADIE: 'coral',
      SANS_SOLDE: 'amber',
      AUTRE: 'blue',
    };
    return tones[absence.type] ?? 'blue';
  }

  employeeStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      ACTIVE: 'Actif',
      PENDING_ACTIVATION: 'En attente',
      INACTIVE: 'Inactif',
      SUSPENDED: 'Suspendu',
    };
    return labels[status] ?? status;
  }
}
