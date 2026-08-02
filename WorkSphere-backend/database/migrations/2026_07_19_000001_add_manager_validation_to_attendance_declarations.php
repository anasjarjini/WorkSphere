<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('attendance_declarations', function (Blueprint $table) {
            $table->foreignId('manager_validated_by')->nullable()->after('validated_by')->constrained('users')->nullOnDelete();
            $table->timestamp('manager_validated_at')->nullable()->after('manager_validated_by');
        });
    }

    public function down(): void
    {
        Schema::table('attendance_declarations', function (Blueprint $table) {
            $table->dropConstrainedForeignId('manager_validated_by');
            $table->dropColumn('manager_validated_at');
        });
    }
};
