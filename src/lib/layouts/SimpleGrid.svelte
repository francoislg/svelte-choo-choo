<script>
	export let twoColumns = false;
</script>

<div class="grid" class:twoColumns>
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px;
		width: 100%;
	}

	.grid.twoColumns {
		grid-template-columns: repeat(2, 1fr);
	}
</style>
