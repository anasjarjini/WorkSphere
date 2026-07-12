/**
 * EmployeeService - Opérations CRUD sur les employés : liste paginée avec filtres,
 * toggle de statut, suppression logique, import CSV. Utilise la table users
 * qui contient désormais les données employé (plus de table employees dédiée).
 */
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
   * Récupère la liste paginée des employés de l'entreprise avec filtres.
   * Construit dynamiquement les query params en ignorant les valeurs vides.
   * @param params - Filtres optionnels (search, role, department, is_active, page, per_page)
   * @returns Observable contenant les employés paginés
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
   * Récupère la liste de l'équipe visible par le manager connecté.
   * Les administrateurs RH sont exclus du résultat côté frontend.
   * @param params - Filtres optionnels
   * @returns Observable avec les membres de l'équipe paginés
   */
  getManagerTeam(params?: EmployeeQueryParams): Observable<PaginatedResponse<Employee>> {
    let httpParams = new HttpParams();

    if (params) {
      const entries = Object.entries(params).filter(([_, v]) => v !== undefined && v !== '' && v !== null);
      for (const [key, value] of entries) {
        httpParams = httpParams.set(key, String(value));
      }
    }

    return this.http.get<PaginatedResponse<Employee>>(`${this.apiUrl}/manager/team`, {
      params: httpParams
    });
  }

  /**
   * Bascule le statut actif/inactif d'un employé (via le nouveau champ status).
   * @param id - ID de l'employé
   * @returns Observable avec le message et l'employé mis à jour
   */
  toggleStatus(id: number): Observable<{ message: string; employee: Employee }> {
    return this.http.patch<{ message: string; employee: Employee }>(
      `${this.apiUrl}/employees/${id}/toggle-status`,
      {}
    );
  }

  /**
   * Supprime logiquement (soft delete) un employé.
   * @param id - ID de l'employé
   * @returns Observable avec le message de confirmation
   */
  deleteEmployee(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/employees/${id}`);
  }

  /**
   * Suppression par lot (bulk delete) d'employés.
   * @param ids - Liste des IDs des employés à supprimer
   * @returns Observable avec le message de confirmation
   */
  bulkDeleteEmployees(ids: number[]): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/employees/bulk`, { body: { ids } });
  }

  /**
   * Importe des employés depuis un fichier CSV.
   * Envoie le fichier en FormData pour une gestion multipart.
   * @param file - Fichier CSV à importer
   * @returns Observable avec le résultat (imported, failed, errors[])
   */
  importEmployees(file: File): Observable<ImportResult> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ImportResult>(`${this.apiUrl}/employees/import`, formData);
  }
}
