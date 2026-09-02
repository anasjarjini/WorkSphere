<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ClearAttendanceData extends Command
{
    protected $signature = 'attendance:clear {--force : Skip confirmation}';
    protected $description = 'Supprime toutes les données du module Attendance (hard delete)';

    public function handle(): int
    {
        if (app()->environment('production')) {
            $this->error('Cette commande ne peut pas être exécutée en production.');
            return self::FAILURE;
        }

        if (!$this->option('force') && !$this->confirm(
            'Ceci va supprimer DÉFINITIVEMENT toutes les déclarations de présence. Continuer ?'
        )) {
            $this->info('Annulé.');
            return self::SUCCESS;
        }

        Schema::disableForeignKeyConstraints();
        DB::table('attendance_declarations')->truncate();
        Schema::enableForeignKeyConstraints();

        $this->info('Table attendance_declarations vidée.');
        return self::SUCCESS;
    }
}
