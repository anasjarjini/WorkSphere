<?php

use App\Http\Middleware\CheckUserRole;
use App\Http\Middleware\SecurityHeaders;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withCommands([
        __DIR__.'/../app/Console/Commands',
    ])
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        apiPrefix: (isset($_ENV['VERCEL']) || getenv('VERCEL')) ? '' : 'api',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->statefulApi();
        $middleware->append(SecurityHeaders::class);

        $middleware->alias([
            'check_role' => CheckUserRole::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => true,
        );

        $exceptions->render(function (\Throwable $e, Request $request) {
            if ($e instanceof \Illuminate\Auth\AuthenticationException
                || $e instanceof \Illuminate\Validation\ValidationException
                || $e instanceof \Symfony\Component\HttpKernel\Exception\HttpExceptionInterface) {
                return null;
            }
            return response()->json([
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString(),
            ], 500);
        });
    })->create();

// Vercel: only /tmp is writable
if (isset($_ENV['VERCEL']) || getenv('VERCEL')) {
    $storage = '/tmp/storage';
    foreach (['app/public', 'framework/cache/data', 'framework/sessions', 'framework/views', 'logs'] as $dir) {
        if (!is_dir("$storage/$dir")) {
            mkdir("$storage/$dir", 0777, true);
        }
    }
    $app->useStoragePath($storage);
}

// TEMPORARY HACK TO READ LOGS WITHOUT BROWSER
// We create an artisan command that simulates the login request directly in Laravel!
$app->booted(function () {
    \Illuminate\Support\Facades\Route::get('/debug-login-test', function () {
        try {
            $user = \App\Models\User::first();
            \Illuminate\Support\Facades\Auth::guard('web')->login($user);
            request()->session()->regenerate();
            return [
                'status' => 'success',
                'session_driver' => config('session.driver'),
                'domain' => config('session.domain')
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 'error',
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'session_driver' => config('session.driver'),
            ];
        }
    });
});

return $app;
