<?php

namespace App\Policies;

use App\Models\Conversation;
use App\Models\User;

class ConversationPolicy
{
    /**
     * L'utilisateur peut voir la conversation s'il en fait partie.
     */
    public function view(User $user, Conversation $conversation): bool
    {
        return $conversation->user_one_id === $user->id
            || $conversation->user_two_id === $user->id;
    }

    /**
     * Une nouvelle conversation est possible avec tout utilisateur de la même entreprise.
     */
    public function create(User $user, User $target): bool
    {
        return $target->company_id === $user->company_id
            && $target->id !== $user->id;
    }
}