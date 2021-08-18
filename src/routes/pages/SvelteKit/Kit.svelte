<script context="module">
	export async function load() {
		const allerChercherDuData = () => Promise.resolve('Du serveur?');
		return {
			props: {
				serverSide: await allerChercherDuData()
			}
		};
	}
</script>

<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';

	export let serverSide;
</script>

<div class="pad">
	<h3>Routing & Layout & API</h3>
	<CodeHighlight
		code={`routes/pages/SvelteKit/Kit.svelte
routes/pages/__layout.svelte
routes/[slug].svelte
routes/[slug].json.js`}
	/>
	<h3>Server-Side Rendering</h3>
	<CodeHighlight code={serverSide} />
	<h3>Adapters & Bundling</h3>
	<CodeHighlight
		code={`const config = {
    preprocess: preprocess(),

    kit: {
        target: '#svelte',
        adapter: netlify(), // or static() or vercel() or cloudflareWorker()
        ...
`}
	/>
	<CodeHighlight code={`svelte-kit package`} />
	<h3>Hot Reload</h3>
	<CodeHighlight code={`Quoi ?`} />
	<div class="hidden">C'est caché</div>
</div>

<style>
	.hidden {
		display: none;
		color: var(--pomegranate);
	}
</style>
