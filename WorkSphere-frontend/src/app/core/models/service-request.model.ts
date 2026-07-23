import { User } from './user.model';
import { Department } from './department.model';

export type RequestStatus = 'PENDING' | 'APPROVED' | 'IN_DEVELOPMENT' | 'TESTING' | 'DEPLOYED' | 'REJECTED';

export interface ServiceRequest {
  id: number;
  reference_code: string;
  title: string;
  description?: string;
  status: RequestStatus;
  priority?: string;
  from_department_id?: number;
  to_department_id?: number;
  creator_id: number;
  developer_id?: number;
  project_id?: number;
  rejection_reason?: string;
  assigned_at?: string;
  resolved_at?: string;
  created_at?: string;
  updated_at?: string;
  from_department?: Department;
  to_department?: Department;
  creator?: User;
  developer?: User;
  project?: { id: number; name: string; reference_code: string };
}
