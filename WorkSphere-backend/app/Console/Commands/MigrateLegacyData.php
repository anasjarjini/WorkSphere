<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class MigrateLegacyData extends Command
{
    protected $signature = 'migrate:legacy-data
        {--dry-run : Affiche les modifications sans les appliquer}
        {--force : Exécute la migration sans demande de confirmation}';

    protected $description = 'Migrate legacy data: split name into first_name/last_name, set role & status';

    public function handle(): int
    {
        if (! $this->option('force')) {
            $this->info('⚠️  This command will modify user records in the database.');
            $this->newLine();

            if (! $this->confirm('Do you wish to continue?', false)) {
                $this->info('Migration cancelled.');
                return Command::SUCCESS;
            }
        }

        $dryRun = $this->option('dry-run');
        $stats = [
            'users_updated' => 0,
        ];

        // ── Step 1: Split `name` into `first_name` and `last_name` ──
        $this->newLine();
        $this->info('Step 1/2: Splitting name into first_name / last_name...');

        $usersWithoutNames = User::whereNull('first_name')
            ->orWhere('first_name', '')
            ->get();

        $bar = $this->output->createProgressBar($usersWithoutNames->count());
        $bar->start();

        foreach ($usersWithoutNames as $user) {
            $parts = explode(' ', trim($user->name), 2);
            $firstName = $parts[0] ?? '';
            $lastName = $parts[1] ?? '';

            if ($dryRun) {
                $this->line("  [DRY-RUN] User #{$user->id}: '{$user->name}' → first_name='{$firstName}', last_name='{$lastName}'");
            } else {
                User::withoutEvents(fn () => $user->update([
                    'first_name' => $firstName,
                    'last_name'  => $lastName,
                ]));
            }

            $stats['users_updated']++;
            $bar->advance();
        }

        $bar->finish();
        $this->newLine(2);

        // ── Step 2: Set status based on is_active and activation ──
        $this->info('Step 2/2: Setting status from is_active (legacy field)...');

        $users = User::all();
        $bar = $this->output->createProgressBar($users->count());
        $bar->start();

        foreach ($users as $user) {
            $newStatus = $user->status;
            if ($user->is_active && $user->status === 'PENDING_ACTIVATION') {
                $newStatus = 'ACTIVE';
            } elseif (! $user->is_active && $user->status === 'PENDING_ACTIVATION') {
                $hasPendingToken = $user->activationTokens()
                    ->whereNull('used_at')
                    ->where('expires_at', '>', now())
                    ->exists();

                $newStatus = $hasPendingToken ? 'PENDING_ACTIVATION' : 'INACTIVE';
            }

            if ($dryRun) {
                $this->line("  [DRY-RUN] User #{$user->id}: is_active={$user->is_active}, status='{$user->status}' → status='{$newStatus}'");
            } else {
                User::withoutEvents(fn () => $user->update(['status' => $newStatus]));
            }

            $bar->advance();
        }

        $bar->finish();
        $this->newLine(2);

        // ── Summary ──
        $this->info('✅ Migration complete!');
        $this->table(
            ['Metric', 'Count'],
            [
                ['Users updated (name split)', $stats['users_updated']],
                ['Statuses set', $users->count()],
            ]
        );

        if ($dryRun) {
            $this->warn('This was a DRY RUN — no changes were persisted.');
            $this->info('Run without --dry-run to apply the changes.');
        }

        return Command::SUCCESS;
    }
}
