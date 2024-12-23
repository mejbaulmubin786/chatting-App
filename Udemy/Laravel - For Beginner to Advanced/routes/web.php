<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('about', function () {
    return "<h1>About Page</h1>";
})->name('about-me');

Route::get('home', function () {
    return "<a href='" . route('about-me') . "'>About Page</a>";
});
