<script>
	import { fade, fly } from 'svelte/transition';
	import { page } from './page';
	import { swiper } from './swipe';

	let showLeft;
	let showRight;

	export let onSwipeUp;
	export let onSwipeDown;

	function reset() {
		showLeft = false;
		showRight = false;
	}
</script>

<svelte:window
	use:swiper={{
		onLeftSwipe: () => {
			page.next();
			reset();
		},
		onRightSwipe: () => {
			page.previous();
			reset();
		},
		onTriggerLeftSwipe: () => (showRight = true),
		onTriggerRightSwipe: () => (showLeft = true),
		onReset: reset,
		onSwipeUp: onSwipeUp,
		onSwipeDown: onSwipeDown
	}}
/>

{#if showLeft}
	<div class="floating-arrow left" in:fly={{ x: -500 }} out:fade>👈</div>
{/if}
{#if showRight}
	<div class="floating-arrow right hidden" in:fly={{ x: 500 }} out:fade>👉</div>
{/if}

<style>
	.floating-arrow {
		position: fixed;
		top: 50%;
		font-size: 5em;
	}

	.left {
		left: 25%;
	}

	.right {
		right: 25%;
	}
</style>
