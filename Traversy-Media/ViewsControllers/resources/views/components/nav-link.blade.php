@props(['url' =>'/', 'active'=>true])
<a href="{{ $url }}" class="text-white hover:underline py-2 {{ $active?'text-yellow-500 font-bold':'' }}">
    {{ $slot }}
</a>
