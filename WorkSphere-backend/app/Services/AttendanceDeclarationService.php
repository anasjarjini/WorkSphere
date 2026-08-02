<?php

namespace App\Services;

use App\Enums\AbsenceStatus;
use App\Enums\AttendanceStatus;
use App\Enums\AttendanceValidationStatus;
use App\Models\Absence;
use App\Models\AttendanceDeclaration;
use App\Models\User;
use App\Notifications\AttendancePendingNotification;
use App\Notifications\AttendanceRejectedNotification;
use App\Notifications\AttendanceValidatedNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Gate;

class AttendanceDeclarationService
{
    public function declare(User $user, Carbon $date, AttendanceStatus $status, ?float $hoursWorked = null): AttendanceDeclaration
    {
        $this->ensureNotOnApprovedLeave($user, $date);

        $existing = AttendanceDeclaration::withoutGlobalScopes()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->whereDate('date', $date)
            ->first();

        if ($existing && $existing->validation_status === AttendanceValidationStatus::VALIDEE) {
            throw new \DomainException('Cette déclaration est déjà validée et ne peut plus être modifiée.');
        }

        $data = [
            'company_id' => $user->company_id,
            'user_id' => $user->id,
            'date' => $date->toDateString(),
            'status' => $status,
            'validation_status' => AttendanceValidationStatus::EN_ATTENTE,
        ];

        if ($status === AttendanceStatus::PRESENT) {
            $data['hours_worked'] = $hoursWorked;
        } else {
            $data['hours_worked'] = null;
        }

        if ($existing) {
            $existing->update($data);
            $this->notifyManager($existing);
            return $existing->fresh();
        }

        $declaration = AttendanceDeclaration::create($data);
        $this->notifyManager($declaration);

        return $declaration;
    }

    private function notifyManager(AttendanceDeclaration $declaration): void
    {
        $manager = $declaration->user->manager
            ?? User::where('company_id', $declaration->company_id)
                ->where('role', 'HR_ADMIN')
                ->where('status', 'ACTIVE')
                ->first();

        if ($manager) {
            $manager->notify(new AttendancePendingNotification($declaration));
        }
    }

    /**
     * Garde-fou : un employé en congé approuvé ne peut pas déclarer sa
     * présence (ni une absence) le jour concerné. Le statut "En congé"
     * vit exclusivement dans la table `absences`.
     */
    private function ensureNotOnApprovedLeave(User $user, Carbon $date): void
    {
        $onLeave = Absence::withoutGlobalScopes()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->where('status', AbsenceStatus::APPROUVEE)
            ->whereDate('start_date', '<=', $date->toDateString())
            ->whereDate('end_date', '>=', $date->toDateString())
            ->exists();

        if ($onLeave) {
            throw new \DomainException(
                'Vous êtes en congé approuvé ce jour, aucune déclaration de présence n\'est nécessaire.'
            );
        }
    }

    public function approve(AttendanceDeclaration $declaration, User $approver): AttendanceDeclaration
    {
        Gate::forUser($approver)->authorize('approve', $declaration);

        if ($declaration->validation_status === AttendanceValidationStatus::VALIDEE) {
            throw new \DomainException('Cette déclaration est déjà validée.');
        }

        $declaration->update([
            'validation_status' => AttendanceValidationStatus::VALIDEE,
            'validated_by' => $approver->id,
            'validated_at' => now(),
            'rejection_reason' => null,
        ]);

        $declaration->user->notify(new AttendanceValidatedNotification($declaration));

        return $declaration->fresh();
    }

    public function reject(AttendanceDeclaration $declaration, User $approver, string $reason): AttendanceDeclaration
    {
        Gate::forUser($approver)->authorize('approve', $declaration);

        if ($declaration->validation_status === AttendanceValidationStatus::VALIDEE) {
            throw new \DomainException('Cette déclaration est déjà validée et ne peut pas être rejetée.');
        }

        $declaration->update([
            'validation_status' => AttendanceValidationStatus::REJETEE,
            'validated_by' => $approver->id,
            'validated_at' => now(),
            'rejection_reason' => $reason,
        ]);

        $declaration->user->notify(new AttendanceRejectedNotification($declaration));

        return $declaration->fresh();
    }

    public function bulkApprove(array $declarationIds, User $approver): array
    {
        $approved = [];
        $skipped = [];

        foreach ($declarationIds as $id) {
            $declaration = AttendanceDeclaration::find($id);

            if (!$declaration || $declaration->validation_status === AttendanceValidationStatus::VALIDEE) {
                $skipped[] = $id;
                continue;
            }

            if (!$approver->can('approve', $declaration)) {
                $skipped[] = $id;
                continue;
            }

            try {
                $this->approve($declaration, $approver);
                $approved[] = $id;
            } catch (\DomainException) {
                $skipped[] = $id;
            }
        }

        return [
            'approved' => $approved,
            'skipped' => $skipped,
        ];
    }
}
