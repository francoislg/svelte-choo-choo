
<script>
    // Started from: https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
    // Really amazing and simple idea, kudos!
	import { fly } from 'svelte/transition';
	import {animationDelay} from "./page";
	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ duration: 500, delay: $animationDelay }} out:fly={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<style>
	div {
		height: 100%;
	}
</style>