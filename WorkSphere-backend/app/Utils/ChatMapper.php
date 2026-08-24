<?php

namespace App\Utils;

use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;

/**
 * Mappeurs de présentation pour le module de messagerie.
 */
class ChatMapper
{
    public static function conversation(Conversation $conversation, User $viewer): array
    {
        $lastMessage = $conversation->messages->first();

        $other = $conversation->user_one_id === $viewer->id
            ? $conversation->userTwo
            : $conversation->userOne;

        return [
            'id' => $conversation->id,
            'other_user' => $other ? self::user($other) : null,
            'last_message' => $lastMessage ? self::message($lastMessage) : null,
            'unread_count' => (int) ($conversation->unread_count ?? 0),
            'last_message_at' => $conversation->last_message_at?->toISOString(),
        ];
    }

    public static function message(Message $message): array
    {
        return [
            'id' => $message->id,
            'conversation_id' => $message->conversation_id,
            'sender_id' => $message->sender_id,
            'content' => $message->content,
            'read_at' => $message->read_at?->toISOString(),
            'created_at' => $message->created_at?->toISOString(),
            'sender' => $message->sender ? self::user($message->sender) : null,
            'attachments' => $message->attachments->map(fn ($attachment) => [
                'id' => $attachment->id,
                'file_name' => $attachment->file_name,
                'file_size' => $attachment->file_size,
                'mime_type' => $attachment->mime_type,
                'type' => $attachment->type,
            ]),
        ];
    }

    public static function user(User $user): array
    {
        return [
            'id' => $user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email,
            'role' => $user->role,
            'job_title' => $user->job_title,
            'avatar_url' => $user->avatar_url,
            'is_online' => (bool) ($user->is_online ?? false),
            'last_active_at' => $user->last_active_at?->toISOString(),
        ];
    }
}