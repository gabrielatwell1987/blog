<script>
	import { page } from '$app/stores';
</script>

<div class="error-container">
	<h1>{$page.status}: {$page.error?.message}</h1>

	<p>Sorry, something went wrong. Please try again or return home.</p>

	<div class="actions">
		<button onclick={() => window.location.reload()}> Try Again </button>

		<a href="/">Return Home</a>
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

			& button,
			& a {
				padding: 0.8rem 1.5rem;
				border-radius: 5px;
				font-family: var(--ancizar-semibold-font);
				font-size: 1rem;
				cursor: pointer;
				transition: all 0.2s;
				text-decoration: none;
			}

			& button {
				background: #333;
				color: white;
				border: none;

				&:hover {
					background: #444;
				}
			}

			& a {
				background: #f4f4f4;
				color: #333;
				border: 1px solid #ddd;

				&:hover {
					background: #eee;
				}
			}
		}
	}
</style>
