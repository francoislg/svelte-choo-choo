<script>
	// Started from: https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
	// Really amazing and simple idea, kudos!
	import { fly, fade } from 'svelte/transition';
	import { animationDelay } from './page';
	import { transition } from './transitions';
	export let refresh = '';
</script>

{#key refresh}
	{#if $transition === 'fly'}
		<div in:fly={{ x: 500, duration: 500, delay: $animationDelay }} out:fly={{ duration: 500, x: -500 }}>
			<slot />
		</div>
	{:else if $transition === 'fade'}
		<div in:fade={{ duration: 500, delay: $animationDelay }} out:fade={{ duration: 500 }}>
			<slot />
		</div>
	{/if}
{/key}

<style>
	div {
		height: 100%;
	}
</style>
