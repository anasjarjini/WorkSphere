import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TaskDependency } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskDependencyService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getDependencies(taskId: number): Observable<TaskDependency[]> {
    return this.http.get<TaskDependency[]>(`${this.apiUrl}/tasks/${taskId}/dependencies`);
  }

  addDependency(taskId: number, dependsOnTaskId: number): Observable<TaskDependency> {
    return this.http.post<TaskDependency>(`${this.apiUrl}/tasks/${taskId}/dependencies`, {
      depends_on_task_id: dependsOnTaskId
    });
  }

  removeDependency(taskId: number, dependencyId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.apiUrl}/tasks/${taskId}/dependencies/${dependencyId}`
    );
  }
}
