<script>
	import { page } from '$app/stores';
	import { getPosts, updatePost } from '$lib/data/stores.svelte.js';
	import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';
	import SEO from '$lib/data/SEO.svelte';

	const slug = $page.params.slug;
	const posts = getPosts();
	const currentPost = posts.find((p) => p.slug === slug);

	if (!currentPost) {
		// goto('/posts');
		throw error(404, {
			message: 'Post not found'
		});
	}

	let title = $state(currentPost.title);
	let content = $state(currentPost.content);
	let tags = $state(currentPost.tags.join(', '));
	let saving = $state(false);

	async function handleSubmit(e) {
		e.preventDefault();
		saving = true;

		try {
			const updatedPost = {
				...currentPost,
				title,
				content,
				tags: tags
					.split(',')
					.map((tag) => tag.trim())
					.filter(Boolean),
				updatedAt: new Date().toISOString()
			};

			updatePost(slug, updatedPost);
			goto('/posts');
		} catch (error) {
			console.error('Failed to update post:', error);
			alert('Failed to update post. Please try again.');
		} finally {
			saving = false;
		}
	}
</script>

<SEO
	title="Edit Think.Flow Post"
	description="Edit you blog post"
	keywords="edit blog post, think.flow editing"
/>

<div class="edit-post">
	<h1>Edit Post</h1>

	<form onsubmit={handleSubmit}>
		<div class="form-group">
			<label for="title">Title</label>
			<input type="text" id="title" bind:value={title} required />
		</div>

		<div class="form-group">
			<label for="content">Content</label>
			<textarea id="content" bind:value={content} rows="10" required></textarea>
		</div>

		<div class="form-group">
			<label for="tags">Tags (comma-separated)</label>
			<input type="text" id="tags" bind:value={tags} />
		</div>

		<div class="actions">
			<button type="button" onclick={() => goto('/posts')}>Cancel</button>
			<button type="submit" disabled={saving}>
				{saving ? 'Saving...' : 'Save Changes'}
			</button>
		</div>
	</form>
</div>

<style>
	.edit-post {
		max-width: 800px;
		margin: 2rem auto;
		padding: 0 1rem;

		& h1 {
			font-family: var(--ancizar-black-font);
			font-size: clamp(1.5rem, 3vw, 2rem);
			margin-bottom: 2rem;
		}

		& .form-group {
			margin-bottom: 1.5rem;

			& label {
				display: block;
				margin-bottom: 0.5rem;
				font-weight: 500;
			}

			& input,
			& textarea {
				width: 100%;
				padding: 0.75rem;
				border: 1px solid #ddd;
				border-radius: 5px;
				font-size: 1rem;

				&:focus {
					outline: none;
					border-color: #666;
				}
			}
		}

		& .actions {
			display: flex;
			gap: 1rem;
			justify-content: flex-end;

			& button {
				padding: 0.75rem 1.5rem;
				border: none;
				border-radius: 5px;
				font-size: 1rem;
				cursor: pointer;

				&[type='button'] {
					background: #f4f4f4;
					color: #333;

					&:hover {
						background: #eee;
					}
				}

				&[type='submit'] {
					background: var(--link);
					color: white;

					&:hover {
						background: var(--accent);
					}

					&:disabled {
						opacity: 0.7;
						cursor: not-allowed;
					}
				}
			}
		}
	}
</style>
