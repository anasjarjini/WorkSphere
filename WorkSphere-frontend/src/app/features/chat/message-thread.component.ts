import {
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Input,
  OnChanges,
  output,
  signal,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatService } from '../../core/services/chat.service';
import { ChatAttachment, ChatConversation, ChatMessage } from '../../core/models/chat.model';
import { ChatAvatarComponent } from '../../shared/components/chat-avatar/chat-avatar.component';

interface SelectedFile {
  file: File;
  previewUrl: string | null;
}

const MAX_FILES = 5;
const MAX_SIZE = 10 * 1024 * 1024;
const IMAGE_MIME = /^image\/(jpeg|png|webp|gif)$/;

@Component({
  selector: 'app-message-thread',
  standalone: true,
  imports: [DatePipe, AsyncPipe, ChatAvatarComponent],
  host: {
    class: 'flex flex-1 min-h-0 min-w-0 w-full',
  },
  template: `
    <div class="flex flex-col h-full min-h-0 w-full">
      <!-- En-tête du fil -->
      <div class="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright shrink-0 rounded-t-xl">
        <div class="flex items-center gap-4">
          <button (click)="backClicked.emit()" class="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer" aria-label="Retour à la liste">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <div class="relative">
            <app-chat-avatar [user]="conversation.other_user" size="sm" [showOnline]="true" borderColor="border-surface-bright" />
          </div>
          <div>
            <h2 class="font-label-md text-label-md font-bold text-on-surface">{{ displayName(conversation.other_user) }}</h2>
            <p class="text-label-sm text-on-surface-variant">En ligne</p>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div #scrollContainer (scroll)="onScroll()" class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 space-y-6 bg-surface">
        @if (chatService.loadingMessages() && messages().length === 0) {
          <div class="flex justify-center py-10">
            <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        } @else if (messages().length === 0) {
          <div class="flex items-center justify-center py-10">
            <p class="text-body-md text-on-surface-variant">Aucun message — commencez la discussion !</p>
          </div>
        }

        @if (chatService.canLoadOlder()) {
          <div class="flex justify-center">
            <button (click)="onLoadOlder()" [disabled]="chatService.loadingMessages()"
              class="px-4 py-1.5 rounded-full border border-outline-variant text-label-sm text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer disabled:opacity-50">
              Charger les messages précédents
            </button>
          </div>
        }

        <!-- Divider date -->
        <div class="flex justify-center">
          <span class="text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Aujourd'hui</span>
        </div>

        @for (message of messages(); track message.id) {
          <div class="flex items-end gap-3 max-w-[80%] {{ message.sender_id === currentUserId ? 'ml-auto justify-end' : '' }}">
            @if (message.sender_id !== currentUserId) {
              <app-chat-avatar [user]="message.sender" size="sm" class="mb-1 shrink-0" />
            }
            <div class="px-3 py-2.5 font-body-md {{ message.sender_id === currentUserId
              ? 'bg-primary text-white rounded-2xl rounded-br-none shadow-sm'
              : 'bg-surface-container-high text-on-surface rounded-2xl rounded-bl-none border border-outline-variant/30' }}">
              @if (message.content) {
                <p class="text-body-md whitespace-pre-wrap break-words">{{ message.content }}</p>
              }
              @for (attachment of message.attachments; track attachment.id) {
                @if (attachment.type === 'image') {
                  <div class="relative group mt-2 rounded-lg overflow-hidden border {{ message.sender_id === currentUserId ? 'border-primary-fixed-dim/30' : 'border-outline-variant' }}">
                    @if (imageUrl(attachment) | async; as url) {
                      <img [src]="url" [alt]="attachment.file_name" class="max-w-64 max-h-64 rounded-lg object-cover" />
                    }
                    <div (click)="openLightbox(attachment)"
                      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                      <span class="material-symbols-outlined text-white text-3xl">zoom_in</span>
                    </div>
                  </div>
                } @else {
                  <button (click)="chatService.downloadAttachment(attachment); $event.stopPropagation()"
                    class="mt-2 flex items-center gap-3 w-full text-left p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-primary transition-colors cursor-pointer">
                    <div class="w-10 h-10 {{ docIconColor(attachment.mime_type) }} rounded flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined">{{ docIcon(attachment.mime_type) }}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-label-md text-sm font-semibold truncate text-on-surface">{{ attachment.file_name }}</p>
                      <p class="text-label-sm text-on-surface-variant">{{ formatSize(attachment.file_size) }}</p>
                    </div>
                    <button (click)="chatService.downloadAttachment(attachment); $event.stopPropagation()"
                      class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors" title="Télécharger">
                      <span class="material-symbols-outlined">download</span>
                    </button>
                  </button>
                }
              }
              <p class="mt-1 text-right {{ message.sender_id === currentUserId ? 'text-primary-fixed-dim' : 'text-on-surface-variant' }} text-[10px]">
                {{ message.created_at | date:'HH:mm':'':'fr' }}
                @if (message.sender_id === currentUserId && message.read_at) {
                  <span class="inline-flex align-middle ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                }
              </p>
            </div>
          </div>
        }
      </div>

      <!-- Aperçu des fichiers sélectionnés -->
      @if (selectedFiles().length > 0) {
        <div class="px-4 py-2 bg-surface border-t border-outline-variant shrink-0">
          <div class="flex items-center gap-2 overflow-x-auto pb-1">
            @for (item of selectedFiles(); track $index) {
              <div class="relative shrink-0 group">
                @if (item.previewUrl) {
                  <img [src]="item.previewUrl" alt="" class="w-16 h-16 rounded-lg object-cover border border-outline-variant" />
                } @else {
                  <div class="w-16 h-16 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center">
                    <span class="material-symbols-outlined text-on-surface-variant">description</span>
                  </div>
                }
                <button (click)="removeFile($index)" aria-label="Retirer ce fichier"
                  class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-error text-white rounded-full flex items-center justify-center cursor-pointer shadow hover:bg-error-dark">
                  <span class="material-symbols-outlined text-[12px]">close</span>
                </button>
              </div>
            }
          </div>
        </div>
      }

      <!-- Zone de saisie -->
      <div class="p-4 border-t border-outline-variant bg-surface-bright shrink-0 rounded-b-xl">
        @if (chatService.sending() && chatService.uploadProgress() > 0 && chatService.uploadProgress() < 100) {
          <div class="mb-2 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <div class="h-full bg-primary rounded-full transition-all duration-200" [style.width.%]="chatService.uploadProgress()"></div>
          </div>
        }
        <div class="flex items-end gap-2">
          <input #fileInput type="file" multiple [accept]="acceptAttr" class="hidden" (change)="onFilesPicked($event)" />
          <button (click)="fileInput.click()" title="Joindre un fichier (max 5, 10 Mo)"
            class="p-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors border border-transparent hover:border-outline-variant cursor-pointer flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined">attachment</span>
          </button>
          <div class="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-shadow">
            <textarea #contentInput rows="1" [value]="draft()" (input)="onDraftInput($event)"
              (keydown.enter)="onEnter($event)" placeholder="Saisissez votre message…"
              class="w-full p-3 bg-transparent border-none focus:ring-0 resize-none font-body-md text-on-surface placeholder:text-outline max-h-32"
              style="max-height: 120px"></textarea>
          </div>
          <button (click)="onSend()" [disabled]="!canSend()"
            class="p-3 bg-primary text-white rounded-xl hover:bg-primary-container transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0 shadow-sm" aria-label="Envoyer le message">
            <span class="material-symbols-outlined">send</span>
          </button>
        </div>
        @if (fileError()) {
          <p class="mt-2 text-label-sm text-[12px] text-error" role="alert">{{ fileError() }}</p>
        }
      </div>
    </div>

    <!-- Lightbox image -->
    @if (lightboxUrl()) {
      <div class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6" (click)="closeLightbox()">
        <img [src]="lightboxUrl()" alt="Image agrandie" class="max-w-full max-h-full rounded-lg object-contain" />
        <button class="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer" aria-label="Fermer">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
    }
  `,
})
export class MessageThreadComponent implements OnChanges {
  @Input({ required: true }) conversation!: ChatConversation;
  @Input({ required: true }) currentUserId!: number;

