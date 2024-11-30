<?php

use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Blade Templates & Directives

Route::get('/jobs/profile', [JobController::class, 'index']);
Route::get('/jobs/create', [JobController::class, 'create']);
