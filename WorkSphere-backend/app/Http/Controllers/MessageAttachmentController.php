<?php

namespace App\Http\Controllers;

use App\Models\MessageAttachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MessageAttachmentController extends Controller
{
    /**
     * Téléchargement sécurisé d'une pièce jointe (participant uniquement).
     */
    public function download(MessageAttachment $attachment, Request $request): StreamedResponse
    {
        if ($request->user()->cannot('download', $attachment)) {
            abort(403, 'Non autorisé.');
        }

        if (! Storage::disk('local')->exists($attachment->file_path)) {
            abort(404, 'Fichier introuvable.');
        }

        return Storage::disk('local')->download($attachment->file_path, $attachment->file_name);
    }
}
