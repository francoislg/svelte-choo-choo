<script lang="ts">
	import { onMount } from 'svelte';

	export let components: Array<{
		name: string;
		source: string;
		type?: string;
	}> = [];
	let set;

	let ReplComponent;

	onMount(async () => {
		ReplComponent = (await import('@sveltejs/svelte-repl')).default;
	});

	$: {
		if (set && components) {
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

<div style="height: 95%">
	<svelte:component
		this={ReplComponent}
		workersUrl="/workers"
		bind:set
		relaxed
		embedded
	/>
</div>
