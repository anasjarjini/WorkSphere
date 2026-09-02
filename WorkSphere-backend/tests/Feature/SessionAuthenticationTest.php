<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SessionAuthenticationTest extends TestCase
{
    use RefreshDatabase;

    private function fromSpa(): static
    {
        return $this->withHeaders([
            'Origin' => 'http://localhost:4200',
            'Referer' => 'http://localhost:4200/login',
        ]);
    }

    public function test_active_user_logs_in_with_a_session_without_exposing_a_bearer_token(): void
    {
        $user = User::factory()->create([
            'password' => bcrypt('Password1!'),
            'status' => 'ACTIVE',
        ]);

        $this->fromSpa()
            ->postJson('/api/login', [
                'email' => $user->email,
                'password' => 'Password1!',
            ])
            ->assertOk()
            ->assertJsonPath('user.id', $user->id)
            ->assertJsonMissingPath('token');

        $this->assertAuthenticatedAs($user, 'web');

        $this->fromSpa()
            ->getJson('/api/me')
            ->assertOk()
            ->assertJsonPath('user.id', $user->id);
    }

    public function test_logout_invalidates_the_current_session(): void
    {
        $user = User::factory()->create(['status' => 'ACTIVE']);

        $this->actingAs($user, 'web');

        $this->fromSpa()
            ->postJson('/api/logout')
            ->assertOk();

        $this->assertGuest('web');
    }
}
