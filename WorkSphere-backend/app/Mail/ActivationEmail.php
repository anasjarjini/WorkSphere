<?php

namespace App\Mail;

use App\Models\ActivationToken;
use App\Models\User;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ActivationEmail extends Mailable
{
    use SerializesModels;

    public string $activationUrl;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public readonly User $user,
        public readonly ActivationToken $activationToken
    ) {
        $frontendUrl = config('app.frontend_url', 'http://localhost:4200');
        $this->activationUrl = "{$frontendUrl}/activate?token={$activationToken->token}";
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Activez votre compte WorkSphere',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.activation',
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
