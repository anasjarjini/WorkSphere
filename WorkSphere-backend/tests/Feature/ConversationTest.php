<?php

namespace Tests\Feature;

use App\Models\Company;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class ConversationTest extends TestCase
{
    private Company $company;
    private Company $otherCompany;
    private User $hrAdmin;
    private User $manager;
    private User $employee;
    private User $stranger;

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

        $this->company = Company::create(['name' => 'Test Corp', 'slug' => 'test-corp', 'is_active' => true]);
        $this->otherCompany = Company::create(['name' => 'Other Corp', 'slug' => 'other-corp', 'is_active' => true]);

        $this->hrAdmin = $this->createUser('rh@test.com', $this->company->id, 'HR_ADMIN');
        $this->manager = $this->createUser('manager@test.com', $this->company->id, 'MANAGER');
        $this->employee = $this->createUser('employee@test.com', $this->company->id, 'EMPLOYE');
        $this->stranger = $this->createUser('stranger@test.com', $this->otherCompany->id, 'EMPLOYE');
    }

    private function createUser(string $email, int $companyId, string $role): User
    {
        return User::create([
            'name' => $email,
            'first_name' => ucfirst(explode('@', $email)[0]),
            'last_name' => 'Test',
            'email' => $email,
            'password' => 'secret',
            'company_id' => $companyId,
            'role' => $role,
            'status' => 'ACTIVE',
        ]);
    }

    private function createConversation(User $a, User $b): Conversation
    {
        return Conversation::create([
            'company_id' => $a->company_id,
            'user_one_id' => min($a->id, $b->id),
            'user_two_id' => max($a->id, $b->id),
        ]);
    }

    public function test_employee_can_create_conversation_with_manager(): void
    {
        $response = $this->actingAs($this->employee)->postJson('/api/conversations', [
            'target_user_id' => $this->manager->id,
        ]);

        $response->assertStatus(201)
            ->assertJsonPath('data.other_user.id', $this->manager->id);

        $this->assertDatabaseHas('conversations', [
            'user_one_id' => min($this->employee->id, $this->manager->id),
            'user_two_id' => max($this->employee->id, $this->manager->id),
        ]);
    }

    public function test_conversation_is_unique_whoever_initiates(): void
    {
        $first = $this->actingAs($this->employee)->postJson('/api/conversations', [
            'target_user_id' => $this->manager->id,
        ]);

        $second = $this->actingAs($this->manager)->postJson('/api/conversations', [
            'target_user_id' => $this->employee->id,
        ]);

        $first->assertStatus(201);
        $second->assertStatus(201);

        $this->assertSame(
            $first->json('data.id'),
            $second->json('data.id'),
            'La conversation doit être unique peu importe qui initie.'
        );

        $this->assertSame(1, Conversation::count());
    }

    public function test_rh_can_chat_with_employee_and_manager(): void
    {
        $this->actingAs($this->hrAdmin)->postJson('/api/conversations', [
            'target_user_id' => $this->employee->id,
        ])->assertStatus(201);

        $this->actingAs($this->hrAdmin)->postJson('/api/conversations', [
            'target_user_id' => $this->manager->id,
        ])->assertStatus(201);
    }

    public function test_cannot_create_conversation_with_self(): void
    {
        $this->actingAs($this->employee)->postJson('/api/conversations', [
            'target_user_id' => $this->employee->id,
        ])->assertStatus(403);
    }

    public function test_cannot_create_conversation_with_other_company_user(): void
    {
        $this->actingAs($this->employee)->postJson('/api/conversations', [
            'target_user_id' => $this->stranger->id,
        ])->assertStatus(403);
    }

    public function test_user_can_send_text_message(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        $response = $this->actingAs($this->employee)->postJson("/api/conversations/{$conversation->id}/messages", [
            'content' => 'Bonjour, c\'est noté.',
        ]);

        $response->assertStatus(201)
            ->assertJsonPath('data.content', 'Bonjour, c\'est noté.')
            ->assertJsonPath('data.sender_id', $this->employee->id);

        $this->assertSame(1, Message::count());
        $this->assertNotNull($conversation->fresh()->last_message_at);
    }

    public function test_cannot_send_message_without_content_and_attachments(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        $this->actingAs($this->employee)->postJson("/api/conversations/{$conversation->id}/messages", [
            'content' => '   ',
        ])->assertStatus(422);

        $this->assertSame(0, Message::count());
    }

    public function test_cannot_send_message_with_unsupported_file_type(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        $this->actingAs($this->employee)
            ->post("/api/conversations/{$conversation->id}/messages", [
                'content' => 'voici le doc',
                'attachments' => [\Illuminate\Http\UploadedFile::fake()->create('notes.txt', 10, 'text/plain')],
            ], ['Accept' => 'application/json'])
            ->assertStatus(422);

        $this->assertSame(0, Message::count());
    }

    public function test_cannot_send_message_with_more_than_five_attachments(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        $files = [];
        for ($i = 0; $i < 6; $i++) {
            $files[] = \Illuminate\Http\UploadedFile::fake()->create("doc-$i.pdf", 10, 'application/pdf');
        }

        $this->actingAs($this->employee)
            ->post("/api/conversations/{$conversation->id}/messages", [
                'content' => 'fichiers',
                'attachments' => $files,
            ], ['Accept' => 'application/json'])
            ->assertStatus(422);

        $this->assertSame(0, Message::count());
    }

    public function test_cannot_send_message_over_size_limit(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        // 11 Mo (10 Mo max)
        $this->actingAs($this->employee)
            ->post("/api/conversations/{$conversation->id}/messages", [
                'content' => 'gros fichier',
                'attachments' => [\Illuminate\Http\UploadedFile::fake()->create('big.pdf', 11264, 'application/pdf')],
            ], ['Accept' => 'application/json'])
            ->assertStatus(422);

        $this->assertSame(0, Message::count());
    }

    public function test_messages_are_marked_as_read_when_fetched(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);
        $conversation->messages()->create(['sender_id' => $this->manager->id, 'content' => 'Message 1']);
        $conversation->messages()->create(['sender_id' => $this->manager->id, 'content' => 'Message 2']);

        $this->actingAs($this->employee)
            ->getJson("/api/conversations/{$conversation->id}/messages")
            ->assertStatus(200)
            ->assertJsonCount(2, 'data');

        $this->assertSame(0, $conversation->messages()->whereNull('read_at')->count());
        $this->assertSame(0,
            $conversation->messages()->where('sender_id', $this->employee->id)->whereNotNull('read_at')->count()
        );
    }

    public function test_unread_count_is_computed_per_conversation(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);
        $conversation->messages()->create(['sender_id' => $this->manager->id, 'content' => 'Non lu']);

        $this->actingAs($this->employee)
            ->getJson('/api/conversations/unread-count')
            ->assertOk()
            ->assertJsonPath('unread_count', 1);

        $this->actingAs($this->manager)
            ->getJson('/api/conversations/unread-count')
            ->assertOk()
            ->assertJsonPath('unread_count', 0);
    }

    public function test_conversation_list_includes_last_message_and_unread_count(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);
        $conversation->messages()->create(['sender_id' => $this->manager->id, 'content' => 'Coucou']);

        $response = $this->actingAs($this->employee)->getJson('/api/conversations');

        $response->assertOk()
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.last_message.content', 'Coucou')
            ->assertJsonPath('data.0.unread_count', 1)
            ->assertJsonPath('data.0.other_user.id', $this->manager->id);
    }

    public function test_non_participant_cannot_access_conversation_messages(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        // Même entreprise mais hors conversation
        $outsider = $this->createUser('outsider@test.com', $this->company->id, 'EMPLOYE');

        $this->actingAs($outsider)
            ->getJson("/api/conversations/{$conversation->id}/messages")
            ->assertStatus(403);

        $this->actingAs($outsider)
            ->postJson("/api/conversations/{$conversation->id}/messages", ['content' => 'intrus'])
            ->assertStatus(403);
    }

    public function test_non_participant_cannot_list_read_other_conversations(): void
    {
        $conversation = $this->createConversation($this->employee, $this->manager);

        $outsider = $this->createUser('outsider2@test.com', $this->company->id, 'EMPLOYE');

        $this->actingAs($outsider)->getJson('/api/conversations')
            ->assertOk()
            ->assertJsonCount(0, 'data');
    }

    public function test_directory_lists_company_users_and_excludes_self(): void
    {
        $response = $this->actingAs($this->employee)->getJson('/api/users/directory');

        $response->assertOk()->assertJsonCount(2, 'data');

        $ids = collect($response->json('data'))->pluck('id')->all();
        $this->assertNotContains($this->employee->id, $ids);
        $this->assertContains($this->manager->id, $ids);
        $this->assertContains($this->hrAdmin->id, $ids);
        $this->assertNotContains($this->stranger->id, $ids);
    }

    public function test_directory_search_filters_by_name(): void
    {
        $response = $this->actingAs($this->employee)
            ->getJson('/api/users/directory?search=manag');

        $response->assertOk()->assertJsonCount(1, 'data');
        $this->assertSame($this->manager->id, $response->json('data.0.id'));
    }

    public function test_directory_is_sorted_alphabetically_and_limited_to_30(): void
    {
        for ($i = 0; $i < 40; $i++) {
            $this->createUser("user$i@test.com", $this->company->id, 'EMPLOYE');
        }

        $response = $this->actingAs($this->employee)->getJson('/api/users/directory?search=');

        $response->assertOk()->assertJsonCount(30, 'data');

        $names = collect($response->json('data'))->pluck('first_name')->all();
        $sorted = $names;
        sort($sorted, SORT_STRING | SORT_FLAG_CASE);
        $this->assertSame($sorted, $names);
    }

    public function test_conversation_between_two_employees_of_same_company(): void
    {
        $colleague = $this->createUser('colleague@test.com', $this->company->id, 'EMPLOYE');

        $this->actingAs($this->employee)->postJson('/api/conversations', [
            'target_user_id' => $colleague->id,
        ])->assertStatus(201);
    }
}