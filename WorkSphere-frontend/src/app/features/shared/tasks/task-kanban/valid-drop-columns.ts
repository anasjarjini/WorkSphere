import { Task, TaskStatus } from '../../../../core/models/task.model';
import { User } from '../../../../core/models/user.model';

const ALL_STATUSES: TaskStatus[] = ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'];

export function getValidDropColumns(task: Task, currentUser: User | null): TaskStatus[] {
  if (!currentUser || task.status === 'DONE') return [];

  const isAssignee = task.user_id === currentUser.id;
  const isManager = currentUser.role === 'MANAGER' || currentUser.role === 'HR_ADMIN';

  switch (task.status) {
    case 'TODO':
      if (isAssignee || isManager) return ['IN_PROGRESS'];
      return [];
    case 'IN_PROGRESS':
      if (isAssignee || isManager) return ['REVIEW'];
      return [];
    case 'REVIEW':
      if (isManager) return ['DONE', 'IN_PROGRESS'];
      return [];
    default:
      return [];
  }
}
