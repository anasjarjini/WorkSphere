import { User } from './user.model';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';

export interface Task {
  id: number;
  project_id: number;
  company_id: number;
  user_id?: number;
  creator_id: number;
  title: string;
  reference_code: string;
  description?: string;
  status: TaskStatus;
  priority?: string;
  due_date?: string;
  estimated_hours?: number;
  actual_hours?: number;
  completed_at?: string;
  created_at?: string;
  updated_at?: string;
  assigned_user?: User;
  creator?: User;
  project?: { id: number; name: string; reference_code: string };
  comments_count?: number;
  attachments_count?: number;
}

export interface TaskComment {
  id: number;
  task_id: number;
  user_id: number;
  parent_id?: number;
  content: string;
  created_at?: string;
  updated_at?: string;
  user?: User;
  replies?: TaskComment[];
}

export interface TaskAttachment {
  id: number;
  task_id: number;
  user_id: number;
  file_name: string;
  file_size: number;
  mime_type?: string;
  created_at?: string;
  user?: User;
}

export interface TaskDependency {
  id: number;
  task_id: number;
  depends_on_task_id: number;
  created_at?: string;
  dependsOnTask?: Task;
}

export interface TaskHistoryEntry {
  type: 'status_change' | 'assignment_change';
  user: { id: number; first_name: string; last_name: string } | null;
  created_at: string;
  old_status?: string | null;
  new_status?: string | null;
  old_user?: { id: number; first_name: string; last_name: string } | null;
  new_user?: { id: number; first_name: string; last_name: string } | null;
}
