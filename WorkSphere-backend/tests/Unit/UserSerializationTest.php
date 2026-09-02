<?php

namespace Tests\Unit;

use App\Models\User;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class UserSerializationTest extends TestCase
{
    #[Test]
    public function sensitive_hr_fields_are_hidden_from_implicit_serialization(): void
    {
        $user = new User([
            'name' => 'Employee',
            'email' => 'employee@example.test',
            'salary' => 12000,
            'bank_account_iban' => 'MA000000000000000000000000',
            'marital_status' => 'MARRIED',
            'emergency_contact_name' => 'Private Contact',
            'emergency_contact_phone' => '+212600000000',
            'address' => 'Private address',
        ]);

        $serialized = $user->toArray();

        self::assertArrayNotHasKey('salary', $serialized);
        self::assertArrayNotHasKey('bank_account_iban', $serialized);
        self::assertArrayNotHasKey('marital_status', $serialized);
        self::assertArrayNotHasKey('emergency_contact_name', $serialized);
        self::assertArrayNotHasKey('emergency_contact_phone', $serialized);
        self::assertArrayNotHasKey('address', $serialized);
    }
}
