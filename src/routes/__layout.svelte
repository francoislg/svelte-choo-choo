<script lang="ts">
	import { page } from '$lib/page';
	import PageTransition from '$lib/PageTransition.svelte';
	import { onMount } from 'svelte';
	import { page as currentPage } from '$app/stores';
	import { browser } from '$app/env';
	import github from 'svelte-highlight/src/styles/github-dark';
	import FixedFooter from '../lib/FixedFooter.svelte';
	import Jump from '../lib/Jump.svelte';
	import { getLayoutContext, setLayoutContext } from '../lib/LayoutContext';
	import CoveoLogo from '../lib/CoveoLogo.svelte';

	setLayoutContext();
	const layoutContext = getLayoutContext();

	let showFooter: boolean = false;

	function handleKeydown(event: KeyboardEvent) {
		if (!(event.target instanceof HTMLTextAreaElement)) {
			if (event.code === 'ArrowRight') {
				page.next();
			}
			if (event.code === 'ArrowLeft') {
				page.previous();
			}
			if (event.code === 'KeyJ') {
				showFooter = !showFooter;
			}
		}
	}

	onMount(() => {
		const initialPath = browser && !!$currentPage ? $currentPage.path : '';
		const initialPage = initialPath.includes('/pages/')
			? initialPath.substring(initialPath.indexOf('/pages/') + 7)
			: '/ReactLogo';
		console.log('Setting to initial page', initialPage);
		page.initialize(initialPage);
	});
</script>

<PageTransition refresh={$page.toString()}>
	<slot />
</PageTransition>

<svelte:head>
	{@html github}
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

{#if showFooter}
	<FixedFooter>
		<Jump />
	</FixedFooter>
{/if}

{#if $layoutContext.showLogo}
	<CoveoLogo />
{/if}

<style>
	:global(:root) {
		font-family: 'canada-type-gibson', 'Mier B', -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html, body, #svelte) {
		overflow: scroll;
		overflow-x: hidden;
		height: 100%;
		scrollbar-width: none;
		margin: 0;
		padding: 0;
	}

	:global(h1, h2, h3) {
		/* Little hack to prevent the page from scrolling 🙈 */
		margin: 0px;
		padding: 10px 0px;
		font-weight: 400;
	}

	:global(h3) {
		font-size: 3em;
		margin-top: 30px;
		margin-bottom: 30px;
	}

	:global(::-webkit-scrollbar) {
		width: 0;
		background: transparent;
	}

	/* Utility class to not have to mess much with global padding when required */
	:global(.pad) {
		padding: 10px;
	}
</style>
