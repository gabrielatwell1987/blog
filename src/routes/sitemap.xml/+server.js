export async function GET() {
	// For now, let's use static data for the sitemap
	// In a real app, this would come from your database
	const posts = [
		{
			slug: 'welcome-to-thinkflow',
			date: new Date().toISOString()
		}
	];

	// You can also get posts from localStorage in a browser context
	// but for server-side sitemap generation, we'll use static data
	const baseUrl = 'https://thinkdotflow.vercel.app';

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
	<!-- Homepage -->
	<url>
		<loc>${baseUrl}/</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
	
	<!-- About page -->
	<url>
		<loc>${baseUrl}/about</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.8</priority>
	</url>
	
	<!-- Posts listing page -->
	<url>
		<loc>${baseUrl}/posts</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>daily</changefreq>
		<priority>0.9</priority>
	</url>
	
	<!-- New post page -->
	<url>
		<loc>${baseUrl}/new</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>
	
	<!-- Individual blog posts -->
	${posts
		.map(
			(post) => `
	<url>
		<loc>${baseUrl}/posts/${post.slug}</loc>
		<lastmod>${new Date(post.date).toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`
		)
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=3600, public'
		}
	});
}
