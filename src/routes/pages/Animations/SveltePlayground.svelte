<script lang="ts">
	import type { TransitionTypes } from '$lib/transitions';
	import { transition } from '$lib/transitions';
	import CodeHighlight from '../../../lib/CodeHighlight.svelte';

	const types: Array<{ name: string; value: TransitionTypes; code: string }> = [
		{
			name: 'Fly',
			value: 'fly',
			code: `<div in:fly={{ x: -500, duration: 500, delay: $animationDelay }} out:fly={{ duration: 500, x: 500 }}>
    <slot />
</div>`
		},
		{
			name: 'Fade',
			value: 'fade',
			code: `<div in:fade={{ duration: 500, delay: $animationDelay }} out:fade={{ duration: 500 }}>
    <slot />
</div>`
		}
	];

	$: selectedCode = types.find((t) => t.value === $transition).code;
</script>

<div class="pad">
	<h3>Animations</h3>
	{#each types as { value, name }}
		<button class:selected={$transition === value} on:click={() => ($transition = value)}
			>{name}</button
		>
	{/each}

    <CodeHighlight code={selectedCode} />
</div>

<style>
	.selected {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
