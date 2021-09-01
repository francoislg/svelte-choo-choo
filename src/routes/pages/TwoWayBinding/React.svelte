<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
	import CoveoShape from '$lib/style/CoveoShape.svelte';
</script>

<div class="pad">
	<h3>Two-Way Binding - React Way</h3>
	<CodeHighlight
		code={'// Parent.jsx\n//...\nconst Whatever = () => {\n  const [checkboxState, setCheckboxState] = useState(true);\n\n  return <Checkbox value={checkboxState} handleChange={(value) => setCheckboxState(value)} />\n}'}
	/>
	<CodeHighlight
		code={"// Checkbox.jsx\nexport const Checkbox = ({value, handleChange}) =>\n  <input type='checkbox' value={value} onChange={(event) => handleChange(event.target.value)} />"}
	/>
</div>

<CoveoShape position="bottom" color="red" width={800} randomize />
