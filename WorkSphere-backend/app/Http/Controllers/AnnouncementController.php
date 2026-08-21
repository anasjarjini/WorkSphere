<?php

namespace App\Http\Controllers;

use App\Enums\AnnouncementScope;
use App\Enums\AnnouncementStatus;
use App\Models\Announcement;
use App\Models\User;
use App\Notifications\AnnouncementCreatedNotification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AnnouncementController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $status = AnnouncementStatus::tryFrom($request->query('status', AnnouncementStatus::PUBLISHED->value))
            ?? AnnouncementStatus::PUBLISHED;

        $query = Announcement::query();

        if ($status === AnnouncementStatus::DRAFT) {
            $query->where('creator_id', $request->user()->id);
        } else {
            $query->visibleTo($request->user());
        }

        $announcements = $query
            ->where('status', $status->value)
            ->with('creator', 'targetManager')
            ->latest('published_at')
            ->latest('id')
            ->get();

        return response()->json($announcements);
    }

    public function show(Announcement $announcement, Request $request): JsonResponse
    {
        Gate::authorize('view', $announcement);

        $announcement->load('creator', 'targetManager');

        return response()->json($announcement);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'target_scope' => 'nullable|in:COMPANY,TEAM',
            'target_manager_id' => 'nullable|exists:users,id',
            'status' => 'nullable|in:draft,published',
            'published_at' => 'nullable|date',
        ]);

        $scope = AnnouncementScope::tryFrom($validated['target_scope'] ?? 'COMPANY')
            ?? AnnouncementScope::COMPANY;

        if ($scope === AnnouncementScope::COMPANY) {
            Gate::authorize('createCompanyWide', Announcement::class);
        } else {
            Gate::authorize('create', Announcement::class);
        }

        if ($scope === AnnouncementScope::TEAM) {
            if ($request->user()->role === 'MANAGER') {
                $targetManagerId = $request->user()->id;
            } else {
                $targetManagerId = $validated['target_manager_id'] ?? null;
                if (! $targetManagerId) {
                    return response()->json(['message' => 'Le manager cible est requis pour une annonce d\'équipe.'], 422);
                }

                $targetManager = User::where('company_id', $request->user()->company_id)
                    ->where('role', 'MANAGER')
                    ->find($targetManagerId);

                if (! $targetManager) {
                    return response()->json(['message' => 'Le manager cible est invalide.'], 422);
                }
            }
        } else {
            $targetManagerId = null;
        }

        $status = AnnouncementStatus::tryFrom($validated['status'] ?? AnnouncementStatus::PUBLISHED->value)
            ?? AnnouncementStatus::PUBLISHED;

        $announcement = Announcement::create([
            'company_id' => $request->user()->company_id,
            'creator_id' => $request->user()->id,
            'title' => $validated['title'],
            'content' => $validated['content'],
            'target_scope' => $scope->value,
            'target_manager_id' => $targetManagerId,
            'status' => $status->value,
            'published_at' => $status === AnnouncementStatus::PUBLISHED
                ? ($validated['published_at'] ?? now())
                : null,
        ]);

        if ($status === AnnouncementStatus::PUBLISHED) {
            $this->notifyRecipients($announcement);
        }

        $announcement->load('creator', 'targetManager');

        return response()->json($announcement, 201);
    }

    public function update(Request $request, Announcement $announcement): JsonResponse
    {
        Gate::authorize('update', $announcement);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'target_scope' => 'nullable|in:COMPANY,TEAM',
            'target_manager_id' => 'nullable|exists:users,id',
            'status' => 'nullable|in:draft,published,archived',
            'published_at' => 'nullable|date',
        ]);

        $wasPublished = $announcement->status === AnnouncementStatus::PUBLISHED;

        $isManagerAuthor = $request->user()->role === 'MANAGER'
            && $request->user()->id === $announcement->creator_id;

        if ($isManagerAuthor) {
            $announcement->target_scope = AnnouncementScope::TEAM->value;
            $announcement->target_manager_id = $request->user()->id;
        } elseif (isset($validated['target_scope'])) {
            $scope = AnnouncementScope::tryFrom($validated['target_scope']) ?? AnnouncementScope::COMPANY;

            if ($scope === AnnouncementScope::COMPANY) {
                Gate::authorize('createCompanyWide', Announcement::class);
            }

            $announcement->target_scope = $scope->value;
            $announcement->target_manager_id = $scope === AnnouncementScope::TEAM
                ? ($validated['target_manager_id'] ?? $announcement->target_manager_id)
                : null;
        }

        $announcement->title = $validated['title'] ?? $announcement->title;
        $announcement->content = $validated['content'] ?? $announcement->content;
        if (array_key_exists('published_at', $validated)) {
            $announcement->published_at = $validated['published_at'];
        }

        if (array_key_exists('status', $validated)) {
            $newStatus = AnnouncementStatus::tryFrom($validated['status']);
            $announcement->status = $newStatus;

            if ($newStatus === AnnouncementStatus::PUBLISHED && ! $wasPublished) {
                $announcement->published_at = $announcement->published_at ?? now();
            }
        }

        $announcement->save();

        if (($announcement->status === AnnouncementStatus::PUBLISHED) && ! $wasPublished) {
            $this->notifyRecipients($announcement);
        }

        $announcement->load('creator', 'targetManager');

        return response()->json($announcement);
    }

    public function destroy(Announcement $announcement, Request $request): JsonResponse
    {
        Gate::authorize('delete', $announcement);

        $announcement->status = AnnouncementStatus::ARCHIVED;
        $announcement->save();

        return response()->json(['message' => 'Annonce archivée.']);
    }

    public function forceDestroy(Announcement $announcement, Request $request): JsonResponse
    {
        Gate::authorize('delete', $announcement);

        $announcement->forceDelete();

        return response()->json(['message' => 'Annonce supprimée définitivement.']);
    }

    public function managers(Request $request): JsonResponse
    {
        $managers = User::where('company_id', $request->user()->company_id)
            ->where('role', 'MANAGER')
            ->where('status', 'ACTIVE')
            ->orderBy('first_name')
            ->get(['id', 'first_name', 'last_name', 'job_title', 'avatar']);

        return response()->json($managers);
    }

    private function notifyRecipients(Announcement $announcement): void
    {
        if ($announcement->target_scope === AnnouncementScope::TEAM && $announcement->target_manager_id) {
            $users = User::where('company_id', $announcement->company_id)
                ->where('status', 'ACTIVE')
                ->where(function ($query) use ($announcement) {
                    $query->where('manager_id', $announcement->target_manager_id)
                          ->orWhere('id', $announcement->target_manager_id);
                })
                ->get();
        } else {
            $users = User::where('company_id', $announcement->company_id)
                ->where('status', 'ACTIVE')
                ->get();
        }

        foreach ($users as $user) {
            $user->notify(new AnnouncementCreatedNotification($announcement));
        }
    }
}
