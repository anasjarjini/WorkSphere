<?php

use App\Console\Commands\InitYearlyLeaveBalances;
use App\Console\Commands\SendMorningReminders;
use App\Console\Commands\SendTaskDeadlineReminders;
use App\Console\Commands\MarkMissingAttendances;
use Illuminate\Support\Facades\Schedule;

Schedule::command(SendMorningReminders::class)
    ->weekdays()
    ->at('08:45')
    ->timezone('Africa/Casablanca');

Schedule::command(\App\Console\Commands\SendEveningReminders::class)
    ->weekdays()
    ->at('17:00')
    ->timezone('Africa/Casablanca');

Schedule::command(SendTaskDeadlineReminders::class)
    ->weekdays()
    ->at('09:00')
    ->timezone('Africa/Casablanca');

Schedule::command(InitYearlyLeaveBalances::class)
    ->yearlyOn(1, 1)
    ->at('00:05')
    ->timezone('Africa/Casablanca');

Schedule::command(MarkMissingAttendances::class)
    ->weekdays()
    ->at('23:59')
    ->timezone('Africa/Casablanca');

\Illuminate\Support\Facades\Artisan::command('attendance:reset-test-data', function () {
    if (app()->environment('production')) {
        $this->error('Cette commande ne peut pas être exécutée en production.');
        return;
    }
    $this->call('attendance:clear', ['--force' => true]);
    $this->call('db:seed', ['--class' => 'AttendanceTestSeeder']);
    $this->info('Données Attendance réinitialisées avec 1 mois de test.');
})->purpose('Vide et regénère les données de test Attendance');
    
\Illuminate\Support\Facades\Artisan::command('leaves:reset-test-data', function () {
    if (app()->environment('production')) {
        $this->error('Cette commande ne peut pas être exécutée en production.');
        return;
    }
    $this->call('leaves:clear', ['--force' => true]);
    $this->call('db:seed', ['--class' => 'LeaveTestSeeder']);
    $this->info('Données Congés réinitialisées.');
})->purpose('Vide et regénère les données de test Congés');
