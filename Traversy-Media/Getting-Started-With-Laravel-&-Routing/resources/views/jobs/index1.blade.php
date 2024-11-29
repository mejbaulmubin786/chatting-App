<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job listings</title>
</head>
<body>
    <h1>{{ $title  }}</h1>
    <ul>
        @forelse ($jobs as $job)
        @if($loop->first)
        <li>First: {{ $job }}</li>
        @else
        <li>{{ $job }}</li>
        @endif
        @empty
        <li>No jobs available</li>
        @endforelse
    </ul>
</body>
</html>
