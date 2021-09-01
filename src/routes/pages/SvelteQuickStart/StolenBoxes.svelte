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
					Build boilerplate-free components using languages you already know — HTML, CSS and
					JavaScript
				</p>
				<span class="learn-more">learn more</span></a
			>
		</div>
		<div
			class="box svelte-1377vhn"
			style="background: var(--flash); grid-area: two / two / two / two;"
		>
			<a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead"
				><h2>No virtual DOM</h2>
				<p>
					Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and
					stays fast
				</p>
				<span class="learn-more">learn more</span></a
			>
		</div>
		<div
			class="box svelte-1377vhn"
			style="background: var(--second); grid-area: three / three / three / three;"
		>
			<a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity"
				><h2>Truly reactive</h2>
				<p>
					No more complex state management libraries — Svelte brings reactivity to JavaScript itself
				</p>
				<span class="learn-more">learn more</span></a
			>
		</div>
		<div class="how svelte-1377vhn" style="grid-area: how;">
			<div style="grid-area: start; display: flex; flex-direction: column; min-width: 0">
				<pre
					class="language-bash"
					style="margin: 0 0 1em 0; min-width: 0; min-height: 0">npx degit <a href="https://github.com/sveltejs/template" style="user-select: initial;">sveltejs/template</a> my-svelte-project
    <span class="token comment"># or download and extract <a href="https://github.com/sveltejs/template/archive/master.zip">this .zip file</a></span>
    cd my-svelte-project
    <span class="token comment"># to use <a href="https://svelte.dev/blog/svelte-and-typescript">TypeScript</a> run:</span>
    <span class="token comment"># node scripts/setupTypeScript.js</span>
    
    npm install
    npm run dev</pre>
				<p style="flex: 1">
					See the <a href="https://svelte.dev/blog/the-easiest-way-to-get-started"
						>quickstart guide</a
					> for more information.
				</p>
				<p class="cta"><a rel="prefetch" href="https://svelte.dev/tutorial">Learn Svelte</a></p>
			</div>
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
	}
	.blurb.svelte-1377vhn {
		display: grid;
		grid-row-gap: 1em;
		grid-template-areas:
			'one'
			'two'
			'three'
			'what'
			'how';
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
