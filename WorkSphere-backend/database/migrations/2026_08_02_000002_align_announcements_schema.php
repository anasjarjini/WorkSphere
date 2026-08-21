<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            if (! Schema::hasColumn('announcements', 'company_id')) {
                $table->foreignId('company_id')
                    ->after('id')
                    ->constrained('companies')
                    ->cascadeOnDelete();
            }

            if (! Schema::hasColumn('announcements', 'creator_id')) {
                $table->foreignId('creator_id')
                    ->nullable()
                    ->after('company_id')
                    ->constrained('users')
                    ->nullOnDelete();
            }
        });

        Schema::table('announcements', function (Blueprint $table) {
            $table->foreignId('department_id')
                ->nullable()
                ->change();
        });
    }

    public function down(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            $table->dropConstrainedForeignId('creator_id');
            $table->dropConstrainedForeignId('company_id');
        });
    }
};
