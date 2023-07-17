<script>
    import { fade } from 'svelte/transition';
    
    export let url = '';
</script>

{#key url}
    <div class="h-full" transition:fade>
        <slot></slot>
    </div>
{/key}