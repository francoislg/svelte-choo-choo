<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
import Arrowright from '$lib/icons/arrowright.svelte';
import { animationDelay } from '$lib/page';
import PresentationLink from '$lib/PresentationLink.svelte';
	import SplashScreen from '$lib/SplashScreen.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
import { fly } from 'svelte/transition';
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
		<CoveoShape width={600} color="red" position="bottom" delay={$animationDelay * 10}>
			<h4>Liens intéressants</h4>
			<ul>
				{#each liens as { text, link }}
					<li>
						<a href={link}>{text}</a>
					</li>
				{/each}
			</ul>
		</CoveoShape>
		<div class="code" in:fly={{ y: 200, delay: $animationDelay * 15 }}>
			<CodeHighlight code={`<div ... in:fly={{y: 200, delay: 10000}} />`} />
			<div class="arrow"><Arrowright /></div>
		</div>
	</SplashScreen>
</div>

<style>
	h4 {
		color: white;
	}

	a {
		color: white;
	}

	.code {
		display: flex;
		position: fixed;
		bottom: 0;
		right: 420px;
		align-items: center;
	}

	.arrow {
		padding-left: 10px;
	}
</style>
