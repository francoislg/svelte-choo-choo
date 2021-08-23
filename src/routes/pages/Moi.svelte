<script>
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';
	import Card from '$lib/style/Card.svelte';
	import Grid from '$lib/layouts/SimpleGrid.svelte';
	import Hearts from '$lib/Hearts.svelte';
</script>

<div class="pad">
	<div class="me">
		<div style="position: relative">
			<img in:fly={{ delay: $animationDelay }} src="/me.jpg" alt="profile" />
			<img
				class="hatimg"
				in:fly={{ y: -200, delay: $animationDelay * 2 }}
				src="/trainhat.png"
				alt="trainhat"
			/>
		</div>
		<h3>François Lachance-Guillemette</h3>
	</div>
	<h4 in:fly={{ delay: $animationDelay * 3 }}>Personel</h4>
	<div class="achievements">
		<Grid>
			<div in:fly={{ delay: $animationDelay * 3 }}><Card>0 talks</Card></div>
			<div in:fly={{ delay: $animationDelay * 4 }}><Card>0 start-up</Card></div>
			<div in:fly={{ delay: $animationDelay * 5 }}>
				<Card>0 applications lancées par moi-même en production</Card>
			</div>
			<div in:fly={{ delay: $animationDelay * 6 }}>
				<Card
					>Bientôt 6 ans chez Coveo dans l'équipe de Commerce (Full-stack, spécialiste front-end)</Card
				>
			</div>
		</Grid>
	</div>
	<h4 in:fly={{ delay: $animationDelay * 7 }}>Svelte & Moi</h4>
	<div class="achievements">
		<Grid>
			<div in:fly={{ delay: $animationDelay * 8 }}>
				<Card>Réécriture de notre plateforme de Hackathon Coveo Innovate en Svelte (en cours)</Card>
			</div>
			<div in:fly={{ delay: $animationDelay * 9 }}>
				<Card>App interne de visualisation des matchs de Coveo Blitz</Card>
			</div>
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
	.me {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	img {
		display: inline-block;
		border-radius: 250px;
		width: 150px;
		height: 150px;
		object-fit: scale-down;
		margin-right: 25px;
	}

	img.hatimg {
		position: absolute;
		left: 45px;
		top: -40px;
		width: 40px;
	}

	.achievements {
		display: flex;
		flex-wrap: wrap;
	}
</style>
