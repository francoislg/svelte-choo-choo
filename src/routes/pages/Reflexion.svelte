<script>
	import SplashScreen from '$lib/SplashScreen.svelte';
</script>

<div class="pad">
	<SplashScreen altColor>
		<div slot="text">Write <span class="text-highlight">Less Code</span></div>
	</SplashScreen>
</div>

<style>
	.text-highlight {
		color: var(--bright-turquoise);
	}
</style>
