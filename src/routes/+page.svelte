<script>
	import SEO from '$lib/data/SEO.svelte';

	let title = $state('Think.Flow');
	let description = $state('For streaming thoughts and ideas');
	let tags = $state(['thoughts', 'ideas', 'streaming']);
</script>

<SEO
	title="Think.Flow - Digital Journal & Blog Platform"
	description="A clean, intuitive blogging platform for capturing and organizing your thoughts. Create, edit, and manage your posts with complete freedom."
	keywords="blog platform, digital journal, thought capture, personal blog, content management, writing platform"
	canonical="/"
	type="website"
	imageAlt="Think.Flow - Digital Journal & Blog Platform"
/>

<header>
	<h1>{title}</h1>
	<p>{description}</p>

	<div class="tags">
		{#each tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</header>

<style>
	header {
		padding: 1rem;
		text-align: center;

		& h1 {
			color: #333;
			margin-bottom: 1rem;
			font-family: var(--ancizar-black-font);
			font-size: clamp(3rem, 6vw, 10em);
			letter-spacing: 3px;
		}

		& p {
			color: #666;
			line-height: 1.6;
			font-size: clamp(1rem, 3vw, 2rem);
			max-width: 600px;
			margin-inline: auto;
		}

		& .tags {
			display: flex;
			gap: 1rem;
			justify-content: center;
			flex-wrap: wrap;
			margin-top: 2em;

			& .tag {
				padding: 0.5rem 1rem;
				border-radius: 10px;
				font-size: clamp(0.8rem, 1vw, 1rem);
				color: #555;
			}
		}
	}

	@media (max-width: 500px) {
		/* header {
            padding: 0.5rem;
        } */

		header {
			padding: 0.5rem;
		}
	}
</style>
