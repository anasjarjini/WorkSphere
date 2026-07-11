<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Restructure users table to match the new schema.
     * Utilise hasColumn() pour être idempotent (la première exécution
     * a partiellement réussi avant d'échouer sur address).
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'first_name')) {
                $table->string('first_name', 150)->after('name');
            }
            if (! Schema::hasColumn('users', 'last_name')) {
                $table->string('last_name', 150)->after('first_name');
            }
            if (! Schema::hasColumn('users', 'department_id')) {
                $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete()->after('company_id');
            }
            if (! Schema::hasColumn('users', 'manager_id')) {
                $table->foreignId('manager_id')->nullable()->after('department_id');
            }
            if (! Schema::hasColumn('users', 'role')) {
                $table->string('role', 20)->default('EMPLOYEE')->after('manager_id');
            }
            if (! Schema::hasColumn('users', 'status')) {
                $table->string('status', 30)->default('PENDING_ACTIVATION')->after('is_active');
            }
            if (! Schema::hasColumn('users', 'address')) {
                $table->text('address')->nullable()->after('status');
            }
            if (! Schema::hasColumn('users', 'marital_status')) {
                $table->string('marital_status', 50)->nullable()->after('address');
            }
            if (! Schema::hasColumn('users', 'bank_account_iban')) {
                $table->string('bank_account_iban', 34)->nullable()->after('marital_status');
            }
            if (! Schema::hasColumn('users', 'emergency_contact_name')) {
                $table->string('emergency_contact_name', 255)->nullable()->after('bank_account_iban');
            }
            if (! Schema::hasColumn('users', 'emergency_contact_phone')) {
                $table->string('emergency_contact_phone', 50)->nullable()->after('emergency_contact_name');
            }
        });

        // Ajouter la FK manager_id si elle n'existe pas déjà
        try {
            Schema::table('users', function (Blueprint $table) {
                $table->foreign('manager_id')->references('id')->on('users')->nullOnDelete();
            });
        } catch (\Illuminate\Database\QueryException $e) {
            // La FK existe déjà — on ignore
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $columns = [
                'first_name', 'last_name', 'department_id', 'manager_id',
                'role', 'status', 'marital_status', 'bank_account_iban',
                'emergency_contact_name', 'emergency_contact_phone',
            ];
            $existing = array_filter($columns, fn ($col) => Schema::hasColumn('users', $col));

            // Supprimer les FK existantes
            $fks = ['manager_id', 'department_id'];
            foreach ($fks as $fk) {
                if (Schema::hasColumn('users', $fk)) {
                    try {
                        $table->dropForeign([$fk]);
                    } catch (\Exception $e) {
                        // FK peut ne pas exister
                    }
                }
            }

            if (! empty($existing)) {
                $table->dropColumn($existing);
            }
        });
    }
};
