<?php

namespace App\Enums;

enum AttendanceValidationStatus: string
{
    case EN_ATTENTE = 'EN_ATTENTE';
    case VALIDEE = 'VALIDEE';
    case REJETEE = 'REJETEE';
}
