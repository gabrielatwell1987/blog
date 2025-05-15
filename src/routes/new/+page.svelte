<script>
	let post = $state({
		title: '',
		content: '',
		tags: '',
		author: ''
	});

	function handleSubmit(event) {
		event.preventDefault();

		// Convert comma-separated tags string to array
		const tagsArray = post.tags.split(',').map((tag) => tag.trim());

		const newPost = {
			...post,
			date: new Date().toISOString(),
			tags: tagsArray,
			slug: post.title.toLowerCase().replace(/\s+/g, '-')
		};

		// TODO: Add logic to save the post
		console.log('New post:', newPost);
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

	<button type="submit">Create Post</button>
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
	}

	.form-group {
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

	button {
		width: 100%;
		padding: 1rem;
		background: #333;
		color: white;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s;

		&:hover {
			background: #444;
		}
	}
</style>
