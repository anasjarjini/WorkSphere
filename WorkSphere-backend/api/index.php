<?php

/**
 * Vercel Serverless Entry Point for Laravel
 *
 * Vercel sends ALL requests here via the route "/(.*)" -> "/api/index.php"
 * Laravel's routes are defined WITHOUT any prefix in routes/api.php
 * (Laravel automatically adds the /api prefix via RouteServiceProvider)
 *
 * So we just boot Laravel normally — no URI stripping needed.
 */

require __DIR__ . '/../public/index.php';
