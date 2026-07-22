import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TaskComment } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskCommentService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getComments(taskId: number): Observable<TaskComment[]> {
    return this.http.get<TaskComment[]>(`${this.apiUrl}/tasks/${taskId}/comments`);
  }

  addComment(taskId: number, data: { content: string; parent_id?: number }): Observable<TaskComment> {
    return this.http.post<TaskComment>(`${this.apiUrl}/tasks/${taskId}/comments`, data);
  }

  deleteComment(taskId: number, commentId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/tasks/${taskId}/comments/${commentId}`);
  }
}
