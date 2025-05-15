<script>
	import '../app.css';

	let navItems = $state([
		{ href: '/', text: 'Home' },
		{ href: '/posts', text: 'Blog Posts' },
		{ href: '/new', text: 'New Post' }
	]);
	let { children } = $props();
</script>

<nav>
	<ul>
		{#each navItems as item}
			<li>
				<a href={item.href}>{item.text}</a>
			</li>
		{/each}
	</ul>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		padding: 1rem;
		background-color: #f4f4f4;

		& ul {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: space-around;
			gap: 1rem;

			& a {
				text-decoration: none;
				color: #333;
				font-family: var(--ancizar-semibold-font);
				font-size: clamp(1rem, 2vw, 1.5rem);
				font-weight: 600;

				&:hover {
					color: #666;
				}
			}
		}
	}

	main {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}
</style>
