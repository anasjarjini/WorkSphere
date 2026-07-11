<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateCompanyRequest;
use App\Http\Requests\UploadCompanyLogoRequest;
use App\Http\Resources\CompanyResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;

class CompanySettingsController extends Controller
{
    /**
     * Récupère les informations de l'entreprise de l'utilisateur connecté.
     *
     * L'accesseur logo_url sur le modèle Company est automatiquement inclus
     * via $appends. Retourne : name, slug, email, phone, address, logo_url, is_active
     */
    public function show(Request $request)
    {
        $company = $request->user()->company;

        return response()->json([
            'company' => new CompanyResource($company),
        ], 200);
    }

    /**
     * Met à jour les informations texte de l'entreprise.
     *
     * Modifiable : name, email, phone, address
     * NON modifiable : slug (figé après création), is_active (géré ailleurs), logo (route dédiée)
     */
    public function update(UpdateCompanyRequest $request)
    {
        $company = $request->user()->company;

        $validated = $request->validated();

        // On ne met à jour QUE les champs autorisés, jamais le slug
        $company->update([
            'name'    => $validated['name'],
            'email'   => $validated['email'] ?? null,
            'phone'   => $validated['phone'] ?? null,
            'address' => $validated['address'] ?? null,
        ]);

        return response()->json([
            'message' => 'Informations de l\'entreprise mises à jour avec succès.',
            'company' => new CompanyResource($company->fresh()),
        ], 200);
    }

    /**
     * Upload / remplacement du logo de l'entreprise.
     *
     * - Si un logo existe déjà, on supprime l'ancien fichier avant d'enregistrer le nouveau
     * - Redimensionnement à max 400x400px via intervention/image (scale preserve ratio)
     * - Stockage : storage/app/public/logos/ (disque 'public')
     * - Le fichier est accessible via Storage::url() après le symlink storage:link
     */
    public function uploadLogo(UploadCompanyLogoRequest $request)
    {
        $company = $request->user()->company;
        $file = $request->file('logo');

        // ─── Supprimer l'ancien logo s'il existe ──────────────────────────────────────────────────
        if ($company->logo) {
            Storage::disk('public')->delete($company->logo);
        }

        // ─── Générer un nom de fichier unique ────────────────────────────────────────────────────
        $extension = strtolower($file->getClientOriginalExtension());
        $filename = 'logos/' . Str::random(20) . '.' . $extension;
        $storagePath = Storage::disk('public')->path($filename);

        // ─── Créer le dossier logos s'il n'existe pas ────────────────────────────────────────────
        $dirname = dirname($storagePath);
        if (! is_dir($dirname)) {
            mkdir($dirname, 0755, true);
        }

        // ─── Redimensionner à max 400x400 via intervention/image ──────────────────────────────────
        // Try to resize via Intervention Image when available; otherwise fallback
        try {
            $manager = new ImageManager(GdDriver::class);
            $image = $manager->make($file->getRealPath());

            // Resize to fit within 400x400 while preserving aspect ratio and preventing upscaling
            $image->resize(400, 400, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });

            $image->save($storagePath);
        } catch (\Intervention\Image\Exceptions\MissingDependencyException $e) {
            // Fallback: move uploaded file without resizing (keeps original)
            $file->move($dirname, basename($storagePath));
        }

        // ─── Mettre à jour la base de données ─────────────────────────────────────────────────────
        $company->update(['logo' => $filename]);

        return response()->json([
            'message'  => 'Logo mis à jour avec succès.',
            'logo_url' => url(Storage::disk('public')->url($filename)),
        ], 200);
    }
}
