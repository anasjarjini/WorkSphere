<?php

namespace App\Enums;

enum AbsenceType: string
{
    case CONGE_PAYE = 'CONGE_PAYE';
    case MALADIE = 'MALADIE';
    case SANS_SOLDE = 'SANS_SOLDE';
    case AUTRE = 'AUTRE';

    public function label(): string
    {
        return match ($this) {
            self::CONGE_PAYE => 'Congé payé',
            self::MALADIE => 'Maladie',
            self::SANS_SOLDE => 'Sans solde',
            self::AUTRE => 'Autre',
        };
    }
}
