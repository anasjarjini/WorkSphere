<?php

/**
 * Vercel Serverless Entry Point for Laravel
 *
 * vercel-php@0.7.2 correctly passes REQUEST_URI via functions config.
 * We still patch it here as a safety net.
 */

// Safety net: fix REQUEST_URI if it gets truncated
$uri = $_SERVER['REQUEST_URI'] ?? '/';
if ($uri === '/api' || $uri === '/api/') {
    // Vercel truncation fallback - serve root
    $_SERVER['REQUEST_URI'] = '/';
}

// Fix PATH_INFO for Symfony Request
if (!isset($_SERVER['PATH_INFO'])) {
    $path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
    $_SERVER['PATH_INFO'] = $path;
}

require __DIR__ . '/../public/index.php';
