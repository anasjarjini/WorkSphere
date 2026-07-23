#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/public"
php -d upload_max_filesize=20M -d post_max_size=20M -d max_execution_time=300 \
  -S 0.0.0.0:8000 \
  "$SCRIPT_DIR/vendor/laravel/framework/src/Illuminate/Foundation/resources/server.php"
