<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
</script>

<h3>Svelte est pas parfait</h3>
<h4>Accéder à un store dans une liste ou un objet</h4>

<CodeHighlight
	code={`const stores = [{store: writable(1)}, {store: writeable(2)}];
// ...
{#each stores as {store}}
    {$store} <!-- Fonctionne juste pas! -->
{/each}
`}
/>

<CodeHighlight
	code={`// Utiliser un derived pour extraire toutes les valeurs nécessaire en *un* seul store.
const stores = derived([writable(1), writable(2)], ([value1, value2]) => ([value1, value2]));

{#each $stores as value}
    {value}
{/each}
`}
/>
