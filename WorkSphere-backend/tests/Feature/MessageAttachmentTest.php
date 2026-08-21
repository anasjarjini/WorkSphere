<?php

namespace Tests\Feature;

use App\Models\Company;
use App\Models\Conversation;
use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class MessageAttachmentTest extends TestCase
{
    private Company $company;
    private Company $otherCompany;
    private User $manager;
    private User $employee;
    private User $stranger;
    private User $outsider;

    protected function setUp(): void
    {
        parent::setUp();

        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('manager_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('role');
            $table->string('status')->nullable();
            $table->string('job_title')->nullable();
            $table->string('avatar')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('conversations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_one_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('user_two_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('last_message_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->unique(['user_one_id', 'user_two_id']);
        });

        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('conversation_id')->constrained()->cascadeOnDelete();
            $table->foreignId('sender_id')->constrained('users')->cascadeOnDelete();
            $table->text('content')->nullable();
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['conversation_id', 'created_at']);
        });

        Schema::create('message_attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('message_id')->constrained()->cascadeOnDelete();
            $table->string('file_path');
            $table->string('file_name');
            $table->string('mime_type');
            $table->unsignedBigInteger('file_size');
            $table->string('type');
            $table->timestamps();
        });

        Storage::fake('local');

        $this->company = Company::create(['name' => 'Test Corp', 'slug' => 'test-corp', 'is_active' => true]);
        $this->otherCompany = Company::create(['name' => 'Other Corp', 'slug' => 'other-corp', 'is_active' => true]);

        $this->manager = User::create([
            'name' => 'Manager',
            'first_name' => 'Manager',
            'last_name' => 'Test',
            'email' => 'attmgr@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'MANAGER',
            'status' => 'ACTIVE',
        ]);

        $this->employee = User::create([
            'name' => 'Employee',
            'first_name' => 'Employee',
            'last_name' => 'Test',
            'email' => 'attemp@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);

        $this->outsider = User::create([
            'name' => 'Outsider',
            'first_name' => 'Outsider',
            'last_name' => 'Test',
            'email' => 'attout@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);

        $this->stranger = User::create([
            'name' => 'Stranger',
            'first_name' => 'Stranger',
            'last_name' => 'Test',
            'email' => 'attstr@test.com',
            'password' => 'secret',
            'company_id' => $this->otherCompany->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);
    }

    private function sendWithAttachment(): int
    {
        $conversation = Conversation::create([
            'company_id' => $this->company->id,
            'user_one_id' => min($this->employee->id, $this->manager->id),
            'user_two_id' => max($this->employee->id, $this->manager->id),
        ]);

        // Petit PNG valide en base64 (GD non installé sur ce poste)
        $png = base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==');

        $response = $this->actingAs($this->employee)
            ->post("/api/conversations/{$conversation->id}/messages", [
                'content' => 'avec image',
                'attachments' => [\Illuminate\Http\UploadedFile::fake()->createWithContent('photo.png', $png)],
            ], ['Accept' => 'application/json']);

        $response->assertStatus(201);

        return (int) $response->json('data.attachments.0.id');
    }

    public function test_participant_can_download_attachment(): void
    {
        $attachmentId = $this->sendWithAttachment();

        $response = $this->actingAs($this->manager)
            ->get("/api/message-attachments/{$attachmentId}/download");

        $response->assertStatus(200);

        $this->assertStringContainsString(
            'photo.png',
            $response->headers->get('content-disposition')
        );
    }

    public function test_sender_can_download_own_attachment(): void
    {
        $attachmentId = $this->sendWithAttachment();

        $this->actingAs($this->employee)
            ->get("/api/message-attachments/{$attachmentId}/download")
            ->assertStatus(200);
    }

    public function test_same_company_non_participant_cannot_download_attachment(): void
    {
        $attachmentId = $this->sendWithAttachment();

        $this->actingAs($this->outsider)
            ->get("/api/message-attachments/{$attachmentId}/download")
            ->assertStatus(403);
    }

    public function test_other_company_user_cannot_download_attachment(): void
    {
        $attachmentId = $this->sendWithAttachment();

        $this->actingAs($this->stranger)
            ->get("/api/message-attachments/{$attachmentId}/download")
            ->assertStatus(403);
    }

    public function test_message_can_have_only_attachments_without_content(): void
    {
        $conversation = Conversation::create([
            'company_id' => $this->company->id,
            'user_one_id' => min($this->employee->id, $this->manager->id),
            'user_two_id' => max($this->employee->id, $this->manager->id),
        ]);

        $this->actingAs($this->employee)
            ->post("/api/conversations/{$conversation->id}/messages", [
                'attachments' => [UploadedFile::fake()->create('rapport.pdf', 20, 'application/pdf')],
            ], ['Accept' => 'application/json'])
            ->assertStatus(201)
            ->assertJsonPath('data.content', null)
            ->assertJsonPath('data.attachments.0.file_name', 'rapport.pdf')
            ->assertJsonPath('data.attachments.0.type', 'document');
    }

    public function test_attachment_is_rejected_when_mime_does_not_match_extension(): void
    {
        $conversation = Conversation::create([
            'company_id' => $this->company->id,
            'user_one_id' => min($this->employee->id, $this->manager->id),
            'user_two_id' => max($this->employee->id, $this->manager->id),
        ]);

        // Extension trompeuse .pdf mais contenu/mime réel text/plain
        $this->actingAs($this->employee)
            ->post("/api/conversations/{$conversation->id}/messages", [
                'content' => 'fichier douteux',
                'attachments' => [UploadedFile::fake()->create('fake.pdf', 10, 'text/plain')],
            ], ['Accept' => 'application/json'])
            ->assertStatus(422);
    }

    public function test_executable_renamed_as_jpeg_is_rejected_from_its_real_mime_type(): void
    {
        $conversation = Conversation::create([
            'company_id' => $this->company->id,
            'user_one_id' => min($this->employee->id, $this->manager->id),
            'user_two_id' => max($this->employee->id, $this->manager->id),
        ]);

        // Vrai fichier temporaire, pas un fake Laravel : finfo identifie l'en-tête DOS/PE.
        $path = tempnam(sys_get_temp_dir(), 'chat-executable-');
        file_put_contents($path, "MZ\x90\x00\x03\x00\x00\x00\x04\x00\x00\x00\xff\xff\x00\x00" . str_repeat("\x00", 4096));

        try {
            $file = new UploadedFile($path, 'malware.jpg', null, null, true);

            $this->actingAs($this->employee)
                ->post("/api/conversations/{$conversation->id}/messages", [
                    'content' => 'fichier douteux',
                    'attachments' => [$file],
                ], ['Accept' => 'application/json'])
                ->assertStatus(422);
        } finally {
            @unlink($path);
        }
    }
}
