<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // tasks : synchronise avec le schéma attendu par les modèles/contrôleurs
        Schema::table('tasks', function (Blueprint $table) {
            if (!Schema::hasColumn('tasks', 'company_id')) {
                $table->foreignId('company_id')
                    ->constrained('companies')
                    ->cascadeOnDelete();
            }
            if (!Schema::hasColumn('tasks', 'project_id')) {
                $table->foreignId('project_id')
                    ->constrained('projects')
                    ->cascadeOnDelete();
            }
            if (!Schema::hasColumn('tasks', 'user_id')) {
                $table->foreignId('user_id')
                    ->nullable()
                    ->constrained('users')
                    ->nullOnDelete();
            }
            if (!Schema::hasColumn('tasks', 'creator_id')) {
                $table->foreignId('creator_id')
                    ->nullable()
                    ->constrained('users')
                    ->nullOnDelete();
            }
            if (!Schema::hasColumn('tasks', 'reference_code')) {
                $table->string('reference_code')->nullable()->unique();
            }
            if (!Schema::hasColumn('tasks', 'order_position')) {
                $table->unsignedInteger('order_position')->default(0);
            }
            if (!Schema::hasColumn('tasks', 'estimated_hours')) {
                $table->integer('estimated_hours')->nullable();
            }
            if (!Schema::hasColumn('tasks', 'actual_hours')) {
                $table->integer('actual_hours')->nullable();
            }
            if (!Schema::hasColumn('tasks', 'completed_at')) {
                $table->timestamp('completed_at')->nullable();
            }

            $table->enum('priority', ['LOW', 'MEDIUM', 'HIGH'])->default('MEDIUM')->change();
            $table->index('status');
            $table->index('due_date');
        });

        // task_comments : synchronise avec le schéma attendu par le modèle
        Schema::table('task_comments', function (Blueprint $table) {
            if (Schema::hasColumn('task_comments', 'content') && !Schema::hasColumn('task_comments', 'comment')) {
                $table->renameColumn('content', 'comment');
            }
            if (!Schema::hasColumn('task_comments', 'company_id')) {
                $table->foreignId('company_id')
                    ->constrained('companies')
                    ->cascadeOnDelete();
            }
            if (!Schema::hasColumn('task_comments', 'is_edited')) {
                $table->boolean('is_edited')->default(false);
            }
            if (!Schema::hasColumn('task_comments', 'edited_at')) {
                $table->timestamp('edited_at')->nullable();
            }
            if (!Schema::hasColumn('task_comments', 'parent_id')) {
                $table->foreignId('parent_id')
                    ->nullable()
                    ->constrained('task_comments')
                    ->cascadeOnDelete();
            }
        });

        // task_attachments : synchronise avec le schéma attendu par le modèle
        Schema::table('task_attachments', function (Blueprint $table) {
            if (!Schema::hasColumn('task_attachments', 'company_id')) {
                $table->foreignId('company_id')
                    ->constrained('companies')
                    ->cascadeOnDelete();
            }
            if (!Schema::hasColumn('task_attachments', 'uploaded_by_id')) {
                $table->foreignId('uploaded_by_id')
                    ->nullable()
                    ->constrained('users')
                    ->nullOnDelete();
            }
            if (!Schema::hasColumn('task_attachments', 'original_name')) {
                $table->string('original_name')->nullable();
            }
            if (!Schema::hasColumn('task_attachments', 'file_size')) {
                $table->unsignedBigInteger('file_size')->nullable();
            }
            if (!Schema::hasColumn('task_attachments', 'mime_type')) {
                $table->string('mime_type')->nullable();
            }
        });
    }

    public function down(): void
    {
        // Restauration du schéma précédent (tables vides à l'origine)
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropUnique(['reference_code']);
            $table->dropColumn(['completed_at', 'actual_hours', 'estimated_hours', 'order_position', 'reference_code', 'creator_id', 'user_id', 'project_id', 'company_id']);
            $table->dropIndex(['status']);
            $table->dropIndex(['due_date']);
        });

        Schema::table('task_comments', function (Blueprint $table) {
            $table->renameColumn('comment', 'content');
            $table->dropColumn(['parent_id', 'edited_at', 'is_edited', 'company_id']);
        });

        Schema::table('task_attachments', function (Blueprint $table) {
            $table->dropColumn(['mime_type', 'file_size', 'original_name', 'uploaded_by_id', 'company_id']);
        });
    }
};
