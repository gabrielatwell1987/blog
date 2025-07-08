<script>
	import SEO from '$lib/data/SEO.svelte';

	let { params } = $props();

	// This would typically come from a database or API
	let post = $state({
		title: 'My First Blog Post',
		content: 'This is the full content of the post...',
		date: '2024-05-15',
		tags: ['welcome', 'first-post'],
		author: 'John Doe'
	});
</script>

<SEO
	title={post.title}
	description={post.content.substring(0, 160) + '...'}
	keywords={post.tags.join(', ')}
	canonical={`/posts/${params.slug}`}
	type="article"
	author={post.author}
	publishedTime={new Date(post.date).toISOString()}
	modifiedTime={new Date(post.date).toISOString()}
	imageAlt={`Article: ${post.title}`}
/>

<article class="post">
	<header>
		<h1>{post.title}</h1>
		<div class="meta">
			<time>{new Date(post.date).toLocaleDateString()}</time>
			<span class="author">By {post.author}</span>
		</div>
		<div class="tags">
			{#each post.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</header>

	<div class="content">
		{post.content}
	</div>

	<footer>
		<a href="/posts" class="back-link">← Back to all posts</a>
	</footer>
</article>

<style>
	.post {
		max-width: 800px;
		margin: 0 auto;

		& header {
			margin-bottom: 3rem;
			text-align: center;

			& h1 {
				font-family: var(--ancizar-black-font);
				font-size: clamp(2rem, 5vw, 3.5rem);
				margin-bottom: 1rem;
			}

			& .meta {
				color: #666;
				margin-bottom: 1rem;

				& .author {
					margin-left: 1rem;
				}
			}

			& .tags {
				display: flex;
				gap: 0.5rem;
				justify-content: center;

				& .tag {
					padding: 0.3rem 0.8rem;
					border-radius: 5px;
					background: #f0f0f0;
					font-size: 0.9rem;
					color: #555;
				}
			}
		}

		& .content {
			line-height: 1.8;
			color: #333;
			margin-bottom: 3rem;
		}

		& footer {
			margin-top: 3rem;
			padding-top: 2rem;
			border-top: 1px solid #eee;

			& .back-link {
				text-decoration: none;
				color: #666;

				&:hover {
					color: #333;
				}
			}
		}
	}
</style>
