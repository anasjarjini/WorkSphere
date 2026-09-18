export interface ManagerDashboardPresence {
  present: number;
  absent: number;
  on_leave: number;
  not_declared: number;
  total: number;
  rate: number;
}

export interface ManagerDashboardApprovals {
  leave_requests: number;
  attendance_declarations: number;
  total: number;
}

export interface ManagerDashboardTaskSummary {
  todo: number;
  in_progress: number;
  review: number;
  done: number;
  overdue: number;
  total: number;
  completion_rate: number;
}

export interface ManagerDashboardProject {
  id: number;
  name: string;
  reference_code: string | null;
  status: string;
  priority: string;
  progress_percentage: number;
  end_date: string | null;
  is_at_risk: boolean;
  tasks_total: number;
  tasks_done: number;
  tasks_overdue: number;
}

export interface ManagerDashboardProjectsSummary {
  total: number;
  active: number;
  at_risk: number;
  items: ManagerDashboardProject[];
}

export interface ManagerDashboardPerson {
  id: number;
  first_name: string;
  last_name: string;
}

export interface ManagerDashboardTask {
  id: number;
  title: string;
  reference_code: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  is_overdue: boolean;
  assignee: ManagerDashboardPerson | null;
  project: { id: number; name: string; reference_code: string | null } | null;
}

export interface ManagerDashboardAbsence {
  id: number;
  type: string;
  start_date: string;
  end_date: string;
  duration_days: number;
  user: (ManagerDashboardPerson & { job_title: string | null }) | null;
}

export type ManagerAttendanceState =
  'PRESENT' | 'ABSENT' | 'ON_LEAVE' | 'NOT_DECLARED' | 'INACTIVE';

export interface ManagerDashboardMember extends ManagerDashboardPerson {
  email: string;
  job_title: string | null;
  status: string;
  department: { id: number; name: string } | null;
  attendance_status: ManagerAttendanceState;
}

export interface ManagerDashboardStats {
  team_size: number;
  active_members: number;
  presence_today: ManagerDashboardPresence;
  pending_approvals: ManagerDashboardApprovals;
  task_summary: ManagerDashboardTaskSummary;
  projects_summary: ManagerDashboardProjectsSummary;
  priority_tasks: ManagerDashboardTask[];
  upcoming_absences: ManagerDashboardAbsence[];
  team_members: ManagerDashboardMember[];
  last_updated_at: string;
}
