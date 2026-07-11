/**
 * Service dédié à la gestion du profil de l'utilisateur connecté.
 * Centralise les appels API pour le profil, l'avatar et la suppression d'avatar.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

export interface ProfileResponse {
  user: User;
}

export interface AvatarResponse {
  message: string;
  avatar_url: string;
}

export interface DeleteAvatarResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  /**
   * Récupère le profil de l'utilisateur connecté avec ses relations.
   * @returns Observable contenant les données complètes du profil utilisateur
   */
  getProfile(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${this.apiUrl}/profile`);
  }

  /**
   * Upload un avatar pour l'utilisateur connecté (multipart).
   * @param file Fichier image à utiliser comme avatar
   * @returns Observable contenant le message et l'URL du nouvel avatar
   */
  uploadAvatar(file: File): Observable<AvatarResponse> {
    const formData = new FormData();
    formData.append('avatar', file);
    return this.http.post<AvatarResponse>(`${this.apiUrl}/profile/avatar`, formData);
  }

  /**
   * Supprime l'avatar de l'utilisateur connecté.
   * @returns Observable contenant un message de confirmation
   */
  deleteAvatar(): Observable<DeleteAvatarResponse> {
    return this.http.delete<DeleteAvatarResponse>(`${this.apiUrl}/profile/avatar`);
  }
}
