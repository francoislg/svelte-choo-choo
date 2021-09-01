<script>
	import SplashScreen from '$lib/SplashScreen.svelte';
</script>

<div><SplashScreen text="👋 Allo mobile! Swipe un bon swipe à droite pour la prochaine slide. Le swipe vers le haut ouvre un petit 'jump to page'. C'est sûr que c'est plus beau sur un PC 🤷‍♂️"></SplashScreen></div>

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
