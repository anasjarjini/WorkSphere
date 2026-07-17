<?php

use App\Http\Controllers\AccountActivationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyRegistrationController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeImportController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanySettingsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ManagerTeamController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
// ═══════════════════════════════════════════════════════════════════
// PUBLIC ROUTES — Aucune authentification requise
// ═══════════════════════════════════════════════════════════════════

// Inscription d'une nouvelle entreprise (crée company + admin RH)
Route::post('/register-company', [CompanyRegistrationController::class, 'store']);

// Activation du compte employé via token reçu par email
Route::post('/activate', [AccountActivationController::class, 'store']);
Route::post('/activate/resend', [AccountActivationController::class, 'resend']);

// Login avec rate limiting anti-brute-force :
// throttle:5,1 = max 5 tentatives par minute par IP → HTTP 429 à la 6e tentative
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1');

// Mot de passe oublié — demande d'email de réinitialisation (rate-limité comme le login)
Route::post('/forgot-password', [PasswordResetController::class, 'forgotPassword'])->middleware('throttle:5,1');

// Réinitialisation du mot de passe avec le token reçu par email (rate-limité)
Route::post('/reset-password', [PasswordResetController::class, 'resetPassword'])->middleware('throttle:5,1');

// ═══════════════════════════════════════════════════════════════════
// PROTECTED ROUTES — auth:sanctum requis
// ═══════════════════════════════════════════════════════════════════

Route::middleware('auth:sanctum')->group(function () {

    // Déconnexion — révoque uniquement le token courant (multi-device safe)
    Route::post('/logout', [AuthController::class, 'logout']);

    // Utilisateur connecté avec ses relations (pour le bootstrap Angular)
    Route::get('/me', [AuthController::class, 'me']);

    // Informations entreprise (accessibles aux rôles connectés, avec données limitées hors RH)
    Route::get('/company', [CompanySettingsController::class, 'show']);

    // Routes scoped par rôle RH
    Route::middleware('check_role:HR_ADMIN')->group(function () {
        Route::post('/employees/import', [EmployeeImportController::class, 'store']);
        Route::get('/employees', [EmployeeController::class, 'index']);
        Route::patch('/employees/{employee}/toggle-status', [EmployeeController::class, 'toggleStatus']);
        Route::delete('/employees/bulk', [EmployeeController::class, 'bulkDestroy']);
        Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']);

        // Paramètres entreprise
        Route::put('/company', [CompanySettingsController::class, 'update']);
        Route::post('/company/logo', [CompanySettingsController::class, 'uploadLogo']);

        // Dashboard admin RH
        Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
    });

    Route::middleware('check_role:MANAGER')->group(function () {
        Route::get('/manager/team', [ManagerTeamController::class, 'index']);
    });

    // Profil utilisateur (tous rôles connectés)
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::post('/profile/avatar', [ProfileController::class, 'uploadAvatar']);
    Route::delete('/profile/avatar', [ProfileController::class, 'deleteAvatar']);

    // ── Projets ──
    Route::apiResource('projects', ProjectController::class);
    Route::post('projects/{project}/cahier-charges', [ProjectController::class, 'uploadCahierCharges']);

});
