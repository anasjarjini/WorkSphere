import { User } from './user.model';

export type ProjectStatus = 'PLANIFICATION' | 'EN_COURS' | 'EN_PAUSE' | 'TERMINE';

export interface Project {
  id: number;
  company_id: number;
  creator_id: number;
  name: string;
  reference_code: string;
  description?: string;
  status: ProjectStatus;
  priority?: string;
  progress_percentage: number;
  start_date?: string;
  end_date?: string;
  estimated_budget?: number;
  actual_cost?: number;
  currency?: string;
  cahier_charges_url?: string;
  created_at?: string;
  updated_at?: string;
  tasks_count?: number;
  creator?: User;
}
