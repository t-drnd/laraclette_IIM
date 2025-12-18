<?php

namespace App\Http\Middleware;

use App\Models\ApiKey;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyApiKey
{
    public function handle(Request $request, Closure $next): Response
    {
        $apiKey = $request->header('x-api-key');

        if (!$apiKey) {
            return response()->json([
                'error' => 'API key is required. Please provide x-api-key header.',
            ], 401);
        }

        $apiKeyModel = ApiKey::where('key', $apiKey)->first();

        if (!$apiKeyModel) {
            return response()->json([
                'error' => 'Invalid API key.',
            ], 401);
        }

        $request->setUserResolver(function () use ($apiKeyModel) {
            return $apiKeyModel->user;
        });

        return $next($request);
    }
}
