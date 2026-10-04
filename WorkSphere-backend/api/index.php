<?php

/**
 * Vercel Serverless Entry Point for Laravel
 *
 * Using vercel-php@0.9.0 (PHP 8.5) with "functions" config.
 *
 * The "functions" config style correctly passes the full REQUEST_URI
 * unlike the old "builds" style which truncates it.
 */

require __DIR__ . '/../public/index.php';
