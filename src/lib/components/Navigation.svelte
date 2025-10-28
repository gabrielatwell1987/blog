<script>
	import Github from '$lib/components/Github.svelte';

	let navItems = $state([
		{ href: '/about', text: 'About' },
		{ href: '/posts', text: 'Blog Posts' },
		{ href: '/new', text: 'New Post' }
	]);
	let isMenuOpen = $state(false);
	let isClosing = $state(false);

	function toggleMenu() {
		if (isMenuOpen) {
			isClosing = true;
			setTimeout(() => {
				isMenuOpen = false;
				isClosing = false;
			}, 300);
		} else {
			isMenuOpen = true;
		}
	}
</script>

<header>
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

		<ul class:open={isMenuOpen} class:closing={isClosing}>
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						onclick={() => {
							if (isMenuOpen) toggleMenu();
						}}>{item.text}</a
					>
				</li>
			{/each}

			<li class="github-mobile">
				<Github />
			</li>
		</ul>
	</nav>

	<div class="github-wrapper desktop-only">
		<Github />
	</div>
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 1rem;
		background-color: #f1efec;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

		& nav {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		& .github-wrapper.desktop-only {
			margin-left: auto;
			padding-right: 5em;

			@media (width <= 745px) {
				display: none;
			}
		}

		@media (width <= 745px) {
			& {
				flex-direction: column;
				gap: 1rem;
				padding: 1rem;
				width: 100%;
				box-sizing: border-box;
			}

			& nav {
				width: 100%;
				padding: 0;
			}

			& .github-wrapper {
				margin: 0;
				padding: 0;
				width: 100%;
				display: flex;
				justify-content: center;
			}
		}
	}

	nav {
		padding: 1rem;
		background-color: #f1efec;
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
				z-index: 200;
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

			& .github-mobile {
				display: none;

				@media (width <= 745px) {
					display: flex;
					justify-content: center;
					padding: 1rem 0;
				}
			}
		}

		@media (width <= 500px) {
			flex-direction: column;
			align-items: stretch;
			padding: 0;
			width: 100%;
			position: relative;

			& .nav-header {
				margin-bottom: 1rem;
				height: 1em;
				margin-top: 1rem;
				width: 100%;
				justify-content: space-between;
				padding: 0;

				& .logo {
					& img {
						max-width: 200px;
					}
				}

				& .menu-btn {
					display: block;
				}
			}

			& ul {
				display: none;
				flex-direction: column;
				text-align: center;
				padding: 1rem 0;
				width: 90vw;
				height: 100vh;
				position: fixed;
				top: 0;
				left: 0;
				background-color: #f4f4f4;
				transform: translateX(-100%);
				justify-content: center;
				align-items: center;

				&.open {
					display: flex;
					transform: translateX(0);
					animation: slideIn 0.3s forwards;
				}

				&.closing {
					animation: slideOut 0.5s forwards;
				}

				& li {
					padding: 0.5rem 0;
				}
			}
		}
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-100%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideOut {
		from {
			opacity: 1;
			transform: translateX(0);
		}
		to {
			opacity: 0;
			transform: translateX(-100%);
		}
	}
</style>
