<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskDependency;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskDependencyController extends Controller
{
    public function index(Task $task, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $dependencies = $task->dependencies()
            ->with('dependsOnTask')
            ->get();

        return response()->json($dependencies);
    }

    public function store(Task $task, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $validated = $request->validate([
            'depends_on_task_id' => 'required|exists:tasks,id',
        ]);

        TaskDependency::validateSameProject($task->id, $validated['depends_on_task_id']);

        if (TaskDependency::wouldCreateCycle($task->id, $validated['depends_on_task_id'])) {
            return response()->json([
                'message' => 'Cette dépendance créerait un cycle.',
            ], 422);
        }

        $dependency = $task->dependencies()->create([
            'company_id' => $request->user()->company_id,
            'depends_on_task_id' => $validated['depends_on_task_id'],
        ]);

        $dependency->load('dependsOnTask');

        return response()->json($dependency, 201);
    }

    public function destroy(Task $task, TaskDependency $dependency, Request $request): JsonResponse
    {
        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $dependency->delete();

        return response()->json(['message' => 'Dépendance supprimée.']);
    }
}
