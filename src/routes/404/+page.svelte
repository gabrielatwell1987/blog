<script>
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO
	title="Page Not Found (404) - Think.Flow"
	description="The page you're looking for doesn't exist. Return to our homepage or explore our blog posts."
	canonical="/404"
	type="website"
	noindex={true}
	imageAlt="404 Page Not Found - Think.Flow"
/>

<div class="error-container">
	<h1>404 - Page Not Found</h1>

	<p>Oops! The page you're looking for doesn't exist or has been moved.</p>

	<div class="actions">
		<a href="/">Return Home</a>
		<a href="/posts">Browse Posts</a>
		<a href="/about">About Us</a>
	</div>
</div>

<style>
	.error-container {
		max-width: 600px;
		margin: 4rem auto;
		text-align: center;
		padding: 2rem;

		& h1 {
			font-family: var(--ancizar-black-font);
			font-size: clamp(2rem, 4vw, 3rem);
			color: #cc0000;
			margin-bottom: 1rem;
		}

		& p {
			color: #666;
			font-size: clamp(1rem, 2vw, 1.2rem);
			margin-bottom: 2rem;
		}

		& .actions {
			display: flex;
			gap: 1rem;
			justify-content: center;
			flex-wrap: wrap;

			& a {
				padding: 0.8rem 1.5rem;
				border-radius: 5px;
				font-family: var(--ancizar-semibold-font);
				font-size: 1rem;
				text-decoration: none;
				transition: all 0.2s;
				background: #f4f4f4;
				color: #333;
				border: 1px solid #ddd;

				&:hover {
					background: #eee;
					transform: translateY(-2px);
				}

				&:first-child {
					background: #333;
					color: white;
					border: none;

					&:hover {
						background: #444;
					}
				}
			}
		}
	}
</style>
