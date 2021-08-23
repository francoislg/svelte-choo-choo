<script lang="ts">
	import { quadInOut } from 'svelte/easing';

	export let delay = 0;
	let index = 0;
	let hearts = [createHeart()];

	function createHeart() {
		const startX = Math.random() * 100;
		return { id: index++, left: startX + "%", bottom: "0px", duration: 5000 };
	}

	// Not super clean, but hey, works OK!
	function wave(node: HTMLElement, { duration }) {
		const speedX = 50 + (Math.random() - 0.5) * 100;
		const easeFlip = Math.random() > 0.5;
		const speedY = 120 + (Math.random() - 0.5) * 30;
		return {
			duration,
			easing: quadInOut,
			css: (t) => {
				let expo = 1;
				if (t < 0.1) {
					expo = t * 10;
				}
				if (t > 0.9) {
					expo = 1 - (t - 0.9) * 10;
				}

				return `
					transform: translate(
						${easeFlip ? '' : '-'}${Math.floor(t * speedX)}px,
						-${Math.floor(t * speedY)}px
                    );
                    opacity: ${expo.toFixed(1)};`;
			}
		};
	}

	setTimeout(() => {
		setInterval(() => {
			hearts = [...hearts, createHeart()];
		}, Math.random() * 4000 + 500);

		setInterval(() => {
			hearts = [...hearts, createHeart()];
		}, Math.random() * 2000 + 1000);
	}, delay);

	setTimeout(() => {
		hearts = [...hearts, createHeart()];
	}, delay + 500);

	setTimeout(() => {
		hearts = [...hearts, createHeart()];
	}, delay + 1000);
</script>

<div class="container">
	{#each hearts as { id, duration, bottom, left } (id)}
		<img
			src="/heart.png"
			alt="heart"
			class="heart"
			width="32"
			height="32"
			style="left: {left}; bottom: {bottom};"
			in:wave={{ duration }}
			on:introend={() => (hearts = hearts.filter((h) => h.id !== id))}
		/>
	{/each}
	<img src="/heart.png" alt="heart" class="heart" width="32" height="32" />
</div>

<style>
	.container {
		position: relative;
		height: 200px;
		width: 100%;
	}

	.heart {
		position: absolute;
		opacity: 0;
		bottom: 0px;
		transform: translate(100%);
	}
</style>
