import { Component, inject, Input } from '@angular/core';
import { ImageUrlService } from '../../../core/services/image-url.service';
import { ChatUserLite } from '../../../core/models/chat.model';

@Component({
  selector: 'app-chat-avatar',
  standalone: true,
  template: `
    <div class="relative shrink-0 {{ sizeClass }}">
      @if (user?.avatar_url) {
        <img [src]="imageUrlService.resolve(user!.avatar_url)" [alt]="displayName"
          class="w-full h-full rounded-full object-cover border border-outline-variant" />
      } @else {
        <div class="w-full h-full rounded-full bg-primary-container/30 text-primary font-bold flex items-center justify-center border border-outline-variant">
          {{ initials }}
        </div>
      }
      @if (showOnline) {
        <span class="absolute bottom-0 right-0 w-3 h-3 border-2 {{ borderColor }} rounded-full {{ user?.is_online ? 'bg-green-500' : 'bg-on-surface-variant' }}"></span>
      }
    </div>
  `,
})
export class ChatAvatarComponent {
  @Input({ required: true }) user: ChatUserLite | null | undefined = null;
  @Input() size: 'sm' | 'md' = 'md';
  @Input() showOnline = false;
  @Input() borderColor = 'border-white';

  readonly imageUrlService = inject(ImageUrlService);

  get displayName(): string {
    const user = this.user;
    if (!user) return '?';
    return `${user.first_name} ${user.last_name}`.trim();
  }

  get initials(): string {
    const user = this.user;
    if (!user) return '?';
    return `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`.toUpperCase();
  }

  get sizeClass(): string {
    return this.size === 'sm' ? 'w-9 h-9 text-xs' : 'w-11 h-11 text-sm';
  }
}
