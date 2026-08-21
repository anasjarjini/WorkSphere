<?php

namespace App\Enums;

enum AnnouncementScope: string
{
    case COMPANY = 'COMPANY';
    case TEAM = 'TEAM';

    public function label(): string
    {
        return match ($this) {
            self::COMPANY => "Toute l'entreprise",
            self::TEAM => 'Mon équipe',
        };
    }
}
