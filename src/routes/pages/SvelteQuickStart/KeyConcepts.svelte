<script>
    import CodeHighlight from "$lib/CodeHighlight.svelte";
    import { wrapScript, wrapStyle } from "$lib/replUtils";
</script>

<h3>Svelte est un compilateur de JavaScript + HTML + Scoped CSS</h3>
<CodeHighlight code={wrapScript("\nconst name = 'x';")} />
<CodeHighlight code={"<div class='something'>{name}</div>"} />
    <CodeHighlight code={wrapStyle("\n.something { display: flex; }")} />

<h3>const VS let</h3>
<CodeHighlight code="const name = 'x';" />
<CodeHighlight code={"let name = 'x'\n// ...\nname = 'y'"} />

<h3>export let</h3>
<CodeHighlight code={`export let thisispublic = 'x';
let thisisprivate = 'y';
`} />

<h3>Variables calculées faciles, en utilisant $:</h3>
<CodeHighlight code={"let premierChoix = 'x';\nlet deuxiemeChoix = 'y';\n$: choix = [premierChoix, deuxiemeChoix].filter(a => !!a);"} />

<h3>Logique à-la templates</h3>
<CodeHighlight code={"{#if name}\n  <div>{name}</div>\n{:else}\n  <div>Aucun nom</div>\n{/if}"} />
<CodeHighlight code={"{#each choix as {value}, index}\n  Choix #{index + 1}: {value}\n{/each}"} />