<script>
	import SimpleGrid from '$lib/layouts/SimpleGrid.svelte';
	import Card from '$lib/style/Card.svelte';

	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Prochaines étapes</h3>
	<SimpleGrid>
		<Card>Coveo Blitz?</Card>
		<Card>On explore pour les nouveaux projets</Card>
	</SimpleGrid>
</div>
<CoveoShape width={900} color="yellow" position="left" />
