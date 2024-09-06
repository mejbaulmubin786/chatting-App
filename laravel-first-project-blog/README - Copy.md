### Laravel Blog Project Documentation

This documentation will guide you through the process of building a simple blog application in Laravel 10 from start to finish. It includes setup instructions, database configuration, routes, controllers, views, and more.

---

#### **1. Project Setup**

1. **Install Laravel 10:**
   Make sure you have Composer installed, then run the following command:
   ```bash
   composer create-project --prefer-dist laravel/laravel blog
   ```
   Navigate to the project folder:
   ```bash
   cd blog
   ```

2. **Run the development server:**
   Start the Laravel development server:
   ```bash
   php artisan serve
   ```

---

#### **2. Database Setup**

1. **Configure `.env` file:**
   Set up your database credentials. Open `.env` and modify these values:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=blog
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

2. **Create Database:**
   In your MySQL server, create a database named `blog`.

3. **Migrate default tables:**
   Run migrations to set up default Laravel tables like `users` and `password_resets`:
   ```bash
   php artisan migrate
   ```

---

#### **3. Model, Migration & Controller Creation**

1. **Create Post Model & Migration:**
   Run the command to create a `Post` model and migration:
   ```bash
   php artisan make:model Post -m
   ```

2. **Modify the Post Migration:**
   Open the migration file created in `database/migrations` and update the `up` method:
   ```php
   public function up()
   {
       Schema::create('posts', function (Blueprint $table) {
           $table->id();
           $table->string('title');
           $table->text('body');
           $table->timestamps();
       });
   }
   ```

3. **Migrate Posts Table:**
   After modifying the migration, run the following command:
   ```bash
   php artisan migrate
   ```

4. **Create PostController:**
   To manage blog posts, create a controller:
   ```bash
   php artisan make:controller PostController
   ```

---

#### **4. Routing**

In `routes/web.php`, define the routes for your blog:
```php
use App\Http\Controllers\PostController;

Route::resource('posts', PostController::class);
```

This automatically creates routes for index, create, store, show, edit, update, and destroy methods in `PostController`.

---

#### **5. Controller Methods**

Open `app/Http/Controllers/PostController.php` and implement the basic CRUD methods:

```php
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        Post::create($request->all());

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        return view('posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        $post->update($request->all());

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }
}
```

---

#### **6. Views**

1. **Create Blade Views:**

   In the `resources/views` directory, create a folder named `posts`. Inside, create the following files:

   - **index.blade.php** (List all posts):
     ```blade
     @extends('layout')

     @section('content')
         <h1>All Posts</h1>
         <a href="{{ route('posts.create') }}">Create New Post</a>
         @foreach($posts as $post)
             <h2>{{ $post->title }}</h2>
             <p>{{ $post->body }}</p>
             <a href="{{ route('posts.show', $post) }}">Read More</a>
         @endforeach
     @endsection
     ```

   - **create.blade.php** (Create a post):
     ```blade
     @extends('layout')

     @section('content')
         <h1>Create Post</h1>

         <form action="{{ route('posts.store') }}" method="POST">
             @csrf
             <label>Title</label>
             <input type="text" name="title" required>
             <label>Body</label>
             <textarea name="body" required></textarea>
             <button type="submit">Submit</button>
         </form>
     @endsection
     ```

   - **show.blade.php** (View a single post):
     ```blade
     @extends('layout')

     @section('content')
         <h1>{{ $post->title }}</h1>
         <p>{{ $post->body }}</p>
     @endsection
     ```

2. **Create a Layout:**

   Create a file `resources/views/layout.blade.php` to define a base layout:
   ```blade
   <!DOCTYPE html>
   <html>
   <head>
       <title>Blog</title>
       <link rel="stylesheet" href="{{ asset('css/app.css') }}">
   </head>
   <body>
       <div class="container">
           @yield('content')
       </div>
   </body>
   </html>
   ```

---

#### **7. Styling**

To add some basic styling, create a `public/css/app.css` file:
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
}

h1 {
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

input, textarea {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
```

---

#### **8. Testing the Application**

- **Run the Server:**
   Make sure the Laravel server is running:
   ```bash
   php artisan serve
   ```

- **Access the Application:**
   Visit `http://127.0.0.1:8000/posts` to view your blog.

---

#### **9. Conclusion**

By following this guide, you've successfully created a simple blog application with basic CRUD functionality. You can further enhance the project by adding features like user authentication, comments, and categories.