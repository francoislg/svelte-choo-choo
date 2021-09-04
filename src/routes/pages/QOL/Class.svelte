<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { onlyOneSvelteComp } from '$lib/replUtils';

	const components = onlyOneSvelteComp(
		`
	let color = 'blue';
	let isColored = false;`,
		`
<div class="square" class:colored={isColored}></div>
<div><label><input type="checkbox" bind:checked={isColored} />Appliquer la classe</label></div>
`,
		`
.square { width: 50px; height: 50px; border: 2px solid black }
.colored {background-color: orange}
input {
	margin-right: 5px;
}`
	);
</script>

<EmbedRepl title="QOL - Class shortcuts" {components} />
