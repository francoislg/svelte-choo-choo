<script>
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';
	import Card from '$lib/style/Card.svelte';
    import Grid from "$lib/layouts/SimpleGrid.svelte";
</script>


<h3>Sujets pour aujourd'hui</h3>
<div class="subjects">
	<Grid>
		<div in:fly={{ delay: $animationDelay * 1 }}><Card>Introduction à Svelte</Card></div>
		<div in:fly={{ delay: $animationDelay * 2 }}><Card>Two-Way Binding</Card></div>
		<div in:fly={{ delay: $animationDelay * 3 }}><Card>Stores</Card></div>
		<div in:fly={{ delay: $animationDelay * 4 }}><Card>#await</Card></div>
		<div in:fly={{ delay: $animationDelay * 5 }}><Card>transitions</Card></div>
		<div in:fly={{ delay: $animationDelay * 6 }}><Card>Slots VS Children</Card></div>
		<div in:fly={{ delay: $animationDelay * 7 }}><Card>Quality of Life Potpourri</Card></div>
		<div in:fly={{ delay: $animationDelay * 8 }}><Card>Svelte Kit</Card></div>
	</Grid>
</div>

<style>
	.subjects {
		padding: 10px;
	}
</style>
