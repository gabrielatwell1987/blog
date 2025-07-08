<script>
	import { page } from '$app/stores';

	/** @type {{title: string, description: string, keywords?: string, canonical?: string, type?: string, image?: string, imageAlt?: string, author?: string, publishedTime?: string, modifiedTime?: string}} */
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
		modifiedTime = null
	} = $props();

	let url = $derived($page.url.href);
	let siteName = 'Think.Flow';
	let baseUrl = $derived($page.url.origin);

	// Canonical URL logic - removes query parameters and fragments for cleaner URLs
	let canonicalUrl = $derived(() => {
		if (canonical) {
			// If canonical is provided as a prop, use it (can be relative or absolute)
			return canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
		}

		// Default: use current URL without query parameters and fragments
		const cleanUrl = new URL(url);
		cleanUrl.search = '';
		cleanUrl.hash = '';
		return cleanUrl.href;
	});

	// Dynamic image URL
	let imageUrl = $derived(
		image
			? image.startsWith('http')
				? image
				: `${baseUrl}${image}`
			: `${baseUrl}/logos/Think.Flow.svg`
	);

	// Dynamic page type for structured data
	let schemaType = $derived(type === 'article' ? 'BlogPosting' : 'WebSite');
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>{title}</title>
	<link rel="canonical" href={canonicalUrl} />

	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	<meta name="robots" content="index, follow" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={imageAlt} />
	{#if type === 'article' && author}
		<meta property="article:author" content={author} />
	{/if}
	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	<script type="application/ld+json">
        {JSON.stringify(schemaType === 'BlogPosting' ? {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "url": canonicalUrl,
            "author": author ? {
                "@type": "Person",
                "name": author
            } : {
                "@type": "Organization",
                "name": siteName
            },
            "publisher": {
                "@type": "Organization",
                "name": siteName,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logos/Think.Flow.svg`
                }
            },
            "image": imageUrl,
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl
            }
        } : {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "description": "A modern digital journaling and blogging platform designed for seamless thought capture and content management.",
            "url": canonicalUrl,
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${baseUrl}/posts?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        })}
	</script>
</svelte:head>
