import { Component, inject, OnInit } from '@angular/core';
import { ChatService } from '../../../core/services/chat.service';

@Component({
  selector: 'app-chat-unread-badge',
  standalone: true,
  template: `
    @if (chatService.unreadCount() > 0) {
      <span class="ml-auto min-w-5 h-5 px-1.5 bg-primary text-white text-[11px] font-bold rounded-full flex items-center justify-center">
        {{ chatService.unreadCount() > 9 ? '9+' : chatService.unreadCount() }}
      </span>
    }
  `,
})
export class ChatUnreadBadgeComponent implements OnInit {
  readonly chatService = inject(ChatService);

  ngOnInit(): void {
    this.chatService.startChatPolling(20000);
  }

  ngOnDestroy(): void {
    this.chatService.stopChatPolling();
  }
}