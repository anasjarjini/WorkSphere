<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskAttachment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class TaskAttachmentController extends Controller
{
    public function index(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('view', $task);

        $attachments = $task->attachments()
            ->with('uploadedBy')
            ->orderBy('created_at', 'desc')
            ->get();

        $mapped = $attachments->map(function ($att) {
            return [
                'id' => $att->id,
                'task_id' => $att->task_id,
                'user_id' => $att->uploaded_by_id,
                'file_name' => $att->original_name,
                'file_size' => $att->file_size,
                'mime_type' => $att->mime_type,
                'created_at' => $att->created_at,
                'user' => $att->uploadedBy ? [
                    'id' => $att->uploadedBy->id,
                    'first_name' => $att->uploadedBy->first_name,
                    'last_name' => $att->uploadedBy->last_name,
                    'avatar_url' => $att->uploadedBy->avatar_url,
                ] : null,
            ];
        });

        return response()->json($mapped);
    }

    public function store(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('create', [TaskAttachment::class, $task]);

        $validated = $request->validate([
            'file' => 'required|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png,zip|max:20480',
        ]);

        $file = $request->file('file');
        $path = $file->store('task-attachments/'.$task->id, 'local');

        $sanitizedName = preg_replace('/[<>:"\/\\\\|?*]/', '_', $file->getClientOriginalName());

        $attachment = $task->attachments()->create([
            'company_id' => $request->user()->company_id,
            'uploaded_by_id' => $request->user()->id,
            'file_path' => $path,
            'original_name' => $sanitizedName,
            'file_size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
        ]);

        return response()->json([
            'id' => $attachment->id,
            'task_id' => $attachment->task_id,
            'user_id' => $attachment->uploaded_by_id,
            'file_name' => $attachment->original_name,
            'file_size' => $attachment->file_size,
            'mime_type' => $attachment->mime_type,
            'created_at' => $attachment->created_at,
        ], 201);
    }

    public function destroy(Task $task, TaskAttachment $attachment, Request $request): JsonResponse
    {
        if ($attachment->task_id !== $task->id) {
            abort(404);
        }

        Gate::authorize('delete', $attachment);

        Storage::disk('local')->delete($attachment->file_path);
        $attachment->delete();

        return response()->json(['message' => 'Pièce jointe supprimée.']);
    }

    public function download(Task $task, TaskAttachment $attachment, Request $request)
    {
        if ($attachment->task_id !== $task->id) {
            abort(404);
        }

        Gate::authorize('download', $attachment);

        if (! Storage::disk('local')->exists($attachment->file_path)) {
            return response()->json(['message' => 'Fichier introuvable.'], 404);
        }

        return Storage::disk('local')->download($attachment->file_path, $attachment->original_name);
    }
}
