<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//---------------Routes---------------
Route::get('/jobs', function () {
    return 'Available Jobs';
});

Route::get('/jobs2', function () {
    return '<h1>Available Jobs</h1>';
});

Route::post('/submit', function () {
    return 'Submitted';
});

Route::match(['get', 'post'], '/user', function () {
    return 'Mejbaul Mubin';
});

Route::match(['get', 'post'], '/user/profile', function () {
    return 'Mejbaul Mubin\'s profile';
});

Route::any('/user/profile/create', function () {
    return 'Mejbaul Mubin\'s profile is created';
});

Route::get('/deshboard', function () {
    return 'Mejbaul Mubin\'s Deshboard';
})->name('userdeshboard');

Route::get('/test', function () {
    $url = route('userdeshboard');
    return "<a href='$url'>click here</a>";
});

Route::get('/api/user', function () {
    return [
        'name' => 'Mejbaul Mubin',
        'email' => 'mejbaulmubin786@gmail.com',
    ];
});

Route::get('/posts/{id}', function ($id) {
    return 'Post ' . $id;
});

Route::get('/posts/{id}/comments/{commentId}', function ($id, $commentId) {
    return 'Post ' . $id . ' Comment ' . $commentId;
});

//Local constraints add with Where close
Route::post('/posts/{id}', function ($id) {
    return 'Post ' . $id;
})->where('id', '[0-9]+');
// where('id', '[0-9]+') shortcuts  whereNumber('id');

Route::put('/posts/{id}', function ($id) {
    return 'Post ' . $id;
})->where('id', '[a-zA-Z]+');

// where('id', '[a-zA-Z]+') shortcuts  whereAlpha('id');

// go to Providers/AppServiceProvider.php to add global constraints.

/*
public function boot(): void
{
Route::pattern('id', '[0-9]+'); // it works with any route that has id;
}
 */
