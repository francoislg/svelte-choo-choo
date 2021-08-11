<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
import TabProvider from "./TabProvider.svelte";
import TabPanel from "./TabPanel.svelte";
import Tab from "./Tab.svelte";`,
			`
<TabProvider defaultSelected="livre">
	<section>
		<div class="tabs">
			<Tab tab="recipes" text="MES RECETTES" />
			<Tab tab="livre" text="LIVRE DE RECETTES" />
			<Tab tab="follow" text="ABONEMENTS" />
		</div>
	</section>
	<section>
		<TabPanel tab="recipes">
			<h3>Créations</h3>
			<div>Grosse création</div>
		</TabPanel>
		<TabPanel tab="livre">
			<h3>Livre de recette</h3>
			<div>Wow le beau livre</div>
		</TabPanel>
		<TabPanel tab="follow">
			<h3>Abonnements</h3>
			<div>Excellent, beaucoup d'abonnements</div>
		</TabPanel>
	</section>
</TabProvider>`, `
.tabs {
		display: flex;
}`
		),
		oneSvelteComp(
			'TabProvider',
			`
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
export let defaultSelected = '';
const tab = writable(defaultSelected);
setContext('tab', tab);`,
			`
<slot />
`
		),
		oneSvelteComp(
			'TabPanel',
			`
  import { fly } from 'svelte/transition';
  import { getContext } from 'svelte';
  export let tab;
  const selected = getContext('tab');`,
			`
{#if tab === $selected}
  <div in:fly={{ y: -500, duration: 500, delay: 200 }} out:fly={{ y: 200, duration: 200 }}>
    <slot />
  </div>
{/if}`
		),
		oneSvelteComp("Tab", `
  import { getContext } from 'svelte';
  export let tab;
  export let text;
  const selected = getContext('tab');`,`
<div class="tab" class:selected={$selected === tab} on:click={() => ($selected = tab)}>{text}</div>
`,`
    .tab {
        cursor: pointer;
        font-weight: bold;
        padding: 20px 20px;
        transition: border-bottom 0.2s;
        --border-size: 5px;
		--primary-color: green;
		--secondary-color: red;
        border-bottom: var(--border-size) solid transparent;
    }
    .tab:hover {
        border-bottom: var(--border-size) solid var(--secondary-color);
    }
    .selected {
        border-bottom: var(--border-size) solid var(--primary-color);
    }
`)
	];
</script>

<h3>QOL - Context</h3>
<EmbedRepl {components} />
