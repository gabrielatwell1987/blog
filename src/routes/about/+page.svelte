<script>
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO
	title="About Think.Flow"
	description="Learn about Think.Flow - a modern digital journaling and blogging platform designed for seamless thought capture and content management."
	canonical="/about"
/>

<section class="wrapper">
	<img src="/logos/biglogo.webp" alt="Think.Flow logo" />

	<h1>About Think.Flow</h1>

	<p>
		Think.Flow is your personal digital journal and blogging platform. Built for seamless thought
		capture, it allows you to create, edit, and manage your posts with complete freedom. Whether
		you're documenting ideas, sharing knowledge, or keeping track of your journey, Think.Flow
		provides a clean, distraction-free environment to let your thoughts flow naturally.
	</p>

	<div class="features">
		<h2>Key Features</h2>
		<ul>
			<li>✍️ Create unlimited blog posts</li>
			<li>🔄 Edit and update your content anytime</li>
			<li>🏷️ Organize posts with tags</li>
			<li>📱 Responsive design for all devices</li>
			<li>🚀 Fast and intuitive interface</li>
		</ul>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2em;
		padding: 2rem 1rem;

		& img {
			object-fit: cover;
			width: clamp(200px, 50%, 500px);

			@media (width <= 500px) {
				margin-top: 1em;
			}
		}

		& h1 {
			font-size: clamp(2rem, 2vw, 3rem);
			color: #f1fefe;
		}

		& p {
			font-size: clamp(1rem, 2vw, 1.5rem);
			width: 90vw;
			line-height: 1.6;
			text-align: center;
			color: #ccc;
		}

		& .features {
			margin-top: 2em;
			text-align: center;
			margin-bottom: 2em; /* Add bottom margin */

			& h2 {
				font-size: clamp(1.5rem, 1.5vw, 2rem);
				color: #ccc;
			}

			& ul {
				list-style: none;
				padding: 0;
				display: grid;
				gap: 0.5em;

				& li {
					font-size: clamp(1rem, 1.75vw, 1.35rem);
					color: #ccc;

					@media (width <= 500px) {
						width: 80vw;
					}
				}
			}
		}
	}
</style>
