<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class ServiceRequestController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        Gate::authorize('viewAny', ServiceRequest::class);

        $requests = ServiceRequest::where('company_id', $request->user()->company_id)
            ->with('fromDepartment', 'toDepartment', 'creator', 'developer', 'project')
            ->latest()
            ->get();

        return response()->json($requests);
    }

    public function show(ServiceRequest $serviceRequest, Request $request): JsonResponse
    {
        Gate::authorize('view', $serviceRequest);

        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer', 'project');

        return response()->json($serviceRequest);
    }

    public function store(Request $request): JsonResponse
    {
        Gate::authorize('create', ServiceRequest::class);

        $companyId = $request->user()->company_id;
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'to_department_id' => [
                'required',
                Rule::exists('departments', 'id')->where('company_id', $companyId),
            ],
            'project_id' => [
                'nullable',
                Rule::exists('projects', 'id')->where('company_id', $companyId),
            ],
            'priority' => 'nullable|in:LOW,MEDIUM,HIGH,CRITICAL',
        ]);

        $serviceRequest = ServiceRequest::create([
            ...$validated,
            'company_id' => $request->user()->company_id,
            'from_department_id' => $request->user()->department_id,
            'creator_id' => $request->user()->id,
        ]);

        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest, 201);
    }

    public function update(Request $request, ServiceRequest $serviceRequest): JsonResponse
    {
        Gate::authorize('update', $serviceRequest);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'nullable|in:LOW,MEDIUM,HIGH,CRITICAL',
        ]);

        $serviceRequest->update($validated);
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest);
    }

    public function approve(Request $request, ServiceRequest $serviceRequest): JsonResponse
    {
        Gate::authorize('approve', $serviceRequest);

        if ($serviceRequest->status !== 'PENDING') {
            return response()->json(['message' => 'Seules les demandes en attente peuvent être approuvées.'], 422);
        }

        $serviceRequest->update(['status' => 'APPROVED']);
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest);
    }

    public function reject(Request $request, ServiceRequest $serviceRequest): JsonResponse
    {
        Gate::authorize('approve', $serviceRequest);

        if ($serviceRequest->status !== 'PENDING') {
            return response()->json(['message' => 'Seules les demandes en attente peuvent être rejetées.'], 422);
        }

        $validated = $request->validate([
            'rejection_reason' => 'required|string',
        ]);

        $serviceRequest->update([
            'status' => 'REJECTED',
            'rejection_reason' => $validated['rejection_reason'],
        ]);
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest);
    }

    public function assignDeveloper(Request $request, ServiceRequest $serviceRequest): JsonResponse
    {
        Gate::authorize('assignDeveloper', $serviceRequest);

        if ($serviceRequest->status !== 'APPROVED') {
            return response()->json(['message' => 'Seules les demandes approuvées peuvent être assignées.'], 422);
        }

        $validated = $request->validate([
            'developer_id' => [
                'required',
                Rule::exists('users', 'id')
                    ->where('company_id', $request->user()->company_id)
                    ->where('status', 'ACTIVE'),
            ],
        ]);

        $serviceRequest->update([
            'developer_id' => $validated['developer_id'],
            'status' => 'IN_DEVELOPMENT',
            'assigned_at' => now(),
        ]);
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest);
    }

    public function updateStatus(Request $request, ServiceRequest $serviceRequest): JsonResponse
    {
        Gate::authorize('updateStatus', $serviceRequest);

        $validated = $request->validate([
            'status' => 'required|in:TESTING,DEPLOYED',
        ]);

        $user = $request->user();
        $canMoveToTesting = $serviceRequest->status === 'IN_DEVELOPMENT'
            && $validated['status'] === 'TESTING'
            && $serviceRequest->developer_id === $user->id;
        $canDeploy = $serviceRequest->status === 'TESTING'
            && $validated['status'] === 'DEPLOYED'
            && $user->can('approve', $serviceRequest);

        if (! $canMoveToTesting && ! $canDeploy) {
            return response()->json(['message' => 'Transition de statut non autorisée.'], 422);
        }

        $serviceRequest->update([
            ...$validated,
            'resolved_at' => $validated['status'] === 'DEPLOYED' ? now() : null,
        ]);
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest);
    }

    public function myRequests(Request $request): JsonResponse
    {
        $requests = ServiceRequest::where('company_id', $request->user()->company_id)
            ->where('creator_id', $request->user()->id)
            ->with('fromDepartment', 'toDepartment', 'creator', 'developer', 'project')
            ->latest()
            ->get();

        return response()->json($requests);
    }

    public function departmentRequests(Request $request): JsonResponse
    {
        Gate::authorize('viewDepartment', ServiceRequest::class);

        $requests = ServiceRequest::where('company_id', $request->user()->company_id)
            ->where('to_department_id', $request->user()->department_id)
            ->with('fromDepartment', 'toDepartment', 'creator', 'developer', 'project')
            ->latest()
            ->get();

        return response()->json($requests);
    }
}
