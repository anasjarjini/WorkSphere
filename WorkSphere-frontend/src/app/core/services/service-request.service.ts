import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServiceRequest, RequestStatus } from '../models/service-request.model';

@Injectable({ providedIn: 'root' })
export class ServiceRequestService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.apiUrl}/service-requests`);
  }

  getRequest(id: number): Observable<ServiceRequest> {
    return this.http.get<ServiceRequest>(`${this.apiUrl}/service-requests/${id}`);
  }

  createRequest(data: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(`${this.apiUrl}/service-requests`, data);
  }

  updateRequest(id: number, data: Partial<ServiceRequest>): Observable<ServiceRequest> {
    return this.http.put<ServiceRequest>(`${this.apiUrl}/service-requests/${id}`, data);
  }

  updateStatus(id: number, status: RequestStatus, payload?: any): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.apiUrl}/service-requests/${id}/status`, {
      status,
      ...payload
    });
  }

  approve(id: number): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.apiUrl}/service-requests/${id}/approve`, {});
  }

  reject(id: number, reason: string): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.apiUrl}/service-requests/${id}/reject`, {
      rejection_reason: reason
    });
  }

  assignDeveloper(id: number, developerId: number): Observable<ServiceRequest> {
    return this.http.patch<ServiceRequest>(`${this.apiUrl}/service-requests/${id}/assign-developer`, {
      developer_id: developerId
    });
  }

  getMyRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.apiUrl}/my-service-requests`);
  }

  getDepartmentRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.apiUrl}/manager/service-requests`);
  }
}
