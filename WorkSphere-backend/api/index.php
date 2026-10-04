<?php

/**
 * Vercel Serverless Entry Point for Laravel
 *
 * PROBLEM: Vercel sets REQUEST_URI to just "/api" (the folder name)
 * instead of the real path like "/api/me" or "/api/login".
 *
 * FIX: Vercel passes the real requested path in the "x-vercel-id"
 * header or via the __NEXT_PRIVATE_ORIGIN env. The safest fix is
 * to read the real path from $_SERVER['PATH_INFO'] which vercel-php
 * sets correctly, and rebuild REQUEST_URI from it.
 */

// vercel-php sets PATH_INFO to the real path (e.g. /api/me)
if (!empty($_SERVER['PATH_INFO'])) {
    $path = $_SERVER['PATH_INFO'];
    $query = !empty($_SERVER['QUERY_STRING']) ? '?' . $_SERVER['QUERY_STRING'] : '';
    $_SERVER['REQUEST_URI'] = $path . $query;
}

require __DIR__ . '/../public/index.php';
