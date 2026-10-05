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
            fn (Request $request) => $request->is('api/*'),
        );

        // TEMPORARY: remove after debugging
        $exceptions->render(function (\Throwable $e, Request $request) {
            header("HTTP/1.1 500 Internal Server Error");
            header("Content-Type: text/plain");
            echo "Message: " . $e->getMessage() . "\n";
            echo "File: " . $e->getFile() . " on line " . $e->getLine() . "\n\n";
            echo "Stack trace:\n" . $e->getTraceAsString();
            die();
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
