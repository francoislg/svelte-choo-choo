<script>
    import CodeHighlight from "$lib/CodeHighlight.svelte";
import { wrapScript } from "$lib/replUtils";
</script>

<h3>Asynchronicité - Svelte Way</h3>
<CodeHighlight code={`${wrapScript(`
let requete = ramasseDesDonnees();
function refresh() {
  requete = ramasseDesDonnees();
}`)}

{#await requete}
  Chargement... S'ra pas long...
{:then donnees}
  {donnees}
{:catch error}
  OH NON! {error.message}
{/await}
`} />
