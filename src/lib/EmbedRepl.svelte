<script lang="ts">
	import Repl from '@sveltejs/svelte-repl';
	import { onMount } from 'svelte';

	export let code: string = '';
	let set;

	onMount(() => {
		if (code) {
			const defaultComponent = {
				name: 'App',
				type: 'svelte',
				source: code
			};

			const data = {
				components: [defaultComponent]
			};

			set(data);
		}
	});
</script>

<div style="height: 95%">
	<Repl workersUrl="/node_modules/@sveltejs/svelte-repl/workers" bind:set relaxed embedded />
</div>
