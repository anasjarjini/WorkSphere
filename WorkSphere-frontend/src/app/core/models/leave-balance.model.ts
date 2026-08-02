import { AbsenceType } from './absence.model';

export interface LeaveBalance {
  id: number;
  company_id: number;
  user_id: number;
  year: number;
  type: AbsenceType;
  allocated_days: number;
  used_days: number;
  carried_over_days: number;
  remaining_days: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user?: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    department_id: number | null;
  };
}
