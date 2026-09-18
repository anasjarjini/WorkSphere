/**
 * Modèles de données pour le domaine employé.
 * Inclut les types pour l'import CSV, la pagination et les paramètres de filtrage.
 */

import { Department } from "./department.model";

export interface ImportError {
  line: number;
  email: string;
  reason: string;
}

export interface ImportResult {
  imported: number;
  failed: number;
  errors: ImportError[];
}

export type EmployeeRole = 'HR_ADMIN' | 'MANAGER' | 'EMPLOYE';

export type EmployeeStatus = 'PENDING_ACTIVATION' | 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

/** Employé tel que retourné par GET /api/employees */
export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: EmployeeRole;
  status: EmployeeStatus;
  job_title: string;
  department: Department | null;
  hire_date: string;
  salary: string | null;
  is_active: boolean;
  avatar_url?: string | null;
}

/** Pagination Laravel (ResourceCollection) */
export interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    per_page: number;
    to: number | null;
    total: number;
  };
}

/** Paramètres de requête pour GET /api/employees */
export interface EmployeeQueryParams {
  search?: string;
  role?: string;
  department?: string;
  status?: string;
  page?: number;
  per_page?: number;
}
