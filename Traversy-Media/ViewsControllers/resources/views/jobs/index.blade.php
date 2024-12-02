@extends('layout')
@section('title')
    index jobs
@endsection
@section('content')
    <h1>Available Jobs</h1>
    <ul>
        @forelse ($jobs as $job)
            <li>{{ $job }}</li>
        @empty
            <li>No jobs available</li>
        @endforelse
    </ul>
@endsection

