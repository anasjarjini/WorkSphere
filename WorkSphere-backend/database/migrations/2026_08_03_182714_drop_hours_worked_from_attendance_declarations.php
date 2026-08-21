<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('attendance_declarations', function (Blueprint $table) {
            $table->dropColumn('hours_worked');
        });
    }

    public function down(): void
    {
        Schema::table('attendance_declarations', function (Blueprint $table) {
            $table->decimal('hours_worked', 5, 2)->nullable()->after('status');
        });
    }
};
