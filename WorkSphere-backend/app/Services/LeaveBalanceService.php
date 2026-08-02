<?php

namespace App\Services;

use App\Enums\AbsenceType;
use App\Models\Absence;
use App\Models\LeaveBalance;
use App\Models\PublicHoliday;
use App\Models\User;
use Carbon\Carbon;

class LeaveBalanceService
{
    /**
     * Nombre de jours ouvrés entre deux dates (bornes incluses),
     * hors weekends et hors jours fériés (nationaux + company).
     */
    public function calculateWorkingDays(Carbon $start, Carbon $end, int $companyId): int
    {
        if ($start->greaterThan($end)) {
            return 0;
        }

        $holidays = PublicHoliday::query()
            ->where(fn ($q) => $q->whereNull('company_id')->orWhere('company_id', $companyId))
            ->whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->pluck('date')
            ->map(fn ($d) => Carbon::parse($d)->toDateString())
            ->toArray();

        $holidays = array_flip($holidays);
        $days = 0;

        $cursor = $start->copy()->startOfDay();
        while ($cursor->lessThanOrEqualTo($end)) {
            if (! $cursor->isWeekend() && ! isset($holidays[$cursor->toDateString()])) {
                $days++;
            }
            $cursor->addDay();
        }

        return $days;
    }

    /**
     * Vérifie que le solde est suffisant pour poser $days jours.
     * Seul CONGE_PAYE consomme du solde ; les autres types passent toujours.
     */
    public function hasSufficientBalance(User $user, AbsenceType $type, int $days): bool
    {
        if ($type !== AbsenceType::CONGE_PAYE) {
            return true;
        }

        $balance = $this->currentYearBalance($user, AbsenceType::CONGE_PAYE);

        return $balance !== null && $balance->remaining_days >= $days;
    }

    /**
     * Déduit les jours du solde (appelé au moment EN_ATTENTE → APPROUVEE).
     */
    public function deductBalance(Absence $absence): void
    {
        if ($absence->type !== AbsenceType::CONGE_PAYE) {
            return;
        }

        $balance = $this->currentYearBalance($absence->user, AbsenceType::CONGE_PAYE);

        if (! $balance) {
            throw new \DomainException('Aucun solde de congés trouvé pour cette année.');
        }

        $balance->increment('used_days', $absence->duration_days);
    }

    /**
     * Restaure les jours au solde (appelé si APPROUVEE → ANNULEE).
     */
    public function restoreBalance(Absence $absence): void
    {
        if ($absence->type !== AbsenceType::CONGE_PAYE) {
            return;
        }

        $balance = $this->currentYearBalance($absence->user, AbsenceType::CONGE_PAYE);

        if (! $balance) {
            return;
        }

        $balance->decrement('used_days', min($balance->used_days, $absence->duration_days));
    }

    public function currentYearBalance(User $user, AbsenceType $type): ?LeaveBalance
    {
        return $user->leaveBalances()
            ->withoutGlobalScopes()
            ->where('company_id', $user->company_id)
            ->where('year', now()->year)
            ->where('type', $type)
            ->first();
    }
}
