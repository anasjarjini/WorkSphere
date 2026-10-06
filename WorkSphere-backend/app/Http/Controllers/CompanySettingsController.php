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
        $company->update([\
            'name'    => $validated['name'],
            'email'   => $validated['email'] ?? null,
            'phone'   => $validated['phone'] ?? null,
            'address' => $validated['address'] ?? null,
            'default_annual_leave_days' => $validated['default_annual_leave_days'] ?? $company->default_annual_leave_days,
        ]);

        return response()->json([
            'message' => 'Informations de l\'entreprise mises à jour avec succès.',
            'company' => new CompanyResource($company->fresh()),
        ], 200);
    }

    /**
     * Sert le fichier logo de l'entreprise via l'API (auth + CORS).
     * Nécessaire pour l'embarquement du logo dans les exports PDF/Excel.
     */
    public function logoFile(Request $request)
    {
        $company = $request->user()->company;

        if (! $company->logo) {
            abort(404, 'Aucun logo.');
        }

        if (! Storage::disk('public')->exists($company->logo)) {
            abort(404, 'Logo introuvable.');
        }

        return response(file_get_contents($path), 200, [
            'Content-Type'  => mime_content_type($path) ?: 'application/octet-stream',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }

    /**
     * Upload / remplacement du logo de l'entreprise.
     */
    public function uploadLogo(UploadCompanyLogoRequest $request)
    {
        $company = $request->user()->company;
        $file = $request->file('logo');

        // ─── Supprimer l'ancien logo s'il existe ──────────────────────────────────
        if ($company->logo) {
            Storage::disk('public')->delete($company->logo);
        }

        // ─── Générer un nom de fichier unique ──────────────────────────────────────
        $extension = strtolower($file->getClientOriginalExtension());
        $filename = 'logos/' . Str::random(20) . '.' . $extension;

        // ─── Redimensionner à max 400x400 via intervention/image si disponible ────
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
        $company->update(['logo' => $filename]);

        return response()->json([
            'message'  => 'Logo mis à jour avec succès.',
            'logo_url' => Storage::disk('public')->url($filename),
        ], 200);
    }
}
