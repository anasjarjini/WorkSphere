import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Project, ProjectStatus } from '../models/project.model';

export interface ProjectListResponse {
  data: Project[];
  links?: any;
  meta?: any;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getProjects(): Observable<Project[]> {
    return this.http.get<ProjectListResponse>(`${this.apiUrl}/projects`).pipe(
      map(res => res.data)
    );
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<{ project: Project }>(`${this.apiUrl}/projects/${id}`).pipe(
      map(res => res.project)
    );
  }

  createProject(data: Partial<Project>): Observable<Project> {
    return this.http.post<{ project: Project }>(`${this.apiUrl}/projects`, data).pipe(
      map(res => res.project)
    );
  }

  updateProject(id: number, data: Partial<Project>): Observable<Project> {
    return this.http.put<{ project: Project }>(`${this.apiUrl}/projects/${id}`, data).pipe(
      map(res => res.project)
    );
  }

  deleteProject(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/projects/${id}`);
  }

  updateStatus(id: number, status: ProjectStatus): Observable<Project> {
    return this.http.patch<{ project: Project }>(`${this.apiUrl}/projects/${id}/status`, { status }).pipe(
      map(res => res.project)
    );
  }

  uploadCahierCharges(id: number, file: File): Observable<{ cahier_charges_url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ message: string; cahier_charges_url: string }>(
      `${this.apiUrl}/projects/${id}/cahier-charges`,
      formData
    ).pipe(
      map(res => ({ cahier_charges_url: res.cahier_charges_url }))
    );
  }
}
