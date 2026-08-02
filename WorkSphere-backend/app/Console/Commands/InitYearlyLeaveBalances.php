<?php

namespace App\Console\Commands;

use App\Enums\AbsenceType;
use App\Models\LeaveBalance;
use App\Models\User;
use Illuminate\Console\Command;

class InitYearlyLeaveBalances extends Command
{
    protected $signature = 'leaves:init-yearly-balances {--year=}';

    protected $description = 'Initialiser le solde annuel de congés payés de chaque employé actif';

    public function handle(): int
    {
        $year = (int) ($this->option('year') ?? now()->year);
        $created = 0;
        $skipped = 0;

        User::query()
            ->whereIn('status', ['ACTIVE', 'PENDING_ACTIVATION'])
            ->whereNotNull('company_id')
            ->with('company')
            ->chunkById(200, function ($users) use ($year, &$created, &$skipped) {
                foreach ($users as $user) {
                    $allocated = $user->company?->default_annual_leave_days ?? 18;

                    $balance = LeaveBalance::firstOrCreate(
                        [
                            'user_id' => $user->id,
                            'year' => $year,
                            'type' => AbsenceType::CONGE_PAYE,
                        ],
                        [
                            'company_id' => $user->company_id,
                            'allocated_days' => $allocated,
                            'carried_over_days' => 0,
                        ]
                    );

                    if ($balance->wasRecentlyCreated) {
                        $created++;
                    } else {
                        $skipped++;
                    }
                }
            });

        $this->info("Soldes initiaux : {$created} créé(s), {$skipped} déjà existant(s) pour {$year}.");

        return Command::SUCCESS;
    }
}
