<?php

namespace App\Http\Controllers;

use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TrackController extends Controller
{
    public function index()
    {
        $tracks = Track::where('is_visible', true)->get();

        return Inertia::render('Tracks/Index', [
            'tracks' => $tracks,
        ]);
    }

    public function store(Request $request)
    {
        // Augmenter les limites PHP si possible (ne fonctionne que si pas déjà défini dans php.ini)
        @ini_set('upload_max_filesize', '20M');
        @ini_set('post_max_size', '25M');

        // Vérifier si aucun fichier n'a été reçu alors qu'un fichier était attendu
        // Cela peut indiquer que POST_MAX_SIZE a été dépassé
        $contentLength = $request->server('CONTENT_LENGTH');
        $postMaxSize = $this->parseSize(ini_get('post_max_size'));
        if ($contentLength && $contentLength > $postMaxSize) {
            return back()->withErrors([
                'audio' => 'Le fichier est trop volumineux. Taille maximale autorisée par PHP : ' . ini_get('post_max_size') . '. Veuillez augmenter les limites PHP. Voir UPLOAD_FIX.md pour plus d\'informations.'
            ])->withInput();
        }

        try {
            $validated = $request->validate([
                'title' => 'nullable|string|max:255',
                'artist' => 'nullable|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'audio' => 'nullable|file|mimes:mp3,wav,ogg,m4a|max:10240',
            ], [
                'audio.max' => 'Le fichier audio est trop volumineux. Taille maximale : 10 Mo.',
                'audio.mimes' => 'Le fichier audio doit être au format MP3, WAV, OGG ou M4A.',
                'image.max' => 'L\'image est trop volumineuse. Taille maximale : 2 Mo.',
                'image.mimes' => 'L\'image doit être au format JPEG, PNG, JPG ou GIF.',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return back()->withErrors($e->errors())->withInput();
        }

        $slug = null;
        if ($validated['title'] ?? null) {
            $slug = Str::slug($validated['title']);
            // Ensure uniqueness
            $originalSlug = $slug;
            $counter = 1;
            while (Track::where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
        } else {
            // Generate a random slug if no title
            $slug = 'track-' . Str::random(8);
            while (Track::where('slug', $slug)->exists()) {
                $slug = 'track-' . Str::random(8);
            }
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            try {
                $imagePath = $request->file('image')->store('tracks/images', 'public');
            } catch (\Exception $e) {
                return back()->withErrors([
                    'image' => 'Erreur lors de l\'upload de l\'image : ' . $e->getMessage()
                ])->withInput();
            }
        }

        $audioPath = null;
        if ($request->hasFile('audio')) {
            try {
                $audioPath = $request->file('audio')->store('tracks/audio', 'public');
            } catch (\Exception $e) {
                return back()->withErrors([
                    'audio' => 'Erreur lors de l\'upload du fichier audio : ' . $e->getMessage()
                ])->withInput();
            }
        }

        $track = Track::create([
            'slug' => $slug,
            'title' => $validated['title'] ?? 'Untitled Track',
            'artist' => $validated['artist'] ?? 'Unknown Artist',
            'image' => $imagePath,
            'audio' => $audioPath,
            'is_visible' => true,
            'play_count' => 0,
        ]);

        return redirect()->route('tracks.index')->with('success', 'Track added successfully!');
    }

    public function show(Track $track)
    {
        return response()->json($track);
    }

    public function update(Request $request, Track $track)
    {
        try {
            $validated = $request->validate([
                'title' => 'nullable|string|max:255',
                'artist' => 'nullable|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'audio' => 'nullable|file|mimes:mp3,wav,ogg,m4a|max:10240',
            ], [
                'audio.max' => 'Le fichier audio est trop volumineux. Taille maximale : 10 Mo.',
                'audio.mimes' => 'Le fichier audio doit être au format MP3, WAV, OGG ou M4A.',
                'image.max' => 'L\'image est trop volumineuse. Taille maximale : 2 Mo.',
                'image.mimes' => 'L\'image doit être au format JPEG, PNG, JPG ou GIF.',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return back()->withErrors($e->errors())->withInput();
        }

        // Mettre à jour le slug si le titre change
        if (isset($validated['title']) && $validated['title'] !== $track->title) {
            $slug = Str::slug($validated['title']);
            // Ensure uniqueness
            $originalSlug = $slug;
            $counter = 1;
            while (Track::where('slug', $slug)->where('id', '!=', $track->id)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
            $track->slug = $slug;
        }

        // Gérer l'upload de nouvelle image
        if ($request->hasFile('image')) {
            // Supprimer l'ancienne image si elle existe
            if ($track->image && Storage::disk('public')->exists($track->image)) {
                Storage::disk('public')->delete($track->image);
            }
            try {
                $track->image = $request->file('image')->store('tracks/images', 'public');
            } catch (\Exception $e) {
                return back()->withErrors([
                    'image' => 'Erreur lors de l\'upload de l\'image : ' . $e->getMessage()
                ])->withInput();
            }
        }

        // Gérer l'upload de nouveau fichier audio
        if ($request->hasFile('audio')) {
            // Supprimer l'ancien fichier audio si il existe
            if ($track->audio && Storage::disk('public')->exists($track->audio)) {
                Storage::disk('public')->delete($track->audio);
            }
            try {
                $track->audio = $request->file('audio')->store('tracks/audio', 'public');
            } catch (\Exception $e) {
                return back()->withErrors([
                    'audio' => 'Erreur lors de l\'upload du fichier audio : ' . $e->getMessage()
                ])->withInput();
            }
        }

        // Mettre à jour les autres champs
        if (isset($validated['title'])) {
            $track->title = $validated['title'];
        }
        if (isset($validated['artist'])) {
            $track->artist = $validated['artist'];
        }

        $track->save();

        return redirect()->route('tracks.index')->with('success', 'Track updated successfully!');
    }

    public function destroy(Track $track)
    {
        try {
            // Supprimer les fichiers associés
            if ($track->image && Storage::disk('public')->exists($track->image)) {
                Storage::disk('public')->delete($track->image);
            }
            if ($track->audio && Storage::disk('public')->exists($track->audio)) {
                Storage::disk('public')->delete($track->audio);
            }

            $track->delete();

            return redirect()->route('tracks.index')->with('success', 'Track deleted successfully!');
        } catch (\Exception $e) {
            return redirect()->route('tracks.index')->with('error', 'Failed to delete track: ' . $e->getMessage());
        }
    }

    /**
     * Convertit une taille PHP (ex: "8M") en bytes
     */
    private function parseSize($size)
    {
        $unit = preg_replace('/[^bkmgtpezy]/i', '', $size);
        $size = preg_replace('/[^0-9\.]/', '', $size);
        if ($unit) {
            return round($size * pow(1024, stripos('bkmgtpezy', $unit[0])));
        }
        return round($size);
    }
}
