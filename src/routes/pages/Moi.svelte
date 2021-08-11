<script>
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';
	import Card from '$lib/style/Card.svelte';
    import Grid from "$lib/layouts/SimpleGrid.svelte";
</script>

<div>
	<img in:fly={{ delay: $animationDelay }} src="/me.jpg" alt="profile" />
	<div class="achievements">
		<h3 in:fly={{ delay: $animationDelay * 2 }}>Personel</h3>
		<Grid>
			<div in:fly={{ delay: $animationDelay * 2 }}><Card>0 talks</Card></div>
			<div in:fly={{ delay: $animationDelay * 3 }}><Card>0 applications lancées par moi-même en production</Card></div>
			<div in:fly={{ delay: $animationDelay * 4 }}>
				<Card>5 ans chez Coveo dans l'équipe de Commerce (Full-stack, spécialiste front-end)</Card>
			</div>
			<div in:fly={{ delay: $animationDelay * 5 }}>
				<Card>Très bonne expertise React + Redux</Card>
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
				<Card>♥️</Card>
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
