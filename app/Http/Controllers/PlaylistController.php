<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PlaylistController extends Controller
{
    public function index()
    {
        $playlists = Playlist::where('user_id', Auth::id())
            ->with('tracks')
            ->get();

        return Inertia::render('Playlists/Index', [
            'playlists' => $playlists,
        ]);
    }

    public function create()
    {
        return Inertia::render('Playlists/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (Playlist::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        $playlist = Playlist::create([
            'slug' => $slug,
            'user_id' => Auth::id(),
            'title' => $validated['title'],
        ]);

        return redirect()->route('playlists.index')->with('success', 'Playlist created successfully!');
    }

    public function show(Playlist $playlist)
    {
        if ($playlist->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $playlist->load('tracks', 'user');

        return Inertia::render('Playlists/Show', [
            'playlist' => $playlist,
        ]);
    }

    public function edit(Playlist $playlist)
    {
        if ($playlist->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        return Inertia::render('Playlists/Edit', [
            'playlist' => $playlist,
        ]);
    }

    public function update(Request $request, Playlist $playlist)
    {
        if ($playlist->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        if ($validated['title'] !== $playlist->title) {
            $slug = Str::slug($validated['title']);
            $originalSlug = $slug;
            $counter = 1;
            while (Playlist::where('slug', $slug)->where('id', '!=', $playlist->id)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
            $playlist->slug = $slug;
        }

        $playlist->title = $validated['title'];
        $playlist->save();

        return redirect()->route('playlists.index')->with('success', 'Playlist updated successfully!');
    }

    public function destroy(Playlist $playlist)
    {
        if ($playlist->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $playlist->delete();

        return redirect()->route('playlists.index')->with('success', 'Playlist deleted successfully!');
    }
}
