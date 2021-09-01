<script>
	export let color = 'white';
</script>

<div class="link" style="color: {color}">
	<div>
		Cette présentation est disponible sur <a
			style="color: {color}"
			href="https://svelte-choo-choo.netlify.app">https://svelte-choo-choo.netlify.app</a
		>
	</div>
	<div>
		Tout le code est accessible ici
		<a style="color: {color}" href="https://github.com/francoislg/svelte-choo-choo"
			>https://github.com/francoislg/svelte-choo-choo</a
		>
	</div>
</div>

<style>
	.link {
		padding-top: 40px;
		font-size: 2em;
		text-align: center;
	}
</style>