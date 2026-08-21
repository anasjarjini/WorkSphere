import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatService } from '../../core/services/chat.service';
import { AuthService } from '../../core/services/auth.service';
import { ChatConversation, DirectoryUser } from '../../core/models/chat.model';
import { ChatAvatarComponent } from '../../shared/components/chat-avatar/chat-avatar.component';
import { MessageThreadComponent } from './message-thread.component';

@Component({
  selector: 'app-chat-layout',
  standalone: true,
  imports: [DatePipe, ChatAvatarComponent, MessageThreadComponent],
  host: {
    class: 'flex flex-1 min-h-0 min-w-0',
  },
  template: `
    <div class="flex-1 min-h-0 flex bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden mx-6 my-4">
      <!-- Colonne gauche : conversations -->
      <aside class="w-full lg:w-1/3 lg:min-w-[320px] lg:max-w-[400px] flex flex-col border-r border-outline-variant {{ selected() ? 'hidden lg:flex' : 'flex' }}">
        <!-- Header -->
        <div class="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright shrink-0">
          <h2 class="font-headline-md text-headline-md font-semibold text-on-surface">Messages</h2>
          <button (click)="openNewConversation()"
            class="text-primary hover:bg-surface-variant p-2 rounded-lg transition-colors cursor-pointer" title="Nouvelle conversation">
            <span class="material-symbols-outlined">add_comment</span>
          </button>
        </div>

        <!-- Recherche -->
        <div class="p-4 border-b border-outline-variant shrink-0">
          <div class="relative">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input type="text" placeholder="Rechercher une conversation..."
              class="w-full pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface font-body-md transition-shadow" />
          </div>
        </div>

        <!-- Liste des conversations -->
        <div class="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          @if (chatService.loadingConversations() && conversations().length === 0) {
            <div class="flex justify-center py-10">
              <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          } @else if (conversations().length === 0) {
            <div class="p-8 text-center">
              <span class="material-symbols-outlined text-[40px] text-on-surface-variant mx-auto mb-3 block">chat</span>
              <p class="text-body-md text-on-surface-variant mb-1">Aucune conversation</p>
              <p class="text-label-sm text-on-surface-variant">Cliquez sur « Nouvelle conversation » pour démarrer.</p>
            </div>
          } @else {
            @for (conversation of conversations(); track conversation.id) {
              <button (click)="selectConversation(conversation)"
                class="w-full flex items-center gap-4 p-4 text-left cursor-pointer border-b border-outline-variant transition-colors
                  {{ selected()?.id === conversation.id
                    ? 'bg-surface-container border-l-4 border-l-primary'
                    : 'hover:bg-surface-container-low border-l-4 border-l-transparent' }}">
                <app-chat-avatar [user]="conversation.other_user" size="md" [showOnline]="true" borderColor="border-surface-container" />
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-baseline mb-1">
                    <h3 class="font-label-md text-label-md font-bold text-on-surface truncate">{{ contactName(conversation) }}</h3>
                    <span class="text-label-sm {{ conversation.unread_count > 0 ? 'text-primary font-bold' : 'text-on-surface-variant' }} shrink-0 ml-2">{{ timeLabel(conversation) }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    @if (previewOf(conversation)) {
                      @if (previewOf(conversation)?.content) {
                        <span class="text-body-md text-on-surface-variant truncate flex-1">{{ previewOf(conversation)?.content }}</span>
                      } @else {
                        <span class="material-symbols-outlined text-[16px] text-on-surface-variant">attachment</span>
                        <span class="text-body-md text-on-surface-variant truncate font-medium">Pièce jointe</span>
                      }
                    }
                  </div>
                </div>
                @if (conversation.unread_count > 0) {
                  <div class="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {{ conversation.unread_count > 9 ? '9+' : conversation.unread_count }}
                  </div>
                }
              </button>
            }
          }
        </div>
      </aside>

      <!-- Colonne droite : fil de messages -->
      <main class="flex-1 min-w-0 flex-col min-h-0 {{ selected() ? 'flex' : 'hidden lg:flex' }}">
        @if (selected(); as conversation) {
          <app-message-thread class="flex flex-1 min-h-0 w-full" [conversation]="conversation" [currentUserId]="currentUserId()" (backClicked)="closeThread()" />
        } @else {
          <div class="flex-1 flex items-center justify-center flex-col gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-[48px]">chat</span>
            <p class="text-body-md text-on-surface-variant">Sélectionnez une conversation pour afficher les messages</p>
          </div>
        }
      </main>
    </div>

    <!-- Modal nouvelle conversation -->
    @if (newConversationOpen()) {
      <div class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" (click)="closeNewConversation()">
        <div class="w-full max-w-md bg-surface rounded-2xl shadow-xl overflow-hidden" (click)="$event.stopPropagation()">
          <div class="px-5 py-4 border-b border-outline-variant flex items-center justify-between">
            <h2 class="font-headline-md text-headline-md font-bold text-on-surface">Nouvelle conversation</h2>
            <button (click)="closeNewConversation()" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer" aria-label="Fermer">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="p-4">
            <div class="relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input #searchInput type="text" [value]="directoryQuery()" (input)="onDirectoryInput($event)"
                placeholder="Rechercher un collaborateur…"
                class="w-full pl-10 pr-4 py-2.5 bg-surface-container border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-on-surface font-body-md transition-shadow" />
            </div>
            <div class="mt-3 max-h-72 overflow-y-auto">
              @if (directoryLoading()) {
                <div class="flex justify-center py-8">
                  <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              } @else if (directoryResults().length === 0) {
                <p class="py-8 text-center text-body-md text-on-surface-variant">Aucun collaborateur trouvé</p>
              } @else {
                @for (user of directoryResults(); track user.id) {
                  <button (click)="startWith(user)"
                    class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer text-left">
                    <app-chat-avatar [user]="user" size="sm" />
                    <span class="min-w-0 flex-1">
                      <span class="block font-label-md text-label-md text-on-surface truncate">{{ user.first_name }} {{ user.last_name }}</span>
                      <span class="block text-label-sm text-[11px] text-on-surface-variant truncate">
                        {{ roleLabel(user.role) }}
                        @if (user.job_title) { — {{ user.job_title }} }
                      </span>
                    </span>
                    <span class="material-symbols-outlined text-on-surface-variant shrink-0">chat</span>
                  </button>
                }
              }
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class ChatLayoutComponent implements OnInit {
  readonly chatService = inject(ChatService);
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  readonly conversations = this.chatService.conversations;
  readonly selected = signal<ChatConversation | null>(null);
  readonly newConversationOpen = signal(false);
  readonly directoryQuery = signal('');
  readonly directoryResults = signal<DirectoryUser[]>([]);
  readonly directoryLoading = signal(false);

  private dirSearchTimer: ReturnType<typeof setTimeout> | null = null;

  currentUserId(): number {
    return this.authService.currentUser()?.id ?? 0;
  }

  ngOnInit(): void {
    this.chatService.startChatPolling(20000);
  }

  ngOnDestroy(): void {
    this.chatService.stopChatPolling();
    this.chatService.closeConversation();
    if (this.dirSearchTimer !== null) clearTimeout(this.dirSearchTimer);
  }

  contactName(conversation: ChatConversation): string {
    const other = conversation.other_user;
    if (!other) return 'Conversation';
    return `${other.first_name} ${other.last_name}`.trim();
  }

  previewOf(conversation: ChatConversation) {
    return conversation.last_message;
  }

  timeLabel(conversation: ChatConversation): string {
    const date = conversation.last_message_at;
    if (!date) return '';
    const d = new Date(date);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) {
      return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  }

  selectConversation(conversation: ChatConversation): void {
    this.selected.set(conversation);
    this.chatService.openConversation(conversation.id);
  }

  closeThread(): void {
    this.selected.set(null);
    this.chatService.closeConversation();
  }

  openNewConversation(): void {
    this.newConversationOpen.set(true);
    this.directoryQuery.set('');
    this.directoryResults.set([]);
    this.searchDirectory('');
  }

  closeNewConversation(): void {
    this.newConversationOpen.set(false);
  }

  onDirectoryInput(event: Event): void {
    const term = (event.target as HTMLInputElement).value;
    this.directoryQuery.set(term);
    if (this.dirSearchTimer !== null) clearTimeout(this.dirSearchTimer);
    this.dirSearchTimer = setTimeout(() => this.searchDirectory(term), 300);
  }

  private searchDirectory(term: string): void {
    this.directoryLoading.set(true);
    this.chatService
      .searchDirectory(term)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (users) => {
          this.directoryResults.set(users);
          this.directoryLoading.set(false);
        },
        error: () => this.directoryLoading.set(false),
      });
  }

  roleLabel(role: string): string {
    switch (role) {
      case 'HR_ADMIN': return 'Admin RH';
      case 'MANAGER': return 'Manager';
      case 'EMPLOYE': return 'Employé';
      default: return '';
    }
  }

  startWith(user: DirectoryUser): void {
    this.chatService
      .startConversation(user.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (conversation) => {
          this.chatService.fetchChatOverview();
          this.closeNewConversation();
          this.selectConversation(conversation);
        },
      });
  }
}
