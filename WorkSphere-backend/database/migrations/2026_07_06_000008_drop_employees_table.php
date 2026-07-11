<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Employee data is now stored directly in the users table
     * (first_name, last_name, department_id, manager_id, role, status, etc.)
     * The dedicated employees table is no longer needed.
     */
    public function up(): void
    {
        Schema::dropIfExists('employees');
    }

    /**
     * Reverse the migrations.
     *
     * Note: This is destructive. In production, ensure data has been
     * migrated to the users table before running this migration.
     */
    public function down(): void
    {
        // Recréer la table si nécessaire — mais sans les données
        // Une restauration complète nécessiterait une réimportation
    }
};
