<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';

	export let code: string;
	export let full = false;
</script>

<HighlightSvelte {code} class="highlight {full ? 'full' : ''}" />

<style>
	:global(.highlight) {
		border-radius: 5px;
		border: 1px solid #22272e;
		padding: 10px 10px;
		font-size: 1.25em;

		width: 70%;
		tab-size: 4;
	}

	:global(.highlight.full) {
		width: 100%;
	}

	@media only screen and (max-width: 1024px) {
		:global(.highlight) {
			width: 100%;
		}
	}
</style>
