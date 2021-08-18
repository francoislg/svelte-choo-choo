<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
</script>

<div class="pad">
	<h3>Stores - Svelte Way</h3>
	<CodeHighlight code={`export const count = writable(0);\n$count = 1;`} />
	<CodeHighlight
		code={`export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});`}
	/>
	<CodeHighlight
		code={`export const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
);`}
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
}`}
	/>
</div>
