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
        // On Vercel, the proxy strips one /api prefix before Laravel sees the path.
        // So /api/login arrives as /login. We remove the apiPrefix on Vercel
        // so routes/api.php matches without a prefix.
        // Locally nothing changes (apiPrefix defaults to 'api').
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
            fn (Request $request) => $request->is('api/*') || $request->is('*'),
        );
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
