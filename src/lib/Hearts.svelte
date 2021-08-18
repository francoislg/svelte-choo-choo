<script lang="ts">
	import { elasticInOut, backInOut, quadInOut } from 'svelte/easing';

    let index = 0;
	let hearts = [{ id: index++, duration: 5000 }];
	let container: HTMLElement;

    // Not super clean, but hey, works OK!
	function wave(node, { duration }) {
        const startX = Math.floor(Math.random() * 250);
        const startY = Math.floor(Math.random() * 50) + 10;
        const speedX = 50 + ((Math.random() - 0.5) * 100);
        const easeFlip = Math.random() > 0.5;
        const speedY = 70 + ((Math.random() - 0.5) * 30);
		return {
			duration,
			css: (t) => {
				const animX = elasticInOut(t);
                const animY = backInOut(t);
				let expo = 1;
                if (t < 0.1) {
                    expo = quadInOut(t * 10);
                }
                if (t > 0.9) {
                    expo = 1 - quadInOut(((t - 0.9) * 10));
                }

				return `
					transform: translate(
                        calc(${startX}px ${easeFlip ? '+' : '-'} ${Math.floor(animX * speedX)}px),
                        calc(-${startY}px - ${Math.floor(animY * speedY)}px)
                    );
                    opacity: ${expo.toFixed(1)};`;
			}
		};
	}

	setTimeout(() => {
		hearts = [...hearts, { id: index++, duration: 8000 }];
	}, 500);

	setTimeout(() => {
		hearts = [...hearts, { id: index++, duration: 8000 }];
	}, 1000);

    setInterval(() => {
		hearts = [...hearts, { id: index++, duration: 8000 }];
	}, Math.random() * 4000 + 500);

	setInterval(() => {
		hearts = [...hearts, { id: index++, duration: 8000 }];
	}, Math.random() * 2000 + 1000);
</script>

<div class="container" bind:this={container}>
	{#each hearts as {id, duration} (id)}
		<img
			src="/heart.png"
			alt="heart"
			class="heart"
			width="32"
			height="32"
			in:wave={{ duration }}
            on:introend={() => (hearts = hearts.filter((h) => h.id !== id))}
		/>
	{/each}
    <img
			src="/heart.png"
			alt="heart"
			class="heart"
			width="32"
			height="32" />
</div>

<style>
	.container {
		position: relative;
        height: 200px;
        width: 300px;
	}

    .heart {
        position: absolute;
        opacity: 0;
        bottom: 0px;
        left: 0px;
        transform: translate(calc(100%));
    }
</style>
