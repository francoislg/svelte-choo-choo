<script lang="ts">
	import { NUMBER_OF_PAGES, page } from './page';

	$: value = $page;

	function onKeyDown(event) {
		if (event.code === 'Enter') {
			$page = value;
		}
	}
</script>

<input type="number" bind:value min={0} max={NUMBER_OF_PAGES} on:keydown={onKeyDown} />
