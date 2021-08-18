<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import CoveoIcon from '$lib/icons/coveo-icon.svelte';
	import { wrapScript, wrapStyle } from '$lib/replUtils';

	let visible = true;
</script>

<div class="pad">
	<h3>Animations - Svelte Way</h3>
	<div class="icon">
		{#if visible}
			<CoveoIcon />
		{/if}
	</div>
	<button on:click={() => (visible = !visible)}>Repeat</button>
	<CodeHighlight
		code={`${wrapScript(`
	import { animationDelay } from '$lib/page';
	import { drawThenFill } from '$lib/transitions/draw-then-fill';`)}

<svg
	width="100%"
	height="100%"
	viewBox="0 0 199.8 165.6"
>
	${wrapStyle("...")}
	<g>
		<g>
			<path
				in:drawThenFill={{ delay: $animationDelay }}
				class="st0"
				d="M124.7,15c-8.9-8.9-20.3-13.9-31.9-15c-1.4-0.1-2.2,1.6-1.2,2.6l18.7,18.7c0.1,0.1,0,0.3-0.2,0.2
			c-5.3-3.9-11.5-6.1-17.8-6.7c-1-0.1-1.5,1.1-0.8,1.8l12.7,12.7c0.1,0.1,0,0.3-0.2,0.2c-3.5-2.4-7.5-3.8-11.6-4.2
			c-0.7-0.1-1.1,0.8-0.6,1.2l21.7,21.7c0.5,0.5,1.3,0.1,1.2-0.6c-0.4-4.1-1.8-8.1-4.2-11.6c-0.1-0.1,0.1-0.3,0.2-0.2L123,48.2
			c0.7,0.7,1.9,0.2,1.8-0.8c-0.6-6.3-2.8-12.4-6.7-17.8c-0.1-0.1,0.1-0.3,0.2-0.2l18.7,18.7c1,1,2.7,0.2,2.6-1.2
			C138.6,35.2,133.6,23.9,124.7,15"
			/>
			<path
				in:drawThenFill={{ delay: $animationDelay * 2 }}
				class="st1"
				d="..."
			/>
			<path
				in:drawThenFill={{ delay: $animationDelay * 3 }}
				class="st2"
				d="..."
			/>
			<path
				in:drawThenFill={{ delay: $animationDelay * 4 }}
				class="st3"
				d="..."
			/>
		</g>
		// ...
	</g>
</svg>
`}
	/>
</div>

<style>
	.icon {
		height: 120px;
	}
</style>
