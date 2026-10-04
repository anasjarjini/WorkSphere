<?php

// Strip the leading /api prefix so Laravel doesn't see /api/api/...
$uri = $_SERVER['REQUEST_URI'] ?? '/';
if (str_starts_with($uri, '/api')) {
    $_SERVER['REQUEST_URI'] = substr($uri, 4) ?: '/';
}

require __DIR__ . '/../public/index.php';