  readonly backClicked = output<void>();

  readonly chatService = inject(ChatService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollContainerRef = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

  readonly messages = this.chatService.messages;
  readonly draft = signal('');
  readonly selectedFiles = signal<SelectedFile[]>([]);
  readonly fileError = signal<string | null>(null);
  readonly lightboxUrl = signal<string | null>(null);
  readonly acceptAttr = 'image/jpeg,image/png,image/webp,image/gif,.pdf,.doc,.docx,.xls,.xlsx';

  private readonly stickToBottom = signal(true);

  constructor() {
    effect(() => {
      const list = this.messages();
      if (list.length === 0) return;
      if (!this.stickToBottom()) return;
      setTimeout(() => {
        const container = this.scrollContainerRef()?.nativeElement;
        if (container) container.scrollTop = container.scrollHeight;
      }, 0);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['conversation'] && !changes['conversation'].firstChange) {
      this.lightboxUrl.set(null);
      this.stickToBottom.set(true);
    }
  }

  displayName(user: ChatConversation['other_user']): string {
    if (!user) return 'Conversation';
    return `${user.first_name} ${user.last_name}`.trim();
  }

  imageUrl(attachment: ChatAttachment) {
    return this.chatService.attachmentUrl(attachment);
  }

  docIcon(mime: string): string {
    if (mime.includes('spreadsheet') || mime.includes('excel') || mime.includes('sheet')) return 'table_view';
    if (mime.includes('pdf')) return 'picture_as_pdf';
    if (mime.includes('word') || mime.includes('document')) return 'description';
    return 'description';
  }

  docIconColor(mime: string): string {
    if (mime.includes('spreadsheet') || mime.includes('excel') || mime.includes('sheet')) return 'bg-green-100 text-green-700';
    if (mime.includes('pdf')) return 'bg-red-100 text-red-700';
    return 'bg-blue-100 text-blue-700';
  }

  formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }

  onScroll(): void {
    const container = this.scrollContainerRef()?.nativeElement;
    if (!container) return;
    this.stickToBottom.set(container.scrollHeight - container.scrollTop - container.clientHeight < 80);
  }

  onLoadOlder(): void {
    const container = this.scrollContainerRef()?.nativeElement;
    const previousHeight = container?.scrollHeight ?? 0;
    this.chatService.loadOlderMessages();
    setTimeout(() => {
      if (container) container.scrollTop = container.scrollHeight - previousHeight;
    }, 50);
  }

  onFilesPicked(event: Event): void {
    const input = event.target as HTMLInputElement;
    const picked = Array.from(input.files ?? []);
    input.value = '';

    this.fileError.set(null);
    if (picked.length === 0) return;

    const current = this.selectedFiles();
    if (current.length + picked.length > MAX_FILES) {
      this.fileError.set(`Maximum ${MAX_FILES} pièces jointes par message.`);
      return;
    }

    const oversized = picked.find((f) => f.size > MAX_SIZE);
    if (oversized) {
      this.fileError.set(`« ${oversized.name} » dépasse la taille maximale de 10 Mo.`);
      return;
    }

    const items: SelectedFile[] = picked.map((file) => ({
      file,
      previewUrl: IMAGE_MIME.test(file.type) ? URL.createObjectURL(file) : null,
    }));
    this.selectedFiles.set([...current, ...items]);
  }

  removeFile(index: number): void {
    const item = this.selectedFiles()[index];
    if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
    this.selectedFiles.update((list) => list.filter((_, i) => i !== index));
  }

  canSend(): boolean {
    return this.draft().trim() !== '' || this.selectedFiles().length > 0;
  }

  onEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.shiftKey) return;
    keyboardEvent.preventDefault();
    this.onSend();
  }

  onDraftInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (!textarea) return;
    this.draft.set(textarea.value);
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  }

  onSend(): void {
    if (!this.canSend() || this.chatService.sending()) return;

    this.chatService
      .sendMessage(this.conversation.id, this.draft(), this.selectedFiles().map((s) => s.file))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.resetComposer(),
        error: (error: HttpErrorResponse) => this.fileError.set(this.sendErrorMessage(error)),
      });
  }

  private resetComposer(): void {
    this.selectedFiles().forEach((item) => item.previewUrl && URL.revokeObjectURL(item.previewUrl));
    this.selectedFiles.set([]);
    this.draft.set('');
    this.fileError.set(null);
  }

  private sendErrorMessage(error: HttpErrorResponse): string {
    const validationErrors = error.error?.errors;
    if (validationErrors && typeof validationErrors === 'object') {
      const firstError = Object.values(validationErrors).flat()[0];
      if (typeof firstError === 'string') return firstError;
    }

    if (error.status === 403) return 'Vous n’êtes pas autorisé à envoyer un message dans cette conversation.';
    if (error.status === 413) return 'Le fichier est trop volumineux.';
    if (error.status >= 500) return 'Le serveur a rencontré une erreur. Réessayez dans un instant.';

    return 'Échec de l’envoi. Vérifiez votre connexion et réessayez.';
  }

  openLightbox(attachment: ChatAttachment): void {
    this.chatService.attachmentUrl(attachment)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((url) => this.lightboxUrl.set(url));
  }

  closeLightbox(): void {
    this.lightboxUrl.set(null);
  }
}
