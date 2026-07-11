/**
 * DashboardService - Récupère les statistiques du tableau de bord administrateur RH.
 * Les données incluent le nombre d'employés, leur répartition par département/rôle,
 * et les embauches récentes.
 */
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DashboardStats } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
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
}
