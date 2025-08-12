<script>
	/** @type {{title: string, description: string, keywords?: string, canonical?: string, type?: string, image?: string, imageAlt?: string, author?: string, publishedTime?: string, modifiedTime?: string, noindex?: boolean}} */
	let {
		title,
		description,
		keywords = '',
		canonical = null,
		type = 'website',
		image = null,
		imageAlt = 'Think.Flow - Digital Journaling Platform',
		author = null,
		publishedTime = null,
		modifiedTime = null,
		noindex = false
	} = $props();

	let siteName = 'Think.Flow';

	// Use simple string operations without complex reactivity
	let robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
	let canonicalHref = canonical || '/';
	let imageUrl = image || '/logos/Think.Flow.svg';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<title>{title}</title>
	<link rel="canonical" href={canonicalHref} />

	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<meta name="robots" content={robotsContent} />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={imageAlt} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#if type === 'article' && author}
		<meta property="article:author" content={author} />
	{/if}
	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}
</svelte:head>
