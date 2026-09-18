import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { vi } from 'vitest';
import { ManagerDashboardStats } from '../../../core/models/manager-dashboard.model';
import { AuthService } from '../../../core/services/auth.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import { ManagerDashboardComponent } from './dashboard.component';

const DASHBOARD_STATS: ManagerDashboardStats = {
  team_size: 4,
  active_members: 4,
  presence_today: {
    present: 2,
    absent: 1,
    on_leave: 1,
    not_declared: 0,
    total: 4,
    rate: 66.7,
  },
  pending_approvals: {
    leave_requests: 1,
    attendance_declarations: 2,
    total: 3,
  },
  task_summary: {
    todo: 2,
    in_progress: 1,
    review: 1,
    done: 4,
    overdue: 1,
    total: 8,
    completion_rate: 50,
  },
  projects_summary: {
    total: 1,
    active: 1,
    at_risk: 1,
    items: [
      {
        id: 7,
        name: 'Refonte mobile',
        reference_code: 'PRJ-2026-007',
        status: 'EN_COURS',
        priority: 'high',
        progress_percentage: 62,
        end_date: '2026-09-10',
        is_at_risk: false,
        tasks_total: 8,
        tasks_done: 4,
        tasks_overdue: 1,
      },
    ],
  },
  priority_tasks: [],
  upcoming_absences: [],
  team_members: [
    {
      id: 2,
      first_name: 'Amine',
      last_name: 'Bennani',
      email: 'amine@example.test',
      job_title: 'Designer',
      status: 'ACTIVE',
      department: { id: 1, name: 'Produit' },
      attendance_status: 'PRESENT',
    },
  ],
  last_updated_at: '2026-09-03T10:30:00+00:00',
};

describe('ManagerDashboardComponent', () => {
  let fixture: ComponentFixture<ManagerDashboardComponent>;
  let dashboardService: { getManagerStats: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dashboardService = {
      getManagerStats: vi.fn(() => of(DASHBOARD_STATS)),
    };

    await TestBed.configureTestingModule({
      imports: [ManagerDashboardComponent, RouterTestingModule],
      providers: [
        { provide: DashboardService, useValue: dashboardService },
        {
          provide: AuthService,
          useValue: {
            currentUser: signal({ first_name: 'Nadia', last_name: 'Alaoui' }),
            displayName: () => 'Nadia Alaoui',
          },
        },
      ],
    }).compileComponents();
  });

  it('loads and renders the scoped manager indicators', () => {
    fixture = TestBed.createComponent(ManagerDashboardComponent);
    fixture.detectChanges();

    const page = fixture.nativeElement as HTMLElement;
    expect(dashboardService.getManagerStats).toHaveBeenCalledOnce();
    expect(fixture.componentInstance.stats()).toEqual(DASHBOARD_STATS);
    expect(page.textContent).toContain('Bonjour, Nadia Alaoui');
    expect(page.textContent).toContain('Refonte mobile');
    expect(page.textContent).toContain('66.7%');
    expect(page.textContent).toContain('Amine Bennani');
  });

  it('shows an actionable error state when loading fails', () => {
    dashboardService.getManagerStats.mockReturnValue(throwError(() => new Error('network error')));

    fixture = TestBed.createComponent(ManagerDashboardComponent);
    fixture.detectChanges();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.textContent).toContain('Données temporairement indisponibles');
    expect(page.textContent).toContain('Réessayer');
  });
});
