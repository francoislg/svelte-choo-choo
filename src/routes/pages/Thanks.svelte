<script>
	import PresentationLink from '$lib/PresentationLink.svelte';
	import SplashScreen from '$lib/SplashScreen.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
	const liens = [
		{
			text: 'svelte.dev',
			link: 'https://svelte.dev/'
		},
		{
			text: 'kit.svelte.dev',
			link: 'https://kit.svelte.dev/'
		},
		{
			text: "N'importe quoi de Tan Li Hau",
			link: 'https://lihautan.com/'
		},
		{
			text: 'Svelte Radio (podcast)',
			link: 'https://www.svelteradio.com/'
		},
		{
			text: 'Svelte Summit',
			link: 'https://sveltesummit.com/'
		}
	];
</script>

<div class="pad">
	<SplashScreen text="Merci!">
		<PresentationLink />
		<CoveoShape width={600} color="red" position="bottom">
			<h4>Liens intéressants</h4>
			<ul>
				{#each liens as { text, link }}
					<li>
						<a href={link}>{text}</a>
					</li>
				{/each}
			</ul>
		</CoveoShape>
	</SplashScreen>
</div>

<style>
	h4 {
		color: white;
	}

	a {
		color: white;
	}
</style>
