<script>
	let title = $state('Think.Flow');
	let description = $state('For streaming thoughts and ideas');
	let tags = $state(['thoughts', 'ideas', 'streaming']);
</script>

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
		padding: 2rem;
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
		}

		& .tags {
			display: flex;
			gap: 1rem;
			justify-content: center;
			flex-wrap: wrap;
			margin-top: -2em;

			& .tag {
				padding: 0.5rem 1rem;
				border-radius: 10px;
				font-size: clamp(0.8rem, 1vw, 1rem);
				color: #555;
			}
		}
	}
</style>
