<?php

// Enable error reporting to debug Vercel 500 errors
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    require __DIR__ . '/../public/index.php';
} catch (\Throwable $e) {
    header("HTTP/1.1 500 Internal Server Error");
    header("Content-Type: text/plain");
    echo "=== VERCEL DEPLOYMENT ERROR ===\n\n";
    echo "It looks like Laravel crashed while trying to report another error.\n";
    echo "Here is the chain of errors:\n\n";
    
    $current = $e;
    $i = 1;
    while ($current) {
        echo "[$i] " . get_class($current) . "\n";
        echo "Message: " . $current->getMessage() . "\n";
        echo "File: " . $current->getFile() . ":" . $current->getLine() . "\n\n";
        $current = $current->getPrevious();
        $i++;
    }

    echo "--- Stack Trace of last error ---\n";
    echo $e->getTraceAsString();
}
