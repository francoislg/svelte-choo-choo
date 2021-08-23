<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import { wrapScript, wrapStyle } from '$lib/replUtils';
import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Svelte est un compilateur de JavaScript + HTML + Scoped CSS</h3>
	<CodeHighlight code={wrapScript("\nconst name = 'x';")} />
	<CodeHighlight code={"<div class='something'>{name}</div>"} />
	<CodeHighlight code={wrapStyle('\n.something { display: flex; }')} />

	<h3>const VS let</h3>
	<CodeHighlight code="const name = 'x';" />
	<CodeHighlight code={"let name = 'x'\n// ...\nname = 'y'"} />

	<h3>export let</h3>
	<CodeHighlight
		code={`export let thisispublic = 'x';
let thisisprivate = 'y';
`}
	/>
</div>

<CoveoShape color="red" position="right" randomize />