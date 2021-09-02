<script>
	import CoveoIcon from '$lib/icons/coveo-icon.svelte';
	import PresentationLink from '$lib/PresentationLink.svelte';
	import SplashScreen from '$lib/SplashScreen.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<SplashScreen text="" isLogo>
	<div class="pad logo">
		<CoveoIcon />
	</div>
	<PresentationLink color="black" />
</SplashScreen>

<CoveoShape width={800} color="red" position="right" />

<style>
	.logo {
		width: 40vh;
	}
</style>
