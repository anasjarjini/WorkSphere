<?php

namespace App\Exceptions;

use Exception;

class DuplicateAdminException extends Exception
{
    protected $message = 'This company already has an HR Administrator.';
}
