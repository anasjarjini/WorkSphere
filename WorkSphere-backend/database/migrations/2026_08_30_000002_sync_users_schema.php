<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'first_name')) {
                $table->string('first_name', 150)->nullable();
            }
            if (! Schema::hasColumn('users', 'last_name')) {
                $table->string('last_name', 150)->nullable();
            }
            if (! Schema::hasColumn('users', 'status')) {
                $table->string('status', 30)->default('PENDING_ACTIVATION')->index();
            }
            if (! Schema::hasColumn('users', 'role')) {
                $table->string('role', 20)->default('EMPLOYE')->index();
            }
            if (! Schema::hasColumn('users', 'address')) {
                $table->text('address')->nullable();
            }
            if (! Schema::hasColumn('users', 'marital_status')) {
                $table->string('marital_status', 50)->nullable();
            }
            if (! Schema::hasColumn('users', 'bank_account_iban')) {
                $table->string('bank_account_iban', 34)->nullable();
            }
            if (! Schema::hasColumn('users', 'emergency_contact_name')) {
                $table->string('emergency_contact_name')->nullable();
            }
            if (! Schema::hasColumn('users', 'emergency_contact_phone')) {
                $table->string('emergency_contact_phone', 50)->nullable();
            }
        });

        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'department_id')) {
                $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            }
            if (! Schema::hasColumn('users', 'manager_id')) {
                $table->foreignId('manager_id')->nullable()->constrained('users')->nullOnDelete();
            }
        });
    }

    /**
     * Cette migration répare des schémas historiques différents. Un rollback
     * ne doit donc pas supprimer une colonne qui pouvait exister avant elle.
     */
    public function down(): void
    {
        // Intentionnellement non destructif.
    }
};
