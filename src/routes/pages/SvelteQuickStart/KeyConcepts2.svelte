<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import { wrapScript, wrapStyle } from '$lib/replUtils';
</script>

<div class="pad">
	<h3>Variables calculées faciles, en utilisant $:</h3>
	<CodeHighlight
		code={"let premierChoix = 'x';\nlet deuxiemeChoix = 'y';\n$: choix = [premierChoix, deuxiemeChoix].filter(a => !!a);"}
	/>

	<h3>Logique à-la templates</h3>
	<CodeHighlight code={'{#if name}\n  <div>{name}</div>\n{:else}\n  <div>Aucun nom</div>\n{/if}'} />
	<CodeHighlight code={'{#each choix as {value}, index}\n  Choix #{index + 1}: {value}\n{/each}'} />
</div>
