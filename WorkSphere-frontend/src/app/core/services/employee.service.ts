import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ImportResult, Employee, PaginatedResponse, EmployeeQueryParams } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  /**
   * Liste paginée des employés avec filtres.
   * Construit les query params dynamiquement, en omettant les champs vides.
   */
  getEmployees(params?: EmployeeQueryParams): Observable<PaginatedResponse<Employee>> {
    let httpParams = new HttpParams();

    if (params) {
      const entries = Object.entries(params).filter(([_, v]) => v !== undefined && v !== '' && v !== null);
      for (const [key, value] of entries) {
        httpParams = httpParams.set(key, String(value));
      }
    }

    return this.http.get<PaginatedResponse<Employee>>(`${this.apiUrl}/employees`, {
      params: httpParams
    });
  }

  /**
   * Bascule l'état actif/inactif d'un employé.
   */
  toggleStatus(id: number): Observable<{ message: string; employee: Employee }> {
    return this.http.patch<{ message: string; employee: Employee }>(
      `${this.apiUrl}/employees/${id}/toggle-status`,
      {}
    );
  }

  /**
   * Supprime (soft delete) un employé.
   */
  deleteEmployee(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/employees/${id}`);
  }

  /**
   * Importe des employés via un fichier CSV.
   */
  importEmployees(file: File): Observable<ImportResult> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ImportResult>(`${this.apiUrl}/employees/import`, formData);
  }
}
