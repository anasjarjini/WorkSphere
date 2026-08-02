<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('attendance_declarations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->date('date');
            $table->string('status'); // PRESENT or ABSENT (AttendanceStatus)
            $table->decimal('hours_worked', 5, 2)->nullable();
            $table->string('validation_status')->default('EN_ATTENTE'); // AttendanceValidationStatus
            $table->foreignId('validated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('validated_at')->nullable();
            $table->text('rejection_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->unique(['user_id', 'date']);
            $table->index(['company_id', 'user_id', 'date']);
            $table->index(['company_id', 'validation_status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('attendance_declarations');
    }
};
