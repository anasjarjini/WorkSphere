/**
 * DashboardService - Centralise les statistiques des tableaux de bord RH, Manager et Employé.
 * Chaque endpoint applique son propre périmètre d'accès côté serveur.
 */
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DashboardStats } from '../models/dashboard.model';
import { ManagerDashboardStats } from '../models/manager-dashboard.model';
import { EmployeeDashboardStats } from '../models/employee-dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/dashboard`;

  /**
   * Récupère les statistiques globales pour le tableau de bord RH.
   * @returns Observable avec les KPIs (total employés, actifs, managers, etc.)
   */
  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/stats`);
  }

  /** Récupère les indicateurs opérationnels limités à l'équipe du manager. */
  getManagerStats(): Observable<ManagerDashboardStats> {
    return this.http.get<ManagerDashboardStats>(`${environment.apiUrl}/manager/dashboard/stats`);
  }

  /** Récupère les priorités et indicateurs personnels de l'employé connecté. */
  getEmployeeStats(): Observable<EmployeeDashboardStats> {
    return this.http.get<EmployeeDashboardStats>(`${environment.apiUrl}/employee/dashboard/stats`);
  }
}
