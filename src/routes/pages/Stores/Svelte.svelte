<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Stores - Svelte Way</h3>
	<CodeHighlight code={`export const count = writable(0);\n$count = 1;\n\n<div>{$count}</div>`} />
	<CodeHighlight
		code={`export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});\n\n<div>{$time}</div>`}
	/>
	<CodeHighlight
		code={`export const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
);\n\n<div>{$elapsed}</div>`}
	/>
	<CodeHighlight
		code={`function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

const counter = createCount();

<button on:click={() => counter.increment()} />
`}
	/>
</div>

<CoveoShape color="blue" position="bottom" randomize />
