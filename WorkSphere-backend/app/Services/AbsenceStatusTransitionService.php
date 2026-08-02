<?php

namespace App\Services;

use App\Enums\AbsenceStatus;
use App\Models\Absence;
use App\Models\User;
use App\Notifications\LeaveRequestApprovedNotification;
use App\Notifications\LeaveRequestRejectedNotification;
use Illuminate\Support\Facades\Gate;

class AbsenceStatusTransitionService
{
    public function __construct(
        private readonly LeaveBalanceService $leaveBalanceService
    ) {}

    /**
     * EN_ATTENTE → APPROUVEE
     * Manager direct de l'employé ou administrateur_rh.
     */
    public function approve(Absence $absence, User $approver): Absence
    {
        Gate::forUser($approver)->authorize('approve', $absence);

        if ($absence->status !== AbsenceStatus::EN_ATTENTE) {
            throw new \DomainException('Seules les demandes en attente peuvent être approuvées.');
        }

        if (! $this->leaveBalanceService->hasSufficientBalance(
            $absence->user,
            $absence->type,
            $absence->duration_days
        )) {
            throw new \DomainException(
                'Solde de congés insuffisant pour cette demande ('
                . $absence->duration_days . ' jour(s) demandé(s)).'
            );
        }

        $absence->update([
            'status' => AbsenceStatus::APPROUVEE,
            'approver_id' => $approver->id,
            'approved_at' => now(),
            'rejection_reason' => null,
            'rejected_at' => null,
        ]);

        $this->leaveBalanceService->deductBalance($absence);

        $absence->user->notify(new LeaveRequestApprovedNotification($absence));

        return $absence->fresh();
    }

    /**
     * EN_ATTENTE → REJETEE
     * Manager direct de l'employé ou administrateur_rh. Motif obligatoire.
     */
    public function reject(Absence $absence, User $approver, string $reason): Absence
    {
        Gate::forUser($approver)->authorize('approve', $absence);

        if ($absence->status !== AbsenceStatus::EN_ATTENTE) {
            throw new \DomainException('Seules les demandes en attente peuvent être rejetées.');
        }

        if (trim($reason) === '') {
            throw new \DomainException('Le motif de rejet est obligatoire.');
        }

        $absence->update([
            'status' => AbsenceStatus::REJETEE,
            'approver_id' => $approver->id,
            'rejected_at' => now(),
            'rejection_reason' => $reason,
        ]);

        $absence->user->notify(new LeaveRequestRejectedNotification($absence));

        return $absence->fresh();
    }

    /**
     * EN_ATTENTE → ANNULEE : l'employé lui-même uniquement.
     * APPROUVEE → ANNULEE : administrateur_rh uniquement (cas exceptionnel).
     */
    public function cancel(Absence $absence, User $canceller): Absence
    {
        if ($absence->status === AbsenceStatus::APPROUVEE) {
            Gate::forUser($canceller)->authorize('cancelApproved', $absence);
        } else {
            Gate::forUser($canceller)->authorize('cancel', $absence);
        }

        if (! in_array($absence->status, [AbsenceStatus::EN_ATTENTE, AbsenceStatus::APPROUVEE], true)) {
            throw new \DomainException('Cette demande ne peut plus être annulée.');
        }

        $wasApproved = $absence->status === AbsenceStatus::APPROUVEE;

        $absence->update([
            'status' => AbsenceStatus::ANNULEE,
            'rejected_at' => now(),
        ]);

        if ($wasApproved) {
            $this->leaveBalanceService->restoreBalance($absence);
        }

        return $absence->fresh();
    }
}
