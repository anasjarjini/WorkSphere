<?php

use App\Http\Controllers\AccountActivationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyRegistrationController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeImportController;
use App\Http\Controllers\PasswordResetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// ═══════════════════════════════════════════════════════════════════
// PUBLIC ROUTES — Aucune authentification requise
// ═══════════════════════════════════════════════════════════════════

// Inscription d'une nouvelle entreprise (crée company + admin RH)
Route::post('/register-company', [CompanyRegistrationController::class, 'store']);

// Activation du compte employé via token reçu par email
Route::post('/activate', [AccountActivationController::class, 'store']);
// TODO: Route::post('/activate/resend', [AccountActivationController::class, 'resend']); // À implémenter plus tard

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

    // Routes scoped par rôle RH
    Route::middleware('role:administrateur_rh')->group(function () {
        Route::post('/employees/import', [EmployeeImportController::class, 'store']);
        Route::get('/employees', [EmployeeController::class, 'index']);
        Route::patch('/employees/{employee}/toggle-status', [EmployeeController::class, 'toggleStatus']);
        Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']);
    });

});
