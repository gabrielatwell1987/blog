<script>
	import { getPosts, deletePost } from '$lib/data/stores.svelte.js';
	import SEO from '$lib/data/SEO.svelte';

	const posts = getPosts();
	let isDeleting = $state(false);

	// Dynamic SEO content based on posts
	let seoTitle = $derived(
		posts.length > 0 ? `Blog Posts (${posts.length}) - Think.Flow` : 'Blog Posts - Think.Flow'
	);

	let seoDescription = $derived(() => {
		if (posts.length === 0) {
			return 'Start your digital journal with Think.Flow. Create your first blog post and begin capturing your thoughts and ideas.';
		}

		const latestPost = posts[0];
		const postTitles = posts
			.slice(0, 3)
			.map((p) => p.title)
			.join(', ');
		return `Explore ${posts.length} blog post${posts.length === 1 ? '' : 's'} including: ${postTitles}${posts.length > 3 ? ' and more' : ''}.`;
	});

	async function handleDelete(slug) {
		if (!confirm('Are you sure you want to delete this post?')) {
			return;
		}

		isDeleting = true;
		try {
			deletePost(slug);
		} catch (error) {
			console.error('Failed to delete post:', error);
			alert('Failed to delete post. Please try again.');
		} finally {
			isDeleting = false;
		}
	}
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	keywords="blog posts, digital journal entries, personal blog, thought collection"
	canonical="/posts"
	type="website"
	imageAlt="Think.Flow Blog Posts Collection"
/>

<section class="posts">
	<h2>Latest Posts</h2>

	<div class="posts-grid">
		{#each posts as post (post.slug)}
			<article class="post-card">
				<h3>
					<a href={`/posts/${post.slug}`}>{post.title}</a>
				</h3>

				<p class="excerpt">{post.content.slice(0, 150)}...</p>

				<hr />

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

	{#if !posts?.length}
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
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
			width: 100%;

			@media (width <= 1200px) {
				grid-template-columns: repeat(3, 1fr);
			}

			@media (width <= 900px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (width <= 600px) {
				grid-template-columns: 1fr;
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
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					gap: 0.75rem;
					font-size: 0.9rem;
					color: #888;
					margin-bottom: 1rem;

					& time {
						font-size: clamp(0.8rem, 1vw, 1rem);
						font-style: italic;
						font-weight: 500;
					}

					& .tags {
						display: flex;
						gap: 0.5rem;
						flex-wrap: wrap;

						& .tag {
							padding: 0.2rem 0.5rem;
							border-radius: 5px;
							background: #f0f0f0;
							font-size: 0.8rem;
							transition: background 0.2s;

							&:hover {
								background: #e5e5e5;
							}
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
						font-size: clamp(0.8rem, 1vw, 1rem);
						font-weight: 600;
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
