<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
  import Checkbox from "./Checkbox.svelte";
  let checkedList = [true];

  $: allChecked = checkedList.every(c => c);
  $: noneChecked = checkedList.every(c => !c)`,
			`
<Checkbox label="Allo" bind:checked={checkedList[0]} />
<Checkbox label="Toi" bind:checked={checkedList[1]} />
<div>All? {allChecked}</div>
<div>None? {noneChecked}</div>
 `
		),
		oneSvelteComp(
			'Checkbox',
			`
  export let label;
  export let checked;`,
			`
<label>
  {label}
  <input type="checkbox" bind:checked={checked}>
</label>`,
			''
		)
	];
</script>

<EmbedRepl title="Two-Way Binding - Component Input" {components} />
