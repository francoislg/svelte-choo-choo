<script>
	import { delayed } from '$lib/page';

	const delay = delayed();
</script>

<!-- These boxes were ripped from svelte.dev just to show that it's just simple HTML and CSS -->
<div class="pad">
	<h3>Svelte, défini par Svelte</h3>
	<div class="blurb svelte-1377vhn">
		<div
			class="box svelte-1377vhn"
			style="background: var(--prime); grid-area: one / one / one / one;"
		>
			<a href="https://svelte.dev/blog/write-less-code"
				><h2>Write less code</h2>
				<p>
					Une métrique de code qui était autrefois inutile
				</p>
		</div>
	</div>
</div>

<style>
	.blurb {
		--back: #ffffff;
		--back-light: #f6fafd;
		--back-api: #eff8ff;
		--prime: #ff3e00;
		--second: #676778;
		--flash: #40b3ff;
		--heading: var(--second);
		--text: #444;
		--sidebar-text: rgba(255, 255, 255, 0.75);
		--border-w: 0.3rem;
		--border-r: 0.4rem;
		width: 100%;
		font-size: 3em;
	}


	.box.svelte-1377vhn a {
		color: white;
		padding: 0;
		border: none;
	}

	.blurb.svelte-1377vhn {
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
			'one two'
			'three how'
			'what what';
	}

	.box.svelte-1377vhn {
		padding: 1em;
		display: flex;
		flex-direction: column;
		border-bottom: none;
	}

	a {
		text-decoration: none;
	}
</style>
