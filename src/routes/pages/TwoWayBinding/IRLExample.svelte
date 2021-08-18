<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp('App', `
	import EditHack from "./EditHack.svelte"

	let hack;
	let isNew;

	function create() {
		// ...
	}
	`, `
	<EditHack bind:hack let:isNew />
	<button on:click={create}>{isNew ? 'Create' : 'Update'}</button>

	<div>{JSON.stringify(hack, null, 2)}</div>
`),
		oneSvelteComp(
			'EditHack',
			`
	import MarkdownIt from 'markdown-it';
	import ResponsiveImage from "./ResponsiveImage.svelte";
	import Input from "./Input.svelte";

	export let id = '';
	export let title = '';
	export let shortDescription = '';
	export let description = '';
	export let pictureURL = '';
	export let open = true;
	export let presentationURL = '';
	export let teamDriveURL = '';

	export let hack;
	export let isNew = true;

	$: isNew = !id;
	$: hack = {
		id,
		title,
		shortDescription,
		description,
		pictureURL,
		open,
		presentationURL,
		teamDriveURL,
	};

	const md = new MarkdownIt();
`,
			`
<div class="edit-hack">
	<Input title="Hack Name" bind:value={title} />
	<input title="Short Description" bind:value={shortDescription} />
	<div>Long Description (markdown)</div>
	<div class="description">
		<textarea bind:value={description} />
		<div class="description-preview">
			{#if description && description.length > 0}
				{@html md.render(description)}
			{/if}
		</div>
	</div>
	<Input title="Picture URL" bind:value={pictureURL} />
	{#if pictureURL}
		<div class="picture-preview">
			<div>
				<ResponsiveImage src={pictureURL} alt="picture preview" />
			</div>
		</div>
	{/if}
	<Input title="Team Drive URL" bind:value={teamDriveURL} />
	<Input title="Presentation or Demo URL" bind:value={presentationURL} />
	<div>Hack open for other participants?</div>
	<input type="checkbox" bind:checked={open} />
</div>
 `,
			`
	.edit-hack {
		display: grid;
		row-gap: 5px;
	}

	.description {
		display: grid;
		grid-template-columns: 50% 50%;
		column-gap: 5px;
	}

	textarea {
		min-width: 100%;
		max-width: 100%;
		min-height: 200px;
	}

	.picture-preview {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.picture-preview > div {
		width: 50%;
	}
`
		),
		oneSvelteComp(
			'ResponsiveImage',
			`
    export let src;
    export let alt;
`,
			`<img {alt} {src} width="100%" height="100%" />`,
			`
    img {
        max-width: 100%;
        height: auto;
    }
`
		),
		oneSvelteComp(
			'Input',
			`
    export let value;
    export let title;
`,
			`
<div>{title}</div>
<input bind:value />
`,
			`
	input {
		padding: 8px 0;
	}
`
		)
	];
</script>

<EmbedRepl title="Two-Way Binding - Example de la vraie vie vraie" project="Coveo Innovate" {components} />
