<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { onlyOneSvelteComp } from '$lib/replUtils';

	const components = onlyOneSvelteComp(`  let name = 'something';`,
		`<input bind:value={name} />
<div>Mon nom est: {name}</div>
`,
		''
	);
</script>

<h3>Two-Way Binding</h3>
<EmbedRepl code={components[0].source} />
