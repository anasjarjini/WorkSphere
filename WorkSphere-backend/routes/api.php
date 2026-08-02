<?php

use App\Http\Controllers\AccountActivationController;
use App\Http\Controllers\AbsenceController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyRegistrationController;
use App\Http\Controllers\CompanySettingsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeImportController;
use App\Http\Controllers\ManagerTeamController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceRequestController;
use App\Http\Controllers\TaskAttachmentController;
use App\Http\Controllers\TaskCommentController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskDependencyController;
use App\Http\Controllers\AttendanceDeclarationController;
use Illuminate\Support\Facades\Route;

Route::post('/register-company', [CompanyRegistrationController::class, 'store']);
Route::post('/activate', [AccountActivationController::class, 'store']);
Route::post('/activate/resend', [AccountActivationController::class, 'resend']);
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1');
Route::post('/forgot-password', [PasswordResetController::class, 'forgotPassword'])->middleware('throttle:5,1');
Route::post('/reset-password', [PasswordResetController::class, 'resetPassword'])->middleware('throttle:5,1');

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::get('/company', [CompanySettingsController::class, 'show']);

    // Profile
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::post('/profile/avatar', [ProfileController::class, 'uploadAvatar']);
    Route::delete('/profile/avatar', [ProfileController::class, 'deleteAvatar']);

    // Notifications
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::get('/notifications/unread-count', [NotificationController::class, 'unreadCount']);
    Route::patch('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);
    Route::patch('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);

    // HR_ADMIN routes
    Route::middleware('check_role:HR_ADMIN')->group(function () {
        Route::post('/employees/import', [EmployeeImportController::class, 'store']);
        Route::get('/employees', [EmployeeController::class, 'index']);
        Route::patch('/employees/{employee}/toggle-status', [EmployeeController::class, 'toggleStatus']);
        Route::delete('/employees/bulk', [EmployeeController::class, 'bulkDestroy']);
        Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']);
        Route::put('/company', [CompanySettingsController::class, 'update']);
        Route::post('/company/logo', [CompanySettingsController::class, 'uploadLogo']);
        Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
        Route::post('/public-holidays', [AbsenceController::class, 'storeHoliday']);
        Route::delete('/public-holidays/{publicHoliday}', [AbsenceController::class, 'destroyHoliday']);
    });

    // MANAGER routes
    Route::middleware('check_role:MANAGER')->group(function () {
        Route::get('/manager/team', [ManagerTeamController::class, 'index']);
    });

    // Announcements
    Route::get('/announcements', [AnnouncementController::class, 'index']);
    Route::post('/announcements', [AnnouncementController::class, 'store']);
    Route::get('/announcements/{announcement}', [AnnouncementController::class, 'show']);
    Route::put('/announcements/{announcement}', [AnnouncementController::class, 'update']);
    Route::delete('/announcements/{announcement}', [AnnouncementController::class, 'destroy']);

    // Service Requests
    Route::get('/service-requests', [ServiceRequestController::class, 'index']);
    Route::post('/service-requests', [ServiceRequestController::class, 'store']);
    Route::get('/service-requests/{serviceRequest}', [ServiceRequestController::class, 'show']);
    Route::put('/service-requests/{serviceRequest}', [ServiceRequestController::class, 'update']);
    Route::patch('/service-requests/{serviceRequest}/approve', [ServiceRequestController::class, 'approve']);
    Route::patch('/service-requests/{serviceRequest}/reject', [ServiceRequestController::class, 'reject']);
    Route::patch('/service-requests/{serviceRequest}/assign-developer', [ServiceRequestController::class, 'assignDeveloper']);
    Route::patch('/service-requests/{serviceRequest}/status', [ServiceRequestController::class, 'updateStatus']);
    Route::get('/my-service-requests', [ServiceRequestController::class, 'myRequests']);
    Route::get('/manager/service-requests', [ServiceRequestController::class, 'departmentRequests']);

    // Projects
    Route::apiResource('projects', ProjectController::class);
    Route::post('projects/{project}/cahier-charges', [ProjectController::class, 'uploadCahierCharges']);

    // Tasks
    Route::get('/projects/{project}/tasks', [TaskController::class, 'index']);
    Route::post('/projects/{project}/tasks', [TaskController::class, 'store']);
    Route::get('/tasks/{task}', [TaskController::class, 'show']);
    Route::put('/tasks/{task}', [TaskController::class, 'update']);
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);
    Route::patch('/tasks/{task}/status', [TaskController::class, 'updateStatus']);
    Route::patch('/tasks/{task}/assign', [TaskController::class, 'assign']);
    Route::patch('/tasks/{task}/reorder', [TaskController::class, 'reorder']);
    Route::get('/my-tasks', [TaskController::class, 'myTasks']);
    Route::get('/manager/tasks', [TaskController::class, 'managerTasks']);
    Route::get('/tasks/{task}/history', [TaskController::class, 'history']);

    // Task Comments
    Route::get('/tasks/{task}/comments', [TaskCommentController::class, 'index']);
    Route::post('/tasks/{task}/comments', [TaskCommentController::class, 'store']);
    Route::delete('/tasks/{task}/comments/{comment}', [TaskCommentController::class, 'destroy']);

    // Task Attachments
    Route::get('/tasks/{task}/attachments', [TaskAttachmentController::class, 'index']);
    Route::post('/tasks/{task}/attachments', [TaskAttachmentController::class, 'store']);
    Route::delete('/tasks/{task}/attachments/{attachment}', [TaskAttachmentController::class, 'destroy']);
    Route::get('/tasks/{task}/attachments/{attachment}/download', [TaskAttachmentController::class, 'download']);

    // Task Dependencies
    Route::get('/tasks/{task}/dependencies', [TaskDependencyController::class, 'index']);
    Route::post('/tasks/{task}/dependencies', [TaskDependencyController::class, 'store']);
    Route::delete('/tasks/{task}/dependencies/{dependency}', [TaskDependencyController::class, 'destroy']);

    // Attendance Declarations
    Route::get('/attendance-declarations', [AttendanceDeclarationController::class, 'index']);
    Route::post('/attendance-declarations', [AttendanceDeclarationController::class, 'store']);
    Route::patch('/attendance-declarations/{attendanceDeclaration}/approve', [AttendanceDeclarationController::class, 'approve']);
    Route::patch('/attendance-declarations/{attendanceDeclaration}/reject', [AttendanceDeclarationController::class, 'reject']);
    Route::post('/attendance-declarations/bulk-approve', [AttendanceDeclarationController::class, 'bulkApprove']);

    // Absences / Congés
    Route::get('/absences', [AbsenceController::class, 'index']);
    Route::post('/absences', [AbsenceController::class, 'store']);
    Route::patch('/absences/{absence}/approve', [AbsenceController::class, 'approve']);
    Route::patch('/absences/{absence}/reject', [AbsenceController::class, 'reject']);
    Route::patch('/absences/{absence}/cancel', [AbsenceController::class, 'cancel']);
    Route::get('/absences/is-on-leave', [AbsenceController::class, 'isOnLeave']);
    Route::get('/absences/working-days', [AbsenceController::class, 'workingDays']);
    Route::get('/leave-balances/me', [AbsenceController::class, 'myBalances']);
    Route::get('/leave-balances/team', [AbsenceController::class, 'teamBalances']);
    Route::get('/public-holidays', [AbsenceController::class, 'holidays']);

});
