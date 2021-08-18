<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp, oneTypeScriptComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
import {hugePartyFrames, miniPartyFrames} from "./Parties";
let isHugeParty = false;

function party(node, {frames}) {
	let framesToUse = frames;
	let index = 0;
	function updateCurrentFrame() {
		node.src = framesToUse[index];
		node.dataset.index = index;
	}
	const event = node.addEventListener("click", () => {
		index = (index + 1) % framesToUse.length;
		updateCurrentFrame();
	});
	updateCurrentFrame();
	return {
		update({frames}) {
			framesToUse = frames;
			index = index % framesToUse.length;
			updateCurrentFrame();
		},

		destroy() {
			// the node has been removed from the DOM
		}
	};
}`,
`
<label>
	Huge party?
	<input type="checkbox" bind:checked={isHugeParty} />
</label>
<img use:party={{frames: isHugeParty ? hugePartyFrames : miniPartyFrames}} alt="party" />
<img use:party={{frames: isHugeParty ? hugePartyFrames : miniPartyFrames}} alt="party" />
`), oneTypeScriptComp("Parties", `
export const hugePartyFrames = [
	"/party/frame0.gif",
	"/party/frame1.gif",
	"/party/frame2.gif",
	"/party/frame3.gif",
	"/party/frame4.gif",
	"/party/frame5.gif",
	"/party/frame6.gif",
	"/party/frame7.gif",
	"/party/frame8.gif",
	"/party/frame9.gif"
];
export const miniPartyFrames = hugePartyFrames.slice(0, 2);`)];
</script>

<EmbedRepl title="QOL - Actions" {components} />
