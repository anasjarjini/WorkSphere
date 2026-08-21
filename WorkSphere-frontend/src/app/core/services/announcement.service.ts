import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Announcement, AnnouncementStatus } from '../models/announcement.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAnnouncements(status: AnnouncementStatus = 'published'): Observable<Announcement[]> {
    const params = new HttpParams().set('status', status);
    return this.http.get<Announcement[]>(`${this.apiUrl}/announcements`, { params });
  }

  getAnnouncement(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(`${this.apiUrl}/announcements/${id}`);
  }

  getManagers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/managers`);
  }

  createAnnouncement(data: Partial<Announcement>): Observable<Announcement> {
    return this.http.post<Announcement>(`${this.apiUrl}/announcements`, data);
  }

  updateAnnouncement(id: number, data: Partial<Announcement>): Observable<Announcement> {
    return this.http.put<Announcement>(`${this.apiUrl}/announcements/${id}`, data);
  }

  deleteAnnouncement(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/announcements/${id}`);
  }

  forceDeleteAnnouncement(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/announcements/${id}/force`);
  }
}
