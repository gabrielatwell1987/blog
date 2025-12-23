<script>
	import { addPost } from '$lib/data/stores.svelte.js';
	import { goto } from '$app/navigation';
	import SEO from '$lib/data/SEO.svelte';

	let post = $state({
		title: '',
		content: '',
		tags: '',
		author: ''
	});
	let isSubmitting = $state(false);
	let error = $state(null);

	function resetForm() {
		post = {
			title: '',
			content: '',
			tags: '',
			author: ''
		};
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (!post.title || !post.content || !post.author) {
			error = 'Please fill in all required fields';
			return;
		}

		isSubmitting = true;
		error = null;

		try {
			const tagsArray = post.tags ? post.tags.split(',').map((tag) => tag.trim()) : [];
			const newPost = {
				...post,
				date: new Date().toISOString(),
				tags: tagsArray,
				slug: post.title.toLowerCase().replace(/\s+/g, '-')
			};

			addPost(newPost);
			resetForm();
			await goto('/posts');
		} catch (err) {
			error = err.message;
		} finally {
			isSubmitting = false;
		}
	}
</script>

<SEO
	title="Create New Post - Think.Flow"
	description="Create a new blog post on Think.Flow. Share your thoughts, ideas, and experiences with our intuitive writing interface."
	keywords="create blog post, new post, write blog, digital journaling, content creation"
	canonical="/new"
	type="website"
	imageAlt="Create New Blog Post - Think.Flow"
/>

<form class="new-post" onsubmit={handleSubmit}>
	<h1>Create New Post</h1>

	<div class="form-group">
		<label for="title">Title</label>
		<input type="text" id="title" bind:value={post.title} required placeholder="Enter post title" />
	</div>

	<div class="form-group">
		<label for="author">Author</label>
		<input type="text" id="author" bind:value={post.author} required placeholder="Your name" />
	</div>

	<div class="form-group">
		<label for="tags">Tags (comma-separated)</label>
		<input
			type="text"
			id="tags"
			bind:value={post.tags}
			placeholder="e.g., technology, thoughts, coding"
		/>
	</div>

	<div class="form-group">
		<label for="content">Content</label>
		<textarea
			id="content"
			bind:value={post.content}
			rows="10"
			required
			placeholder="Write your post content here..."
		></textarea>
	</div>

	{#if error}
		<div class="error">
			{error}
		</div>
	{/if}

	<button type="submit" disabled={isSubmitting}>
		{isSubmitting ? 'Creating...' : 'Create Post'}
	</button>
</form>

<style>
	.new-post {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
		box-sizing: border-box;
		gap: 2rem;

		& h1 {
			font-family: var(--ancizar-black-font);
			font-size: clamp(2rem, 4vw, 3rem);
			text-align: center;
			color: #f1fefe;
		}

		& .form-group {
			width: 100%;
			max-width: 800px;

			& label {
				display: block;
				margin-bottom: 0.5rem;
				color: #ccc;
				font-size: clamp(1.2rem, 1.2vw, 1.5rem);
				font-weight: 600;
			}

			& input,
			& textarea {
				width: 100%;
				padding: 1rem;
				border: 1px solid #ddd;
				border-radius: 5px;
				font-size: clamp(1rem, 1.75vw, 1.5rem);
				font-family: inherit;
				box-sizing: border-box;

				@media (width <= 500px) {
					width: 16em;
					margin-left: -1em;
				}

				&:focus {
					outline: none;
					border-color: #666;
				}
			}

			& textarea {
				resize: vertical;
				min-height: 200px;
			}
		}

		& button {
			width: 100%;
			max-width: 200px;
			padding: 1rem;
			background: var(--accent);
			color: white;
			border: none;
			border-radius: 5px;
			font-family: var(--ancizar-semibold-font);
			font-size: clamp(1rem, 2vw, 1.5rem);
			letter-spacing: 3px;
			cursor: pointer;
			transition: background 0.2s;

			&:hover {
				background: var(--accent);
			}

			&:disabled {
				opacity: 0.7;
				cursor: not-allowed;
			}
		}

		& .error {
			width: 100%;
			max-width: 800px;
			color: #cc0000;
			background: #ffebeb;
			padding: 0.8rem;
			border-radius: 5px;
			font-size: 0.9rem;
			box-sizing: border-box;
		}

		@media (width <= 500px) {
			padding: 1rem;

			& .form-group {
				width: 100%;
			}

			& button {
				max-width: 100%;
			}
		}
	}
</style>
