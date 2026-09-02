<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskDependency;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class TaskDependencyController extends Controller
{
    public function index(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('view', $task);

        $dependencies = $task->dependencies()
            ->with('dependsOnTask')
            ->get();

        return response()->json($dependencies);
    }

    public function store(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('update', $task);

        $validated = $request->validate([
            'depends_on_task_id' => [
                'required',
                Rule::exists('tasks', 'id')
                    ->where('company_id', $request->user()->company_id)
                    ->where('project_id', $task->project_id),
            ],
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
        if ($dependency->task_id !== $task->id) {
            abort(404);
        }

        Gate::authorize('update', $task);

        $dependency->delete();

        return response()->json(['message' => 'Dépendance supprimée.']);
    }
}
