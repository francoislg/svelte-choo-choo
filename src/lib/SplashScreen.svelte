<script>
	import { onDestroy, onMount } from 'svelte';

	import { getLayoutContext } from './LayoutContext';

	export let text;

	const layout = getLayoutContext();

	onMount(() => {
		layout.showLogo(false);
	});

	onDestroy(() => {
		layout.showLogo(true);
	});
</script>

<div class="splash">
	<h1>
		{text}
	</h1>
	<slot />
	{#if $$slots.icon}
		<div class="icon">
			<slot name="icon" />
		</div>
	{/if}
</div>

<style>
	.splash {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;

		background-color: var(--splash-color);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

    .icon {
        width: 128px;
        height: 128px;
		fill: white;
    }

	h1 {
		color: white;
		font-size: 5em;
	}
</style>
