<script>
	import '../app.css';
	import LocalStorage from '$lib/data/LocalStorage.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<div class="layout">
	<Navigation />

	<LocalStorage />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} <span>Think.Flow</span>. All rights reserved.</p>

		<p>
			Made by <a href="https://gabrielatwell.com">Gabe Atwell</a>
		</p>
	</footer>
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

		& footer {
			margin-top: auto;
			padding: 2rem;
			text-align: center;
			background-color: #f4f4f4;
			width: 100%;

			& p {
				margin: 0.5rem 0;
				font-size: clamp(0.9rem, 1.75vw, 1.3rem);
				font-weight: 500;
				color: #333;

				& span {
					font-size: clamp(1rem, 1.75vw, 1.75rem);
					font-weight: 700;
					color: var(--accent);
				}

				& a {
					color: inherit;
					text-decoration: none;
					border-bottom: 2px dashed currentColor;
					transition: color 0.2s ease;

					&:hover {
						color: var(--accent);
					}
				}
			}

			@media (width <= 500px) {
				padding: 0;
			}
		}
	}
</style>
