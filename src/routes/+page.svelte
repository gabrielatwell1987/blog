<script>
    import {formatDate} from '$lib/utils';
    import {fly} from 'svelte/transition';

    export let data;
</script>

<section in:fly={{y:500}}>
    <ul class="grid gap-8">
        {#each data.posts as post}
            <li class="max-h-32 text-center border-2 border-white pb-8 pt-6 pl-2 pr-2 rounded-md">
                <a href={post.slug} class="text-2xl font-bold text-white hover:text-red-400 hover:underline">{post.title}</a>

                <p class="text-slate-400">{formatDate(post.date)}</p>
                <p class="mt-4">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>