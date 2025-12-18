<?php

namespace App\Http\Controllers;

use App\Models\ApiKey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ApiKeyController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user() ?? Auth::user();
        
        if (!$user) {
            return redirect()->route('api-keys.create');
        }

        $apiKeys = ApiKey::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('ApiKeys/Index', [
            'apiKeys' => $apiKeys,
        ]);
    }

    public function create()
    {
        return Inertia::render('ApiKeys/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
        ]);

        $user = $request->user() ?? Auth::user();

        if (!$user) {
            $user = \App\Models\User::firstOrCreate(
                ['email' => $validated['email']],
                ['name' => $validated['email'], 'password' => bcrypt(Str::random(32))]
            );
        }

        $slug = Str::slug($validated['name']);
        $originalSlug = $slug;
        $counter = 1;
        while (ApiKey::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        $key = Str::random(64);
        while (ApiKey::where('key', $key)->exists()) {
            $key = Str::random(64);
        }

        $apiKey = ApiKey::create([
            'slug' => $slug,
            'user_id' => $user->id,
            'name' => $validated['name'],
            'key' => $key,
        ]);

        Auth::login($user);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'api_key' => $apiKey->key,
                'message' => 'API key created successfully!'
            ]);
        }

        return redirect()->route('api-keys.index')
            ->with('success', 'API key created successfully!')
            ->with('new_api_key', $apiKey->key);
    }

    public function show(Request $request, ApiKey $apiKey)
    {
        $user = $request->user() ?? Auth::user();
        
        if (!$user || $apiKey->user_id !== $user->id) {
            abort(403, 'Unauthorized action.');
        }

        return Inertia::render('ApiKeys/Show', [
            'apiKey' => $apiKey,
        ]);
    }

    public function edit(Request $request, ApiKey $apiKey)
    {
        $user = $request->user() ?? Auth::user();
        
        if (!$user || $apiKey->user_id !== $user->id) {
            abort(403, 'Unauthorized action.');
        }

        return Inertia::render('ApiKeys/Edit', [
            'apiKey' => $apiKey,
        ]);
    }

    public function update(Request $request, ApiKey $apiKey)
    {
        $user = $request->user() ?? Auth::user();
        
        if (!$user || $apiKey->user_id !== $user->id) {
            abort(403, 'Unauthorized action.');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        if ($validated['name'] !== $apiKey->name) {
            $slug = Str::slug($validated['name']);
            $originalSlug = $slug;
            $counter = 1;
            while (ApiKey::where('slug', $slug)->where('id', '!=', $apiKey->id)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
            $apiKey->slug = $slug;
        }

        $apiKey->name = $validated['name'];
        $apiKey->save();

        return redirect()->route('api-keys.index')->with('success', 'API key updated successfully!');
    }

    public function destroy(Request $request, ApiKey $apiKey)
    {
        $user = $request->user() ?? Auth::user();
        
        if (!$user || $apiKey->user_id !== $user->id) {
            abort(403, 'Unauthorized action.');
        }

        $apiKey->delete();

        return redirect()->route('api-keys.index')->with('success', 'API key deleted successfully!');
    }
}
