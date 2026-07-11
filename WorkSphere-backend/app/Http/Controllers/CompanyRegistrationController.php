<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterCompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\UserResource;
use App\Models\Company;
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
            $slug = Str::slug($validated['company_name']) . '-' . Str::random(6);
            $company = Company::create([
                'name' => $validated['company_name'],
                'slug' => $slug,
                'domain' => $slug,
                'email' => $validated['company_email'] ?? null,
                'is_active' => true,
            ]);

            // 2. Create User (avec tous les champs, plus de table Employee)
            $user = User::create([
                'name'       => $validated['admin_first_name'] . ' ' . $validated['admin_last_name'],
                'first_name' => $validated['admin_first_name'],
                'last_name'  => $validated['admin_last_name'],
                'email'      => $validated['admin_email'],
                'password'   => Hash::make($validated['admin_password']),
                'company_id' => $company->id,
                'role'       => 'HR_ADMIN',
                'status'     => 'ACTIVE',
                'job_title'  => 'Administrateur RH',
            ]);

            // 3. Generate Sanctum token
            $token = $user->createToken('auth_token')->plainTextToken;

            DB::commit();

            return response()->json([
                'company' => new CompanyResource($company),
                'user'    => new UserResource($user),
                'token'   => $token,
            ], 201);

        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Une erreur est survenue lors de l\'inscription.',
            ], 500);
        }
    }
}
