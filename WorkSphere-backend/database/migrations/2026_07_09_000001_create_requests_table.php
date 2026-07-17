<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')
                ->constrained('companies')
                ->cascadeOnDelete();

            $table->foreignId('project_id')
                ->nullable()
                ->constrained('projects')
                ->nullOnDelete();

            $table->foreignId('from_department_id')->constrained('departments');
            $table->foreignId('to_department_id')->constrained('departments');

            $table->foreignId('creator_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->foreignId('developer_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('title');
            $table->string('reference_code')->nullable()->unique();
            $table->text('description')->nullable();

            $table->enum('status', [
                'PENDING',
                'APPROVED',
                'IN_DEVELOPMENT',
                'TESTING',
                'REJECTED',
                'DEPLOYED',
            ])->default('PENDING');

            $table->enum('priority', ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
                ->default('MEDIUM');

            $table->text('rejection_reason')->nullable();

            $table->timestamp('assigned_at')->nullable();
            $table->timestamp('resolved_at')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index('status');
            $table->index('priority');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
