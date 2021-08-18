<script lang="ts">
	import { fly } from 'svelte/transition';
	import { animationDelay } from '../page';

	export let width: number;
	export let color: 'yellow' | 'blue' | 'red' | 'green';
	export let position: 'bottom' | 'top' | 'left' | 'right';
	export let delay: number = $animationDelay * 2;

	let realWidth = width / Math.sqrt(2);

	let radius;
	if (width < 100) {
		radius = 8;
	} else if (width < 200) {
		radius = 16;
	} else if (width < 400) {
		radius = 24;
	} else if (width < 600) {
		radius = 32;
	} else if (width < 800) {
		radius = 40;
	} else if (width <= 1000) {
		radius = 48;
	}

	const defaults = {
		flyX: 0,
		flyY: 0,
		top: undefined,
		left: undefined,
		bottom: undefined,
		right: undefined
	};

	const positionParams: { [name: string]: Partial<typeof defaults> } = {
		bottom: {
			flyY: 200,
			bottom: -width / 2.5,
			right: -width / 10
		},
		top: {
			flyY: -200,
			left: -width / 10,
			top: -width / 2
		},
		left: {
			flyX: -200,
			left: -width / 2.5,
			top: 0
		},
		right: {
			flyX: 200,
			right: -width / 2.5
		}
	};

	const params = {
		...defaults,
		...positionParams[position]
	};
</script>

<div
	class="background"
	style="top: {params.top}px; bottom: {params.bottom}px; left: {params.left}px; right: {params.right}px"
	in:fly={{
		delay,
		x: params.flyX,
		y: params.flyY
	}}
>
	<div
		class="shape {color}"
		style="width: {realWidth}px; height: {realWidth}px; border-radius: {radius}px;"
	>
		<div class="content">
			<slot />
		</div>
	</div>
</div>

<style>
	.background {
		position: fixed;
		z-index: -1;
	}

	.shape {
		transform: rotateZ(45deg);
	}

	.content {
		/* :shrug: it works */
		transform: rotateZ(-45deg);
	}

	.red {
		background-color: var(--pomegranate);
	}

	.blue {
		background-color: var(--cerulean);
	}

	.yellow {
		background-color: var(--turbo);
	}

	.green {
		background-color: var(--bright-turquoise);
	}
</style>
