<?php

namespace App\Models;

use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Validation\ValidationException;

class TaskDependency extends Model
{
    use BelongsToCompany;

    protected $fillable = [
        'company_id',
        'task_id',
        'depends_on_task_id',
        'dependency_type',
    ];

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }

    public function dependsOnTask(): BelongsTo
    {
        return $this->belongsTo(Task::class, 'depends_on_task_id');
    }

    public static function validateSameProject(int $taskId, int $dependsOnTaskId): void
    {
        if ($taskId === $dependsOnTaskId) {
            throw ValidationException::withMessages([
                'depends_on_task_id' => 'Une tâche ne peut pas dépendre d\'elle-même.',
            ]);
        }

        $task = Task::findOrFail($taskId);
        $dependsOnTask = Task::findOrFail($dependsOnTaskId);

        if ($task->project_id !== $dependsOnTask->project_id) {
            throw ValidationException::withMessages([
                'depends_on_task_id' => 'Une tâche ne peut dépendre que d\'une tâche du même projet.',
            ]);
        }
    }

    public static function wouldCreateCycle(int $taskId, int $dependsOnTaskId, array $visited = []): bool
    {
        if ($dependsOnTaskId === $taskId) {
            return true;
        }

        if (in_array($dependsOnTaskId, $visited, true)) {
            return false;
        }

        $visited[] = $dependsOnTaskId;

        $nextDependencies = static::where('task_id', $dependsOnTaskId)
            ->pluck('depends_on_task_id');

        foreach ($nextDependencies as $nextId) {
            if (static::wouldCreateCycle($taskId, $nextId, $visited)) {
                return true;
            }
        }

        return false;
    }
}
