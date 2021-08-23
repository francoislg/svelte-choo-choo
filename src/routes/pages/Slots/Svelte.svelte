<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Children - Svelte Way</h3>
	<CodeHighlight
		code={`// TabPane.svelte
// import ...

<div
    id="panel-{id}"
    role="tabpanel"
    tabIndex={0}
    aria-labelledby="tab-{id}"}
    aria-hidden={!isActive}
>
    <slot />
</div>
);`}
	/>
	<CodeHighlight
		code={`// TabExamples.Svelte
<TabPane>
    <div>Contenu du tab</div>
</TabPane>
`}
	/>
</div>

<CoveoShape color="blue" position="left" randomize />