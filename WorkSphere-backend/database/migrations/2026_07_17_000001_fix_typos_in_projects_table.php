<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->renameColumn('actuel_cost', 'actual_cost');
            $table->renameColumn('cachier_charges_path', 'cahier_charges_path');
            $table->renameColumn('cachier_charges_original_name', 'cahier_charges_original_name');
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->renameColumn('actual_cost', 'actuel_cost');
            $table->renameColumn('cahier_charges_path', 'cachier_charges_path');
            $table->renameColumn('cahier_charges_original_name', 'cachier_charges_original_name');
        });
    }
};
