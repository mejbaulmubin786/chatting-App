<!-- resources/views/posts/create.blade.php -->

@extends('layout')

@section('content')
    <h1>Create a New Post</h1>

    <!-- Success Message -->
    @if(session('success'))
        <p>{{ session('success') }}</p>
    @endif

    <!-- Form to create a new post -->
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf <!-- Cross-Site Request Forgery protection -->

        <div>
            <label for="title">Post Title</label>
            <input type="text" name="title" id="title" required>
        </div>

        <div>
            <label for="body">Post Body</label>
            <textarea name="body" id="body" rows="5" required></textarea>
        </div>

        <button type="submit">Create Post</button>
    </form>
@endsection
