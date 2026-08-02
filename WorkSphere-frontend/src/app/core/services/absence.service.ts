import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Absence, AbsenceType } from '../models/absence.model';
import { LeaveBalance } from '../models/leave-balance.model';
import { PublicHoliday } from '../models/public-holiday.model';

@Injectable({ providedIn: 'root' })
export class AbsenceService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAbsences(params?: {
    status?: string;
    type?: string;
    date_from?: string;
    date_to?: string;
    user_id?: number;
    queue?: string;
  }): Observable<Absence[]> {
    let httpParams = new HttpParams();
    if (params?.status) httpParams = httpParams.set('status', params.status);
    if (params?.type) httpParams = httpParams.set('type', params.type);
    if (params?.date_from) httpParams = httpParams.set('date_from', params.date_from);
    if (params?.date_to) httpParams = httpParams.set('date_to', params.date_to);
    if (params?.user_id) httpParams = httpParams.set('user_id', params.user_id);
    if (params?.queue) httpParams = httpParams.set('queue', params.queue);
    return this.http.get<Absence[]>(`${this.apiUrl}/absences`, { params: httpParams });
  }

  createAbsence(data: {
    type: AbsenceType;
    start_date: string;
    end_date: string;
    reason?: string | null;
  }): Observable<Absence> {
    return this.http.post<Absence>(`${this.apiUrl}/absences`, data);
  }

  approve(id: number): Observable<Absence> {
    return this.http.patch<Absence>(`${this.apiUrl}/absences/${id}/approve`, {});
  }

  reject(id: number, reason: string): Observable<Absence> {
    return this.http.patch<Absence>(`${this.apiUrl}/absences/${id}/reject`, { reason });
  }

  cancel(id: number): Observable<Absence> {
    return this.http.patch<Absence>(`${this.apiUrl}/absences/${id}/cancel`, {});
  }

  isOnLeave(date: string): Observable<{ is_on_leave: boolean }> {
    return this.http.get<{ is_on_leave: boolean }>(`${this.apiUrl}/absences/is-on-leave`, {
      params: new HttpParams().set('date', date),
    });
  }

  getOnLeaveToday(date: string): Observable<number[]> {
    return this.http.get<Absence[]>(`${this.apiUrl}/absences`, {
      params: new HttpParams()
        .set('status', 'APPROUVEE')
        .set('date_from', date)
        .set('date_to', date),
    }).pipe(map((absences) => absences.map((a) => a.user_id)));
  }

  getWorkingDays(start_date: string, end_date: string): Observable<{ working_days: number }> {
    return this.http.get<{ working_days: number }>(`${this.apiUrl}/absences/working-days`, {
      params: new HttpParams().set('start_date', start_date).set('end_date', end_date),
    });
  }

  getMyBalances(): Observable<LeaveBalance[]> {
    return this.http.get<LeaveBalance[]>(`${this.apiUrl}/leave-balances/me`);
  }

  getTeamBalances(): Observable<LeaveBalance[]> {
    return this.http.get<LeaveBalance[]>(`${this.apiUrl}/leave-balances/team`);
  }

  getHolidays(): Observable<PublicHoliday[]> {
    return this.http.get<PublicHoliday[]>(`${this.apiUrl}/public-holidays`);
  }

  createHoliday(data: { name: string; date: string }): Observable<PublicHoliday> {
    return this.http.post<PublicHoliday>(`${this.apiUrl}/public-holidays`, data);
  }

  deleteHoliday(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/public-holidays/${id}`);
  }
}
