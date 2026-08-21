<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Storage;

return new class extends Migration
{
    /**
     * Déplace les fichiers historiques hors du disque publié par /storage.
     */
    public function up(): void
    {
        $public = Storage::disk('public');
        $private = Storage::disk('local');

        foreach ($public->allFiles('chat-attachments') as $path) {
            $source = $public->readStream($path);

            if ($source === false) {
                continue;
            }

            try {
                if (! $private->exists($path)) {
                    $private->writeStream($path, $source);
                }
            } finally {
                if (is_resource($source)) {
                    fclose($source);
                }
            }

            $public->delete($path);
        }
    }

    /**
     * Ne remet pas les fichiers dans le répertoire publié lors d'un rollback.
     */
    public function down(): void
    {
        // Intentionnellement vide : un rollback ne doit pas réexposer les pièces jointes.
    }
};
