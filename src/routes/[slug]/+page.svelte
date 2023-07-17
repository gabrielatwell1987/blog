<script>
    import {formatDate} from '$lib/utils';
    import {fly} from 'svelte/transition';

    export let data;
</script>

<article class="max-w-full" in:fly={{y:-500}}>
    <hgroup class="text-center">
        <h1 class="text-6xl font-bold hover:text-black">{data.meta.title}</h1>
        <h4 class="text-lg">{formatDate(data.meta.date)}</h4>
    </hgroup>
    <br><br>
    <div class="text-center">
        {#each data.meta.categories as category}
            <span class="bg-gray-950">&num;{category}</span>
        {/each}
    </div>
    <br><br>
    <div class="prose">
        <svelte:component this={data.content} />
    </div>
</article>