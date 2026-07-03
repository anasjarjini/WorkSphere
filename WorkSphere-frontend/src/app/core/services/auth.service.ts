import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';

  // Signals pour l'état d'authentification
  readonly currentUser = signal<User | null>(null);
  readonly authReady = signal(false);
  
  // Computed Signal basé sur la présence du token ET de l'utilisateur connecté
  readonly isAuthenticated = computed(() => {
    return this.hasToken() && this.currentUser() !== null;
  });

  /**
   * Vérifie si un token existe localement
   */
  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  /**
   * Récupère le token actuel depuis le localStorage
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Connexion de l'utilisateur
   */
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.currentUser.set(response.user);
        this.authReady.set(true);
      })
    );
  }

  /**
   * Activation du compte et connexion automatique
   */
  activateAccount(token: string, password: string, password_confirmation: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/activate`, {
      token,
      password,
      password_confirmation
    }).pipe(
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.currentUser.set(response.user);
        this.authReady.set(true);
      })
    );
  }

  /**
   * Création d'une entreprise et d'un compte Administrateur RH
   */
  registerCompany(payload: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register-company`, payload).pipe(
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.currentUser.set(response.user);
        this.authReady.set(true);
      })
    );
  }

  /**
   * Déconnexion de l'utilisateur
   */
  logout(): Observable<any> {
    // Si pas de token, on reset juste l'état local et redirige
    if (!this.hasToken()) {
      this.clearSession();
      this.router.navigate(['/login']);
      return of(null);
    }

    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      catchError((error) => {
        // En cas d'erreur API, on vide quand même la session locale
        return of(null);
      }),
      tap(() => {
        this.clearSession();
        this.router.navigate(['/login']);
      })
    );
  }

  /**
   * Restaure la session de l'utilisateur au démarrage de l'app si un token existe
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
        // Token invalide ou expiré, on nettoie
        this.clearSession();
        this.authReady.set(true);
        return of(false);
      })
    );
  }

  /**
   * Retourne le chemin de redirection correspondant au rôle donné
   */
  getRedirectPathForRole(role: string): string {
    switch (role) {
      case 'administrateur_rh':
        return '/admin/dashboard';
      case 'manager':
        return '/manager/dashboard';
      case 'employe':
        return '/employee/dashboard';
      default:
        return '/login';
    }
  }

  /**
   * Nettoie les données d'authentification locales
   */
  private clearSession(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUser.set(null);
    this.authReady.set(true);
  }
}
