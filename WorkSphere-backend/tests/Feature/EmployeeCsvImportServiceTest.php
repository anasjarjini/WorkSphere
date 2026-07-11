<?php

namespace Tests\Feature;

use App\Models\Company;
use App\Models\Department;
use App\Models\User;
use App\Services\EmployeeCsvImportService;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class EmployeeCsvImportServiceTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('manager_id')->nullable()->constrained('users')->nullOnDelete();
            $table->boolean('is_active')->default(false);
            $table->string('job_title')->nullable();
            $table->date('hire_date')->nullable();
            $table->decimal('salary', 10, 2)->nullable();
            $table->string('role')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('activation_tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('token');
            $table->timestamp('expires_at');
            $table->timestamp('used_at')->nullable();
            $table->timestamps();
        });
    }

    public function test_user_creation_without_name_uses_first_and_last_name(): void
    {
        $company = Company::create([
            'name' => 'Test Company',
            'slug' => 'test-company-2',
            'is_active' => true,
        ]);

        $user = User::create([
            'password' => 'secret123',
            'company_id' => $company->id,
            'first_name' => 'Alice',
            'last_name' => 'Smith',
        ]);

        $this->assertSame('Alice Smith', $user->name);
        $this->assertNotEmpty($user->email);
    }

    public function test_import_creates_missing_departments_and_imports_other_rows(): void
    {
        Queue::fake();

        $company = Company::create([
            'name' => 'Test Company',
            'slug' => 'test-company',
            'is_active' => true,
        ]);
        $service = new EmployeeCsvImportService();

        $csvContent = <<<'CSV'
first_name,last_name,email,role,job_title,department,hire_date,salary
Alice,Smith,alice@example.com,EMPLOYEE,Developer,Engineering,15/03/2023,8000
Bob,Jones,bob@example.com,MANAGER,Lead,IT,16/03/2023,10000
CSV;

        $file = UploadedFile::fake()->createWithContent('employees.csv', $csvContent, 'text/csv');

        $result = $service->import($file, $company);

        $this->assertSame(2, $result['imported']);
        $this->assertSame(0, $result['failed']);
        $this->assertTrue(Department::where('company_id', $company->id)->where('name', 'Engineering')->exists());
        $this->assertTrue(Department::where('company_id', $company->id)->where('name', 'IT')->exists());
    }

    public function test_import_rejects_second_manager_in_same_csv_department(): void
    {
        Queue::fake();

        $company = Company::create([
            'name' => 'Test Company',
            'slug' => 'test-company-3',
            'is_active' => true,
        ]);

        $service = new EmployeeCsvImportService();

        $csvContent = <<<'CSV'
first_name,last_name,email,role,job_title,department,hire_date,salary
Alice,Smith,alice.manager@example.com,MANAGER,Lead,Engineering,15/03/2023,10000
Bob,Jones,bob.manager@example.com,MANAGER,Lead 2,Engineering,16/03/2023,11000
CSV;

        $file = UploadedFile::fake()->createWithContent('employees.csv', $csvContent, 'text/csv');

        $result = $service->import($file, $company);

        $this->assertSame(1, $result['imported']);
        $this->assertSame(1, $result['failed']);
        $this->assertStringContainsString('Un seul manager est autorisé par département', $result['errors'][0]['reason']);
        $this->assertSame(1, User::where('company_id', $company->id)->where('role', 'MANAGER')->count());
    }

    public function test_import_rejects_manager_when_department_already_has_one(): void
    {
        Queue::fake();

        $company = Company::create([
            'name' => 'Test Company',
            'slug' => 'test-company-4',
            'is_active' => true,
        ]);

        $department = Department::create([
            'company_id' => $company->id,
            'name' => 'Finance',
        ]);

        User::create([
            'name' => 'Existing Manager',
            'first_name' => 'Existing',
            'last_name' => 'Manager',
            'email' => 'existing.manager@example.com',
            'password' => 'secret123',
            'company_id' => $company->id,
            'department_id' => $department->id,
            'role' => 'MANAGER',
            'is_active' => true,
            'status' => 'ACTIVE',
        ]);

        $service = new EmployeeCsvImportService();

        $csvContent = <<<'CSV'
first_name,last_name,email,role,job_title,department,hire_date,salary
New,Manager,new.manager@example.com,MANAGER,Lead,Finance,15/03/2023,10000
CSV;

        $file = UploadedFile::fake()->createWithContent('employees.csv', $csvContent, 'text/csv');

        $result = $service->import($file, $company);

        $this->assertSame(0, $result['imported']);
        $this->assertSame(1, $result['failed']);
        $this->assertStringContainsString('a déjà un manager', $result['errors'][0]['reason']);
        $this->assertSame(1, User::where('company_id', $company->id)->where('role', 'MANAGER')->count());
    }

    public function test_import_assigns_department_employees_to_the_only_manager(): void
    {
        Queue::fake();

        $company = Company::create([
            'name' => 'Test Company',
            'slug' => 'test-company-5',
            'is_active' => true,
        ]);

        $service = new EmployeeCsvImportService();

        $csvContent = <<<'CSV'
first_name,last_name,email,role,job_title,department,hire_date,salary
Alice,Smith,alice.employee@example.com,EMPLOYEE,Developer,Support,15/03/2023,8000
Bob,Jones,bob.manager.team@example.com,MANAGER,Lead,Support,16/03/2023,10000
CSV;

        $file = UploadedFile::fake()->createWithContent('employees.csv', $csvContent, 'text/csv');

        $result = $service->import($file, $company);

        $this->assertSame(2, $result['imported']);
        $this->assertSame(0, $result['failed']);

        $manager = User::where('company_id', $company->id)->where('role', 'MANAGER')->firstOrFail();
        $employee = User::where('company_id', $company->id)->where('role', 'EMPLOYEE')->firstOrFail();

        $this->assertSame($manager->id, $employee->manager_id);
    }
}
