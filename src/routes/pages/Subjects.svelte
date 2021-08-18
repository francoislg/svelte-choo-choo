<script>
	import { animationDelay } from '$lib/page';
	import { fly } from 'svelte/transition';
	import Card from '$lib/style/Card.svelte';
	import Grid from '$lib/layouts/SimpleGrid.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
	import Sign from '$lib/icons/Sign.svelte';
	import SvelteIcon from '$lib/icons/svelte-icon.svelte';
	import Boxdown from '$lib/icons/boxdown.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Explorer from '$lib/icons/explorer.svelte';
	import Lightning from '$lib/icons/lightning.svelte';
	import Purse from '$lib/icons/purse.svelte';
import Partner from '$lib/icons/partner.svelte';
</script>

<CoveoShape width={800} color="blue" position="bottom" />

<div class="pad">
	<h3>Sujets pour aujourd'hui</h3>
	<div class="subjects">
		<Grid>
			<div in:fly={{ delay: $animationDelay / 2 }}>
				<Card
					>Introduction à Svelte
					<div slot="icon"><SvelteIcon /></div></Card
				>
			</div>
			<div in:fly={{ delay: $animationDelay }}>
				<Card>Two-Way Binding <Sign slot="icon" /></Card>
			</div>
			<div in:fly={{ delay: $animationDelay / 2 * 3 }}><Card>Stores <Boxdown slot="icon" /></Card></div>
			<div in:fly={{ delay: $animationDelay / 2 * 4 }}><Card>#await <Clock slot="icon" /></Card></div>
			<div in:fly={{ delay: $animationDelay / 2 * 5 }}>
				<Card>Slots VS Children <Explorer slot="icon" /></Card>
			</div>
			<div in:fly={{ delay: $animationDelay / 2 * 6 }}>
				<Card>Quality of Life Potpourri <Lightning slot="icon" /></Card>
			</div>
			<div in:fly={{ delay: $animationDelay / 2 * 7 }}>
				<Card>Svelte Kit <Purse slot="icon" /></Card>
			</div>
			<div in:fly={{ delay: $animationDelay / 2 * 8 }}>
				<Card>Animations <Partner slot="icon" /></Card>
			</div>
		</Grid>
	</div>
	<!-- <h3 in:fly={{ delay: $animationDelay / 2 * 9 }}>Projets utilisés</h3>
	<Grid>
		<div in:fly={{ delay: $animationDelay / 2 * 10 }}>
			<Card
				><div>Coveo Innovate</div>
				<img slot="icon" width="32" src="/innovate.png" alt="innovate" /></Card
			>
		</div>
		<div in:fly={{ delay: $animationDelay / 2 * 11 }}>
			<Card
				><div>Coveo Blitz</div>
				<img slot="icon" width="32" src="/blitz.png" alt="blitz" /></Card
			>
		</div>
		<div in:fly={{ delay: $animationDelay / 2 * 12 }}><Card>Cooktree</Card></div>
		<div in:fly={{ delay: $animationDelay / 2 * 13 }}><Card>?? Surprise ??</Card></div>
	</Grid> -->
</div>

<style>
	.subjects {
		padding: 10px;
	}
</style>
