<script>
	import { getPosts } from '$lib/data/stores.svelte.js';
	import { browser } from '$app/environment';

	const STORAGE_KEY = 'think-flow-posts';
	const posts = getPosts();

	// Only run localStorage operations in the browser
	if (browser) {
		// Load posts from localStorage on component mount
		try {
			const storedPosts = localStorage.getItem(STORAGE_KEY);
			if (storedPosts) {
				const parsedPosts = JSON.parse(storedPosts);
				posts.splice(0, posts.length, ...parsedPosts);
			}
		} catch (error) {
			console.error('Failed to load posts from localStorage:', error);
		}

		// Save posts to localStorage whenever they change
		$effect(() => {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
			} catch (error) {
				console.error('Failed to save posts to localStorage:', error);
			}
		});
	}
</script>
