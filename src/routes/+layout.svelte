<script>
	import '../app.css';
	import LocalStorage from '$lib/data/LocalStorage.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="layout">
	<Navigation />

	<LocalStorage />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;

		& main {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
			padding: 2rem;
			max-width: 800px;
			margin-inline: auto;
			box-sizing: border-box;

			@media (width <= 500px) {
				padding: 4rem;
				width: calc(100% - 4rem);
				max-width: 100%;
				margin-inline: auto;
			}
		}
	}
</style>
