<script>
	import { addPost } from '$lib/data/stores.svelte.js';
	import { goto } from '$app/navigation';

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
		max-width: 800px;
		margin: 0 auto;

		& h1 {
			font-family: var(--ancizar-black-font);
			font-size: clamp(2rem, 4vw, 3rem);
			margin-bottom: 2rem;
			text-align: center;
		}

		& .form-group {
			margin-bottom: 1.5rem;

			& label {
				display: block;
				margin-bottom: 0.5rem;
				color: #333;
				font-weight: 600;
			}

			& input,
			& textarea {
				width: 100%;
				padding: 0.8rem;
				border: 1px solid #ddd;
				border-radius: 5px;
				font-size: 1rem;
				font-family: inherit;

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
			padding: 1rem;
			background: #333;
			color: white;
			border: none;
			border-radius: 5px;
			font-family: var(--ancizar-semibold-font);
			font-size: clamp(1rem, 2vw, 1.5rem);
			letter-spacing: 3px;
			cursor: pointer;
			transition: background 0.2s;

			&:hover {
				background: #444;
			}

			&:disabled {
				opacity: 0.7;
				cursor: not-allowed;
			}
		}

		& .error {
			color: #cc0000;
			background: #ffebeb;
			padding: 0.8rem;
			border-radius: 5px;
			margin-bottom: 1rem;
			font-size: 0.9rem;
		}
	}
</style>
