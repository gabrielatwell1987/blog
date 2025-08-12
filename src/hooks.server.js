/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Continue with normal request handling
	const response = await resolve(event);

	// Add security headers for better SEO and security
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	return response;
}
