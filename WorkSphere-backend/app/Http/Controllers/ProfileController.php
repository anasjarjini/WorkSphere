<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Requests\UploadAvatarRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    /**
     * Retourne l'utilisateur connecté avec ses relations et son avatar_url.
     */
    public function show(Request $request)
    {
        $user = $request->user()->load('company', 'department');

        return response()->json([
            'user' => new UserResource($user),
        ], 200);
    }

    /**
     * Upload / remplacement de l'avatar de l'utilisateur connecté.
     */
    public function uploadAvatar(UploadAvatarRequest $request)
    {
        $user = $request->user();
        $file = $request->file('avatar');

        // ─── Générer un nom de fichier unique ──────────────────────────────────────
        $extension = strtolower($file->getClientOriginalExtension());
        $filename = 'avatars/' . Str::random(20) . '.' . $extension;

        // ─── Lecture directe et sûre du fichier binaire ───────────────────────────
        $contents = file_get_contents($file->getRealPath());

        // ─── Enregistrer le nouveau fichier sur le stockage (S3 ou local) ─────────
        Storage::disk('public')->put($filename, $contents);

        // ─── Supprimer l'ancien avatar après confirmation du nouvel upload ────────
        if ($user->avatar && $user->avatar !== $filename) {
            try {
                Storage::disk('public')->delete($user->avatar);
            } catch (\Throwable $e) {
                // Ignorer si l'ancien fichier est introuvable
            }
        }

        // ─── Mettre à jour la base de données ──────────────────────────────────────
        $user->update(['avatar' => $filename]);

        return response()->json([
            'message'    => 'Avatar mis à jour avec succès.',
            'avatar_url' => Storage::disk('public')->url($filename),
        ], 200);
    }

    /**
     * Supprime l'avatar de l'utilisateur connecté.
     */
    public function deleteAvatar(Request $request)
    {
        $user = $request->user();

        if ($user->avatar) {
            try {
                Storage::disk('public')->delete($user->avatar);
            } catch (\Throwable $e) {
                // Ignorer si déjà supprimé
            }
            $user->update(['avatar' => null]);
        }

        return response()->json([
            'message' => 'Avatar supprimé avec succès.',
        ], 200);
    }
}
