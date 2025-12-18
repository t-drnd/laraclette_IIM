<?php

use App\Http\Controllers\ApiKeyController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\TrackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('tracks.index');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/tracks', [TrackController::class, 'index'])->name('tracks.index');
Route::post('/tracks', [TrackController::class, 'store'])->name('tracks.store');
Route::get('/tracks/{track}', [TrackController::class, 'show'])->name('tracks.show');
Route::put('/tracks/{track}', [TrackController::class, 'update'])->name('tracks.update');
Route::delete('/tracks/{track}', [TrackController::class, 'destroy'])->name('tracks.destroy');

Route::middleware(['optional.api.key'])->group(function () {
    Route::resource('api-keys', ApiKeyController::class);
});

Route::middleware(['auth'])->group(function () {
    Route::resource('playlists', PlaylistController::class);
});

require __DIR__.'/settings.php';
