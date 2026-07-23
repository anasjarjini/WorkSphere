import { User } from './user.model';
import { Department } from './department.model';

export type AnnouncementType = 'GENERAL' | 'MEETING' | 'TRAINING' | 'POLICY';

export interface Announcement {
  id: number;
  title: string;
  content: string;
  type: AnnouncementType;
  department_id?: number;
  creator_id: number;
  meeting_date?: string;
  meeting_link?: string;
  training_link?: string;
  created_at?: string;
  updated_at?: string;
  department?: Department;
  creator?: User;
}
