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
        $middleware->api(append: [
            \Illuminate\Session\Middleware\StartSession::class,
        ]);
        $middleware->append(SecurityHeaders::class);

        $middleware->alias([
            'check_role' => CheckUserRole::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            function (Request $request) { return true; }
        );
        $exceptions->render(function (\Throwable $e, Request $request) {
            return response()->json([
                'error' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
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

return $app;
