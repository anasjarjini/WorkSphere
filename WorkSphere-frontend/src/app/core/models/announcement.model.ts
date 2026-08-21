import { User } from './user.model';
import { Department } from './department.model';

export type AnnouncementType = 'GENERAL' | 'MEETING' | 'TRAINING' | 'POLICY';
export type AnnouncementScope = 'COMPANY' | 'TEAM';
export type AnnouncementStatus = 'draft' | 'published' | 'archived';

export interface Announcement {
  id: number;
  title: string;
  content: string;
  type: AnnouncementType;
  department_id?: number;
  creator_id: number;
  target_scope: AnnouncementScope;
  target_manager_id?: number | null;
  status: AnnouncementStatus;
  published_at?: string;
  meeting_date?: string;
  meeting_link?: string;
  training_link?: string;
  created_at?: string;
  updated_at?: string;
  department?: Department;
  creator?: User;
  targetManager?: User;
}
