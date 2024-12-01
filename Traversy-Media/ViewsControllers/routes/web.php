<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;

// Blade Templates & Directives
Route::get('/', [HomeController::class, 'index']);
Route::resource('jobs', JobController::class);
