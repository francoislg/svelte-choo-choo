<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Children - React Way</h3>
	<CodeHighlight
		code={`// TabPane.tsx
// import ...

export const TabPane: React.FunctionComponent<ITabPaneProps> = ({id, className, isActive, children}) => (
    <div
        id={\`panel-\${id}\`}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={\`tab-\${id}\`}
        aria-hidden={!isActive}
        className={classNames('tab-pane', className, {active: isActive})}
    >
        {children}
    </div>
);`}
	/>
	<CodeHighlight
		code={`// TabExamples.tsx
<TabPane>
    <div>Contenu du tab</div>
</TabPane>
`}
	/>
</div>

<CoveoShape color="blue" position="bottom" randomize />
