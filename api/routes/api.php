<?php

use App\Http\Controllers\AuthController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post("/login", [AuthController::class, "login"]);
Route::post("/register", [AuthController::class, "register"]);

Route::prefix('/')->group(function () {
    Route::get('user', function (Request $request) {
        return new UserResource($request->user());
    });

    Route::post("logout", [AuthController::class, "logout"]);

})->middleware("auth.sanctum");