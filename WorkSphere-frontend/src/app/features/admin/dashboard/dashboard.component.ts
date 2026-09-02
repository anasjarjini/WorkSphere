/**
 * Dashboard de l'espace Administrateur RH.
 * Affiche les KPI (total employés, actifs, managers, départements),
 * les graphiques de répartition (barres par département, donut par rôle),
 * et la liste des dernières embauches.
 */

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { DashboardStats } from '../../../core/models/dashboard.model';
import { Employee } from '../../../core/models/employee.model';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

const CSS_VAR = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const STITCH_PRIMARY = '#0f172a';
const STITCH_PRIMARY_LIGHT = '#e0f2fe';
const STITCH_SURFACE_LOW = '#f8fafc';
const STITCH_OUTLINE_VARIANT = '#cbd5e1';
const STITCH_ON_SURFACE_VARIANT = '#475569';
const STITCH_SECONDARY_CONTAINER = '#0ea5e9';

const CSS_COLORS = (): string[] => [
  CSS_VAR('--color-stitch-primary') || STITCH_PRIMARY,
  CSS_VAR('--color-stitch-primary-container') || '#0ea5e9',
  STITCH_SECONDARY_CONTAINER,
  CSS_VAR('--color-stitch-primary-light') || STITCH_PRIMARY_LIGHT,
  '#0284c7',
  '#38bdf8',
  '#7dd3fc',
  '#bae6fd',
];

