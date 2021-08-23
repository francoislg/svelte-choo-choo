<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import { wrapScript } from '$lib/replUtils';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Asynchronicité - Svelte Way</h3>
	<CodeHighlight
		code={`${wrapScript(`
// ...
function getConfigurations() {
	return Platform.catalogConfiguration
            .list({
                page: 0,
                pageSize: 100,
            });
}

let requete = getConfigurations();
function refresh() {
  requete = getConfigurations();
}`)}

{#await requete}
  <Loading />
{:then data}
  <Button on:click={refresh}>Refresh</Button>
  {#each data.items as configuration}
	<Configuration {configuration} />
  {/each}
{:catch error}
  OH NON! {error.message}
{/await}
`}
	/>
</div>

<CoveoShape color="yellow" position="bottom" randomize />
