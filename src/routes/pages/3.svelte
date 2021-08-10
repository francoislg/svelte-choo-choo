<script>
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';
	import Card from '$lib/style/Card.svelte';
    import Grid from "$lib/layouts/SimpleGrid.svelte";
</script>

<div>
	<img in:fly={{ delay: $animationDelay }} src="/me.png" alt="profile" />
	<div class="achievements">
		<Grid>
			<div in:fly={{ delay: $animationDelay * 2 }}><Card>0 talks</Card></div>
			<div in:fly={{ delay: $animationDelay * 3 }}><Card>0 déploiments</Card></div>
			<div in:fly={{ delay: $animationDelay * 4 }}>
				<Card>5 ans chez Coveo dans l'équipe de Commerce (Full-stack, spécialiste front-end)</Card>
			</div>
			<div in:fly={{ delay: $animationDelay * 5 }}>
				<Card>Très bonne expertise React + Redux</Card>
			</div>
		</Grid>
	</div>
</div>

<style>
	.achievements {
		display: flex;
		flex-wrap: wrap;
	}

	.achievements > div {
		max-width: 25%;
		flex: 1;
	}
</style>
