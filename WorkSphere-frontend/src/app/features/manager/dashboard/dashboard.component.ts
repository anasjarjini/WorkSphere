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
import { AuthService } from '../../../core/services/auth.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import {
  ManagerAttendanceState,
  ManagerDashboardAbsence,
  ManagerDashboardApprovals,
  ManagerDashboardPresence,
  ManagerDashboardStats,
  ManagerDashboardTaskSummary,
} from '../../../core/models/manager-dashboard.model';

const EMPTY_PRESENCE: ManagerDashboardPresence = {
  present: 0,
  absent: 0,
  on_leave: 0,
  not_declared: 0,
  total: 0,
  rate: 0,
};

const EMPTY_APPROVALS: ManagerDashboardApprovals = {
  leave_requests: 0,
  attendance_declarations: 0,
  total: 0,
};

const EMPTY_TASKS: ManagerDashboardTaskSummary = {
  todo: 0,
  in_progress: 0,
  review: 0,
  done: 0,
  overdue: 0,
  total: 0,
  completion_rate: 0,
};

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(DashboardService);

  readonly userName = computed(() => this.authService.displayName(this.authService.currentUser()));
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal<string | null>(null);
  readonly stats = signal<ManagerDashboardStats | null>(null);

  readonly presence = computed(() => this.stats()?.presence_today ?? EMPTY_PRESENCE);
  readonly approvals = computed(() => this.stats()?.pending_approvals ?? EMPTY_APPROVALS);
  readonly tasks = computed(() => this.stats()?.task_summary ?? EMPTY_TASKS);
  readonly projects = computed(() => this.stats()?.projects_summary);
  readonly actionCount = computed(
    () => this.approvals().total + this.tasks().overdue + (this.projects()?.at_risk ?? 0),
  );
  readonly primaryValidationRoute = computed(() =>
    this.approvals().attendance_declarations > this.approvals().leave_requests
      ? '/manager/attendance/validation'
      : '/manager/team/leaves/validation',
  );
  readonly presenceRingBackground = computed(() => {
    const rate = Math.max(0, Math.min(100, this.presence().rate));
    return `conic-gradient(#16a085 0 ${rate}%, var(--color-surface-container-high) ${rate}% 100%)`;
  });
  readonly taskRingBackground = computed(() => {
    const summary = this.tasks();
    if (summary.total === 0) {
      return 'conic-gradient(var(--color-surface-container-high) 0 100%)';
    }

    const values = [summary.done, summary.in_progress, summary.review, summary.todo];
    const colors = ['#16a085', '#3f7ee8', '#e4a33a', '#8b7bd8'];
    const stops: string[] = [];
    let cursor = 0;

    values.forEach((value, index) => {
      if (value === 0) return;
      const next = cursor + (value / summary.total) * 100;
      stops.push(`${colors[index]} ${cursor}% ${next}%`);
      cursor = next;
    });

    return `conic-gradient(${stops.join(', ')})`;
  });

  readonly today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
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

    this.dashboardService.getManagerStats().subscribe({
      next: (stats) => {
        this.stats.set(stats);
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set('Impossible de charger les données de votre équipe.');
        this.loading.set(false);
        this.refreshing.set(false);
      },
    });
  }

  taskPercentage(value: number): number {
    const total = this.tasks().total;
    return total > 0 ? Math.round((value / total) * 100) : 0;
  }

  getInitials(firstName?: string, lastName?: string): string {
    return `${firstName?.charAt(0) ?? ''}${lastName?.charAt(0) ?? ''}`.toUpperCase() || '—';
  }

  attendanceLabel(status: ManagerAttendanceState): string {
    const labels: Record<ManagerAttendanceState, string> = {
      PRESENT: 'Présent',
      ABSENT: 'Absent',
      ON_LEAVE: 'En congé',
      NOT_DECLARED: 'Non déclaré',
      INACTIVE: 'Inactif',
    };
    return labels[status];
  }

  attendanceTone(status: ManagerAttendanceState): string {
    const tones: Record<ManagerAttendanceState, string> = {
      PRESENT: 'success',
      ABSENT: 'danger',
      ON_LEAVE: 'violet',
      NOT_DECLARED: 'neutral',
      INACTIVE: 'neutral',
    };
    return tones[status];
  }

  projectStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      PLANIFICATION: 'Planification',
      EN_COURS: 'En cours',
      EN_PAUSE: 'En pause',
      TERMINE: 'Terminé',
    };
    return labels[status] ?? status;
  }

  projectStatusTone(status: string): string {
    const tones: Record<string, string> = {
      PLANIFICATION: 'violet',
      EN_COURS: 'blue',
      EN_PAUSE: 'warning',
      TERMINE: 'success',
    };
    return tones[status] ?? 'neutral';
  }

  taskStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      TODO: 'À faire',
      IN_PROGRESS: 'En cours',
      REVIEW: 'En revue',
      DONE: 'Terminée',
    };
    return labels[status] ?? status;
  }

  priorityLabel(priority: string): string {
    const labels: Record<string, string> = {
      LOW: 'Faible',
      MEDIUM: 'Moyenne',
      HIGH: 'Haute',
      low: 'Faible',
      medium: 'Moyenne',
      high: 'Haute',
      critical: 'Critique',
    };
    return labels[priority] ?? priority;
  }

  priorityTone(priority: string): string {
    const normalized = priority.toUpperCase();
    if (normalized === 'CRITICAL' || normalized === 'HIGH') return 'danger';
    if (normalized === 'MEDIUM') return 'warning';
    return 'neutral';
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

  absenceTone(absence: ManagerDashboardAbsence): string {
    const tones: Record<string, string> = {
      CONGE_PAYE: 'violet',
      MALADIE: 'danger',
      SANS_SOLDE: 'warning',
      AUTRE: 'blue',
    };
    return tones[absence.type] ?? 'blue';
  }
}
