<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// ----------------Passing Data to Views
//Second Way

Route::get('/jobs/profile', function () {
    return view('jobs.index')->with('title', 'Available Jobs');
});

Route::get('/jobs/create', function () {
    return view('jobs.create');
})->name('jobs.create');
