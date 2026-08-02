<?php

namespace App\Enums;

enum AbsenceStatus: string
{
    case EN_ATTENTE = 'EN_ATTENTE';
    case APPROUVEE = 'APPROUVEE';
    case REJETEE = 'REJETEE';
    case ANNULEE = 'ANNULEE';

    public function label(): string
    {
        return match ($this) {
            self::EN_ATTENTE => 'En attente',
            self::APPROUVEE => 'Approuvée',
            self::REJETEE => 'Rejetée',
            self::ANNULEE => 'Annulée',
        };
    }
}
