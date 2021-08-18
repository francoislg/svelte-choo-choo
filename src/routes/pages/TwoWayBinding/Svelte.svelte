<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { onlyOneSvelteComp } from '$lib/replUtils';

	const components = onlyOneSvelteComp(`
let name = 'Heu, Mr Spock?';`,
		`
<input bind:value={name} />
<div>Mon nom est: {name}</div>
`,
		''
	);
</script>

<EmbedRepl title="Two-Way Binding - Svelte Way" {components} />
