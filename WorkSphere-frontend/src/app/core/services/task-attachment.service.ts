import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TaskAttachment } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskAttachmentService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAttachments(taskId: number): Observable<TaskAttachment[]> {
    return this.http.get<TaskAttachment[]>(`${this.apiUrl}/tasks/${taskId}/attachments`);
  }

  uploadAttachment(taskId: number, file: File): Observable<TaskAttachment> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<TaskAttachment>(`${this.apiUrl}/tasks/${taskId}/attachments`, formData);
  }

  deleteAttachment(taskId: number, attachmentId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.apiUrl}/tasks/${taskId}/attachments/${attachmentId}`
    );
  }

  getDownloadUrl(taskAttachment: TaskAttachment): string {
    return `${this.apiUrl}/tasks/${taskAttachment.task_id}/attachments/${taskAttachment.id}/download`;
  }
}
