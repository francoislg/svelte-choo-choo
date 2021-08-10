<script lang="ts">
	import { page } from '$lib/page';
	import PageTransition from '$lib/PageTransition.svelte';
	import { onMount } from 'svelte';
	import { page as currentPage } from '$app/stores';
	import { browser } from '$app/env';
	import github from 'svelte-highlight/src/styles/github';

	function handleKeydown(event: KeyboardEvent) {
		if (!(event.target instanceof HTMLTextAreaElement)) {
			if (event.code === 'ArrowRight') {
				page.next();
			}
			if (event.code === 'ArrowLeft') {
				page.previous();
			}
		}
	}

	onMount(() => {
		const initialPath = browser && !!$currentPage ? $currentPage.path : '';
		const initialPage = initialPath.includes('/pages/')
			? parseInt(initialPath.substring(initialPath.indexOf('/pages/') + 7))
			: 1;
		console.log('Setting to initial page', initialPage);
		page.initialize(initialPage);
	});
</script>

<PageTransition refresh={$page.toString()}>
	<slot />
</PageTransition>

<svelte:head>
	{@html github}
	<link rel="stylesheet" href="/repl.css" />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<style>
	:global(html, body, #svelte) {
		overflow: hidden;
		height: 100%;
		box-sizing: border-box;
	}
</style>
