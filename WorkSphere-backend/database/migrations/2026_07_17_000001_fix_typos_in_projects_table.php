<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $this->renameIfNeeded('actuel_cost', 'actual_cost');
        $this->renameIfNeeded('cachier_charges_path', 'cahier_charges_path');
        $this->renameIfNeeded('cachier_charges_original_name', 'cahier_charges_original_name');
    }

    public function down(): void
    {
        $this->renameIfNeeded('actual_cost', 'actuel_cost');
        $this->renameIfNeeded('cahier_charges_path', 'cachier_charges_path');
        $this->renameIfNeeded('cahier_charges_original_name', 'cachier_charges_original_name');
    }

    private function renameIfNeeded(string $from, string $to): void
    {
        if (! Schema::hasColumn('projects', $from) || Schema::hasColumn('projects', $to)) {
            return;
        }

        Schema::table('projects', function (Blueprint $table) use ($from, $to) {
            $table->renameColumn($from, $to);
        });
    }
};
