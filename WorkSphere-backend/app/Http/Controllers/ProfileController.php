<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Requests\UploadAvatarRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;

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

        // ─── Supprimer l'ancien avatar s'il existe ──────────────────────────────────
        if ($user->avatar) {
            Storage::disk('public')->delete($user->avatar);
        }

        // ─── Générer un nom de fichier unique ──────────────────────────────────────
        $extension = strtolower($file->getClientOriginalExtension());
        $filename = 'avatars/' . Str::random(20) . '.' . $extension;

        // ─── Redimensionner à max 400x400 si GD/Intervention disponible ────────────
        try {
            $manager = new ImageManager(GdDriver::class);
            $image = $manager->make($file->getRealPath());
            $image->resize(400, 400, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $contents = (string) $image->encode();
        } catch (\Exception $e) {
            $contents = file_get_contents($file->getRealPath());
        }

        // ─── Enregistrer sur le disque configuré (S3 ou local) ────────────────────
        Storage::disk('public')->put($filename, $contents, 'public');

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
            Storage::disk('public')->delete($user->avatar);
            $user->update(['avatar' => null]);
        }

        return response()->json([
            'message' => 'Avatar supprimé avec succès.',
        ], 200);
    }
}
