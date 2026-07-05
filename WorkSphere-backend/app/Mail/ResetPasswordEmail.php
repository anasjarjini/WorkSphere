<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPasswordEmail extends Mailable
{
    use SerializesModels;

    public string $resetUrl;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public readonly User $user,
        public readonly string $token
    ) {
        $frontendUrl = config('app.frontend_url', 'http://localhost:4200');
        $this->resetUrl = "{$frontendUrl}/reset-password?token={$token}&email={$user->email}";
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Réinitialisation de votre mot de passe WorkSphere',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.reset-password',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
