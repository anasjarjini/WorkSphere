<?php

namespace App\Jobs;

use App\Mail\ActivationEmail;
use App\Models\ActivationToken;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendActivationEmailJob implements ShouldQueue
{
    use Queueable;

    /**
     * Retry the job up to 3 times in case of mail failure.
     */
    public int $tries = 3;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public readonly User $user,
        public readonly ActivationToken $activationToken
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->user->email)->send(
            new ActivationEmail($this->user, $this->activationToken)
        );
    }
}
