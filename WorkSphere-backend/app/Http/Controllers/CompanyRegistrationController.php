<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterCompanyRequest;
use App\Models\Company;
use App\Models\Employee;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CompanyRegistrationController extends Controller
{
    public function store(RegisterCompanyRequest $request)
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // 1. Create Company
            $company = Company::create([
                'name' => $validated['company_name'],
                'slug' => Str::slug($validated['company_name']) . '-' . Str::random(6),
                'email' => $validated['company_email'] ?? null,
                'is_active' => true,
            ]);

            // 2. Create User
            $user = User::create([
                'name' => $validated['admin_name'],
                'email' => $validated['admin_email'],
                'password' => Hash::make($validated['admin_password']),
                'company_id' => $company->id,
                'is_active' => true,
            ]);

            // 3. Assign Role via Spatie
            $user->assignRole('administrateur_rh');

            // 4. Create Employee
            $employee = Employee::create([
                'user_id' => $user->id,
                'company_id' => $company->id, // explicit, even though the trait handles it
                'first_name' => $validated['admin_first_name'],
                'last_name' => $validated['admin_last_name'],
                'job_title' => 'Administrateur RH',
                'department' => null,
                'salary' => null,
                'hire_date' => now(),
            ]);

            // 5. Generate Sanctum token
            $token = $user->createToken('auth_token')->plainTextToken;

            DB::commit();

            return response()->json([
                'company' => $company,
                'user' => $user->load('roles'),
                'employee' => $employee,
                'token' => $token,
            ], 201);

        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'An error occurred during registration.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
