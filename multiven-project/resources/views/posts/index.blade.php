<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #5a67d8;
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            background-color: #fff;
            margin-bottom: 10px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        ul li:hover {
            background-color: #e2e8f0;
            border-color: #cbd5e0;
        }

        .post-title {
            font-size: 1.5rem;
            color: #2d3748;
            margin-bottom: 5px;
        }

        .post-body {
            font-size: 1rem;
            color: #4a5568;
        }

        .no-posts {
            text-align: center;
            font-size: 1.2rem;
            color: #718096;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>All Posts</h1>

        @if($posts->isEmpty())
            <p class="no-posts">No posts available.</p>
        @else
            <ul>
                @foreach($posts as $post)
                    <li>
                        <div class="post-title">{{ $post->title }}</div>
                        <div class="post-body">{{ $post->body }}</div>
                    </li>
                @endforeach
            </ul>
        @endif
    </div>
</body>
</html>
