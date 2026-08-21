<?php

namespace Tests\Feature;

use App\Enums\AnnouncementScope;
use App\Models\Announcement;
use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class AnnouncementTest extends TestCase
{
    private Company $company;
    private User $hrAdmin;
    private User $managerA;
    private User $managerB;
    private User $employeeOfA;
    private User $employeeOfB;

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
            $table->string('last_namSendEveningReminderse');
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('manager_id')->nullable()->constrained('users')->nullOnDelete();
            $table->boolean('is_active')->default(false);
            $table->string('role');
            $table->string('status')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('department_id')->nullable()->constrained('departments')->nullOnDelete();
            $table->foreignId('creator_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('title');
            $table->text('content');
            $table->enum('type', ['GENERAL', 'MEETING', 'TRAINING', 'POLICY'])->default('GENERAL');
            $table->dateTime('meeting_date')->nullable();
            $table->string('meeting_link')->nullable();
            $table->string('training_link')->nullable();
            $table->enum('target_scope', ['COMPANY', 'TEAM'])->default('COMPANY');
            $table->foreignId('target_manager_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('status')->default('published');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        $this->company = Company::create([
            'name' => 'Announce Corp',
            'slug' => 'announce-corp',
            'is_active' => true,
        ]);

        $this->hrAdmin = $this->createUser('HR Admin', 'HR', 'Admin', 'hr@test.com', 'HR_ADMIN');
        $this->managerA = $this->createUser('Manager A', 'Manager', 'A', 'managera@test.com', 'MANAGER');
        $this->managerB = $this->createUser('Manager B', 'Manager', 'B', 'managerb@test.com', 'MANAGER');
        $this->employeeOfA = $this->createUser('Employee A1', 'Employee', 'A1', 'empA1@test.com', 'EMPLOYE', $this->managerA);
        $this->employeeOfB = $this->createUser('Employee B1', 'Employee', 'B1', 'empB1@test.com', 'EMPLOYE', $this->managerB);
    }

    private function createUser(string $name, string $first, string $last, string $email, string $role, ?User $manager = null): User
    {
        return User::create([
            'name' => $name,
            'first_name' => $first,
            'last_name' => $last,
            'email' => $email,
            'password' => 'secret',
            'company_id' => $this->company->id,
            'manager_id' => $manager?->id,
            'role' => $role,
            'status' => 'ACTIVE',
        ]);
    }

    public function test_employee_cannot_create_announcement(): void
    {
        $response = $this->actingAs($this->employeeOfA)->postJson('/api/announcements', [
            'title' => 'Test',
            'content' => 'Contenu',
            'target_scope' => 'TEAM',
        ]);

        $response->assertForbidden();
    }

    public function test_manager_can_create_team_announcement_targeting_his_team(): void
    {
        $response = $this->actingAs($this->managerA)->postJson('/api/announcements', [
            'title' => 'Team news',
            'content' => 'Pour mon équipe',
            'target_scope' => 'TEAM',
            'target_manager_id' => $this->managerB->id,
        ]);

        $response->assertCreated()
            ->assertJson([
                'target_scope' => 'TEAM',
                'target_manager_id' => $this->managerA->id,
            ]);

        $announcement = Announcement::findOrFail($response->json('id'));
        $this->assertEquals($this->managerA->id, $announcement->target_manager_id);
    }

    public function test_manager_cannot_create_company_wide_announcement(): void
    {
        $response = $this->actingAs($this->managerA)->postJson('/api/announcements', [
            'title' => 'Spam',
            'content' => 'Tout le monde',
            'target_scope' => 'COMPANY',
        ]);

        $response->assertForbidden();
    }

    public function test_hr_admin_can_create_company_wide_announcement(): void
    {
        $response = $this->actingAs($this->hrAdmin)->postJson('/api/announcements', [
            'title' => 'Company news',
            'content' => 'Pour toute la société',
            'target_scope' => 'COMPANY',
        ]);

        $response->assertCreated()->assertJson([
            'target_scope' => 'COMPANY',
            'target_manager_id' => null,
        ]);
    }

    public function test_hr_admin_can_create_team_announcement_for_specific_manager(): void
    {
        $response = $this->actingAs($this->hrAdmin)->postJson('/api/announcements', [
            'title' => 'Team B news',
            'content' => 'Pour équipe B',
            'target_scope' => 'TEAM',
            'target_manager_id' => $this->managerB->id,
        ]);

        $response->assertCreated()->assertJson([
            'target_scope' => 'TEAM',
            'target_manager_id' => $this->managerB->id,
        ]);
    }

    public function test_hr_admin_team_announcement_without_target_manager_is_rejected(): void
    {
        $response = $this->actingAs($this->hrAdmin)->postJson('/api/announcements', [
            'title' => 'Sans cible',
            'content' => 'Pas de manager',
            'target_scope' => 'TEAM',
        ]);

        $response->assertStatus(422);
    }

    public function test_company_announcement_is_visible_to_everyone_in_company(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->hrAdmin->id,
            'title' => 'Général',
            'content' => 'Pour tous',
            'target_scope' => AnnouncementScope::COMPANY->value,
            'published_at' => now(),
        ]);

        $response = $this->actingAs($this->employeeOfA)->getJson('/api/announcements');

        $response->assertOk()
            ->assertJsonFragment(['id' => $announcement->id]);

        $this->actingAs($this->employeeOfB)->getJson('/api/announcements')
            ->assertJsonFragment(['id' => $announcement->id]);
    }

    public function test_team_announcement_is_only_visible_to_direct_subordinates(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Équipe A',
            'content' => 'Réservé A',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->employeeOfA)->getJson('/api/announcements')
            ->assertJsonFragment(['id' => $announcement->id]);

        $this->actingAs($this->employeeOfB)->getJson('/api/announcements')
            ->assertJsonMissing(['id' => $announcement->id]);

        $this->actingAs($this->hrAdmin)->getJson('/api/announcements')
            ->assertJsonMissing(['id' => $announcement->id]);
    }

    public function test_target_manager_and_creator_see_team_announcement(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->hrAdmin->id,
            'title' => 'Équipe B',
            'content' => 'Réservé B',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerB->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->managerB)->getJson('/api/announcements')
            ->assertJsonFragment(['id' => $announcement->id]);

        $this->actingAs($this->hrAdmin)->getJson('/api/announcements')
            ->assertJsonFragment(['id' => $announcement->id]);
    }

    public function test_employee_without_team_does_not_see_team_announcements(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Équipe A',
            'content' => 'Réservé A',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $noTeamEmployee = $this->createUser('Solo', 'Solo', 'Solo', 'solo@test.com', 'EMPLOYE');

        $this->actingAs($noTeamEmployee)->getJson('/api/announcements')
            ->assertOk()
            ->assertJsonMissing(['id' => $announcement->id]);
    }

    public function test_hr_admin_sees_company_announcements_but_not_other_teams(): void
    {
        $companyWide = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->hrAdmin->id,
            'title' => 'Général',
            'content' => 'X',
            'target_scope' => AnnouncementScope::COMPANY->value,
            'published_at' => now(),
        ]);

        $team = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerB->id,
            'title' => 'Équipe B',
            'content' => 'Y',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerB->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->hrAdmin)->getJson('/api/announcements')
            ->assertOk()
            ->assertJsonFragment(['id' => $companyWide->id])
            ->assertJsonMissing(['id' => $team->id]);
    }

    public function test_manager_can_update_own_announcement_but_scope_stays_team(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Avant',
            'content' => 'Contenu avant',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $response = $this->actingAs($this->managerA)->putJson("/api/announcements/{$announcement->id}", [
            'title' => 'Après',
            'target_scope' => 'COMPANY',
        ]);

        $response->assertOk()->assertJson([
            'title' => 'Après',
            'target_scope' => 'TEAM',
        ]);
    }

    public function test_employee_cannot_update_or_delete(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Protégée',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->employeeOfA)->putJson("/api/announcements/{$announcement->id}", ['title' => 'Hack'])
            ->assertForbidden();

        $this->actingAs($this->employeeOfA)->deleteJson("/api/announcements/{$announcement->id}")
            ->assertForbidden();
    }

    public function test_hr_admin_cannot_update_or_delete_other_announcements(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Sous modération',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->hrAdmin)->putJson("/api/announcements/{$announcement->id}", ['title' => 'Modifié RH'])
            ->assertForbidden();

        $this->actingAs($this->hrAdmin)->deleteJson("/api/announcements/{$announcement->id}")
            ->assertForbidden();

        $this->actingAs($this->managerA)->deleteJson("/api/announcements/{$announcement->id}")
            ->assertOk();
    }

    public function test_manager_cannot_update_or_delete_other_manager_announcement(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Défendue',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->managerB)->putJson("/api/announcements/{$announcement->id}", ['title' => 'Intrusion'])
            ->assertForbidden();

        $this->actingAs($this->managerB)->deleteJson("/api/announcements/{$announcement->id}")
            ->assertForbidden();
    }

    public function test_creation_notifies_concerned_users(): void
    {
        $this->actingAs($this->managerA)->postJson('/api/announcements', [
            'title' => 'Notif équipe',
            'content' => 'Avis',
            'target_scope' => 'TEAM',
        ])->assertCreated();

        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->employeeOfA->id]);
        $this->assertDatabaseMissing('notifications', ['notifiable_id' => $this->employeeOfB->id]);
        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->managerA->id]);
    }

    public function test_company_announcement_notifies_all_active_users(): void
    {
        $this->actingAs($this->hrAdmin)->postJson('/api/announcements', [
            'title' => 'Notif générale',
            'content' => 'Avis à tous',
            'target_scope' => 'COMPANY',
        ])->assertCreated();

        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->employeeOfA->id]);
        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->employeeOfB->id]);
        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->hrAdmin->id]);
    }

    public function test_announcement_policy_rules(): void
    {
        $this->assertTrue(Gate::forUser($this->managerA)->allows('create', Announcement::class));
        $this->assertTrue(Gate::forUser($this->hrAdmin)->allows('create', Announcement::class));
        $this->assertFalse(Gate::forUser($this->employeeOfA)->allows('create', Announcement::class));

        $this->assertTrue(Gate::forUser($this->hrAdmin)->allows('createCompanyWide', Announcement::class));
        $this->assertFalse(Gate::forUser($this->managerA)->allows('createCompanyWide', Announcement::class));
        $this->assertFalse(Gate::forUser($this->employeeOfA)->allows('createCompanyWide', Announcement::class));
    }

    public function test_store_accepts_draft_status_without_notifying(): void
    {
        $response = $this->actingAs($this->hrAdmin)->postJson('/api/announcements', [
            'title' => 'Brouillon',
            'content' => 'En préparation',
            'target_scope' => 'COMPANY',
            'status' => 'draft',
        ]);

        $response->assertCreated()->assertJsonPath('status', 'draft')->assertJsonPath('published_at', null);

        $this->assertDatabaseMissing('notifications', ['notifiable_id' => $this->employeeOfA->id]);
    }

    public function test_drafts_are_only_visible_to_their_creator(): void
    {
        $draft = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->hrAdmin->id,
            'title' => 'Brouillon RH',
            'content' => 'Privé',
            'target_scope' => AnnouncementScope::COMPANY->value,
            'status' => 'draft',
        ]);

        $this->actingAs($this->hrAdmin)->getJson('/api/announcements?status=draft')
            ->assertOk()
            ->assertJsonFragment(['id' => $draft->id]);

        $this->actingAs($this->managerA)->getJson('/api/announcements?status=draft')
            ->assertOk()
            ->assertJsonMissing(['id' => $draft->id]);

        $this->actingAs($this->hrAdmin)->getJson("/api/announcements/{$draft->id}")
            ->assertOk();

        $this->actingAs($this->managerA)->getJson("/api/announcements/{$draft->id}")
            ->assertForbidden();
    }

    public function test_publishing_a_draft_notifies_recipients(): void
    {
        $draft = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'À publier',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'status' => 'draft',
        ]);

        $this->actingAs($this->managerA)->putJson("/api/announcements/{$draft->id}", ['status' => 'published'])
            ->assertOk()
            ->assertJsonPath('status', 'published');

        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->employeeOfA->id]);
        $this->assertDatabaseMissing('notifications', ['notifiable_id' => $this->employeeOfB->id]);

        $this->actingAs($this->employeeOfA)->getJson('/api/announcements')
            ->assertJsonFragment(['id' => $draft->id]);
    }

    public function test_destroy_archives_announcement(): void
    {
        $announcement = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'À archiver',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'published_at' => now(),
        ]);

        $this->actingAs($this->managerA)->deleteJson("/api/announcements/{$announcement->id}")
            ->assertOk();

        $this->actingAs($this->employeeOfA)->getJson('/api/announcements')
            ->assertJsonMissing(['id' => $announcement->id]);

        $this->actingAs($this->employeeOfA)->getJson('/api/announcements?status=archived')
            ->assertOk()
            ->assertJsonFragment(['id' => $announcement->id]);
    }

    public function test_restore_archived_announcement_republishes_and_notifies(): void
    {
        $archived = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->hrAdmin->id,
            'title' => 'Restaurée',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::COMPANY->value,
            'status' => 'archived',
            'published_at' => now()->subDay(),
        ]);

        $this->actingAs($this->hrAdmin)->putJson("/api/announcements/{$archived->id}", ['status' => 'published'])
            ->assertOk()
            ->assertJsonPath('status', 'published');

        $this->assertDatabaseHas('notifications', ['notifiable_id' => $this->employeeOfA->id]);

        $this->actingAs($this->managerA)->getJson('/api/announcements')
            ->assertJsonFragment(['id' => $archived->id]);
    }

    public function test_force_delete_removes_announcement_permanently(): void
    {
        $archived = Announcement::create([
            'company_id' => $this->company->id,
            'creator_id' => $this->managerA->id,
            'title' => 'Effacée',
            'content' => 'Contenu',
            'target_scope' => AnnouncementScope::TEAM->value,
            'target_manager_id' => $this->managerA->id,
            'status' => 'archived',
        ]);

        $this->actingAs($this->managerB)->deleteJson("/api/announcements/{$archived->id}/force")
            ->assertForbidden();

        $this->actingAs($this->managerA)->deleteJson("/api/announcements/{$archived->id}/force")
            ->assertOk();

        $this->assertDatabaseMissing('announcements', ['id' => $archived->id]);
    }
}
