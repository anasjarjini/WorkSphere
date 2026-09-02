<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Storage;

return new class extends Migration
{
    public function up(): void
    {
        $this->moveFiles('public', 'local');
    }

    public function down(): void
    {
        $this->moveFiles('local', 'public');
    }

    private function moveFiles(string $sourceDisk, string $destinationDisk): void
    {
        $source = Storage::disk($sourceDisk);
        $destination = Storage::disk($destinationDisk);

        foreach ($source->allFiles('task-attachments') as $path) {
            $stream = $source->readStream($path);

            if ($stream === false) {
                continue;
            }

            try {
                $destination->writeStream($path, $stream);
                $source->delete($path);
            } finally {
                if (is_resource($stream)) {
                    fclose($stream);
                }
            }
        }
    }
};
