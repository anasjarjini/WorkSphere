import { User } from './user.model';

export type AttendanceStatus = 'PRESENT' | 'ABSENT';
export type AttendanceValidationStatus = 'EN_ATTENTE' | 'VALIDEE' | 'REJETEE';

export interface AttendanceDeclaration {
  id: number;
  company_id: number;
  user_id: number;
  date: string;
  status: AttendanceStatus;
  validation_status: AttendanceValidationStatus;
  validated_by: number | null;
  validated_at: string | null;
  manager_validated_by: number | null;
  manager_validated_at: string | null;
  rejection_reason: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user?: User;
  validator?: User;
}
