<script>
</script>

<footer>
	<p>&copy; {new Date().getFullYear()} <span>Think.Flow</span>. All rights reserved.</p>

	<p>
		Made by <a href="https://gabrielatwell.com">Gabe Atwell</a>
	</p>
</footer>

<style>
	footer {
		margin-top: auto;
		padding: 2rem;
		text-align: center;
		background-color: #f4f4f4;
		width: 100%;

		& p {
			margin: 0.5rem 0;
			font-size: clamp(0.9rem, 1.75vw, 1.3rem);
			font-weight: 500;
			color: #333;
			margin-right: 5em;

			@media (width <= 500px) {
				margin-right: 0;
			}

			& span {
				font-size: clamp(1rem, 1.75vw, 1.75rem);
				font-weight: 700;
				color: var(--accent);
			}

			& a {
				color: inherit;
				text-decoration: none;
				border-bottom: 2px dashed currentColor;
				transition: color 0.2s ease;

				&:hover {
					color: var(--accent);
				}
			}
		}

		@media (width <= 500px) {
			padding: 0;
		}
	}
</style>
