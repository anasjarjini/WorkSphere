export interface ChatUserLite {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  job_title: string | null;
  avatar_url: string | null;
  is_online?: boolean;
  last_active_at?: string | null;
}

export interface ChatAttachment {
  id: number;
  file_name: string;
  file_size: number;
  mime_type: string;
  type: 'image' | 'document';
}

export interface ChatMessage {
  id: number;
  conversation_id: number;
  sender_id: number;
  content: string | null;
  read_at: string | null;
  created_at: string;
  sender: ChatUserLite | null;
  attachments: ChatAttachment[];
}

export interface ChatConversation {
  id: number;
  other_user: ChatUserLite | null;
  last_message: ChatMessage | null;
  unread_count: number;
  last_message_at: string | null;
}

export interface DirectoryUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  job_title: string | null;
  avatar_url: string | null;
  is_online?: boolean;
}

export interface MessagesPage {
  data: ChatMessage[];
  meta: {
    current_page: number;
    last_page: number;
    total: number;
  };
}