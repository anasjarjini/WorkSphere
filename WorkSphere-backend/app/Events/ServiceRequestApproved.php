<?php

namespace App\Events;

use App\Models\ServiceRequest;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ServiceRequestApproved implements ShouldBroadcastNow
{
    use Dispatchable, SerializesModels;

    public $serviceRequest;

    public function __construct(ServiceRequest $serviceRequest)
    {
        $this->serviceRequest = $serviceRequest;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('App.Models.User.' . $this->serviceRequest->creator_id);
    }

    public function broadcastAs()
    {
        return 'ServiceRequestApproved';
    }

    public function broadcastWith()
    {
        return [
            'id' => $this->serviceRequest->id,
            'title' => $this->serviceRequest->title,
            'message' => 'Votre demande de service a été approuvée.',
        ];
    }
}
