// import { state } from 'svelte';

// Initialize posts state
const posts = $state([
	{
		slug: 'welcome-to-thinkflow',
		title: 'Welcome to Think.Flow',
		content: 'This is our first blog post...',
		date: new Date().toISOString(),
		tags: ['welcome', 'first-post'],
		author: 'Admin'
	}
]);

// Store actions
function addPost(post) {
	posts.push(post);
}

function deletePost(slug) {
	const index = posts.findIndex((p) => p.slug === slug);
	if (index !== -1) {
		posts.splice(index, 1);
	}
}

function updatePost(slug, updatedPost) {
	const index = posts.findIndex((p) => p.slug === slug);
	if (index !== -1) {
		posts[index] = { ...posts[index], ...updatedPost };
	}
}

export { posts, addPost, deletePost, updatePost };
