@extends('layout')
@section('title')
    Create job
@endsection
@section('content')
    <h1>Create New Job</h1>
    <form action="/jobs" method="POST">
        <input type="text" name="title" placeholder="title">
        <input type="text" name="description" placeholder="description">
        <button type="submit">Submit</button>
    </form>
@endsection
