<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Ajoute les colonnes de l'ancienne table employees directement sur users.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'job_title')) {
                $table->string('job_title', 255)->nullable()->after('last_name');
            }
            if (! Schema::hasColumn('users', 'hire_date')) {
                $table->date('hire_date')->nullable()->after('status');
            }
            if (! Schema::hasColumn('users', 'salary')) {
                $table->decimal('salary', 10, 2)->nullable()->after('hire_date');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $columns = ['job_title', 'hire_date', 'salary'];
            foreach ($columns as $col) {
                if (Schema::hasColumn('users', $col)) {
                    $table->dropColumn($col);
                }
            }
        });
    }
};
