<?php

namespace App\Http\Middleware;

use App\Models\ApiKey;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class OptionalApiKeyAuth
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::check()) {
            $apiKey = $request->header('x-api-key');

            if ($apiKey) {
                $apiKeyModel = ApiKey::where('key', $apiKey)->first();

                if ($apiKeyModel && $apiKeyModel->user) {
                    Auth::login($apiKeyModel->user, true);
                }
            }
        }

        return $next($request);
    }
}
