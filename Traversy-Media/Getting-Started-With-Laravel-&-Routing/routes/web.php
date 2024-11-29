<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// ----------------Passing Data to Views

//third Way

Route::get('/jobs/profile', function () {
    $title = 'Available Jobs';
    return view('jobs.index', compact('title'));
});

Route::get('/jobs/profile1', function () {
    $title = 'Available Jobs';
    $jobs = [
        'Web Developer',
        'Database Admin',
        'Software Engineer',
        'Systems Analyst',
    ];
    return view('jobs.index1', compact('title', 'jobs'));
});
