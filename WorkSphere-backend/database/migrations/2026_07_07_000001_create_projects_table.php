<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();

            $table->foreignId('company_id')
                ->constrained('companies')
                ->cascadeOnDelete();

            $table->foreignId('creator_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('name');
            $table->string('reference_code')->nullable()->unique();
            $table->text('description')->nullable();

            $table->enum('status', ['PLANIFICATION', 'EN_COURS', 'EN_PAUSE', 'TERMINE'])
                ->default('PLANIFICATION');

            $table->enum('priority', ['low', 'medium', 'high', 'critical'])
                ->default('medium');

            $table->unsignedTinyInteger('progress_percentage')->default(0);

            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();

            $table->decimal('estimated_budget', 15, 2)->nullable();
            $table->decimal('actual_cost', 15, 2)->default(0.00);
            $table->string('currency', 3)->default('MAD');

            $table->string('cahier_charges_path')->nullable();
            $table->string('cahier_charges_original_name')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
