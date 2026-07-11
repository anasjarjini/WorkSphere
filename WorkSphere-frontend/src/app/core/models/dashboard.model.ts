/**
 * Modèles de données pour le tableau de bord (dashboard).
 * Définit les statistiques globales et la répartition par département.
 */

export interface DepartmentDistribution {
  department: string;
  count: number;
}

export interface DashboardStats {
  total_employees: number;
  active_count: number;
  pending_count: number;
  managers_count: number;
  regular_employees_count: number;
  departments_count: number;
  department_distribution: DepartmentDistribution[];
  recent_hires_count: number;
}
