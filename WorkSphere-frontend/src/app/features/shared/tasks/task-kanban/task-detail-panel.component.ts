import { Component, input, output, signal, computed, OnInit, OnChanges, SimpleChanges, inject, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../../core/services/task.service';
import { TaskCommentService } from '../../../../core/services/task-comment.service';
import { TaskAttachmentService } from '../../../../core/services/task-attachment.service';
import { TaskDependencyService } from '../../../../core/services/task-dependency.service';
import { AuthService } from '../../../../core/services/auth.service';
import { EmployeeService } from '../../../../core/services/employee.service';
import { ImageUrlService } from '../../../../core/services/image-url.service';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { FileUploaderComponent } from '../../../../shared/components/file-uploader/file-uploader.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
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
  selector: 'app-task-detail-panel',
  standalone: true,
  imports: [FormsModule, AvatarComponent, FileUploaderComponent, ConfirmDialogComponent, DatePipe],
  templateUrl: './task-detail-panel.component.html',
})
export class TaskDetailPanelComponent implements OnInit {
  private readonly taskService = inject(TaskService);
  private readonly commentService = inject(TaskCommentService);
  private readonly attachmentService = inject(TaskAttachmentService);
  private readonly dependencyService = inject(TaskDependencyService);
  private readonly authService = inject(AuthService);
  private readonly employeeService = inject(EmployeeService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly task = input.required<Task>();
  readonly taskUpdated = output<Task>();
  readonly close = output<void>();

  readonly user = this.authService.currentUser;
  readonly currentTask = signal<Task | null>(null);
  readonly comments = signal<TaskComment[]>([]);
  readonly attachments = signal<TaskAttachment[]>([]);
  readonly dependencies = signal<TaskDependency[]>([]);
  readonly history = signal<TaskHistoryEntry[]>([]);
  readonly teamMembers = signal<{ id: number; first_name: string; last_name: string }[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  @ViewChild(FileUploaderComponent) private fileUploader?: FileUploaderComponent;

  readonly currentUserId = computed(() => this.user()?.id);
  readonly currentUserRole = computed(() => this.user()?.role);
  readonly isManager = computed(() => this.currentUserRole() === 'MANAGER' || this.currentUserRole() === 'HR_ADMIN');
  readonly isAssignedToCurrentUser = computed(() => this.currentTask()?.user_id === this.currentUserId());
  readonly isTaskCreator = computed(() => this.currentTask()?.creator_id === this.currentUserId());
  readonly currentStatus = computed(() => this.currentTask()?.status);
  readonly activeTab = signal<'activity' | 'comments' | 'attachments' | 'dependencies'>('activity');

  readonly canStart = computed(() => this.currentStatus() === 'TODO' && this.isAssignedToCurrentUser());
  readonly canSubmitForReview = computed(() => this.currentStatus() === 'IN_PROGRESS' && this.isAssignedToCurrentUser());
  readonly canApproveOrRework = computed(() => this.currentStatus() === 'REVIEW' && this.isTaskCreator());

  readonly showNoActions = computed(() => {
    const status = this.currentStatus();
    if (status === 'DONE') return false;
    if (this.canStart() || this.canSubmitForReview() || this.canApproveOrRework()) return false;
    return true;
  });

  readonly noActionsMessage = computed(() => {
    const status = this.currentStatus();
    if (status === 'TODO') return 'Cette tâche ne t\'est pas assignée.';
    if (status === 'IN_PROGRESS') return 'En attente que l\'assigné soumette la tâche en révision.';
    if (status === 'REVIEW') return 'En attente de validation par le créateur de la tâche.';
    return '';
  });

  readonly commentsCount = computed(() => this.comments().length);
  readonly attachmentsCount = computed(() => this.attachments().length);

  // Confirm dialog state
  readonly showConfirmDialog = signal(false);
  readonly confirmTitle = signal('');
  readonly confirmMessage = signal('');
  readonly confirmAction = signal<'assign' | 'submit_review' | 'approve' | 'rework' | null>(null);
  readonly showReworkNote = signal(false);
  readonly reworkNote = signal('');

  // Assign modal state
  readonly showAssignModal = signal(false);
  readonly assignSearch = signal('');
  readonly selectedUserId = signal<number | null>(null);
  readonly assignConfirmStep = signal(false);

  // Comment state
  readonly newCommentContent = signal('');
  readonly replyContent = signal<Record<number, string>>({});
  readonly replyVisible = signal<Set<number>>(new Set());
  readonly projectTasks = signal<Task[]>([]);

  ngOnInit(): void {
    const t = this.task();
    if (t) {
      this.currentTask.set(t);
      this.loadData(t.id);
    }
    this.taskService.getMyTasks().subscribe({
      next: (tasks) => this.projectTasks.set(tasks),
    });
  }

  private loadData(taskId: number): void {
    this.taskService.getTask(taskId).subscribe({
      next: (t) => {
        this.currentTask.set(t);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
    this.commentService.getComments(taskId).subscribe({
      next: (data) => this.comments.set(data),
    });
    this.attachmentService.getAttachments(taskId).subscribe({
      next: (data) => this.attachments.set(data),
    });
    this.dependencyService.getDependencies(taskId).subscribe({
      next: (data) => this.dependencies.set(data),
    });
    this.taskService.getHistory(taskId).subscribe({
      next: (data) => this.history.set(data),
    });
  }

  getStatusLabel(status: TaskStatus): string {
    return STATUS_LABELS[status];
  }

  getPriorityLabel(priority: string | null | undefined): string {
    return PRIORITY_LABELS[priority || ''] || priority || '—';
  }

  getStatusClass(status: TaskStatus | string | null | undefined): string {
    return STATUS_CLASSES[status as TaskStatus] || 'bg-background-alt text-text-secondary';
  }

  resolveAvatarUrl(url: string | null | undefined): string | null {
    return this.imageUrlService.resolve(url);
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

  // ── Assign flow ──

  openAssignModal(): void {
    this.assignSearch.set('');
    this.selectedUserId.set(null);
    this.assignConfirmStep.set(false);
    this.showAssignModal.set(true);
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (res) =>
        this.teamMembers.set(
          res.data.map((e) => ({ id: e.id, first_name: e.first_name, last_name: e.last_name }))
        ),
    });
  }

  get filteredMembers() {
    const q = this.assignSearch().toLowerCase();
    return this.teamMembers().filter(
      (m) =>
        m.first_name.toLowerCase().includes(q) || m.last_name.toLowerCase().includes(q)
    );
  }

  selectMember(id: number): void {
    this.selectedUserId.set(id);
    this.assignConfirmStep.set(true);
  }

  confirmAssign(): void {
    const userId = this.selectedUserId();
    const taskId = this.currentTask()?.id;
    if (!userId || !taskId) return;
    this.saving.set(true);
    this.taskService.assignTask(taskId, userId).subscribe({
      next: (updated) => {
        this.currentTask.set(updated);
        this.taskUpdated.emit(updated);
        this.showAssignModal.set(false);
        this.saving.set(false);
      },
      error: () => this.saving.set(false),
    });
  }

  get selectedMemberName(): string {
    const id = this.selectedUserId();
    if (!id) return '';
    const m = this.teamMembers().find((mm) => mm.id === id);
    return m ? `${m.first_name} ${m.last_name}` : '';
  }

  // ── Status transitions ──

  confirmSubmitReview(): void {
    this.confirmTitle.set('Soumettre pour révision');
    this.confirmMessage.set('Confirmer que cette tâche est terminée et prête à être vérifiée ?');
    this.confirmAction.set('submit_review');
    this.showConfirmDialog.set(true);
  }

  confirmApprove(): void {
    this.confirmTitle.set('Valider la tâche');
    this.confirmMessage.set('Confirmer la validation de cette tâche ?');
    this.confirmAction.set('approve');
    this.showConfirmDialog.set(true);
  }

  confirmRework(): void {
    this.confirmTitle.set('Renvoyer en développement');
    this.confirmMessage.set('Expliquez pourquoi cette tâche doit être reprise :');
    this.confirmAction.set('rework');
    this.showReworkNote.set(true);
    this.showConfirmDialog.set(true);
  }

  onConfirmAction(): void {
    const action = this.confirmAction();
    const taskId = this.currentTask()?.id;
    if (!taskId) return;

    this.saving.set(true);
    this.showConfirmDialog.set(false);

    if (action === 'submit_review') {
      this.taskService.updateStatus(taskId, 'REVIEW').subscribe({
        next: (updated) => {
          this.currentTask.set(updated);
          this.taskUpdated.emit(updated);
          this.saving.set(false);
          this.loadHistory(taskId);
        },
        error: () => this.saving.set(false),
      });
    } else if (action === 'approve') {
      this.taskService.updateStatus(taskId, 'DONE').subscribe({
        next: (updated) => {
          this.currentTask.set(updated);
          this.taskUpdated.emit(updated);
          this.saving.set(false);
          this.loadHistory(taskId);
        },
        error: () => this.saving.set(false),
      });
    } else if (action === 'rework') {
      this.taskService.updateStatus(taskId, 'IN_PROGRESS').subscribe({
        next: (updated) => {
          this.currentTask.set(updated);
          this.taskUpdated.emit(updated);
          this.saving.set(false);
          this.loadHistory(taskId);
        },
        error: () => this.saving.set(false),
      });
    }

    this.showReworkNote.set(false);
    this.confirmAction.set(null);
  }

  startTask(): void {
    const taskId = this.currentTask()?.id;
    if (!taskId) return;
    this.saving.set(true);
    this.taskService.updateStatus(taskId, 'IN_PROGRESS').subscribe({
      next: (updated) => {
        this.currentTask.set(updated);
        this.taskUpdated.emit(updated);
        this.saving.set(false);
        this.loadHistory(taskId);
      },
      error: () => this.saving.set(false),
    });
  }

  private loadHistory(taskId: number): void {
    this.taskService.getHistory(taskId).subscribe({
      next: (data) => this.history.set(data),
    });
  }

  // ── Comments ──

  addComment(parentId?: number): void {
    const content = parentId ? this.replyContent()[parentId] : this.newCommentContent();
    if (!content?.trim()) return;
    const taskId = this.currentTask()?.id;
    if (!taskId) return;

    this.saving.set(true);
    this.commentService.addComment(taskId, { content, parent_id: parentId }).subscribe({
      next: () => {
        if (parentId) {
          this.replyContent.update((c) => ({ ...c, [parentId]: '' }));
          this.replyVisible.update((s) => {
            const n = new Set(s);
            n.delete(parentId);
            return n;
          });
        } else {
          this.newCommentContent.set('');
        }
        this.loadComments(taskId);
        this.saving.set(false);
      },
      error: () => this.saving.set(false),
    });
  }

  private loadComments(taskId: number): void {
    this.commentService.getComments(taskId).subscribe({
      next: (data) => this.comments.set(data),
    });
  }

  toggleReply(commentId: number): void {
    this.replyVisible.update((s) => {
      const next = new Set(s);
      if (next.has(commentId)) next.delete(commentId);
      else next.add(commentId);
      return next;
    });
  }

  isReplyVisible(commentId: number): boolean {
    return this.replyVisible().has(commentId);
  }

  setReplyContent(parentId: number, value: string): void {
    this.replyContent.update((c) => ({ ...c, [parentId]: value }));
  }

  get rootComments(): TaskComment[] {
    return this.comments().filter((c) => !c.parent_id);
  }

  getReplies(commentId: number): TaskComment[] {
    return this.comments().filter((c) => c.parent_id === commentId);
  }

  // ── Attachments ──

  onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.onAttachmentSelected(file);
    input.value = '';
  }

  onAttachmentSelected(file: File): void {
    const taskId = this.currentTask()?.id;
    if (!taskId) return;
    this.attachmentService.uploadAttachment(taskId, file).subscribe({
      next: () => {
        this.loadAttachments(taskId);
        this.fileUploader?.clear();
      },
    });
  }

  private loadAttachments(taskId: number): void {
    this.attachmentService.getAttachments(taskId).subscribe({
      next: (data) => this.attachments.set(data),
    });
  }

  downloadAttachment(attachment: TaskAttachment): void {
    this.attachmentService.downloadAttachment(attachment).subscribe();
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }

  // ── Dependencies ──

  addDependency(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const dependsOnTaskId = +select.value;
    const taskId = this.currentTask()?.id;
    if (!dependsOnTaskId || !taskId) return;
    this.dependencyService.addDependency(taskId, dependsOnTaskId).subscribe({
      next: () => {
        this.loadDependencies(taskId);
        select.value = '';
      },
    });
  }

  removeDependency(dep: TaskDependency): void {
    const taskId = this.currentTask()?.id;
    if (!taskId) return;
    this.dependencyService.removeDependency(taskId, dep.id).subscribe({
      next: () => this.loadDependencies(taskId),
    });
  }

  private loadDependencies(taskId: number): void {
    this.dependencyService.getDependencies(taskId).subscribe({
      next: (data) => this.dependencies.set(data),
    });
  }

  get dependencyCandidates(): Task[] {
    const t = this.currentTask();
    if (!t) return [];
    const depIds = new Set(this.dependencies().map((d) => d.depends_on_task_id));
    return this.projectTasks().filter((pt) => pt.id !== t.id && !depIds.has(pt.id));
  }

  closePanel(): void {
    this.close.emit();
  }
}
