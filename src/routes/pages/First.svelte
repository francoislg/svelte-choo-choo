<script>
	import SplashScreen from '$lib/SplashScreen.svelte';
</script>

<div><SplashScreen text="👋 Allo mobile! Swipe un bon swipe à droite pour la prochaine slide. Je conseille quand même un PC"></SplashScreen></div>

<style>
	@media (min-width: 600px) {
		div {
			display: none !important;
		}
	}

	div {
		display: inline-block;
	}
</style>
