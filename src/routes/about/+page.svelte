<script>
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO title="About Think.Flow" description="All about us" keywords="about think.flow" />

<section class="wrapper">
	<img src="/logos/Think.Flow.svg" alt="Think.Flow logo" width="400" />

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
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2em;
		height: 100vh;

		& img {
			margin-bottom: -3em;
		}

		& h1 {
			font-size: clamp(2rem, 2vw, 3rem);
		}

		& p {
			font-size: clamp(1rem, 2vw, 1.5rem);
			max-width: 600px;
			line-height: 1.6;
		}

		& .features {
			margin-top: 2em;
			text-align: center;

			& h2 {
				font-size: clamp(1.5rem, 1.5vw, 2rem);
				margin-bottom: 1em;
			}

			& ul {
				list-style: none;
				padding: 0;
				display: grid;
				gap: 1em;
				font-size: clamp(1rem, 1.5vw, 1.2rem);
			}
		}
	}
</style>
