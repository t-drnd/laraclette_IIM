<?php

use App\Http\Controllers\Api\PlaylistApiController;
use App\Http\Controllers\ApiKeyController;
use Illuminate\Support\Facades\Route;

Route::post('/api-keys', [ApiKeyController::class, 'store']);

Route::middleware(['api', 'verify.api.key'])->group(function () {
    Route::get('/playlists', [PlaylistApiController::class, 'index']);
    Route::get('/api-keys', [ApiKeyController::class, 'index']);
    Route::get('/api-keys/{apiKey}', [ApiKeyController::class, 'show']);
    Route::put('/api-keys/{apiKey}', [ApiKeyController::class, 'update']);
    Route::delete('/api-keys/{apiKey}', [ApiKeyController::class, 'destroy']);
});


