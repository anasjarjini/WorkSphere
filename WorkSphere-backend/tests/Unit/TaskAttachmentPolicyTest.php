<?php

namespace Tests\Unit;

use App\Models\Task;
use App\Models\TaskAttachment;
use App\Models\User;
use App\Policies\TaskAttachmentPolicy;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class TaskAttachmentPolicyTest extends TestCase
{
    #[Test]
    public function another_company_cannot_download_or_delete_an_attachment(): void
    {
        $policy = new TaskAttachmentPolicy;
        $user = $this->user(10, 2, 'HR_ADMIN');
        $attachment = $this->attachment(1, 20, 30);

        self::assertFalse($policy->download($user, $attachment));
        self::assertFalse($policy->delete($user, $attachment));
    }

    #[Test]
    public function uploader_task_creator_and_hr_admin_can_delete(): void
    {
        $policy = new TaskAttachmentPolicy;
        $attachment = $this->attachment(1, 20, 30);

        self::assertTrue($policy->delete($this->user(30, 1, 'EMPLOYE'), $attachment));
        self::assertTrue($policy->delete($this->user(20, 1, 'MANAGER'), $attachment));
        self::assertTrue($policy->delete($this->user(40, 1, 'HR_ADMIN'), $attachment));
        self::assertFalse($policy->delete($this->user(50, 1, 'EMPLOYE'), $attachment));
    }

    private function user(int $id, int $companyId, string $role): User
    {
        $user = new User;
        $user->id = $id;
        $user->company_id = $companyId;
        $user->role = $role;

        return $user;
    }

    private function attachment(int $companyId, int $taskCreatorId, int $uploaderId): TaskAttachment
    {
        $task = new Task;
        $task->creator_id = $taskCreatorId;

        $attachment = new TaskAttachment;
        $attachment->company_id = $companyId;
        $attachment->uploaded_by_id = $uploaderId;
        $attachment->setRelation('task', $task);

        return $attachment;
    }
}
