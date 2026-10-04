<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('tasks')) {
            return;
        }

        Schema::create('tasks', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')
                ->constrained('companies')
                ->cascadeOnDelete();

            $table->foreignId('project_id')
                ->constrained('projects')
                ->cascadeOnDelete();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->foreignId('creator_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('title');
            $table->string('reference_code')->nullable()->unique();
            $table->text('description')->nullable();

            $table->enum('status', ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'])
                ->default('TODO');

            $table->enum('priority', ['LOW', 'MEDIUM', 'HIGH'])
                ->default('MEDIUM');

            $table->integer('order_position')->default(0);

            $table->date('due_date')->nullable();

            $table->integer('estimated_hours')->nullable();
            $table->integer('actual_hours')->nullable();

            $table->timestamp('completed_at')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index('status');
            $table->index('due_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
