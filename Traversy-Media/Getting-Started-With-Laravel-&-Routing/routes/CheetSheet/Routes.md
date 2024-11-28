### ---------------Routes---------------

```php
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
```

### -------Request Object & Query Params

```php
//-------Route Object & Query Params
Route::get('/test2', function (Request $request) {
    return [
        'method' => $request->method(),
        'root' => $request->root(),
        'url' => $request->url(),
        'rull' => $request->fullUrl(),
        'ip' => $request->ip(),
        'method' => $request->method(),
        'method' => $request->method(),
        'method' => $request->method(),
        'method' => $request->method(),
        'method' => $request->method(),
        'method' => $request->method(),
        'method' => $request->method(),

    ];
});

Route::get('/profile', function (Request $request) {
    return $request->query('name');

});

// http://127.0.0.1:8000/profile?name=Mejbaul

Route::get('/profile1', function (Request $request) {
    return $request->only('name');
});

//http://127.0.0.1:8000/profile2?name=Mejbaul&age=32

Route::get('/profile2', function (Request $request) {
    return $request->only(['name', 'age']);
});

//http: //127.0.0.1:8000/profile2?name=Mejbaul&age=32
//http://127.0.0.1:8000/profile2?name=Mejbaul&age=32&sort=desc

Route::get('/profile3', function (Request $request) {
    return $request->all();
});

//http: //127.0.0.1:8000/profile2?name=Mejbaul&age=32

Route::get('/user', function (Request $request) {
    return $request->has('name'); // return true(1) or False (nothing)
});

//http: //127.0.0.1:8000/profile2?name=Mejbaul&age=32 return 1

Route::get('/user1', function (Request $request) {
    return $request->input('name');

});

Route::get('/user2', function (Request $request) {
    return $request->input('name'); // The difference between input and query is input is work with both in query and form.

});

// http://127.0.0.1:8000/user2?name=Mejbaul

Route::get('/user3', function (Request $request) {
    return $request->input('name', 'Default Name'); // The difference between input and query is input is work with both in query and form.

});

//http://127.0.0.1:8000/user3

Route::get('/user4', function (Request $request) {
    return $request->except(['name']);
});
//http: //127.0.0.1:8000/profile2?name=Mejbaul&age=32

//$request->session()->get('key') - Get a session value by key

//---------------Response Helper

Route::get('/test', function () {
    return response('Hello World');
});

Route::get('/notfound', function () {
    return response('Page not found', 404);
});


Route::get('/notfound', function () {
    return response('Page not found', 404);
});

Route::get('/test1', function () {

    return response('<h1>Hello World</h1>')->header('Content-Type', 'text/plain');
});

Route::get('/test2', function () {

    return response('<h1>Hello World</h1>')->header('Content-Type', 'text/html');
});

Route::get('/test3', function () {

    return response()->json(['name' => 'Mejbaul Mubin']);
});

Route::get('/download', function () {

    return response()->download(public_path('favicon.ico'));
});

Route::get('/test4', function () {

    return response()->json(['name' => 'Mejbaul Mubin'])->cookie('name', 'Mejbaul Mubin');;
});

Route::get('/test', function () {
    return response('Hello World')->cookie('name', 'John Doe');
});

Route::get('/read-cookie', function (Request $request) {
    $cookieValue = $request->cookie('hello');
    return response()->json(['cookie' => $cookieValue]);
});


```
