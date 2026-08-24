<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HeartbeatController extends Controller
{
    /**
     * Lightweight heartbeat endpoint. Updates authenticated user's last_active_at.
     */
    public function store(Request $request): \Illuminate\Http\Response
    {
        $user = $request->user();

        if ($user) {
            // Save quietly to avoid firing heavy model events.
            $user->forceFill(['last_active_at' => now()])->saveQuietly();
        }

        return response()->noContent();
    }
}
