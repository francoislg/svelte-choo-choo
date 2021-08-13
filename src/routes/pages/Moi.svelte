<script>
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';
	import Card from '$lib/style/Card.svelte';
    import Grid from "$lib/layouts/SimpleGrid.svelte";
    import Hearts from "$lib/Hearts.svelte";
</script>

<div>
	<img in:fly={{ delay: $animationDelay }} src="/me.jpg" alt="profile" />
	<div class="achievements">
		<h3 in:fly={{ delay: $animationDelay * 2 }}>Personel</h3>
		<Grid>
			<div in:fly={{ delay: $animationDelay * 2 }}><Card>0 talks</Card></div>
			<div in:fly={{ delay: $animationDelay * 3 }}><Card>0 start-up</Card></div>
			<div in:fly={{ delay: $animationDelay * 4 }}><Card>0 applications lancées par moi-même en production</Card></div>
			<div in:fly={{ delay: $animationDelay * 5 }}>
				<Card>5 ans chez Coveo dans l'équipe de Commerce (Full-stack, spécialiste front-end)</Card>
			</div>
		</Grid>
	</div>
	<div class="achievements">
		<h3 in:fly={{ delay: $animationDelay * 7 }}>Svelte & Moi</h3>
		<Grid>
			<div in:fly={{ delay: $animationDelay * 8 }}><Card>Réécriture de notre plateforme de Hackathon Coveo en Svelte (en cours)</Card></div>
			<div in:fly={{ delay: $animationDelay * 9 }}><Card>App de visualisation des matchs de Coveo Blitz</Card></div>
			<div in:fly={{ delay: $animationDelay * 10 }}>
				<Card>Réécriture complète d'une moyenne app (pas encore lancée) de React à Svelte</Card>
			</div>
			<div in:fly={{ delay: $animationDelay * 11 }}>
				<Card>
					<Hearts />
				</Card>
			</div>
		</Grid>
	</div>
</div>

<style>
	img {
		border-radius: 500px;
		width: 500px;
		height: 500px;
	}

	.achievements {
		display: flex;
		flex-wrap: wrap;
	}

	.achievements > div {
		max-width: 25%;
		flex: 1;
	}
</style>
