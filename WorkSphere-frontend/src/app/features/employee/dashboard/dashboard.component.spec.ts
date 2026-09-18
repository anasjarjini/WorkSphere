import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { vi } from 'vitest';
import { EmployeeDashboardStats } from '../../../core/models/employee-dashboard.model';
import { AuthService } from '../../../core/services/auth.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import { TaskService } from '../../../core/services/task.service';
import { EmployeeDashboardComponent } from './dashboard.component';

const DASHBOARD_STATS: EmployeeDashboardStats = {
  profile: {
    department: { id: 1, name: 'Produit' },
    manager: {
      id: 2,
      first_name: 'Nadia',
      last_name: 'Alaoui',
      email: 'nadia@example.test',
      job_title: 'Lead Produit',
    },
  },
  today_attendance: {
    status: 'NOT_DECLARED',
    is_on_leave: false,
    declaration_id: null,
    validation_status: null,
    rejection_reason: null,
  },
  task_summary: {
    todo: 1,
    in_progress: 1,
    review: 0,
    done: 2,
    overdue: 1,
    due_today: 0,
    total: 4,
    open: 2,
    completion_rate: 50,
  },
  priority_tasks: [
    {
      id: 5,
      title: 'Finaliser le parcours mobile',
      reference_code: 'TSK-2026-005',
      status: 'TODO',
      priority: 'HIGH',
      due_date: '2026-09-03',
      is_overdue: true,
      is_due_today: false,
      project: { id: 7, name: 'Application mobile', reference_code: 'PRJ-2026-007' },
      creator: { id: 2, first_name: 'Nadia', last_name: 'Alaoui' },
    },
  ],
  attendance_month: {
    present: 3,
    absent: 1,
    pending: 1,
    rejected: 0,
    declared_days: 4,
    presence_rate: 75,
  },
  leave_summary: {
    paid_balance: {
      configured: true,
      allocated_days: 20,
      carried_over_days: 2,
      used_days: 5,
      remaining_days: 17,
      usage_rate: 22.7,
    },
    pending_requests: 1,
    approved_upcoming: 1,
    next_absence: {
      id: 3,
      type: 'CONGE_PAYE',
      start_date: '2026-09-18',
      end_date: '2026-09-20',
      duration_days: 3,
      is_current: false,
    },
  },
  request_summary: {
    total: 1,
    active: 1,
    pending: 1,
    items: [
      {
        id: 9,
        title: 'Accès au serveur de test',
        reference_code: 'REQ-2026-009',
        status: 'PENDING',
        priority: 'MEDIUM',
        updated_at: '2026-09-04T09:00:00+00:00',
        to_department: { id: 4, name: 'Support' },
      },
    ],
  },
  announcements: [
    {
      id: 11,
      title: 'Nouvelle politique hybride',
      excerpt: 'Une information importante pour les collaborateurs.',
      type: 'GENERAL',
      target_scope: 'COMPANY',
      published_at: '2026-09-04T08:00:00+00:00',
      creator: {
        id: 2,
        first_name: 'Nadia',
        last_name: 'Alaoui',
        job_title: 'Lead Produit',
      },
    },
  ],
  next_holiday: { id: 2, name: 'Fête nationale', date: '2026-09-10' },
  last_updated_at: '2026-09-04T10:30:00+00:00',
};

describe('EmployeeDashboardComponent', () => {
  let fixture: ComponentFixture<EmployeeDashboardComponent>;
  let dashboardService: { getEmployeeStats: ReturnType<typeof vi.fn> };
  let taskService: { updateStatus: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dashboardService = {
      getEmployeeStats: vi.fn(() => of(DASHBOARD_STATS)),
    };
    taskService = {
      updateStatus: vi.fn(() => of({})),
    };

    await TestBed.configureTestingModule({
      imports: [EmployeeDashboardComponent, RouterTestingModule],
      providers: [
        { provide: DashboardService, useValue: dashboardService },
        { provide: TaskService, useValue: taskService },
        {
          provide: AuthService,
          useValue: {
            currentUser: signal({ first_name: 'Amine', last_name: 'Bennani' }),
            displayName: () => 'Amine Bennani',
          },
        },
      ],
    }).compileComponents();
  });

  it('loads and renders the employee priorities', () => {
    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    fixture.detectChanges();

    const page = fixture.nativeElement as HTMLElement;
    expect(dashboardService.getEmployeeStats).toHaveBeenCalledOnce();
    expect(page.textContent).toContain('Bonjour, Amine Bennani');
    expect(page.textContent).toContain('Finaliser le parcours mobile');
    expect(page.textContent).toContain('Accès au serveur de test');
    expect(page.textContent).toContain('Nouvelle politique hybride');
  });

  it('starts a todo task and refreshes the dashboard', () => {
    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    fixture.detectChanges();

    const action = fixture.nativeElement.querySelector('.task-action') as HTMLButtonElement;
    action.click();
    fixture.detectChanges();

    expect(taskService.updateStatus).toHaveBeenCalledWith(5, 'IN_PROGRESS');
    expect(dashboardService.getEmployeeStats).toHaveBeenCalledTimes(2);
  });

  it('shows a retry action when the dashboard cannot load', () => {
    dashboardService.getEmployeeStats.mockReturnValue(throwError(() => new Error('network error')));

    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    fixture.detectChanges();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.textContent).toContain('Votre espace est temporairement indisponible');
    expect(page.textContent).toContain('Réessayer');
  });
});
