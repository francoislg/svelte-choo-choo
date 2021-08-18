<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp, oneTypeScriptComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
	import Messages from "./Messages.svelte";
	import MessagePush from "./MessagePush.svelte";`,
			`
<Messages />
<MessagePush />
`
		),
		oneTypeScriptComp(
			'MessagesStore',
			`import { writable } from 'svelte/store';

function expiringMessages() {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		push: (message, type, expiresInSeconds = 5) => {
			const toAdd = {
				message,
				type,
				date: new Date(),
			}
			update((messages) => messages.concat(toAdd));
			setTimeout(
				() => update((messages) => messages.filter((m) => m !== toAdd)),
				expiresInSeconds * 1000
			);
		}
	};
}

export const messages = expiringMessages();
`
		),
		oneSvelteComp(
			'Messages',
			`
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { messages } from './MessagesStore';`,
			`<div class="container">
	{#each $messages as { message, type, date } (date)}
		<div animate:flip transition:fly class={'message ' + type}>{message}</div>
	{/each}
</div>
`,
			`
	.container {
		top: 50px;
		position: fixed;
		width: 50%;
		left: 25%;
		max-width: 900px;
	}

	.message {
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		text-align: center;
	}

	.warning {
		background-color: yellow;
	}
	.error {
		background-color: red;
	}
`
		),
		oneSvelteComp(
			'MessagePush',
			`
import { messages } from "./MessagesStore";
let index = 0;`,
			`
<button on:click={() => messages.push('Message #' + index++, 'error')}>
 Error
</button>
<button on:click={() => messages.push('Message #' + index++, 'warning')}>
 Warning
</button>`
		)
	];
</script>

<EmbedRepl
	title="Stores - Exemple message pop-up de la vraie vie vraie"
	project="Coveo Innovate"
	{components}
/>
