<script>
    import {fade} from "svelte/transition";
</script>

<img in:fade out:fade class="coveologo" src="/coveo.png" alt="coveo" />

<style>
    .coveologo {
		position: fixed;
		bottom: 8px;
		right: 8px;
		padding: 8px;
		border-radius: 5px;
		width: 100px;
		background-color: white;
	}
</style>