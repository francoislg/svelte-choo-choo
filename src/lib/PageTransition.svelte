<script>
	// Started from: https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
	// Really amazing and simple idea, kudos!
	import { fly, fade } from 'svelte/transition';
	import Train from './icons/train.svelte';
	import { animationDelay, page } from './page';
	import { transition } from './transitions';
	export let refresh = '';

	const pagesWithTrain = [10, 16, 20, 26, 30];
	const pagesAfterTrain = pagesWithTrain.map(p => p + 1);
	$: pageOnTrain = pagesWithTrain.includes($page);
	$: pageAfterTrain = pagesAfterTrain.includes($page);
	$: baseDelay = pageAfterTrain ? 1000 : 500;
	$: baseMovement = pageAfterTrain ? 1000 : 500;
</script>

{#key refresh}
	{#if $transition === 'fly'}
		<div
			in:fly={{ x: baseMovement, duration: baseDelay, delay: baseDelay }}
			out:fly={{ duration: baseDelay, x: -baseMovement }}
		>
			<slot />
			{#if pageOnTrain}
				<div class="train">
					<Train />
				</div>
			{/if}
		</div>
	{:else if $transition === 'fade'}
		<!-- This feature was removed from the presentation, but leaving it here for educational purposes -->
		<div in:fade={{ duration: 500, delay: $animationDelay }} out:fade={{ duration: 500 }}>
			<slot />
		</div>
	{/if}
{/key}

<style>
	div {
		height: 100%;
	}

	.train {
		position: absolute;
		right: -30vh;
		top: 40%;
		height: 100%;
		width: 30vh;
	}
</style>
