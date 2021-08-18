<script>
	import CoveoIcon from '$lib/icons/coveo-icon.svelte';
import PresentationLink from '$lib/PresentationLink.svelte';
	import SplashScreen from '$lib/SplashScreen.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<SplashScreen text="" isLogo>
	<CoveoIcon />
	<PresentationLink />
</SplashScreen>

<CoveoShape width={800} color="red" position="right" />
