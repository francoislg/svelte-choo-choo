<script>
	import SplashScreen from '$lib/SplashScreen.svelte';
</script>

<div class="pad">
	<SplashScreen altColor>
		<div slot="text">Write <span class="highlight">Less Code</span></div>
	</SplashScreen>
</div>

<style>
	.highlight {
		color: var(--turbo);
	}
</style>