const CHART_TOOLTIP_BG = (): string => CSS_VAR('--color-tooltip') || '#1E293B';
const CHART_GRID_COLOR = (): string => CSS_VAR('--color-border') || '#E2E8F0';
const CHART_TICK_MUTED = (): string => CSS_VAR('--color-text-muted') || '#64748B';
const CHART_TICK_SECONDARY = (): string => CSS_VAR('--color-text-secondary') || '#475569';
const CHART_BORDER_LIGHT = (): string => CSS_VAR('--color-border-light') || '#E2E8F0';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule, BaseChartDirective, DatePipe],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class AdminDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(DashboardService);
  private readonly employeeService = inject(EmployeeService);

  readonly user = this.authService.currentUser;
  readonly userName = computed(() => this.authService.displayName(this.user()));

  today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  loading = signal(true);
  error = signal<string | null>(null);
  stats = signal<DashboardStats | null>(null);
  recentEmployees = signal<Employee[]>([]);

  /** Bar chart data for department distribution */
  barChartData = signal<ChartConfiguration<'bar'>['data'] | null>(null);
  /** Bar chart options */
  get barChartOptions(): ChartConfiguration<'bar'>['options'] {
    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: CHART_TOOLTIP_BG(),
          titleFont: { family: 'DM Sans', size: 13, weight: 'bold' },
          bodyFont: { family: 'DM Sans', size: 12 },
          padding: 10,
          cornerRadius: 4,
          callbacks: {
            label: (context) => {
              const parsed = context.parsed;
              if (parsed === null || parsed.x === null) return '';
              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
              const value = parsed.x;
              const pct = total > 0 ? Math.round((value / total) * 100) : 0;
              return ` ${value} employé(s) (${pct}%)`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: CHART_GRID_COLOR() },
          ticks: {
            font: { family: 'DM Sans', size: 11 },
            color: CHART_TICK_MUTED(),
            stepSize: 1,
          },
        },
        y: {
          grid: { display: false },
          ticks: {
            font: { family: 'DM Sans', size: 12 },
            color: CHART_TICK_SECONDARY(),
          },
        },
      },
    };
  }

  /** Donut chart data for role distribution */
  donutChartData = signal<ChartConfiguration<'doughnut'>['data'] | null>(null);
  /** Donut chart options */
  get donutChartOptions(): ChartConfiguration<'doughnut'>['options'] {
    return {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: 'DM Sans', size: 12 },
            padding: 16,
            usePointStyle: true,
            pointStyle: 'circle',
            color: CHART_TICK_SECONDARY(),
          },
        },
        tooltip: {
          backgroundColor: CHART_TOOLTIP_BG(),
          titleFont: { family: 'DM Sans', size: 13, weight: 'bold' },
          bodyFont: { family: 'DM Sans', size: 12 },
          padding: 10,
          cornerRadius: 4,
          callbacks: {
            label: (context) => {
              const parsed = context.parsed;
              if (parsed === null) return '';
              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
              const value = parsed;
              const pct = total > 0 ? Math.round((value / total) * 100) : 0;
              return ` ${context.label} : ${value} (${pct}%)`;
            },
          },
        },
      },
    };
  }

  /** Total des managers + employés (hors admin) pour le donut */
  totalRolesCount = computed(() => {
    const s = this.stats();
    if (!s) return 0;
    return s.managers_count + s.regular_employees_count;
  });

  ngOnInit(): void {
    this.loadStats();
    this.loadRecentEmployees();
  }

  /**
   * Extrait les initiales à partir du prénom et du nom.
   * @param first Prénom
   * @param last Nom de famille
   * @returns Initiales en majuscules
   */
  getInitials(first: string, last: string): string {
    return `${(first?.[0] || '').toUpperCase()}${(last?.[0] || '').toUpperCase()}`;
  }

  /**
   * Charge les statistiques du dashboard depuis l'API et prépare les données des graphiques.
   */
  loadStats(): void {
    this.loading.set(true);
    this.error.set(null);

    this.dashboardService.getStats().subscribe({
      next: (stats) => {
        this.stats.set(stats);

        // Prepare bar chart data
        const chartColors = CSS_COLORS();
        if (stats.department_distribution.length > 0) {
          this.barChartData.set({
            labels: stats.department_distribution.map((d) => d.department),
            datasets: [
              {
                data: stats.department_distribution.map((d) => d.count),
                backgroundColor: stats.department_distribution.map(
                  (_, i) => chartColors[i % chartColors.length]
                ),
                borderColor: stats.department_distribution.map(
                  (_, i) => chartColors[i % chartColors.length]
                ),
                borderWidth: 1,
                borderRadius: 4,
                barThickness: 18,
              },
            ],
          });
        }

        // Prepare donut chart data for role distribution
        const totalNonAdmin =
          stats.managers_count + stats.regular_employees_count;
        const stitchPrimary = CSS_VAR('--color-stitch-primary') || STITCH_PRIMARY;
        const stitchSecondary = STITCH_SECONDARY_CONTAINER;
        if (totalNonAdmin > 0) {
          this.donutChartData.set({
            labels: ['Managers', 'Employés'],
            datasets: [
              {
                data: [stats.managers_count, stats.regular_employees_count],
                backgroundColor: [stitchPrimary, stitchSecondary],
                borderColor: [CSS_VAR('--color-surface') || '#FFFFFF', CSS_VAR('--color-surface') || '#FFFFFF'],
                borderWidth: 3,
                hoverOffset: 8,
              },
            ],
          });
        }

        this.loading.set(false);
      },
      error: () => {
        this.error.set('Impossible de charger les statistiques. Veuillez réessayer.');
        this.loading.set(false);
      },
    });
  }

  /**
   * Charge les 5 dernières embauches triées par date d'embauche décroissante.
   */
  loadRecentEmployees(): void {
    this.employeeService.getEmployees({ per_page: 50 }).subscribe({
      next: (response) => {
        const sorted = [...response.data]
          .filter((e) => e.hire_date)
          .sort((a, b) => new Date(b.hire_date).getTime() - new Date(a.hire_date).getTime())
          .slice(0, 5);
        this.recentEmployees.set(sorted);
      },
      error: () => {
        // Silently fail — the table will show empty state
        this.recentEmployees.set([]);
      },
    });
  }
}
