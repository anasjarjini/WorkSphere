import {
  Router
} from "./chunk-ZEAXW3MP.js";
import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-N72M47JO.js";
import {
  Injectable,
  catchError,
  computed,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = environment.apiUrl;
  tokenKey = "auth_token";
  /** Signal contenant l'utilisateur actuellement connecté, ou null */
  currentUser = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal true quand l'état d'auth a fini de se restaurer au démarrage */
  authReady = signal(
    false,
    ...ngDevMode ? [{ debugName: "authReady" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Computed : vrai uniquement si un token existe ET qu'un user est chargé */
  isAuthenticated = computed(
    () => {
      return this.hasToken() && this.currentUser() !== null;
    },
    ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Vérifie si un token existe dans le sessionStorage.
   * @returns true si un token est stocké
   */
  hasToken() {
    return !!sessionStorage.getItem(this.tokenKey);
  }
  /**
   * Récupère le token Sanctum depuis le sessionStorage.
   * @returns le token ou null
   */
  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }
  /**
   * Connecte l'utilisateur avec email/mot de passe.
   * Stocke le token Sanctum et met à jour currentUser.
   * @param email - Email de l'utilisateur
   * @param password - Mot de passe
   * @returns Observable avec la réponse (user + token)
   */
  login(email, password) {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(tap((response) => {
      sessionStorage.setItem(this.tokenKey, response.token);
      this.currentUser.set(response.user);
      this.authReady.set(true);
    }));
  }
  /**
   * Active un compte employé via le token reçu par email et connecte automatiquement.
   * @param token - Token d'activation reçu par email
   * @param password - Nouveau mot de passe choisi par l'utilisateur
   * @param password_confirmation - Confirmation du mot de passe
   * @returns Observable avec la réponse (user + token)
   */
  activateAccount(token, password, password_confirmation) {
    return this.http.post(`${this.apiUrl}/activate`, {
      token,
      password,
      password_confirmation
    }).pipe(tap((response) => {
      sessionStorage.setItem(this.tokenKey, response.token);
      this.currentUser.set(response.user);
      this.authReady.set(true);
    }));
  }
  /**
   * Demande un nouveau token d'activation par email.
   * @param email - Email du compte à activer
   * @returns Observable avec le message de confirmation
   */
  resendActivation(email) {
    return this.http.post(`${this.apiUrl}/activate/resend`, { email });
  }
  /**
   * Crée une entreprise et son Administrateur RH en une seule requête.
   * @param payload - Données du formulaire d'inscription (company + admin)
   * @returns Observable avec la réponse (company + user + token)
   */
  registerCompany(payload) {
    return this.http.post(`${this.apiUrl}/register-company`, payload).pipe(tap((response) => {
      sessionStorage.setItem(this.tokenKey, response.token);
      this.currentUser.set(response.user);
      this.authReady.set(true);
    }));
  }
  /**
   * Demande un email de réinitialisation de mot de passe.
   * Ne stocke pas de token — simple déclencheur d'email.
   * @param email - Email du compte
   * @returns Observable avec le message de confirmation
   */
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }
  /**
   * Réinitialise le mot de passe avec le token reçu par email.
   * L'utilisateur devra se reconnecter manuellement après.
   * @param payload - Contient token, email, password, password_confirmation
   * @returns Observable avec le message de confirmation
   */
  resetPassword(payload) {
    return this.http.post(`${this.apiUrl}/reset-password`, payload);
  }
  /**
   * Déconnecte l'utilisateur : appelle l'API puis vide la session locale.
   * En cas d'erreur API, la session est quand même vidée.
   * @returns Observable (généralement null après traitement)
   */
  logout() {
    if (!this.hasToken()) {
      this.clearSession();
      this.router.navigate(["/login"]);
      return of(null);
    }
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(catchError((error) => {
      return of(null);
    }), tap(() => {
      this.clearSession();
      this.router.navigate(["/login"]);
    }));
  }
  /**
   * Restaure la session au démarrage de l'application.
   * Vérifie la validité du token auprès de l'API GET /me.
   * @returns Observable true si la session est valide, false sinon
   */
  checkAuth() {
    this.authReady.set(false);
    const token = this.getToken();
    if (!token) {
      this.currentUser.set(null);
      this.authReady.set(true);
      return of(false);
    }
    return this.http.get(`${this.apiUrl}/me`).pipe(map((response) => {
      this.currentUser.set(response.user);
      this.authReady.set(true);
      return true;
    }), catchError((error) => {
      this.clearSession();
      this.authReady.set(true);
      return of(false);
    }));
  }
  /**
   * Retourne la route de redirection après connexion selon le rôle.
   * @param role - Rôle utilisateur (HR_ADMIN, MANAGER, EMPLOYE)
   * @returns Chemin de redirection
   */
  getRedirectPathForRole(role) {
    switch (role) {
      case "HR_ADMIN":
        return "/admin/dashboard";
      case "MANAGER":
        return "/manager/dashboard";
      case "EMPLOYE":
        return "/employee/dashboard";
      default:
        return "/login";
    }
  }
  /**
   * Construit le nom affichable à partir du user.
   * Priorité à first_name + last_name, fallback sur le champ name générique.
   * @param user - L'utilisateur ou null
   * @returns Le nom formaté ou chaîne vide
   */
  displayName(user) {
    if (!user)
      return "";
    if (user.first_name && user.last_name) {
      return `${user.first_name} ${user.last_name}`;
    }
    return user.name || "";
  }
  /**
   * Vide le token et les signaux d'authentification. Appelée après logout
   * ou quand le token est invalide/expiré.
   */
  clearSession() {
    sessionStorage.removeItem(this.tokenKey);
    this.currentUser.set(null);
    this.authReady.set(true);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-LX3KUZXT.js.map
