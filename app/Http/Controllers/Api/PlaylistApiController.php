<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PlaylistApiController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $playlists = $user->playlists()
            ->with('tracks')
            ->get();

        return response()->json([
            'data' => $playlists,
        ]);
    }
}
