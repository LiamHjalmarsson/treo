<?php

namespace App\Http\Controllers;

use App\Actions\Auth\LoginAction;
use App\Actions\Auth\RegisterAction;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    
    public function login(LoginRequest $request, LoginAction $action): JsonResponse
    {
        $data = $action($request);
        
        return response()->json($data, 200);
    }
    
    public function register(RegisterRequest $request, RegisterAction $action): JsonResponse
    {
        $data = $action($request);
        
        return response()->json($data, 201);
    }

    public function logout(Request $request): JsonResponse
    {
        $token = $request->bearerToken();
        $accessToken = PersonalAccessToken::findToken($token);

        if ($accessToken) {
            $accessToken->delete();
        }

        return response()->json(["message" => "Logged out"], 200);
    }
}
