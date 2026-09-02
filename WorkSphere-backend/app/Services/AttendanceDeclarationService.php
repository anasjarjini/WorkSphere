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
    public function declare(User $user, Carbon $date, AttendanceStatus $status): AttendanceDeclaration
    {
        $this->ensureNotOnApprovedLeave($user, $date);

        $existing = AttendanceDeclaration::withoutGlobalScopes()
            ->where('company_id', $user->company_id)
            ->where('user_id', $user->id)
            ->whereDate('date', $date)
            ->first();

        $data = [
            'company_id' => $user->company_id,
            'user_id' => $user->id,
            'date' => $date->toDateString(),
            'status' => $status,
            'validation_status' => AttendanceValidationStatus::EN_ATTENTE,
        ];

        if ($existing) {
            if ($existing->validation_status === AttendanceValidationStatus::VALIDEE) {
                throw new \DomainException('Cette déclaration a déjà été validée et ne peut plus être modifiée.');
            }
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

        if ($declaration->validation_status !== AttendanceValidationStatus::EN_ATTENTE) {
            throw new \DomainException('Cette déclaration a déjà été traitée.');
        }

        $oldStatus = $declaration->status->value;
        $oldValidationStatus = $declaration->validation_status->value;

        $declaration->update([
            'validation_status' => AttendanceValidationStatus::VALIDEE,
            'validated_by' => $approver->id,
            'validated_at' => now(),
            'rejection_reason' => null,
        ]);

        $this->logAudit($declaration, $approver, $oldStatus, $declaration->status->value, $oldValidationStatus, AttendanceValidationStatus::VALIDEE->value, 'Approbation manuelle');

        $declaration->user->notify(new AttendanceValidatedNotification($declaration));

        return $declaration->fresh();
    }

    public function reject(AttendanceDeclaration $declaration, User $approver, string $reason): AttendanceDeclaration
    {
        Gate::forUser($approver)->authorize('approve', $declaration);

        if ($declaration->validation_status !== AttendanceValidationStatus::EN_ATTENTE) {
            throw new \DomainException('Cette déclaration a déjà été traitée et ne peut pas être rejetée.');
        }

        $oldStatus = $declaration->status->value;
        $oldValidationStatus = $declaration->validation_status->value;

        $declaration->update([
            'validation_status' => AttendanceValidationStatus::REJETEE,
            'validated_by' => $approver->id,
            'validated_at' => now(),
            'rejection_reason' => $reason,
        ]);

        $this->logAudit($declaration, $approver, $oldStatus, $declaration->status->value, $oldValidationStatus, AttendanceValidationStatus::REJETEE->value, 'Rejet: ' . $reason);

        $declaration->user->notify(new AttendanceRejectedNotification($declaration));

        return $declaration->fresh();
    }

    public function adminUpdate(AttendanceDeclaration $declaration, array $data, User $actor): AttendanceDeclaration
    {
        Gate::forUser($actor)->authorize('update', $declaration);

        $oldStatus = $declaration->status->value;
        $oldValidationStatus = $declaration->validation_status->value;

        $updateData = [];
        if (isset($data['status'])) {
            $updateData['status'] = AttendanceStatus::from($data['status']);
        }
        if (isset($data['validation_status'])) {
            $updateData['validation_status'] = AttendanceValidationStatus::from($data['validation_status']);
            $updateData['validated_by'] = $actor->id;
            $updateData['validated_at'] = now();
        }
        if (array_key_exists('rejection_reason', $data)) {
            $updateData['rejection_reason'] = $data['rejection_reason'];
        }

        $declaration->update($updateData);

        $newStatus = isset($data['status']) ? $data['status'] : $oldStatus;
        $newValidationStatus = isset($data['validation_status']) ? $data['validation_status'] : $oldValidationStatus;

        if ($oldStatus !== $newStatus || $oldValidationStatus !== $newValidationStatus) {
            $this->logAudit($declaration, $actor, $oldStatus, $newStatus, $oldValidationStatus, $newValidationStatus, 'Modification administrateur');
        }

        return $declaration->fresh(['user', 'validator']);
    }

    private function logAudit(AttendanceDeclaration $declaration, User $actor, string $oldStatus, string $newStatus, string $oldValidationStatus, string $newValidationStatus, ?string $reason = null): void
    {
        \App\Models\AttendanceAudit::create([
            'attendance_declaration_id' => $declaration->id,
            'user_id' => $actor->id,
            'old_status' => $oldStatus,
            'new_status' => $newStatus,
            'old_validation_status' => $oldValidationStatus,
            'new_validation_status' => $newValidationStatus,
            'reason' => $reason,
        ]);
    }


    public function bulkApprove(array $declarationIds, User $approver): array
    {
        $approved = [];
        $skipped = [];

        foreach ($declarationIds as $id) {
            $declaration = AttendanceDeclaration::find($id);

            if (!$declaration) {
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
