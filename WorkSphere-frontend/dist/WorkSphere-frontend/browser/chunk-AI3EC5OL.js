import {
  Router
} from "./chunk-DGTBVCJC.js";
import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient,
  HttpEventType
} from "./chunk-3HN2YFK3.js";
import {
  Injectable,
  Observable,
  catchError,
  computed,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-ADF3COWQ.js";

// src/app/core/services/chat.service.ts
var ChatService = class _ChatService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  conversations = signal(
    [],
    ...ngDevMode ? [{ debugName: "conversations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  messages = signal(
    [],
    ...ngDevMode ? [{ debugName: "messages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  unreadCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "unreadCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingConversations = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingConversations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingMessages = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingMessages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canLoadOlder = signal(
    false,
    ...ngDevMode ? [{ debugName: "canLoadOlder" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeConversationId = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeConversationId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sending = signal(
    false,
    ...ngDevMode ? [{ debugName: "sending" }] : (
      /* istanbul ignore next */
      []
    )
  );
  uploadProgress = signal(
    0,
    ...ngDevMode ? [{ debugName: "uploadProgress" }] : (
      /* istanbul ignore next */
      []
    )
  );
  objectUrlCache = /* @__PURE__ */ new Map();
  attachmentUrlRequests = /* @__PURE__ */ new Map();
  currentPage = 1;
  lastPage = 1;
  loadedPages = /* @__PURE__ */ new Set();
  messagesRequestVersion = 0;
  sessionVersion = 0;
  chatTimer = null;
  messagesTimer = null;
  // ── Liste des conversations + badge non-lus ──────────────────────────────
  fetchChatOverview() {
    const sessionVersion = this.sessionVersion;
    this.loadingConversations.set(true);
    this.http.get(`${this.apiUrl}/conversations`).pipe(finalize(() => this.loadingConversations.set(false))).subscribe({
      next: (res) => {
        if (this.sessionVersion === sessionVersion)
          this.conversations.set(res.data);
      }
    });
    this.http.get(`${this.apiUrl}/conversations/unread-count`).subscribe({
      next: (res) => {
        if (this.sessionVersion === sessionVersion)
          this.unreadCount.set(res.unread_count);
      }
    });
  }
  startChatPolling(intervalMs = 2e4) {
    if (this.chatTimer !== null)
      return;
    this.fetchChatOverview();
    this.chatTimer = setInterval(() => this.fetchChatOverview(), intervalMs);
  }
  stopChatPolling() {
    if (this.chatTimer !== null) {
      clearInterval(this.chatTimer);
      this.chatTimer = null;
    }
  }
  // ── Ouverture / fermeture d'une conversation ─────────────────────────────
  openConversation(conversationId) {
    if (this.activeConversationId() === conversationId && this.messages().length > 0) {
      return;
    }
    this.messagesRequestVersion++;
    this.activeConversationId.set(conversationId);
    this.messages.set([]);
    this.currentPage = 1;
    this.lastPage = 1;
    this.loadedPages.clear();
    this.canLoadOlder.set(false);
    this.fetchMessages(1);
    this.stopMessagePolling();
    this.messagesTimer = setInterval(() => this.fetchMessages(1, true), 5e3);
  }
  closeConversation() {
    this.messagesRequestVersion++;
    this.activeConversationId.set(null);
    this.messages.set([]);
    this.stopMessagePolling();
  }
  stopMessagePolling() {
    if (this.messagesTimer !== null) {
      clearInterval(this.messagesTimer);
      this.messagesTimer = null;
    }
  }
  /**
   * Supprime tout état lié à un utilisateur avant une déconnexion ou un
   * changement de compte. Les réponses HTTP de l'ancienne session sont
   * ignorées grâce aux versions de requête/session.
   */
  resetSession() {
    this.sessionVersion++;
    this.messagesRequestVersion++;
    this.stopChatPolling();
    this.stopMessagePolling();
    for (const url of this.objectUrlCache.values())
      URL.revokeObjectURL(url);
    this.objectUrlCache.clear();
    this.attachmentUrlRequests.clear();
    this.loadedPages.clear();
    this.currentPage = 1;
    this.lastPage = 1;
    this.conversations.set([]);
    this.messages.set([]);
    this.unreadCount.set(0);
    this.activeConversationId.set(null);
    this.canLoadOlder.set(false);
    this.loadingConversations.set(false);
    this.loadingMessages.set(false);
    this.sending.set(false);
    this.uploadProgress.set(0);
  }
  fetchMessages(page = 1, silent = false) {
    const conversationId = this.activeConversationId();
    if (!conversationId)
      return;
    const requestVersion = this.messagesRequestVersion;
    if (!silent)
      this.loadingMessages.set(true);
    this.http.get(`${this.apiUrl}/conversations/${conversationId}/messages?page=${page}`).pipe(finalize(() => this.loadingMessages.set(false))).subscribe({
      next: (res) => {
        if (this.activeConversationId() !== conversationId || this.messagesRequestVersion !== requestVersion) {
          return;
        }
        this.mergeMessages(res, page);
      }
    });
  }
  mergeMessages(page, requestedPage) {
    this.loadedPages.add(requestedPage);
    this.currentPage = Math.max(...this.loadedPages);
    this.lastPage = page.meta.last_page;
    this.canLoadOlder.set(this.currentPage < this.lastPage);
    const byId = /* @__PURE__ */ new Map();
    for (const m of this.messages())
      byId.set(m.id, m);
    for (const m of page.data)
      byId.set(m.id, m);
    const merged = [...byId.values()].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    this.messages.set(merged);
  }
  loadOlderMessages() {
    this.fetchMessages(this.currentPage + 1, true);
  }
  // ── Envoi ────────────────────────────────────────────────────────────────
  sendMessage(conversationId, content, files) {
    const formData = new FormData();
    if (content.trim() !== "") {
      formData.append("content", content);
    }
    files.forEach((file) => formData.append("attachments[]", file, file.name));
    this.sending.set(true);
    this.uploadProgress.set(0);
    return new Observable((subscriber) => {
      const req = this.http.post(`${this.apiUrl}/conversations/${conversationId}/messages`, formData, {
        reportProgress: true,
        observe: "events"
      }).pipe(finalize(() => {
        this.sending.set(false);
        this.uploadProgress.set(0);
        this.fetchChatOverview();
      })).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.uploadProgress.set(Math.round(100 * event.loaded / total));
          } else if (event.type === HttpEventType.Response && event.body) {
            const message = event.body.data;
            if (this.activeConversationId() === conversationId) {
              this.messages.update((list) => [...list, message]);
            }
            subscriber.next(message);
            subscriber.complete();
          }
        },
        error: (err) => subscriber.error(err)
      });
      return () => req.unsubscribe();
    });
  }
  // ── Pièces jointes (toujours via endpoint authentifié, jamais d'URL publique) ──
  attachmentUrl(attachment) {
    const cached = this.attachmentUrlRequests.get(attachment.id);
    if (cached)
      return cached;
    const request = this.http.get(`${this.apiUrl}/message-attachments/${attachment.id}/download`, { responseType: "blob" }).pipe(
      map((blob) => {
        const url = URL.createObjectURL(blob);
        this.objectUrlCache.set(attachment.id, url);
        return url;
      }),
      // Une seule requête authentifiée, même si Angular réévalue le template.
      shareReplay({ bufferSize: 1, refCount: true })
    );
    this.attachmentUrlRequests.set(attachment.id, request);
    return request;
  }
  downloadAttachment(attachment) {
    this.http.get(`${this.apiUrl}/message-attachments/${attachment.id}/download`, { responseType: "blob" }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = attachment.file_name;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(url);
      }
    });
  }
  // ── Annuaire ─────────────────────────────────────────────────────────────
  searchDirectory(term) {
    return this.http.get(`${this.apiUrl}/users/directory?search=${encodeURIComponent(term)}`).pipe(map((res) => res.data));
  }
  startConversation(targetUserId) {
    return this.http.post(`${this.apiUrl}/conversations`, { target_user_id: targetUserId }).pipe(map((res) => res.data));
  }
  static \u0275fac = function ChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = environment.apiUrl;
  tokenKey = "auth_token";
  chatService = inject(ChatService);
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
      this.chatService.resetSession();
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
      this.chatService.resetSession();
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
      this.chatService.resetSession();
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
    this.chatService.resetSession();
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
  ChatService,
  AuthService
};
//# sourceMappingURL=chunk-AI3EC5OL.js.map
