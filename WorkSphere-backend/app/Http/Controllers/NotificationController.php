<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Liste paginée des notifications de l'utilisateur connecté.
     *
     * Retourne les notifications les plus récentes en premier,
     * avec le statut read_at pour savoir si elles sont lues ou non.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $notifications = $request->user()
            ->notifications()
            ->paginate(20);

        return response()->json($notifications);
    }

    /**
     * Retourne le nombre de notifications non lues.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function unreadCount(Request $request): JsonResponse
    {
        $count = $request->user()->unreadNotifications()->count();

        return response()->json([
            'unread_count' => $count,
        ]);
    }

    /**
     * Marque une notification spécifique comme lue.
     *
     * @param string $id (UUID de la notification)
     * @param Request $request
     * @return JsonResponse
     */
    public function markAsRead(string $id, Request $request): JsonResponse
    {
        $notification = $request->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return response()->json([
            'message' => 'Notification marquée comme lue.',
        ]);
    }

    /**
     * Marque toutes les notifications de l'utilisateur comme lues.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function markAllAsRead(Request $request): JsonResponse
    {
        $request->user()->unreadNotifications()->update(['read_at' => now()]);

        return response()->json([
            'message' => 'Toutes les notifications ont été marquées comme lues.',
        ]);
    }
}
