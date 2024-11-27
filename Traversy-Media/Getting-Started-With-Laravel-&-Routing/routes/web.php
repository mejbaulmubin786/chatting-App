<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//---------------Response Helper

Route::get('/test', function () {
    return response('Hello World');
});

Route::get('/error', function () {
    return response('Hello World', 404);
});
