<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';

	export let code: string;
</script>

<HighlightSvelte {code} class="highlight" />

<style>
	:global(.highlight) {
		border-radius: 5px;
		padding: 10px 10px;
	}
</style>