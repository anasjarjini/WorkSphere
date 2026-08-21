<?php

use App\Console\Commands\InitYearlyLeaveBalances;
use App\Console\Commands\SendMorningReminders;
use App\Console\Commands\SendTaskDeadlineReminders;
use Illuminate\Support\Facades\Schedule;

Schedule::command(SendMorningReminders::class)
    ->weekdays()
    ->at('08:00')
    ->timezone('Africa/Casablanca');

Schedule::command(SendTaskDeadlineReminders::class)
    ->weekdays()
    ->at('09:00')
    ->timezone('Africa/Casablanca');

Schedule::command(InitYearlyLeaveBalances::class)
    ->yearlyOn(1, 1)
    ->at('00:05')
    ->timezone('Africa/Casablanca');
