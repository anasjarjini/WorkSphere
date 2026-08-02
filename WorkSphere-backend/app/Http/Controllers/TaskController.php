<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Project;
use App\Models\User;
use App\Models\TaskAssignmentHistory;
use App\Models\TaskStatusHistory;
use App\Enums\TaskStatus as TaskStatusEnum;
use App\Notifications\TaskAssignedNotification;
use App\Notifications\TaskStatusChangedNotification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TaskController extends Controller
{
    public function index(Project $project, Request $request): JsonResponse
    {
        Gate::authorize('view', $project);

        $tasks = $project->tasks()
            ->with('assignedUser', 'creator')
            ->orderBy('order_position')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($tasks);
    }

    public function show(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('view', $task);

        $task->load('assignedUser', 'creator', 'project');
        return response()->json($task);
    }

    public function store(Project $project, Request $request): JsonResponse
    {
        Gate::authorize('create', [Task::class, $project]);


        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'nullable|in:LOW,MEDIUM,HIGH',
            'due_date' => 'nullable|date',
            'user_id' => 'nullable|exists:users,id',
        ]);

        $task = $project->tasks()->create([
            ...$validated,
            'company_id' => $request->user()->company_id,
            'creator_id' => $request->user()->id,
        ]);

        if ($task->user_id && $task->user_id !== $request->user()->id) {
            $task->assignedUser?->notify(new TaskAssignedNotification($task, true));
        }

        $task->load('assignedUser', 'creator');

        return response()->json($task, 201);
    }

    public function update(Request $request, Task $task): JsonResponse
    {
        Gate::authorize('update', $task);


        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'nullable|in:LOW,MEDIUM,HIGH',
            'due_date' => 'nullable|date',
            'user_id' => 'nullable|exists:users,id',
            'status' => 'nullable|in:TODO,IN_PROGRESS,REVIEW,DONE',
        ]);

        $task->update($validated);
        $task->load('assignedUser', 'creator');

        return response()->json($task);
    }

    public function destroy(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('delete', $task);


        $task->delete();

        return response()->json(['message' => 'Tâche supprimée avec succès.']);
    }

    public function updateStatus(Request $request, Task $task): JsonResponse
    {
        Gate::authorize('updateStatus', $task);


        $validated = $request->validate([
            'status' => 'required|in:TODO,IN_PROGRESS,REVIEW,DONE',
        ]);

        $oldStatus = $task->getRawOriginal('status') ?? 'TODO';
        $task->update($validated);

        TaskStatusHistory::create([
            'company_id' => $request->user()->company_id,
            'task_id' => $task->id,
            'from_status' => $oldStatus,
            'to_status' => $validated['status'],
            'changed_by' => $request->user()->id,
        ]);

        $recipients = collect([$task->creator_id, $task->user_id])
            ->filter()
            ->unique()
            ->reject(fn ($id) => (int) $id === $request->user()->id);

        $actorName = $request->user()->first_name . ' ' . $request->user()->last_name;
        foreach ($recipients as $userId) {
            User::find($userId)?->notify(new TaskStatusChangedNotification($task, $actorName, $oldStatus, $validated['status']));
        }

        $task->load('assignedUser', 'creator');

        return response()->json($task);
    }

    public function assign(Request $request, Task $task): JsonResponse
    {
        Gate::authorize('assign', $task);


        $validated = $request->validate([
            'user_id' => 'nullable|exists:users,id',
        ]);

        $oldUserId = $task->user_id;

        if (is_null($validated['user_id'])) {
            $task->user_id = null;
            $task->save();
        } else {
            $task->update(['user_id' => $validated['user_id']]);
        }

        TaskAssignmentHistory::create([
            'company_id' => $request->user()->company_id,
            'task_id' => $task->id,
            'from_user_id' => $oldUserId,
            'to_user_id' => $validated['user_id'],
            'changed_by' => $request->user()->id,
        ]);

        if ($task->user_id && $task->user_id !== $oldUserId && $task->user_id !== $request->user()->id) {
            $task->assignedUser?->notify(new TaskAssignedNotification($task));
        }

        $task->load('assignedUser', 'creator');

        return response()->json($task);
    }

    public function myTasks(Request $request): JsonResponse
    {
        $tasks = Task::where('company_id', $request->user()->company_id)
            ->where('user_id', $request->user()->id)
            ->with('assignedUser', 'creator', 'project')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($tasks);
    }

    public function managerTasks(Request $request): JsonResponse
    {
        $tasks = Task::where('company_id', $request->user()->company_id)
            ->where('creator_id', $request->user()->id)
            ->with('assignedUser', 'creator', 'project')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($tasks);
    }

    public function history(Task $task, Request $request): JsonResponse
    {
        Gate::authorize('history', $task);


        if ($task->company_id !== $request->user()->company_id) {
            return response()->json(['message' => 'Non autorisé.'], 403);
        }

        $statusChanges = TaskStatusHistory::where('task_id', $task->id)
            ->with('changedBy')
            ->get()
            ->map(fn ($h) => [
                'type' => 'status_change',
                'user' => $h->changedBy ? [
                    'id' => $h->changedBy->id,
                    'first_name' => $h->changedBy->first_name,
                    'last_name' => $h->changedBy->last_name,
                ] : null,
                'created_at' => $h->created_at,
                'old_status' => $h->from_status,
                'new_status' => $h->to_status,
            ]);

        $assignmentChanges = TaskAssignmentHistory::where('task_id', $task->id)
            ->with(['changedBy', 'fromUser', 'toUser'])
            ->get()
            ->map(fn ($h) => [
                'type' => 'assignment_change',
                'user' => $h->changedBy ? [
                    'id' => $h->changedBy->id,
                    'first_name' => $h->changedBy->first_name,
                    'last_name' => $h->changedBy->last_name,
                ] : null,
                'created_at' => $h->created_at,
                'old_user' => $h->fromUser ? [
                    'id' => $h->fromUser->id,
                    'first_name' => $h->fromUser->first_name,
                    'last_name' => $h->fromUser->last_name,
                ] : null,
                'new_user' => $h->toUser ? [
                    'id' => $h->toUser->id,
                    'first_name' => $h->toUser->first_name,
                    'last_name' => $h->toUser->last_name,
                ] : null,
            ]);

        $history = $statusChanges->concat($assignmentChanges)
            ->sortByDesc('created_at')
            ->values();

        return response()->json($history);
    }

    public function reorder(Request $request, Task $task): JsonResponse
    {
        Gate::authorize('reorder', $task);


        $validated = $request->validate([
            'order_position' => 'required|integer|min:0',
        ]);

        $task->update(['order_position' => $validated['order_position']]);

        return response()->json($task);
    }
}
