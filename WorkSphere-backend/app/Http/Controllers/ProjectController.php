<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Requests\UploadCahierChargesRequest;
use App\Http\Resources\ProjectCollection;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index(Request $request): ProjectCollection
    {
        $projects = Project::where('company_id', $request->user()->company_id)
            ->with('creator')
            ->withCount('tasks')
            ->latest()
            ->paginate($request->per_page ?? 15);

        return new ProjectCollection($projects);
    }

    public function store(StoreProjectRequest $request): JsonResponse
    {
        $project = Project::create([
            ...$request->validated(),
            'company_id' => $request->user()->company_id,
            'creator_id' => $request->user()->id,
        ]);

        return response()->json([
            'message' => 'Projet créé avec succès.',
            'project' => new ProjectResource($project),
        ], 201);
    }

    public function show(Project $project, Request $request): JsonResponse
    {
        Gate::authorize('view', $project);

        $project->load('creator')->loadCount('tasks');

        return response()->json([
            'project' => new ProjectResource($project),
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project): JsonResponse
    {
        Gate::authorize('update', $project);

        $data = $request->validated();

        if (isset($data['progress_percentage']) && $data['progress_percentage'] < $project->progress_percentage) {
            return response()->json([
                'message' => 'La progression ne peut pas être réduite. Valeur actuelle : ' . $project->progress_percentage . '%.'
            ], 422);
        }

        $project->update($data);

        return response()->json([
            'message' => 'Projet mis à jour avec succès.',
            'project' => new ProjectResource($project),
        ]);
    }

    public function destroy(Project $project, Request $request): JsonResponse
    {
        Gate::authorize('delete', $project);

        $project->delete();

        return response()->json([
            'message' => 'Projet supprimé avec succès.',
        ]);
    }

    public function uploadCahierCharges(UploadCahierChargesRequest $request, Project $project): JsonResponse
    {
        Gate::authorize('uploadCahierCharges', $project);

        $file = $request->file('file');

        if (!$file || !$file->isValid()) {
            $maxUpload = ini_get('upload_max_filesize');
            $maxPost = ini_get('post_max_size');
            return response()->json([
                'message' => "Le fichier n'a pas été reçu correctement. Limites serveur : upload_max_filesize={$maxUpload}, post_max_size={$maxPost}.",
            ], 422);
        }

        try {
            $path = $file->store('cahier-charges/' . $project->id, 'public');

            $project->update([
                'cahier_charges_path' => $path,
                'cahier_charges_original_name' => $file->getClientOriginalName(),
            ]);

            return response()->json([
                'message' => 'Cahier des charges uploadé avec succès.',
                'cahier_charges_url' => $project->cahier_charges_url,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erreur lors de l\'upload : ' . $e->getMessage(),
            ], 500);
        }
    }
}
