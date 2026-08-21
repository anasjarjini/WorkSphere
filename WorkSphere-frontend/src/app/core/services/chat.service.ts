import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, finalize, map, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ChatAttachment,
  ChatConversation,
  ChatMessage,
  DirectoryUser,
  MessagesPage,
} from '../models/chat.model';

/**
 * Service central du chat 1-à-1.
 *
 * Le polling est entièrement encapsulé ici : les composants consomment
 * uniquement des signals et des méthodes métier. Le passage à du temps réel
 * (WebSocket/Reverb) ne modifiera que l'intérieur de ce service.
 */
@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  readonly conversations = signal<ChatConversation[]>([]);
  readonly messages = signal<ChatMessage[]>([]);
  readonly unreadCount = signal(0);
  readonly loadingConversations = signal(false);
  readonly loadingMessages = signal(false);
  readonly canLoadOlder = signal(false);
  readonly activeConversationId = signal<number | null>(null);
  readonly sending = signal(false);
  readonly uploadProgress = signal(0);

  private readonly objectUrlCache = new Map<number, string>();
  private readonly attachmentUrlRequests = new Map<number, Observable<string>>();
  private currentPage = 1;
  private lastPage = 1;
  private readonly loadedPages = new Set<number>();
  private messagesRequestVersion = 0;
  private sessionVersion = 0;

  private chatTimer: ReturnType<typeof setInterval> | null = null;
  private messagesTimer: ReturnType<typeof setInterval> | null = null;

  // ── Liste des conversations + badge non-lus ──────────────────────────────

  fetchChatOverview(): void {
    const sessionVersion = this.sessionVersion;
    this.loadingConversations.set(true);
    this.http
      .get<{ data: ChatConversation[] }>(`${this.apiUrl}/conversations`)
      .pipe(finalize(() => this.loadingConversations.set(false)))
      .subscribe({
        next: (res) => {
          if (this.sessionVersion === sessionVersion) this.conversations.set(res.data);
        },
      });
    this.http
      .get<{ unread_count: number }>(`${this.apiUrl}/conversations/unread-count`)
      .subscribe({
        next: (res) => {
          if (this.sessionVersion === sessionVersion) this.unreadCount.set(res.unread_count);
        },
      });
  }

  startChatPolling(intervalMs = 20000): void {
    if (this.chatTimer !== null) return;
    this.fetchChatOverview();
    this.chatTimer = setInterval(() => this.fetchChatOverview(), intervalMs);
  }

  stopChatPolling(): void {
    if (this.chatTimer !== null) {
      clearInterval(this.chatTimer);
      this.chatTimer = null;
    }
  }

  // ── Ouverture / fermeture d'une conversation ─────────────────────────────

  openConversation(conversationId: number): void {
    if (this.activeConversationId() === conversationId && this.messages().length > 0) {
      return;
    }

    // Invalide les réponses HTTP du fil précédent et évite d'afficher ses messages
    // pendant le chargement de la nouvelle conversation.
    this.messagesRequestVersion++;
    this.activeConversationId.set(conversationId);
    this.messages.set([]);
    this.currentPage = 1;
    this.lastPage = 1;
    this.loadedPages.clear();
    this.canLoadOlder.set(false);
    this.fetchMessages(1);
    this.stopMessagePolling();
    this.messagesTimer = setInterval(() => this.fetchMessages(1, true), 5000);
  }

  closeConversation(): void {
    this.messagesRequestVersion++;
    this.activeConversationId.set(null);
    this.messages.set([]);
    this.stopMessagePolling();
  }

  stopMessagePolling(): void {
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
  resetSession(): void {
    this.sessionVersion++;
    this.messagesRequestVersion++;
    this.stopChatPolling();
    this.stopMessagePolling();

    for (const url of this.objectUrlCache.values()) URL.revokeObjectURL(url);
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

  fetchMessages(page = 1, silent = false): void {
    const conversationId = this.activeConversationId();
    if (!conversationId) return;

    const requestVersion = this.messagesRequestVersion;

    if (!silent) this.loadingMessages.set(true);
    this.http
      .get<MessagesPage>(`${this.apiUrl}/conversations/${conversationId}/messages?page=${page}`)
      .pipe(finalize(() => this.loadingMessages.set(false)))
      .subscribe({
        next: (res) => {
          // Une réponse arrivée après un changement de conversation est obsolète.
          if (this.activeConversationId() !== conversationId || this.messagesRequestVersion !== requestVersion) {
            return;
          }

          this.mergeMessages(res, page);
        },
      });
  }

  private mergeMessages(page: MessagesPage, requestedPage: number): void {
    // Le polling de la page 1 peut arriver pendant le chargement de pages
    // anciennes. On garde donc la page la plus ancienne déjà chargée.
    this.loadedPages.add(requestedPage);
    this.currentPage = Math.max(...this.loadedPages);
    this.lastPage = page.meta.last_page;
    this.canLoadOlder.set(this.currentPage < this.lastPage);

    const byId = new Map<number, ChatMessage>();
    for (const m of this.messages()) byId.set(m.id, m);
    for (const m of page.data) byId.set(m.id, m);

    const merged = [...byId.values()].sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    this.messages.set(merged);
  }

  loadOlderMessages(): void {
    this.fetchMessages(this.currentPage + 1, true);
  }

  // ── Envoi ────────────────────────────────────────────────────────────────

  sendMessage(conversationId: number, content: string, files: File[]): Observable<ChatMessage> {
    const formData = new FormData();
    if (content.trim() !== '') {
      formData.append('content', content);
    }
    files.forEach((file) => formData.append('attachments[]', file, file.name));

    this.sending.set(true);
    this.uploadProgress.set(0);

    return new Observable<ChatMessage>((subscriber) => {
      const req = this.http
        .post<{ data: ChatMessage }>(`${this.apiUrl}/conversations/${conversationId}/messages`, formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(
          finalize(() => {
            this.sending.set(false);
            this.uploadProgress.set(0);
            this.fetchChatOverview();
          })
        )
        .subscribe({
          next: (event) => {
            if (event.type === HttpEventType.UploadProgress) {
              const total = event.total ?? 1;
              this.uploadProgress.set(Math.round((100 * event.loaded) / total));
            } else if (event.type === HttpEventType.Response && event.body) {
              const message = event.body.data;
              // L'utilisateur a pu ouvrir un autre fil avant la réponse.
              // Ne jamais injecter le message du premier fil dans le second.
              if (this.activeConversationId() === conversationId) {
                this.messages.update((list) => [...list, message]);
              }
              subscriber.next(message);
              subscriber.complete();
            }
          },
          error: (err) => subscriber.error(err),
        });

      return () => req.unsubscribe();
    });
  }

  // ── Pièces jointes (toujours via endpoint authentifié, jamais d'URL publique) ──

  attachmentUrl(attachment: ChatAttachment): Observable<string> {
    const cached = this.attachmentUrlRequests.get(attachment.id);
    if (cached) return cached;

    const request = this.http
      .get(`${this.apiUrl}/message-attachments/${attachment.id}/download`, { responseType: 'blob' })
      .pipe(
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

  downloadAttachment(attachment: ChatAttachment): void {
    this.http
      .get(`${this.apiUrl}/message-attachments/${attachment.id}/download`, { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          const url = URL.createObjectURL(blob);
          const anchor = document.createElement('a');
          anchor.href = url;
          anchor.download = attachment.file_name;
          document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
          URL.revokeObjectURL(url);
        },
      });
  }

  // ── Annuaire ─────────────────────────────────────────────────────────────

  searchDirectory(term: string): Observable<DirectoryUser[]> {
    return this.http
      .get<{ data: DirectoryUser[] }>(`${this.apiUrl}/users/directory?search=${encodeURIComponent(term)}`)
      .pipe(map((res) => res.data));
  }

  startConversation(targetUserId: number): Observable<ChatConversation> {
    return this.http
      .post<{ data: ChatConversation }>(`${this.apiUrl}/conversations`, { target_user_id: targetUserId })
      .pipe(map((res) => res.data));
  }
}
