<?php

namespace App\Services;

use App\Models\Conversation;
use App\Models\Message;
use App\Models\MessageAttachment;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class ConversationService
{
    private const MAX_ATTACHMENTS_PER_MESSAGE = 5;

    private const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 Mo

    private const IMAGE_MIMES = [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/gif',
    ];

    private const DOCUMENT_MIMES = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];

    /**
     * Trouve la conversation entre deux utilisateurs ou la crée.
     *
     * @throws \InvalidArgumentException si les utilisateurs ne sont pas de la même entreprise
     */
    public function findOrCreate(User $userA, User $userB): Conversation
    {
        if ($userA->id === $userB->id) {
            throw new \InvalidArgumentException('Une conversation ne peut pas être ouverte avec soi-même.');
        }

        if ($userA->company_id !== $userB->company_id) {
            throw new \InvalidArgumentException('Les utilisateurs doivent appartenir à la même entreprise.');
        }

        $userOneId = min($userA->id, $userB->id);
        $userTwoId = max($userA->id, $userB->id);

        return Conversation::firstOrCreate(
            ['user_one_id' => $userOneId, 'user_two_id' => $userTwoId],
            ['company_id' => $userA->company_id]
        );
    }

    /**
     * Envoie un message, avec ou sans pièces jointes.
     *
     * @param string|null                $content     texte du message (nullable si pièces jointes)
     * @param array<int, UploadedFile>   $attachments fichiers joints (max 5)
     *
     * @throws ValidationException si le message est vide, qu'un fichier est invalide ou trop volumineux
     */
    public function sendMessage(Conversation $conversation, User $sender, ?string $content, array $attachments = []): Message
    {
        $content = is_null($content) ? null : trim((string) $content);

        if (blank($content) && count($attachments) === 0) {
            throw ValidationException::withMessages([
                'message' => 'Un message doit contenir du texte ou au moins une pièce jointe.',
            ]);
        }

        if (count($attachments) > self::MAX_ATTACHMENTS_PER_MESSAGE) {
            throw ValidationException::withMessages([
                'attachments' => 'Maximum ' . self::MAX_ATTACHMENTS_PER_MESSAGE . ' pièces jointes par message.',
            ]);
        }

        $validatedFiles = [];
        foreach ($attachments as $index => $file) {
            $validatedFiles[] = $this->validateAttachment($file, $index, $conversation->id);
        }

        $message = $conversation->messages()->create([
            'sender_id' => $sender->id,
            'content' => $content !== '' ? $content : null,
        ]);

        foreach ($validatedFiles as $attachment) {
            $message->attachments()->create($attachment);
        }

        $conversation->update(['last_message_at' => $message->created_at]);

        return $message;
    }

    /**
     * Marque comme lus tous les messages non lus d'une conversation (hors messages de l'utilisateur).
     */
    public function markAsRead(Conversation $conversation, User $reader): void
    {
        $conversation->messages()
            ->where('sender_id', '!=', $reader->id)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);
    }

    /**
     * Nombre total de messages non lus de l'utilisateur, tous fils confondus.
     */
    public function unreadCount(User $user): int
    {
        return (int) Conversation::query()
            ->where(fn ($q) => $q->where('user_one_id', $user->id)->orWhere('user_two_id', $user->id))
            ->withCount(['messages as unread' => fn ($q) => $q
                ->where('sender_id', '!=', $user->id)
                ->whereNull('read_at')])
            ->get()
            ->sum('unread');
    }

    /**
     * Liste des conversations de l'utilisateur, triées par activité, avec dernier message et non-lus.
     */
    public function conversationsFor(User $user)
    {
        $conversations = Conversation::query()
            ->where(fn ($q) => $q->where('user_one_id', $user->id)->orWhere('user_two_id', $user->id))
            ->with(['userOne', 'userTwo'])
            ->withCount(['messages as unread_count' => fn ($q) => $q
                ->where('sender_id', '!=', $user->id)
                ->whereNull('read_at')])
            ->orderByDesc('last_message_at')
            ->get();

        $conversations->load(['messages' => fn ($q) => $q->with('attachments')->latest('created_at')->limit(1)]);

        return $conversations;
    }

    /**
     * Valide et prépare une pièce jointe (mime réel vérifié, jamais l'extension déclarée).
     *
     * @return array{file_path: string, file_name: string, mime_type: string, file_size: int, type: string}
     */
    private function validateAttachment(UploadedFile $file, int $index, int $conversationId): array
    {
        if (! $file->isValid()) {
            throw ValidationException::withMessages([
                "attachments.$index" => 'Le fichier n\'a pas pu être uploadé.',
            ]);
        }

        $mime = strtolower((string) $file->getMimeType());

        if (in_array($mime, self::IMAGE_MIMES, true)) {
            $type = 'image';
        } elseif (in_array($mime, self::DOCUMENT_MIMES, true)) {
            $type = 'document';
        } else {
            throw ValidationException::withMessages([
                "attachments.$index" => 'Type de fichier non autorisé (images : jpg, jpeg, png, webp, gif ; documents : pdf, doc, docx, xls, xlsx).',
            ]);
        }

        if ($file->getSize() > self::MAX_FILE_SIZE) {
            throw ValidationException::withMessages([
                "attachments.$index" => 'Le fichier dépasse la taille maximale de 10 Mo.',
            ]);
        }

        // Les pièces jointes ne doivent jamais être accessibles via /storage.
        // Elles sont exclusivement servies par l'endpoint authentifié.
        $path = $file->store('chat-attachments/' . $conversationId, 'local');

        return [
            'file_path' => $path,
            'file_name' => $this->sanitizeFileName($file->getClientOriginalName()),
            'mime_type' => $mime,
            'file_size' => $file->getSize(),
            'type' => $type,
        ];
    }

    private function sanitizeFileName(string $name): string
    {
        $sanitized = preg_replace('/[<>:"\/\\\\|?*\x00-\x1F]/', '_', $name) ?? 'piece_jointe';

        return mb_substr($sanitized, 0, 200);
    }
}
