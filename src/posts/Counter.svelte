<script>
    let count = 0;

    const increment = () => count += 1;
    const decrement = () => count -= 1;
</script>

<h1>{count}</h1>
<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>