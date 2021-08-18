<script>
	import SimpleGrid from '$lib/layouts/SimpleGrid.svelte';
	import { animationDelay } from '$lib/page';
	import Card from '$lib/style/Card.svelte';

	import CoveoShape from '$lib/style/CoveoShape.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="pad">
	<h3>Prochaines étapes</h3>
	<SimpleGrid>
		<div in:fly={{ delay: $animationDelay }}>
			<Card>Coveo Blitz?</Card>
		</div>
		<div in:fly={{ delay: $animationDelay * 2 }}>
			<Card>On explore pour les nouveaux projets</Card>
		</div>
	</SimpleGrid>
</div>
<CoveoShape width={900} color="yellow" position="left" />
