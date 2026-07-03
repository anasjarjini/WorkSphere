export interface Company {
  id: number;
  name: string;
  slug: string;
  email?: string;
  phone?: string;
  address?: string;
  logo?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Employee {
  id: number;
  user_id: number;
  company_id: number;
  first_name: string;
  last_name: string;
  phone?: string;
  address?: string;
  job_title?: string;
  department?: string;
  hire_date?: string;
  salary?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  company_id?: number;
  is_active: boolean;
  email_verified_at?: string;
  company?: Company;
  employee?: Employee;
  roles?: Role[];
  created_at?: string;
  updated_at?: string;
}

export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}
