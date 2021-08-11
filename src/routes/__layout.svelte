<script lang="ts">
	import { page } from '$lib/page';
	import PageTransition from '$lib/PageTransition.svelte';
	import { onMount } from 'svelte';
	import { page as currentPage } from '$app/stores';
	import { browser } from '$app/env';
	import github from 'svelte-highlight/src/styles/github-dark';
	import FixedFooter from '../lib/FixedFooter.svelte';
	import Jump from '../lib/Jump.svelte';

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
			: "/ReactLogo";
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

<style>
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

	:global(body) {
		padding: 10px;
	}

	:global(h1, h2, h3) {
		/* Little hack to prevent the page from scrolling 🙈 */
		margin: 0px;
		padding: 10px 0px;
	}

	:global(::-webkit-scrollbar) {
		width: 0;
		background: transparent;
	}
</style>
