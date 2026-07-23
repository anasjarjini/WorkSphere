<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $announcements = Announcement::visibleTo($request->user())
            ->with('creator', 'department')
            ->latest()
            ->get();

        return response()->json($announcements);
    }

    public function show(Announcement $announcement, Request $request): JsonResponse
    {
        $announcement->load('creator', 'department');
        return response()->json($announcement);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'type' => 'nullable|in:GENERAL,MEETING,TRAINING,POLICY',
            'department_id' => 'nullable|exists:departments,id',
            'meeting_date' => 'nullable|date',
            'meeting_link' => 'nullable|string|max:255',
            'training_link' => 'nullable|string|max:255',
        ]);

        $announcement = Announcement::create([
            ...$validated,
            'company_id' => $request->user()->company_id,
            'creator_id' => $request->user()->id,
        ]);

        $announcement->load('creator', 'department');

        return response()->json($announcement, 201);
    }

    public function update(Request $request, Announcement $announcement): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'type' => 'nullable|in:GENERAL,MEETING,TRAINING,POLICY',
            'department_id' => 'nullable|exists:departments,id',
            'meeting_date' => 'nullable|date',
            'meeting_link' => 'nullable|string|max:255',
            'training_link' => 'nullable|string|max:255',
        ]);

        $announcement->update($validated);
        $announcement->load('creator', 'department');

        return response()->json($announcement);
    }

    public function destroy(Announcement $announcement, Request $request): JsonResponse
    {
        $announcement->delete();
        return response()->json(['message' => 'Annonce supprimée.']);
    }
}
