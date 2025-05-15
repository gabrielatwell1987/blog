<script>
	let posts = $state([
		{
			slug: 'first-post',
			title: 'My First Blog Post',
			excerpt: 'This is the beginning of something great...',
			date: '2024-05-15',
			tags: ['welcome', 'first-post']
		}
		// Add more posts here
	]);
</script>

<section class="posts">
	<h2>Latest Posts</h2>

	<div class="posts-grid">
		{#each posts as post}
			<article class="post-card">
				<h3>
					<a href={`/posts/${post.slug}`}>{post.title}</a>
				</h3>
				<p class="excerpt">{post.excerpt}</p>
				<div class="meta">
					<time>{new Date(post.date).toLocaleDateString()}</time>
					<div class="tags">
						{#each post.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.posts {
		& h2 {
			font-family: var(--ancizar-black-font);
			font-size: clamp(2rem, 4vw, 3rem);
			margin-bottom: 2rem;
		}

		& .posts-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 2rem;
		}

		& .post-card {
			padding: 1.5rem;
			border-radius: 10px;
			background: #fff;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
			transition: transform 0.2s;

			&:hover {
				transform: translateY(-3px);
			}

			& h3 {
				margin: 0 0 1rem 0;

				& a {
					color: #333;
					text-decoration: none;

					&:hover {
						color: #666;
					}
				}
			}

			& .excerpt {
				color: #666;
				margin-bottom: 1rem;
			}

			& .meta {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 0.9rem;
				color: #888;

				& .tags {
					display: flex;
					gap: 0.5rem;

					& .tag {
						padding: 0.2rem 0.5rem;
						border-radius: 5px;
						background: #f0f0f0;
						font-size: 0.8rem;
					}
				}
			}
		}
	}
</style>
