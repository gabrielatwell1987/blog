<script>
	import '../app.css';

	let navItems = $state([
		// { href: '/', text: 'Think.Flow  ' },
		{ href: '/posts', text: 'Blog Posts' },
		{ href: '/new', text: 'New Post' }
	]);
	let { children } = $props();
</script>

<nav>
	<a href="/"> <img src="/logos/main.svg" alt="" /></a>

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
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		& img {
			max-width: 250px;
			width: 100%;
			height: auto;
			object-fit: cover;
		}

		& ul {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			gap: 2.5em;

			& a {
				text-decoration: none;
				font-family: var(--sharetech-font);
				font-size: clamp(1rem, 2vw, 1.5rem);
				font-weight: 900;
			}
		}
	}

	main {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}
</style>
