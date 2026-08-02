import { User } from './user.model';

export type AbsenceType = 'CONGE_PAYE' | 'MALADIE' | 'SANS_SOLDE' | 'AUTRE';

export type AbsenceStatus = 'EN_ATTENTE' | 'APPROUVEE' | 'REJETEE' | 'ANNULEE';

export interface Absence {
  id: number;
  company_id: number;
  user_id: number;
  approver_id: number | null;
  type: AbsenceType;
  reference_code: string;
  start_date: string;
  end_date: string;
  duration_days: number;
  reason: string | null;
  status: AbsenceStatus;
  rejection_reason: string | null;
  justificatif_path: string | null;
  approved_at: string | null;
  rejected_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user?: User;
  approver?: User;
}
