import { Component, ViewChild, inject, signal, computed, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../../core/services/task.service';
import { TaskCommentService } from '../../../../core/services/task-comment.service';
import { TaskAttachmentService } from '../../../../core/services/task-attachment.service';
import { TaskDependencyService } from '../../../../core/services/task-dependency.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { FileUploaderComponent } from '../../../../shared/components/file-uploader/file-uploader.component';
import { Task, TaskStatus, TaskComment, TaskAttachment, TaskDependency, TaskHistoryEntry } from '../../../../core/models/task.model';

const STATUS_LABELS: Record<TaskStatus, string> = {
  TODO: 'À faire', IN_PROGRESS: 'En cours', REVIEW: 'En révision', DONE: 'Terminé',
};

const PRIORITY_LABELS: Record<string, string> = {
  LOW: 'Faible', MEDIUM: 'Moyenne', HIGH: 'Haute', CRITICAL: 'Critique',
};

const STATUS_CLASSES: Record<TaskStatus, string> = {
  TODO: 'bg-background-alt text-text-secondary',
  IN_PROGRESS: 'bg-primary-100 text-primary',
  REVIEW: 'bg-warning-light text-warning-dark',
  DONE: 'bg-accent-light text-accent-dark',
};

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterModule, FormsModule, AvatarComponent, FileUploaderComponent, DatePipe],
  templateUrl: './task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly taskService = inject(TaskService);
  private readonly commentService = inject(TaskCommentService);
  private readonly attachmentService = inject(TaskAttachmentService);
  private readonly dependencyService = inject(TaskDependencyService);
  private readonly authService = inject(AuthService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly user = this.authService.currentUser;
  readonly task = signal<Task | null>(null);
  readonly comments = signal<TaskComment[]>([]);
  readonly attachments = signal<TaskAttachment[]>([]);
  readonly dependencies = signal<TaskDependency[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly history = signal<TaskHistoryEntry[]>([]);
  readonly newCommentContent = signal('');
  @ViewChild(FileUploaderComponent) private fileUploader?: FileUploaderComponent;

  private taskId!: number;

  readonly currentUserId = computed(() => this.user()?.id);
  readonly currentUserRole = computed(() => this.user()?.role);

  readonly isAssignedToCurrentUser = computed(() => {
    const t = this.task();
    return t?.user_id === this.currentUserId();
  });

  readonly isTaskCreator = computed(() => {
    const t = this.task();
    return t?.creator_id === this.currentUserId();
  });

  readonly isManager = computed(() => {
    return this.currentUserRole() === 'MANAGER' || this.currentUserRole() === 'HR_ADMIN';
  });

  readonly canStart = computed(() => {
    return this.task()?.status === 'TODO' && this.isAssignedToCurrentUser();
  });

  readonly canSubmitForReview = computed(() => {
    return this.task()?.status === 'IN_PROGRESS' && this.isAssignedToCurrentUser();
  });

  readonly canApproveOrRework = computed(() => {
    return this.task()?.status === 'REVIEW' && (this.isTaskCreator() || this.isManager());
  });

  readonly showActions = computed(() => {
    return this.canStart() || this.canSubmitForReview() || this.canApproveOrRework();
  });

  readonly projectTasks = signal<Task[]>([]);

  constructor() {
    this.taskService.getMyTasks().subscribe({
      next: (tasks) => this.projectTasks.set(tasks),
      error: () => {}
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskId = +id;
      this.loadTask(+id);
      this.loadComments(+id);
      this.loadAttachments(+id);
      this.loadDependencies(+id);
      this.loadHistory(+id);
    }
  }

  private loadTask(id: number): void {
    this.taskService.getTask(id).subscribe({
      next: (data) => {
        this.task.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  private loadComments(taskId: number): void {
    this.commentService.getComments(taskId).subscribe({
      next: (data) => this.comments.set(data),
      error: () => {}
    });
  }

  private loadAttachments(taskId: number): void {
    this.attachmentService.getAttachments(taskId).subscribe({
      next: (data) => this.attachments.set(data),
      error: () => {}
    });
  }

  private loadDependencies(taskId: number): void {
    this.dependencyService.getDependencies(taskId).subscribe({
      next: (data) => this.dependencies.set(data),
      error: () => {}
    });
  }

  private loadHistory(taskId: number): void {
    this.taskService.getHistory(taskId).subscribe({
      next: (data) => this.history.set(data),
      error: () => {}
    });
  }

  relativeTime(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return 'à l\'instant';
    if (diffMin < 60) return `il y a ${diffMin} min`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `il y a ${diffHours}h`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    return date.toLocaleDateString('fr-FR');
  }

  formatStatus(status?: string | null): string {
    if (!status) return 'N/A';
    return STATUS_LABELS[status as TaskStatus] || status;
  }

  getStatusIcon(status: TaskStatus | string | null | undefined): string {
    switch (status) {
      case 'TODO': return 'radio_button_unchecked';
      case 'IN_PROGRESS': return 'pending_actions';
      case 'REVIEW': return 'rate_review';
      case 'DONE': return 'check_circle';
      default: return 'circle';
    }
  }

  getStatusLabel(status: TaskStatus | string | null | undefined): string {
    return STATUS_LABELS[status as TaskStatus] || status || 'N/A';
  }

  getPriorityLabel(priority: string | null | undefined): string {
    return PRIORITY_LABELS[priority || ''] || priority || '—';
  }

  getStatusClass(status: TaskStatus | string | null | undefined): string {
    return STATUS_CLASSES[status as TaskStatus] || 'bg-background-alt text-text-secondary';
  }

  updateStatus(status: TaskStatus): void {
    this.saving.set(true);
    this.taskService.updateStatus(this.taskId, status).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }

  addComment(parentId?: number): void {
    const content = this.newCommentContent();
    if (!content.trim()) return;

    this.saving.set(true);
    this.commentService.addComment(this.taskId, { content, parent_id: parentId }).subscribe({
      next: () => {
        this.newCommentContent.set('');
        this.loadComments(this.taskId);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }

  addReply(parentId: number): void {
    this.replyContent.update(c => ({ ...c, [parentId]: '' }));
    this.addComment(parentId);
  }

  readonly replyContent = signal<Record<number, string>>({});
  readonly replyVisible = signal<Set<number>>(new Set());

  setReplyContent(parentId: number, value: string): void {
    this.replyContent.update(c => ({ ...c, [parentId]: value }));
  }

  toggleReply(commentId: number): void {
    this.replyVisible.update(s => {
      const next = new Set(s);
      if (next.has(commentId)) next.delete(commentId);
      else next.add(commentId);
      return next;
    });
  }

  isReplyVisible(commentId: number): boolean {
    return this.replyVisible().has(commentId);
  }

  getReplyContent(parentId: number): string {
    return this.replyContent()[parentId] || '';
  }

  onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.onAttachmentSelected(file);
    input.value = '';
  }

  onAttachmentSelected(file: File): void {
    this.attachmentService.uploadAttachment(this.taskId, file).subscribe({
      next: () => {
        this.loadAttachments(this.taskId);
        this.fileUploader?.clear();
      },
      error: () => {}
    });
  }

  getAttachmentUrl(attachment: TaskAttachment): string {
    return this.attachmentService.getDownloadUrl(attachment);
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }

  addDependency(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const dependsOnTaskId = +select.value;
    if (!dependsOnTaskId) return;
    this.dependencyService.addDependency(this.taskId, dependsOnTaskId).subscribe({
      next: () => {
        this.loadDependencies(this.taskId);
        select.value = '';
      },
      error: () => {}
    });
  }

  removeDependency(dep: TaskDependency): void {
    this.dependencyService.removeDependency(this.taskId, dep.id).subscribe({
      next: () => this.loadDependencies(this.taskId),
      error: () => {}
    });
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
  }

  get rootComments(): TaskComment[] {
    return this.comments().filter(c => !c.parent_id);
  }

  getReplies(commentId: number): TaskComment[] {
    return this.comments().filter(c => c.parent_id === commentId);
  }

  get dependencyCandidates(): Task[] {
    const t = this.task();
    if (!t) return [];
    const depIds = new Set(this.dependencies().map(d => d.depends_on_task_id));
    return this.projectTasks().filter(pt => pt.id !== t.id && !depIds.has(pt.id));
  }
}
