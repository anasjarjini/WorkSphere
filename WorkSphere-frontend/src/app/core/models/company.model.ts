/**
 * Modèle de données représentant une entreprise.
 * Correspond à la réponse de l'API pour les endpoints /company.
 */

export interface Company {
  id: number;
  name: string;
  slug: string;
  email?: string;
  phone?: string;
  address?: string;
  logo?: string;
  logo_url?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}
