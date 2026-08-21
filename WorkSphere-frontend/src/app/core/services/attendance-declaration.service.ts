import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AttendanceDeclaration } from '../models/attendance-declaration.model';

export interface BulkApproveResult {
  approved: number[];
  skipped: number[];
}

@Injectable({ providedIn: 'root' })
export class AttendanceDeclarationService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getDeclarations(params?: {
    date?: string;
    date_from?: string;
    date_to?: string;
    validation_status?: string;
    user_id?: number;
    queue?: string;
  }): Observable<AttendanceDeclaration[]> {
    let httpParams = new HttpParams();
    if (params?.date) httpParams = httpParams.set('date', params.date);
    if (params?.date_from) httpParams = httpParams.set('date_from', params.date_from);
    if (params?.date_to) httpParams = httpParams.set('date_to', params.date_to);
    if (params?.validation_status) httpParams = httpParams.set('validation_status', params.validation_status);
    if (params?.user_id) httpParams = httpParams.set('user_id', params.user_id);
    if (params?.queue) httpParams = httpParams.set('queue', params.queue);
    return this.http.get<AttendanceDeclaration[]>(`${this.apiUrl}/attendance-declarations`, { params: httpParams });
  }

  declare(data: { date: string; status: 'PRESENT' | 'ABSENT' }): Observable<AttendanceDeclaration> {
    return this.http.post<AttendanceDeclaration>(`${this.apiUrl}/attendance-declarations`, data);
  }

  approve(id: number): Observable<AttendanceDeclaration> {
    return this.http.patch<AttendanceDeclaration>(`${this.apiUrl}/attendance-declarations/${id}/approve`, {});
  }

  reject(id: number, reason: string): Observable<AttendanceDeclaration> {
    return this.http.patch<AttendanceDeclaration>(`${this.apiUrl}/attendance-declarations/${id}/reject`, { reason });
  }

  bulkApprove(declaration_ids: number[]): Observable<BulkApproveResult> {
    return this.http.post<BulkApproveResult>(`${this.apiUrl}/attendance-declarations/bulk-approve`, { declaration_ids });
  }
}
