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

/** Employé tel que retourné par GET /api/employees */
export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  job_title: string;
  department: string | null;
  hire_date: string;
  salary: string | null;
  is_active: boolean;
}

/** Pagination standard Laravel */
export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
  from: number | null;
  to: number | null;
  first_page_url?: string;
  last_page_url?: string;
  next_page_url?: string | null;
  prev_page_url?: string | null;
  links?: { url: string | null; label: string; active: boolean }[];
}

/** Paramètres de requête pour GET /api/employees */
export interface EmployeeQueryParams {
  search?: string;
  role?: string;
  department?: string;
  is_active?: string;
  page?: number;
  per_page?: number;
}
