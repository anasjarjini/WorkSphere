<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportEmployeesRequest;
use App\Services\EmployeeCsvImportService;
use Illuminate\Http\JsonResponse;

class EmployeeImportController extends Controller
{
    public function __construct(
        private readonly EmployeeCsvImportService $importService
    ) {}

    public function store(ImportEmployeesRequest $request): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();
        $company = $user->company;

        if (! $company) {
            return response()->json(['message' => 'Aucune entreprise associée à votre compte.'], 403);
        }

        $report = $this->importService->import($request->file('file'), $company);

        return response()->json($report, 200);
    }
}

