/**
 * Modèles de données pour le domaine utilisateur.
 * Définit les structures User, Company, Department, Role et les types d'énumérations associés.
 */


import { Company } from "./company.model";
import { Department } from "./department.model";
import { Role } from "./role.model";

export type UserRole = 'HR_ADMIN' | 'MANAGER' | 'EMPLOYE';

export type UserStatus = 'PENDING_ACTIVATION' | 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

export interface User {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  company_id?: number;
  is_active: boolean;
  role: UserRole;
  status: UserStatus;
  job_title?: string;
  hire_date?: string;
  department_id?: number;
  manager_id?: number;
  avatar?: string;
  avatar_url?: string | null;
  email_verified_at?: string;
  company?: Company;
  department?: Department;
  roles?: Role[];
  last_active_at?: string | null;
  created_at?: string;
  updated_at?: string;
}


