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
import { TaskService } from '../../../core/services/task.service';
import {
  EmployeeAttendanceState,
  EmployeeDashboardAnnouncement,
  EmployeeDashboardRequest,
  EmployeeDashboardStats,
  EmployeePriorityTask,
  EmployeeTaskSummary,
  EmployeeTodayAttendance,
} from '../../../core/models/employee-dashboard.model';
import { TaskStatus } from '../../../core/models/task.model';

const EMPTY_TASK_SUMMARY: EmployeeTaskSummary = {
  todo: 0,
  in_progress: 0,
  review: 0,
  done: 0,
  overdue: 0,
  due_today: 0,
  total: 0,
  open: 0,
  completion_rate: 0,
};

const EMPTY_ATTENDANCE: EmployeeTodayAttendance = {
  status: 'NOT_DECLARED',
  is_on_leave: false,
  declaration_id: null,
  validation_status: null,
  rejection_reason: null,
};

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(DashboardService);
  private readonly taskService = inject(TaskService);

  readonly userName = computed(() => this.authService.displayName(this.authService.currentUser()));
  readonly employeeReference = computed(() => {
    const id = this.authService.currentUser()?.id;
    return id ? `EMP-WS-${String(id).padStart(3, '0')}` : 'EMP-WS';
  });
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal<string | null>(null);
  readonly taskActionError = signal<string | null>(null);
  readonly updatingTaskId = signal<number | null>(null);
  readonly stats = signal<EmployeeDashboardStats | null>(null);

  readonly attendance = computed(() => this.stats()?.today_attendance ?? EMPTY_ATTENDANCE);
  readonly tasks = computed(() => this.stats()?.task_summary ?? EMPTY_TASK_SUMMARY);
  readonly attendanceActionLabel = computed(() => {
    if (this.attendance().status === 'ON_LEAVE') return 'Voir mon congé';
    if (this.attendance().status === 'NOT_DECLARED') return 'Déclarer ma présence';
    if (this.attendance().validation_status === 'REJETEE') return 'Corriger ma déclaration';
    return 'Voir ma déclaration';
  });
  readonly attendanceRingBackground = computed(() => {
    const rate = Math.max(0, Math.min(100, this.stats()?.attendance_month.presence_rate ?? 0));
    return `conic-gradient(var(--dash-primary) 0 ${rate}%, var(--dash-soft-strong) ${rate}% 100%)`;
  });
  readonly attendancePresentRate = computed(() => {
    const month = this.stats()?.attendance_month;
    return month ? this.attendanceShare(month.present, month.declared_days) : 0;
  });
  readonly attendanceAbsentRate = computed(() => {
    const month = this.stats()?.attendance_month;
    return month ? this.attendanceShare(month.absent, month.declared_days) : 0;
  });
  readonly leaveAvailabilityRate = computed(() => {
    const balance = this.stats()?.leave_summary.paid_balance;
    if (!balance) return 0;
    const available = balance.allocated_days + balance.carried_over_days;
    return available > 0 ? Math.round((balance.remaining_days / available) * 100) : 0;
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

    this.dashboardService.getEmployeeStats().subscribe({
      next: (stats) => {
        this.stats.set(stats);
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set('Impossible de charger votre espace personnel.');
        this.loading.set(false);
        this.refreshing.set(false);
      },
    });
  }

  advanceTask(task: EmployeePriorityTask): void {
    const nextStatus: TaskStatus | null =
      task.status === 'TODO' ? 'IN_PROGRESS' : task.status === 'IN_PROGRESS' ? 'REVIEW' : null;

    if (!nextStatus || this.updatingTaskId() !== null) return;

    this.taskActionError.set(null);
    this.updatingTaskId.set(task.id);
    this.taskService.updateStatus(task.id, nextStatus).subscribe({
      next: () => {
        this.updatingTaskId.set(null);
        this.loadDashboard();
      },
      error: () => {
        this.updatingTaskId.set(null);
        this.taskActionError.set('La tâche n’a pas pu être mise à jour. Réessayez.');
      },
    });
  }

  taskActionLabel(status: TaskStatus): string | null {
    if (status === 'TODO') return 'Commencer';
    if (status === 'IN_PROGRESS') return 'Soumettre';
    return null;
  }

  taskActionIcon(status: TaskStatus): string {
    return status === 'TODO' ? 'play_arrow' : 'send';
  }

  attendanceLabel(status: EmployeeAttendanceState): string {
    const labels: Record<EmployeeAttendanceState, string> = {
      PRESENT: 'Présent',
      ABSENT: 'Absent',
      ON_LEAVE: 'En congé',
      NOT_DECLARED: 'À déclarer',
    };
    return labels[status];
  }

  attendanceTone(status: EmployeeAttendanceState): string {
    const tones: Record<EmployeeAttendanceState, string> = {
      PRESENT: 'success',
      ABSENT: 'danger',
      ON_LEAVE: 'violet',
      NOT_DECLARED: 'warning',
    };
    return tones[status];
  }

  attendanceIcon(status: EmployeeAttendanceState): string {
    const icons: Record<EmployeeAttendanceState, string> = {
      PRESENT: 'how_to_reg',
      ABSENT: 'person_off',
      ON_LEAVE: 'beach_access',
      NOT_DECLARED: 'edit_calendar',
    };
    return icons[status];
  }

  validationLabel(status: EmployeeTodayAttendance['validation_status']): string {
    const labels: Record<string, string> = {
      EN_ATTENTE: 'En attente de validation',
      VALIDEE: 'Déclaration validée',
      REJETEE: 'Déclaration rejetée',
    };
    return status ? labels[status] : 'Aucune déclaration enregistrée';
  }

  taskStatusLabel(status: TaskStatus): string {
    const labels: Record<TaskStatus, string> = {
      TODO: 'À faire',
      IN_PROGRESS: 'En cours',
      REVIEW: 'En révision',
      DONE: 'Terminée',
    };
    return labels[status];
  }

  taskStatusTone(status: TaskStatus): string {
    const tones: Record<TaskStatus, string> = {
      TODO: 'neutral',
      IN_PROGRESS: 'blue',
      REVIEW: 'warning',
      DONE: 'success',
    };
    return tones[status];
  }

  priorityLabel(priority: string): string {
    const labels: Record<string, string> = {
      LOW: 'Faible',
      MEDIUM: 'Moyenne',
      HIGH: 'Haute',
      CRITICAL: 'Critique',
    };
    return labels[priority.toUpperCase()] ?? priority;
  }

  priorityTone(priority: string): string {
    const normalized = priority.toUpperCase();
    if (normalized === 'HIGH' || normalized === 'CRITICAL') return 'danger';
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

  requestStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      PENDING: 'En attente',
      APPROVED: 'Approuvée',
      IN_DEVELOPMENT: 'En traitement',
      TESTING: 'En test',
      DEPLOYED: 'Terminée',
      REJECTED: 'Rejetée',
    };
    return labels[status] ?? status;
  }

  requestStatusTone(status: string): string {
    const tones: Record<string, string> = {
      PENDING: 'warning',
      APPROVED: 'blue',
      IN_DEVELOPMENT: 'violet',
      TESTING: 'blue',
      DEPLOYED: 'success',
      REJECTED: 'danger',
    };
    return tones[status] ?? 'neutral';
  }

  announcementIcon(announcement: EmployeeDashboardAnnouncement): string {
    const icons: Record<string, string> = {
      GENERAL: 'campaign',
      MEETING: 'groups',
      TRAINING: 'school',
      POLICY: 'policy',
    };
    return icons[announcement.type] ?? 'campaign';
  }

  announcementTone(announcement: EmployeeDashboardAnnouncement): string {
    const tones: Record<string, string> = {
      GENERAL: 'blue',
      MEETING: 'violet',
      TRAINING: 'success',
      POLICY: 'warning',
    };
    return tones[announcement.type] ?? 'blue';
  }

  requestDestination(request: EmployeeDashboardRequest): string {
    return request.to_department?.name ?? 'Service concerné';
  }

  getInitials(firstName?: string, lastName?: string): string {
    return `${firstName?.charAt(0) ?? ''}${lastName?.charAt(0) ?? ''}`.toUpperCase() || '—';
  }

  private attendanceShare(value: number, total: number): number {
    return total > 0 ? Math.max(0, Math.min(100, Math.round((value / total) * 1000) / 10)) : 0;
  }
}
