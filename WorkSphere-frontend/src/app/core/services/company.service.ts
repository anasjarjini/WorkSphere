/**
 * Service métier dédié aux opérations liées à l'entreprise.
 * Permet de récupérer, mettre à jour les informations de l'entreprise
 * et de gérer le téléchargement de son logo.
 * Maintient un signal partagé pour que les composants (settings, layouts)
 * soient toujours synchronisés sur les mêmes données.
 */

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Company } from '../models/company.model';

export interface CompanyResponse {
  company: Company;
}

export interface LogoResponse {
  message: string;
  logo_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  /** Signal partagé de l'entreprise courante (mis à jour par tous les composants) */
  readonly company = signal<Company | null>(null);

  /**
   * Récupère les informations de l'entreprise de l'utilisateur connecté
   * et met à jour le signal partagé.
   * @returns Observable contenant les données de l'entreprise
   */
  getCompany(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.apiUrl}/company`).pipe(
      tap((response) => this.company.set(response.company))
    );
  }

  /**
   * Met à jour le signal partagé avec les données d'entreprise fournies.
   * @param company Les données d'entreprise à diffuser
   */
  setCompany(company: Company): void {
    this.company.set(company);
  }

  /**
   * Met à jour les informations texte de l'entreprise.
   * @param payload Objet contenant les champs à modifier (name, email, phone, address)
   * @returns Observable contenant la réponse avec l'entreprise mise à jour
   */
  updateCompany(payload: { name: string; email?: string | null; phone?: string | null; address?: string | null }): Observable<CompanyResponse> {
    return this.http.put<CompanyResponse>(`${this.apiUrl}/company`, payload).pipe(
      tap((response) => this.company.set(response.company))
    );
  }

  /**
   * Upload un nouveau logo pour l'entreprise (multipart).
   * @param file Fichier image à uploader comme logo
   * @returns Observable contenant le message de confirmation et l'URL du nouveau logo
   */
  uploadLogo(file: File): Observable<LogoResponse> {
    const formData = new FormData();
    formData.append('logo', file);
    return this.http.post<LogoResponse>(`${this.apiUrl}/company/logo`, formData);
  }
}
