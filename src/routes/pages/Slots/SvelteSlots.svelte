<script>
    import CodeHighlight from "$lib/CodeHighlight.svelte";
</script>

<h3>Slots - Svelte Way</h3>
<CodeHighlight code={`// TabPane.svelte
// import ...

<div
    id="panel-{id}"
    role="tabpanel"
    tabIndex={0}
    aria-labelledby="tab-{id}"}
    aria-hidden={!isActive}
>
    <div>
        <slot name="header" />
    </div>
    <slot />
</div>
);`} />
<CodeHighlight code={`// TabExamples.Svelte
<TabPane>
    <div slot="header">Entête</div>
    <div>Contenu du tab</div>
</TabPane>
`} />