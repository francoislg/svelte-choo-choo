<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp, oneTypeScriptComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
	import { createHistory } from './history.js';
	import Controls from "./Controls.svelte";

	const history = createHistory();

	setInterval(() => {
		history.push(Math.floor(Math.random() * 50));
	}, 1000);`,
			`
<h1>The current value is {$history.current}</h1>
<Controls label="#" {history} />

`
		),
		oneTypeScriptComp(
			'history',
			`import { derived, writable } from 'svelte/store';

export function createHistory() {
	const list = writable([]);
	const index = writable(-1);

	const {subscribe} = derived([list, index], ([list, index]) => {
		const lastIndex = list.length - 1;
		return {
			current: index !== -1 ? list[index] : null,
			currentIndex: index,
			lastIndex,
			hasNext: index !== lastIndex,
			hasPrevious: index > 0,
		}
	});

	return {
		subscribe,
		push: (tick) => {
			list.update(list => {
				index.update(index => {
					const isOnLastPage = index === list.length - 1;
					return isOnLastPage ? index + 1 : index;
				})
				return [...list, tick]
			});
		},
		next: () => index.update(i => i + 1),
		previous: () => index.update(i => i - 1),
		jump: (page) => index.set(page),
	}
}
`
		),
		oneSvelteComp(
			'Controls',
			`
	export let history;
	export let label;`,
			`
{#if $history.lastIndex > 0}
	<div>
		<button class="hidden" class:shown={$history.hasPrevious} on:click={history.previous}
			>Previous</button
		>
		<span>{label}{$history.currentIndex + 1}</span>
		<span class:shown={$history.currentIndex !== $history.lastIndex}>/{$history.lastIndex + 1}</span>
		<button class="hidden" class:shown={$history.hasNext} on:click={history.next}>Next</button>
		<button class="hidden" class:shown={$history.currentIndex !== $history.lastIndex} on:click={() => history.jump($history.lastIndex)}>Current</button>
	</div>
{/if}`,
			`
.hidden {
	opacity: 0;
	pointer-events: none;
}

.hidden.shown {
	opacity: 1;
	pointer-events: all;
}`
		)
	];
</script>

<EmbedRepl
	title="Stores - Exemple d'historique de la vraie vie vraie"
	project="Cooktree"
	{components}
/>
