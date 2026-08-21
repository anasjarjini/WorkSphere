<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            $table->enum('target_scope', ['COMPANY', 'TEAM'])
                ->default('COMPANY')
                ->after('content');

            $table->foreignId('target_manager_id')
                ->nullable()
                ->after('target_scope')
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamp('published_at')
                ->nullable()
                ->after('target_manager_id');
        });
    }

    public function down(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            $table->dropConstrainedForeignId('target_manager_id');
            $table->dropColumn(['target_scope', 'published_at']);
        });
    }
};
