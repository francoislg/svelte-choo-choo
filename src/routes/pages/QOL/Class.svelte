<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { onlyOneSvelteComp } from '$lib/replUtils';

	const components = onlyOneSvelteComp(
		`
	let color = 'blue';
	let colored = false;`,
		`
<div class="square" class:colored></div>
<div><input type="checkbox" bind:checked={colored} /></div>

<div class="square colored {color}"></div>
<div><input bind:value={color} /></div>
`, `
.square { width: 50px; height: 50px; border: 2px solid black }
.colored {background-color: orange}
.colored.red { background-color: red}
.colored.blue { background-color: blue}`
	);
</script>

<EmbedRepl title="QOL - Class shortcuts" {components} />
