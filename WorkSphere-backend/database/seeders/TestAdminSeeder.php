<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TestAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a company
        $company = Company::firstOrCreate([
            'slug' => 'test-company',
        ], [
            'name' => 'Test Company',
            'domain' => 'test-company.local',
            'email' => 'contact@test-company.local',
            'phone' => '+33123456789',
            'address' => '123 Test St',
            'is_active' => true,
        ]);

        // Create HR admin user attached to the company
        $user = User::firstOrCreate([
            'email' => 'admin@testsphere.local',
        ], [
            'name' => 'HR Admin',
            'password' => Hash::make('password'),
            'company_id' => $company->id,
            'is_active' => true,
            'role' => 'HR_ADMIN',
        ]);

        $this->command->info('Created test company and admin: admin@testsphere.local / password');
    }
}
