<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//---------------Views & Controllers

//---------------Create & Display views

Route::get('/jobs', function () {
    return view('jobs');
})->name('jobs');
