import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Task, TaskStatus, TaskHistoryEntry } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getProjectTasks(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/projects/${projectId}/tasks`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/tasks/${id}`);
  }

  createTask(projectId: number, data: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/projects/${projectId}/tasks`, data);
  }

  updateTask(id: number, data: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${id}`, data);
  }

  deleteTask(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/tasks/${id}`);
  }

  updateStatus(id: number, status: TaskStatus): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/tasks/${id}/status`, { status });
  }

  assignTask(id: number, userId: number | null): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/tasks/${id}/assign`, { user_id: userId });
  }

  getMyTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/my-tasks`);
  }

  getManagerCreatedTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/manager/tasks`);
  }

  getHistory(taskId: number): Observable<TaskHistoryEntry[]> {
    return this.http.get<TaskHistoryEntry[]>(`${this.apiUrl}/tasks/${taskId}/history`);
  }

  reorder(taskId: number, orderPosition: number): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/tasks/${taskId}/reorder`, { order_position: orderPosition });
  }
}
