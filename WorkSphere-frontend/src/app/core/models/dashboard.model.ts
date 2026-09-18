/**
 * Modèles de données pour le tableau de bord (dashboard).
 * Définit les statistiques globales et la répartition par département.
 */

export interface DepartmentDistribution {
  department: string;
  count: number;
}

export interface DashboardStatusCounts {
  active: number;
  pending_activation: number;
  inactive: number;
  suspended: number;
}

export interface DashboardPendingActions {
  leave_requests: number;
  attendance_declarations: number;
  incomplete_profiles: number;
  total: number;
}

export interface DashboardPresenceToday {
  present: number;
  absent: number;
  on_leave: number;
  not_declared: number;
  total: number;
  rate: number;
}

export interface HeadcountTrendPoint {
  month: string;
  label: string;
  count: number;
  hires: number;
}

export interface DashboardEmployeeSummary {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string | null;
  hire_date: string;
  status: string;
  department: { id?: number; name: string } | null;
}

export interface DashboardUpcomingAbsence {
  id: number;
  type: string;
  start_date: string;
  end_date: string;
  duration_days: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    job_title?: string | null;
    department?: { id?: number; name: string } | null;
  } | null;
}

export interface DashboardStats {
  total_employees: number;
  active_count: number;
  pending_count: number;
  managers_count: number;
  regular_employees_count: number;
  departments_count: number;
  department_distribution: DepartmentDistribution[];
  recent_hires_count: number;
  status_counts: DashboardStatusCounts;
  pending_actions: DashboardPendingActions;
  presence_today: DashboardPresenceToday;
  employees_without_department: number;
  employees_without_manager: number;
  headcount_trend: HeadcountTrendPoint[];
  recent_hires: DashboardEmployeeSummary[];
  upcoming_absences: DashboardUpcomingAbsence[];
  last_updated_at: string;
}
