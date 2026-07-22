<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskComment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskCommentController extends Controller
{
    public function index(Task $task, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $comments = $task->comments()
            ->with('user')
            ->orderBy('created_at', 'asc')
            ->get();

        return response()->json($comments);
    }

    public function store(Task $task, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $validated = $request->validate([
            'content' => 'required|string',
            'parent_id' => 'nullable|exists:task_comments,id',
        ]);

        $comment = $task->comments()->create([
            'company_id' => $request->user()->company_id,
            'user_id' => $request->user()->id,
            'comment' => $validated['content'],
            'parent_id' => $validated['parent_id'] ?? null,
        ]);

        $comment->load('user');

        return response()->json($comment, 201);
    }

    public function destroy(Task $task, TaskComment $comment, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        if ($comment->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $comment->delete();

        return response()->json(['message' => 'Commentaire supprimé.']);
    }
}
