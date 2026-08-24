<?php

namespace Tests\Feature;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class HeartbeatTest extends TestCase
{
    private Company $company;
    private User $user;

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
            $table->string('role');
            $table->string('status')->nullable();
            $table->string('job_title')->nullable();
            $table->string('avatar')->nullable();
            $table->timestamp('last_active_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        $this->company = Company::create(['name' => 'Test Corp', 'slug' => 'test-corp', 'is_active' => true]);

        $this->user = User::create([
            'name' => 'user@test.com',
            'first_name' => 'User',
            'last_name' => 'Test',
            'email' => 'user@test.com',
            'password' => 'secret',
            'company_id' => $this->company->id,
            'role' => 'EMPLOYE',
            'status' => 'ACTIVE',
        ]);
    }

    public function test_heartbeat_updates_last_active_at(): void
    {
        $this->actingAs($this->user)
            ->postJson('/api/heartbeat')
            ->assertNoContent();

        $fresh = $this->user->fresh();
        $this->assertNotNull($fresh->last_active_at);
        $this->assertTrue($fresh->last_active_at->greaterThan(now()->subSeconds(5)));
    }

    public function test_is_online_logic_respects_one_minute_threshold(): void
    {
        $this->user->last_active_at = now()->subSeconds(30);
        $this->user->save();

        $this->assertTrue($this->user->isOnline());

        $this->user->last_active_at = now()->subMinutes(2);
        $this->user->save();

        $this->assertFalse($this->user->isOnline());
    }
}
