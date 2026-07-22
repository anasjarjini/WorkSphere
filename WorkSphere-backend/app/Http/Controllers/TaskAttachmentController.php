<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskAttachment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TaskAttachmentController extends Controller
{
    public function index(Task $task, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

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
                'file_path' => $att->file_path,
                'file_size' => $att->file_size,
                'mime_type' => $att->mime_type,
                'created_at' => $att->created_at,
                'user' => $att->uploadedBy,
            ];
        });

        return response()->json($mapped);
    }

    public function store(Task $task, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $validated = $request->validate([
            'file' => 'required|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,jpg,jpeg,png,zip|max:15360',
        ]);

        $file = $request->file('file');
        $path = $file->store('task-attachments/' . $task->id, 'public');

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
            'file_path' => $attachment->file_path,
            'file_size' => $attachment->file_size,
            'mime_type' => $attachment->mime_type,
            'created_at' => $attachment->created_at,
        ], 201);
    }

    public function destroy(Task $task, TaskAttachment $attachment, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        Storage::disk('public')->delete($attachment->file_path);
        $attachment->delete();

        return response()->json(['message' => 'Pièce jointe supprimée.']);
    }

    public function download(Task $task, TaskAttachment $attachment, Request $request)
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        if (!Storage::disk('public')->exists($attachment->file_path)) {
            return response()->json(['message' => 'Fichier introuvable.'], 404);
        }

        return Storage::disk('public')->download($attachment->file_path, $attachment->original_name);
    }
}
