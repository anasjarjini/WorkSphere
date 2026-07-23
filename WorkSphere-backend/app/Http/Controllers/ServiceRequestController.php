<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServiceRequestController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $requests = ServiceRequest::where('company_id', $request->user()->company_id)
            ->with('fromDepartment', 'toDepartment', 'creator', 'developer', 'project')
            ->latest()
            ->get();

        return response()->json($requests);
    }

    public function show(ServiceRequest $serviceRequest, Request $request): JsonResponse
    {
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer', 'project');
        return response()->json($serviceRequest);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'to_department_id' => 'required|exists:departments,id',
            'project_id' => 'nullable|exists:projects,id',
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
        if ($serviceRequest->status !== 'PENDING') {
            return response()->json(['message' => 'Seules les demandes en attente peuvent être approuvées.'], 422);
        }

        $serviceRequest->update(['status' => 'APPROVED']);
        $serviceRequest->load('fromDepartment', 'toDepartment', 'creator', 'developer');

        return response()->json($serviceRequest);
    }

    public function reject(Request $request, ServiceRequest $serviceRequest): JsonResponse
    {
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
        if ($serviceRequest->status !== 'APPROVED') {
            return response()->json(['message' => 'Seules les demandes approuvées peuvent être assignées.'], 422);
        }

        $validated = $request->validate([
            'developer_id' => 'required|exists:users,id',
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
        $validated = $request->validate([
            'status' => 'required|in:PENDING,APPROVED,IN_DEVELOPMENT,TESTING,DEPLOYED,REJECTED',
        ]);

        $serviceRequest->update($validated);
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
        $requests = ServiceRequest::where('company_id', $request->user()->company_id)
            ->where('to_department_id', $request->user()->department_id)
            ->with('fromDepartment', 'toDepartment', 'creator', 'developer', 'project')
            ->latest()
            ->get();

        return response()->json($requests);
    }
}
