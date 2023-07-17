<script>
    import * as config from '$lib/config';
</script>

<nav class="flex justify-between mt-2">
    <a href="/" class="text-2xl ml-16 hover:text-black mt-2">
        <b>{config.title}</b>
    </a>

    <div class="flex justify-end mt-2 mr-16">
        <a href="/about" class="font-bold text-xl pr-16 hover:text-black">About</a>
        <a href="/contact" class="font-bold text-xl pr-16 hover:text-black">Contact</a>
        <a href="/rss.xml" class="font-bold text-xl hover:text-black" target="_blank">RSS</a>
    </div>
</nav>