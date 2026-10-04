<?php

/**
 * DEBUG MODE - Temporary: Show all PHP server variables
 * to understand what Vercel is sending us.
 * We will remove this once we find the correct variable.
 */

header('Content-Type: application/json');
echo json_encode([
    'REQUEST_URI'    => $_SERVER['REQUEST_URI']    ?? 'NOT SET',
    'PATH_INFO'      => $_SERVER['PATH_INFO']      ?? 'NOT SET',
    'SCRIPT_NAME'    => $_SERVER['SCRIPT_NAME']    ?? 'NOT SET',
    'SCRIPT_FILENAME'=> $_SERVER['SCRIPT_FILENAME']?? 'NOT SET',
    'PHP_SELF'       => $_SERVER['PHP_SELF']       ?? 'NOT SET',
    'QUERY_STRING'   => $_SERVER['QUERY_STRING']   ?? 'NOT SET',
    'HTTP_HOST'      => $_SERVER['HTTP_HOST']      ?? 'NOT SET',
    'REQUEST_METHOD' => $_SERVER['REQUEST_METHOD'] ?? 'NOT SET',
    'all_headers'    => getallheaders(),
], JSON_PRETTY_PRINT);
exit;
