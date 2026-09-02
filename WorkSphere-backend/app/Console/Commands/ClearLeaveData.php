<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

class ClearLeaveData extends Command
{
    protected $signature = 'leaves:clear {--force : Skip confirmation}';
    protected $description = 'Supprime toutes les données du module Congés (absences + leave_balances), hard delete';

    public function handle(): int
    {
        if (app()->environment('production')) {
            $this->error('Commande bloquée en production.');
            return self::FAILURE;
        }

        if (!$this->option('force') && !$this->confirm(
            'Ceci va supprimer DÉFINITIVEMENT les absences et soldes de congés. Continuer ?'
        )) {
            $this->info('Annulé.');
            return self::SUCCESS;
        }

        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('absences')->truncate();
        \Illuminate\Support\Facades\DB::table('leave_balances')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $this->info('Tables absences et leave_balances vidées.');
        return self::SUCCESS;
    }
}
