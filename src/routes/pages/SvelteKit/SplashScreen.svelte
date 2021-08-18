<script context="module">
	export async function load() {
		const allerChercherDuData = () => Promise.resolve('Svelte Kit');
		return {
			props: {
				serverSide: await allerChercherDuData()
			}
		};
	}
</script>

<script>
	import Purse from '$lib/icons/purse.svelte';
	import SplashScreen from '$lib/SplashScreen.svelte';

	export let serverSide;
</script>

<SplashScreen text={serverSide}>
	<Purse slot="icon" />
</SplashScreen>
