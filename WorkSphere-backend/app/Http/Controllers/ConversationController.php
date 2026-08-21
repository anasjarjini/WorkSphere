<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\User;
use App\Services\ConversationService;
use App\Utils\ChatMapper;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;

class ConversationController extends Controller
{
    public function __construct(
        private readonly ConversationService $conversationService
    ) {}

    /**
     * Liste des conversations de l'utilisateur connecté (dernier message + non-lus).
     */
    public function index(Request $request): JsonResponse
    {
        $conversations = $this->conversationService->conversationsFor($request->user());

        return response()->json([
            'data' => $conversations->map(fn (Conversation $conversation) => ChatMapper::conversation($conversation, $request->user())),
        ]);
    }

    /**
     * Total de messages non lus de l'utilisateur (badge sidebar).
     */
    public function unreadCount(Request $request): JsonResponse
    {
        return response()->json([
            'unread_count' => $this->conversationService->unreadCount($request->user()),
        ]);
    }

    /**
     * Crée (ou récupère) une conversation avec un autre utilisateur de l'entreprise.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'target_user_id' => 'required|integer|exists:users,id',
        ]);

        $target = User::findOrFail($request->target_user_id);

        Gate::authorize('create', [Conversation::class, $target]);

        try {
            $conversation = $this->conversationService->findOrCreate($request->user(), $target);
        } catch (\InvalidArgumentException $e) {
            throw ValidationException::withMessages(['target_user_id' => $e->getMessage()]);
        }

        return response()->json([
            'data' => ChatMapper::conversation($conversation->load(['userOne', 'userTwo']), $request->user()),
        ], 201);
    }

    /**
     * Messages paginés d'une conversation (les plus récents en premier),
     * marqués comme lus automatiquement.
     */
    public function messages(Conversation $conversation, Request $request): JsonResponse
    {
        Gate::authorize('view', $conversation);

        $messages = $conversation->messages()
            ->with(['attachments', 'sender'])
            ->orderByDesc('created_at')
            ->paginate(50);

        $this->conversationService->markAsRead($conversation, $request->user());

        return response()->json([
            'data' => collect($messages->items())->map(fn ($message) => ChatMapper::message($message)),
            'meta' => [
                'current_page' => $messages->currentPage(),
                'last_page' => $messages->lastPage(),
                'total' => $messages->total(),
            ],
        ]);
    }

    /**
     * Envoie un message (multipart/form-data : content + attachments[]).
     */
    public function storeMessage(Conversation $conversation, Request $request): JsonResponse
    {
        Gate::authorize('view', $conversation);

        $request->validate([
            'content' => 'nullable|string',
            'attachments' => 'nullable|array',
            'attachments.*' => 'file',
        ]);

        $message = $this->conversationService->sendMessage(
            $conversation,
            $request->user(),
            $request->input('content'),
            $request->file('attachments', [])
        );

        $conversation->unsetRelation('messages');

        return response()->json([
            'data' => ChatMapper::message($message->load(['attachments', 'sender'])),
        ], 201);
    }
}