<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Blade Templates & Directives

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
