<x-layout>
    <x-slot name="title">Create Job</x-slot>
    <form action="/jobs" method="POST">
        <input type="text" name="title" placeholder="title">
        <input type="text" name="description" placeholder="description">
        <button type="submit">Submit</button>
    </form>
</x-layout>
