<script>
	import { getPosts, deletePost } from '$lib/data/stores.svelte.js';

	const posts = getPosts();

	// Handle delete with loading state
	let isDeleting = $state(false);

	async function handleDelete(slug) {
		if (!confirm('Are you sure you want to delete this post?')) {
			return;
		}

		isDeleting = true;
		try {
			deletePost(slug);
		} finally {
			isDeleting = false;
		}
	}
</script>

<section class="posts">
	<h2>Latest Posts</h2>

	<div class="posts-grid">
		{#each posts as post}
			<article class="post-card">
				<h3>
					<a href={`/posts/${post.slug}`}>{post.title}</a>
				</h3>
				<p class="excerpt">{post.content.slice(0, 150)}...</p>
				<div class="meta">
					<time>{new Date(post.date).toLocaleDateString()}</time>
					<div class="tags">
						{#each post.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
				<div class="actions">
					<a href={`/posts/${post.slug}/edit`} class="edit">Edit</a>
					<button onclick={() => handleDelete(post.slug)} class="delete" disabled={isDeleting}>
						{isDeleting ? 'Deleting...' : 'Delete'}
					</button>
				</div>
			</article>
		{/each}
	</div>

	{#if posts.length === 0}
		<p class="no-posts">No posts yet. <a href="/new">Create your first post!</a></p>
	{/if}
</section>

<style>
	.posts {
		padding: 1rem;
		max-width: 1200px;
		margin-inline: auto;

		& h2 {
			font-family: var(--ancizar-black-font);
			font-size: clamp(2rem, 4vw, 3rem);
			margin-bottom: 2rem;
			text-align: center;
		}

		& .posts-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
			gap: 2rem;
			width: 100%;

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
						font-family: var(--ancizar-semibold-font);

						&:hover {
							color: #666;
						}
					}
				}

				& .excerpt {
					color: #666;
					margin-bottom: 1rem;
					line-height: 1.6;
				}

				& .meta {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 0.9rem;
					color: #888;
					margin-bottom: 1rem;

					& .tags {
						display: flex;
						gap: 0.5rem;
						flex-wrap: wrap;

						& .tag {
							padding: 0.2rem 0.5rem;
							border-radius: 5px;
							background: #f0f0f0;
							font-size: 0.8rem;
						}
					}
				}

				& .actions {
					display: flex;
					gap: 1rem;

					& .edit,
					& .delete {
						flex: 1;
						padding: 0.5rem;
						border-radius: 5px;
						text-align: center;
						font-size: 0.9rem;
						cursor: pointer;
						transition: all 0.2s;
					}

					& .edit {
						background: #f4f4f4;
						color: #333;
						text-decoration: none;

						&:hover {
							background: #eee;
						}
					}

					& .delete {
						background: #ffebeb;
						color: #cc0000;
						border: none;

						&:hover {
							background: #ffe0e0;
						}

						&:disabled {
							opacity: 0.7;
							cursor: not-allowed;
						}
					}
				}
			}
		}
	}

	.no-posts {
		text-align: center;
		color: #666;
		margin-top: 2rem;

		& a {
			color: #333;
			text-decoration: none;
			font-weight: bold;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media (max-width: 500px) {
		.posts {
			padding: 1rem;

			& .posts-grid {
				grid-template-columns: 1fr;
				gap: 1.5rem;
			}
		}
	}
</style>
