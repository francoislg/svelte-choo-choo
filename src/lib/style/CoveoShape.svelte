<script lang="ts">
	import { fly } from 'svelte/transition';
	import { animationDelay } from '../page';

	export let width: number = 800;
	export let color: 'yellow' | 'blue' | 'red' | 'green';
	export let position: 'bottom' | 'top' | 'left' | 'right';
	export let delay: number = $animationDelay * 2;
	export let randomize: boolean = false;

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

	function randomizedX() {
		return randomize ? Math.random() * 100 : 0;
	}

	function randomizedY() {
		return randomize ? Math.random() * 100 : 0;
	}

	const positionParams: { [name: string]: Partial<typeof defaults> } = {
		bottom: {
			flyY: 200,
			bottom: `${-width / 2.5}px`,
			right: `calc(${randomizedX()}%`
		},
		top: {
			flyY: -200,
			left: `calc(${randomizedX()}%`,
			top: `${-width / 2}px`
		},
		left: {
			flyX: -200,
			left: `${-width / 2.5}px`,
			top: randomizedY() + '%'
		},
		right: {
			flyX: 200,
			right: `${-width / 2.5}px`,
			top: randomizedY() + '%'
		}
	};

	const params = {
		...defaults,
		...positionParams[position]
	};
</script>

<div
	class="background"
	style="top: {params.top}; bottom: {params.bottom}; left: {params.left}; right: {params.right}"
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
		/* revert the shape transform, :shrug: it works */
		transform: rotateZ(-45deg);
	}

	/* Adjustments to pad for 4k, just in case */

	@media (min-width: 2600px) {
		.shape {
			transform: scale(2) rotateZ(45deg);
		}

		.content {
			margin-left: -200px;
			transform: scale(0.5) rotateZ(-45deg);
		}
	}

	@media (max-width: 600px) {
		.content {
			margin-left: 200px;
		}
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
