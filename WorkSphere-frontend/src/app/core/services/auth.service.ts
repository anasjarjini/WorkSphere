/**
 * AuthService - Gère l'authentification de l'utilisateur (login, logout,
 * activation de compte, reset password) et maintient l'état de session
 * via des Signals. Central point de contact pour toute la gestion des
 * tokens Sanctum et des informations utilisateur courant.
 */
import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {  User } from '../models/user.model';
import { AuthResponse } from '../models/uthResponse.model';
import { ChatService } from './chat.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';
  private readonly chatService = inject(ChatService);

  /** Signal contenant l'utilisateur actuellement connecté, ou null */
  readonly currentUser = signal<User | null>(null);
  /** Signal true quand l'état d'auth a fini de se restaurer au démarrage */
  readonly authReady = signal(false);
  /** Computed : vrai uniquement si un token existe ET qu'un user est chargé */
  readonly isAuthenticated = computed(() => {
    return this.hasToken() && this.currentUser() !== null;
  });

  /**
   * Vérifie si un token existe dans le sessionStorage.
   * @returns true si un token est stocké
   */
  hasToken(): boolean {
    return !!sessionStorage.getItem(this.tokenKey);
  }

  /**
   * Récupère le token Sanctum depuis le sessionStorage.
   * @returns le token ou null
   */
  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  /**
   * Connecte l'utilisateur avec email/mot de passe.
   * Stocke le token Sanctum et met à jour currentUser.
   * @param email - Email de l'utilisateur
   * @param password - Mot de passe
   * @returns Observable avec la réponse (user + token)
   */
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        this.chatService.resetSession();
        sessionStorage.setItem(this.tokenKey, response.token);
        this.currentUser.set(response.user);
        this.authReady.set(true);
      })
    );
  }

  /**
   * Active un compte employé via le token reçu par email et connecte automatiquement.
   * @param token - Token d'activation reçu par email
   * @param password - Nouveau mot de passe choisi par l'utilisateur
   * @param password_confirmation - Confirmation du mot de passe
   * @returns Observable avec la réponse (user + token)
   */
  activateAccount(token: string, password: string, password_confirmation: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/activate`, {
      token,
      password,
      password_confirmation
    }).pipe(
      tap((response) => {
        this.chatService.resetSession();
        sessionStorage.setItem(this.tokenKey, response.token);
        this.currentUser.set(response.user);
        this.authReady.set(true);
      })
    );
  }

  /**
   * Demande un nouveau token d'activation par email.
   * @param email - Email du compte à activer
   * @returns Observable avec le message de confirmation
   */
  resendActivation(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/activate/resend`, { email });
  }

  /**
   * Crée une entreprise et son Administrateur RH en une seule requête.
   * @param payload - Données du formulaire d'inscription (company + admin)
   * @returns Observable avec la réponse (company + user + token)
   */
  registerCompany(payload: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register-company`, payload).pipe(
      tap((response) => {
        this.chatService.resetSession();
        sessionStorage.setItem(this.tokenKey, response.token);
        this.currentUser.set(response.user);
        this.authReady.set(true);
      })
    );
  }

  /**
   * Demande un email de réinitialisation de mot de passe.
   * Ne stocke pas de token — simple déclencheur d'email.
   * @param email - Email du compte
   * @returns Observable avec le message de confirmation
   */
  forgotPassword(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/forgot-password`, { email });
  }

  /**
   * Réinitialise le mot de passe avec le token reçu par email.
   * L'utilisateur devra se reconnecter manuellement après.
   * @param payload - Contient token, email, password, password_confirmation
   * @returns Observable avec le message de confirmation
   */
  resetPassword(payload: { token: string; email: string; password: string; password_confirmation: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/reset-password`, payload);
  }

  /**
   * Déconnecte l'utilisateur : appelle l'API puis vide la session locale.
   * En cas d'erreur API, la session est quand même vidée.
   * @returns Observable (généralement null après traitement)
   */
  logout(): Observable<any> {
    if (!this.hasToken()) {
      this.clearSession();
      this.router.navigate(['/login']);
      return of(null);
    }

    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      catchError((error) => {
        return of(null);
      }),
      tap(() => {
        this.clearSession();
        this.router.navigate(['/login']);
      })
    );
  }

  /**
   * Restaure la session au démarrage de l'application.
   * Vérifie la validité du token auprès de l'API GET /me.
   * @returns Observable true si la session est valide, false sinon
   */
  checkAuth(): Observable<boolean> {
    this.authReady.set(false);
    const token = this.getToken();
    if (!token) {
      this.currentUser.set(null);
      this.authReady.set(true);
      return of(false);
    }

    return this.http.get<{ user: User }>(`${this.apiUrl}/me`).pipe(
      map((response) => {
        this.currentUser.set(response.user);
        this.authReady.set(true);
        return true;
      }),
      catchError((error) => {
        this.clearSession();
        this.authReady.set(true);
        return of(false);
      })
    );
  }

  /**
   * Retourne la route de redirection après connexion selon le rôle.
   * @param role - Rôle utilisateur (HR_ADMIN, MANAGER, EMPLOYE)
   * @returns Chemin de redirection
   */
  getRedirectPathForRole(role: string): string {
    const normalizedRole = role ? role.trim().toUpperCase() : '';
    switch (normalizedRole) {
      case 'HR_ADMIN':
        return '/admin/dashboard';
      case 'MANAGER':
        return '/manager/dashboard';
      case 'EMPLOYE':
        return '/employee/dashboard';
      default:
        return '/login';
    }
  }

  /**
   * Construit le nom affichable à partir du user.
   * Priorité à first_name + last_name, fallback sur le champ name générique.
   * @param user - L'utilisateur ou null
   * @returns Le nom formaté ou chaîne vide
   */
  displayName(user: User | null): string {
    if (!user) return '';
    if (user.first_name && user.last_name) {
      return `${user.first_name} ${user.last_name}`;
    }
    return user.name || '';
  }

  /**
   * Vide le token et les signaux d'authentification. Appelée après logout
   * ou quand le token est invalide/expiré.
   */
  clearSession(): void {
    this.chatService.resetSession();
    sessionStorage.removeItem(this.tokenKey);
    this.currentUser.set(null);
    this.authReady.set(true);
  }
}
