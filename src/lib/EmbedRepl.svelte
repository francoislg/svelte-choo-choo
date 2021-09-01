<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';

	export let title: string;
	export let project: string = '';
	export let components: Array<{
		name: string;
		source: string;
		type?: string;
	}> = [];
	let set;

	let ReplComponent;

	onMount(async () => {
		await import('codemirror/addon/display/fullscreen.js');
		console.log();
		ReplComponent = (await import('@sveltejs/svelte-repl')).default;
	});

	$: {
		if (!!set && components) {
			set({
				components: components.map((c, index) => ({
					// App is required on the first file somehow, otherwise an error is thrown :shrug:
					name: index === 0 ? 'App' : c.name,
					source: c.source,
					type: c.type || 'svelte'
				}))
			});
		}
	}
</script>

<div class="title">
	{title}
	{#if project}
		<span>({project})</span>
	{/if}
</div>
<div class="repl">
	<svelte:component
		this={ReplComponent}
		workersUrl="/workers"
		bind:set
		on:change={(args) => console.log(args)}
	/>
</div>

<CoveoShape width={800} color="green" position="bottom" />

<style>
	.title {
		display: block;
		background-color: var(--bright-turquoise);
		padding: 20px;
	}

	.repl {
		--second: var(--bright-turquoise);
		background-color: var(--background);
		position: relative;
		height: 85%;
		width: 100%;
		border-bottom: 1px solid var(--bright-turquoise);
		font-size: 1.25em;
	}
</style>
