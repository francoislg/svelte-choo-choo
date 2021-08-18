<script>
	export let color = 'white';
</script>
<div class="link" style="color: {color}">
	Cette présentation est disponible sur <a style="color: {color}" href="https://svelte-choo-choo.netlify.app/"
		>https://svelte-choo-choo.netlify.app/</a
	>
</div>

<style>
	.link {
		position: fixed;
		top: 10px;
		left: 10px;
		font-size: 2em;
	}
</style>
