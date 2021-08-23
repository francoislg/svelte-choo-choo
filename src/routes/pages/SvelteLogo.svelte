<script>
	import ReactIcon from '$lib/icons/reactjs-icon.svelte';
	import SvelteIcon from '$lib/icons/svelte-icon.svelte';
	import Train from '$lib/icons/train.svelte';
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';

	let transitioned = false;
</script>

<div class="pad logo">
	{#if transitioned}
		<div
			in:fly={{ x: -1500, duration: $animationDelay * 2, opacity: 1 }}
			out:fly={{ x: 1500, duration: $animationDelay }}
			class="container"
		>
			<div class="svelte stack">
				<SvelteIcon delay={$animationDelay * 2} />
			</div>
			<div class="train stack">
				<Train />
			</div>
		</div>
	{:else}
		<div out:fly={{ x: 500 }} class="logo">
			<ReactIcon />
		</div>
	{/if}
</div>

<svelte:window on:click={() => (transitioned = true)} />

<style>
	.logo {
		height: 100%;
	}

	.container {
		position: fixed;
		/* good enough */
		top: 35%;
		left: 35%;
	}

	.stack {
		position: absolute;
		width: 700px;
		height: 70px;
	}

	.svelte {
		left: 70px;
		top: 120px;
		width: 250px;
		height: 250px;
	}
</style>
