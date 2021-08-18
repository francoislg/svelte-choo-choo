<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp, oneTypeScriptComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
import {tooltip} from "./tooltip.js";`,
			`
<div use:tooltip={{
	message: "pif bang bang boung boung, c'est reglé",
	offsetY: -5
}} class="gallon">
	Mr Gallon à mesurer
</div>
`, `
.gallon {
	margin-left: 50px;
	margin-top: 50px;
	padding: 15px;
	display: inline-block;
	background-color: #1cebcf;
	border-radius: 5px;
	cursor: pointer;
}`),
oneTypeScriptComp(
			'tooltip',
			`import Tooltip from "./Tooltip.svelte";

export function tooltip(node, {message, offsetY}) {
	const component = new Tooltip({
		target: node,
		props: { message, left: 0, top: 0, visible: false }
	});
	function show() {
		const {
			top,
			left,
			width,
			height
		} = node.getBoundingClientRect();
		component.$set({
			top: top - (height / 2) + offsetY,
			left: left + (width / 2),
			visible: true
		});
	}

	function hide() {
		component.$set({
			visible: false
		});
	}

	node.addEventListener('mouseover', show);
	node.addEventListener('mouseout', hide);

	return {
		update({message}) {
			component.$set({
				message
			});
		},

		destroy() {
			node.removeEventListener('mouseover', show);
			node.removeEventListener('mouseout', hide);
		}
	};
}`),
oneSvelteComp(
			'Tooltip',
			`
export let message;
export let left;
export let top;
export let visible = false`,
			`
{#if visible}
	<div class="tooltip" style="left: {left}px; top: {top}px">{message}</div>
{/if}
`, `
.tooltip {
	position: fixed;
	background-color: white;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid black;
	transform: translate(-50%, -50%)
}
`)
	];
</script>

<EmbedRepl title="QOL - Actions" {components} />
