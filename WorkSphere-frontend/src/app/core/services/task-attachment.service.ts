import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
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

  downloadAttachment(taskAttachment: TaskAttachment): Observable<void> {
    const url = `${this.apiUrl}/tasks/${taskAttachment.task_id}/attachments/${taskAttachment.id}/download`;

    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((blob) => this.saveBlob(blob, taskAttachment.file_name)),
      map(() => undefined)
    );
  }

  private saveBlob(blob: Blob, fileName: string): void {
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = objectUrl;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(objectUrl);
  }
}
