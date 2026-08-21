<?php

namespace App\Policies;

use App\Models\MessageAttachment;
use App\Models\User;

class MessageAttachmentPolicy
{
    /**
     * Le téléchargement d'une pièce jointe n'est autorisé qu'aux participants
     * de la conversation contenant le message parent.
     */
    public function download(User $user, MessageAttachment $attachment): bool
    {
        $conversation = $attachment->message?->conversation;

        if (! $conversation) {
            return false;
        }

        return $conversation->user_one_id === $user->id
            || $conversation->user_two_id === $user->id;
    }
}