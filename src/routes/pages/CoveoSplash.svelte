<script>
	import PresentationLink from '$lib/PresentationLink.svelte';
import SplashScreen from '$lib/SplashScreen.svelte';
import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<SplashScreen text="">
	<img height="300px" src="/coveosplash.png" alt="coveo" />
	<PresentationLink />
</SplashScreen>

<CoveoShape width={800} color="red" position="right" />

