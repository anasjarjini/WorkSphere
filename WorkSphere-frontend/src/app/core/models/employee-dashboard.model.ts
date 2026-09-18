import { TaskStatus } from './task.model';

export type EmployeeAttendanceState = 'PRESENT' | 'ABSENT' | 'ON_LEAVE' | 'NOT_DECLARED';

export interface EmployeeDashboardProfile {
  department: { id: number; name: string } | null;
  manager: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    job_title: string | null;
  } | null;
}

export interface EmployeeTodayAttendance {
  status: EmployeeAttendanceState;
  is_on_leave: boolean;
  declaration_id: number | null;
  validation_status: 'EN_ATTENTE' | 'VALIDEE' | 'REJETEE' | null;
  rejection_reason: string | null;
}

export interface EmployeeTaskSummary {
  todo: number;
  in_progress: number;
  review: number;
  done: number;
  overdue: number;
  due_today: number;
  total: number;
  open: number;
  completion_rate: number;
}

export interface EmployeePriorityTask {
  id: number;
  title: string;
  reference_code: string | null;
  status: TaskStatus;
  priority: string;
  due_date: string | null;
  is_overdue: boolean;
  is_due_today: boolean;
  project: { id: number; name: string; reference_code: string | null } | null;
  creator: { id: number; first_name: string; last_name: string } | null;
}

export interface EmployeeAttendanceMonth {
  present: number;
  absent: number;
  pending: number;
  rejected: number;
  declared_days: number;
  presence_rate: number;
}

export interface EmployeePaidLeaveBalance {
  configured: boolean;
  allocated_days: number;
  carried_over_days: number;
  used_days: number;
  remaining_days: number;
  usage_rate: number;
}

export interface EmployeeNextAbsence {
  id: number;
  type: string;
  start_date: string;
  end_date: string;
  duration_days: number;
  is_current: boolean;
}

export interface EmployeeLeaveSummary {
  paid_balance: EmployeePaidLeaveBalance;
  pending_requests: number;
  approved_upcoming: number;
  next_absence: EmployeeNextAbsence | null;
}

export interface EmployeeDashboardRequest {
  id: number;
  title: string;
  reference_code: string | null;
  status: string;
  priority: string;
  updated_at: string | null;
  to_department: { id: number; name: string } | null;
}

export interface EmployeeRequestSummary {
  total: number;
  active: number;
  pending: number;
  items: EmployeeDashboardRequest[];
}

export interface EmployeeDashboardAnnouncement {
  id: number;
  title: string;
  excerpt: string;
  type: string;
  target_scope: string;
  published_at: string | null;
  creator: {
    id: number;
    first_name: string;
    last_name: string;
    job_title: string | null;
  } | null;
}

export interface EmployeeDashboardStats {
  profile: EmployeeDashboardProfile;
  today_attendance: EmployeeTodayAttendance;
  task_summary: EmployeeTaskSummary;
  priority_tasks: EmployeePriorityTask[];
  attendance_month: EmployeeAttendanceMonth;
  leave_summary: EmployeeLeaveSummary;
  request_summary: EmployeeRequestSummary;
  announcements: EmployeeDashboardAnnouncement[];
  next_holiday: { id: number; name: string; date: string } | null;
  last_updated_at: string;
}
