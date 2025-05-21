<script>
	import '../app.css';
	import LocalStorage from '$lib/data/LocalStorage.svelte';
	import Github from '$lib/components/Github.svelte';

	let navItems = $state([
		{ href: '/about', text: 'About' },
		{ href: '/posts', text: 'Blog Posts' },
		{ href: '/new', text: 'New Post' }
	]);
	let { children } = $props();
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<Github />

<div class="layout">
	<nav>
		<div class="nav-header">
			<a href="/" class="logo">
				<img src="/logos/main.svg" alt="Think.Flow logo" />
			</a>

			<button class="menu-btn" onclick={toggleMenu} aria-label="Toggle navigation menu">
				<div class="menu-icon" class:open={isMenuOpen}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
		</div>

		<ul class:open={isMenuOpen}>
			{#each navItems as item}
				<li>
					<a href={item.href} onclick={() => (isMenuOpen = false)}>{item.text}</a>
				</li>
			{/each}
		</ul>
	</nav>

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
		margin-top: -5em;

		& main {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
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
				padding: 1.5rem;

				& p {
					font-size: 0.9rem;
				}
			}
		}
	}

	nav {
		padding: 1rem;
		background-color: #f4f4f4;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		max-width: 1200px;
		margin-inline: auto;

		& .nav-header {
			display: flex;
			align-items: center;
			gap: 2em;

			& .logo {
				& img {
					max-width: 250px;
					width: 100%;
					height: auto;
					object-fit: cover;
				}
			}

			& .menu-btn {
				display: none;
				background: none;
				border: none;
				cursor: pointer;
				padding: 0.5rem;
			}

			& .menu-icon {
				width: 30px;
				height: 24px;
				position: relative;

				& span {
					display: block;
					position: absolute;
					height: 3px;
					width: 100%;
					background: #333;
					transition: 0.3s ease-in-out;

					&:nth-child(1) {
						top: 0;
					}
					&:nth-child(2) {
						top: 10px;
					}
					&:nth-child(3) {
						top: 20px;
					}
				}

				&.open span {
					&:nth-child(1) {
						top: 10px;
						transform: rotate(45deg);
					}
					&:nth-child(2) {
						opacity: 0;
					}
					&:nth-child(3) {
						top: 10px;
						transform: rotate(-45deg);
					}
				}
			}
		}

		& ul {
			list-style: none;
			display: flex;
			gap: 3em;
			margin-left: 1em;

			& li {
				& a {
					text-decoration: none;
					font-family: var(--sharetech-font);
					font-size: clamp(1.2rem, 2vw, 1.5rem);
					font-weight: 900;
					color: #333;

					&:hover {
						color: #666;
					}
				}
			}

			&.open {
				display: flex;
			}
		}

		@media (max-width: 500px) {
			flex-direction: column;
			align-items: stretch;

			& .nav-header {
				margin-bottom: 1rem;
				height: 1em;
				margin-top: 1rem;

				& .menu-btn {
					display: block;
				}
			}

			& ul {
				display: none;
				flex-direction: column;
				text-align: center;
				padding: 1rem 0;
				width: 100%;
				transition: 0.3s ease-in-out;

				&.open {
					display: flex;
				}

				& li {
					padding: 0.5rem 0;
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
