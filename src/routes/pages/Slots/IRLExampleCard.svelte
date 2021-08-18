<script>
	import EmbedRepl from '$lib/EmbedRepl.svelte';
	import { oneSvelteComp } from '$lib/replUtils';

	const components = [
		oneSvelteComp(
			'App',
			`
import CardStyle from "./CardStyle.svelte";
import Card from "./Card.svelte";
import CardRecipe from "./CardRecipe.svelte";

let showSlots = false;
let showComplex = false;

function doSomething() {}`,
			`
<div class="container">
    <CardStyle>
        C'est tout, rien d'autre!
    </CardStyle>

    <label>Show Slotted Card 
    <input type="checkbox" bind:checked={showSlots} /></label>

    {#if showSlots}
      <Card>
          <div slot="contentbefore" style="position: absolute; bottom: 5px; right: 5px">Pour float, admettons.</div>
          <div slot="title">Un titre!</div>
          <div>Une description!</div>
          <div slot="footer">Un footer!</div>
      </Card>
    {/if}

    <label>Show Complex Card <input type="checkbox" bind:checked={showComplex} /></label>

    {#if showComplex}
      <CardRecipe
          imageLocation='top'
          canAddRecipe={false}
          numberOfForks=2
          numberOfCookbooks=3

          id="x"
          name="Bavette au beurre à l’échalote française"
          description="Bavette et purée de pommes de terre font toujours bonne figure sur un menu bistro. Dans sa version classique, la viande est garnie d’une rondelle de beurre, ici aromatisé à l’échalote. La purée n’est pas en reste, puisqu’on l’agrémente d’une garniture d’échalotes frites, dont la texture croustillante offre un heureux contraste avec le moelleux des pommes de terre."
          owner={{id: 'owner', name: 'Vincent Bernard', pictureUrl: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10162093873920324&height=200&width=200&ext=1631229255&hash=AeQWNdiby70b5bCCduU'}}
          pictures={[{
              url: "http://res.cloudinary.com/francoislg/image/upload/v1613526218/udfodvwg96golsb4vzwz.jpg"
          }]}
      />
    {/if}
</div>`,
			`.container { display: grid; grid-gap: 50px}`
		),
		oneSvelteComp(
			'CardRecipe',
			`
import Card from './Card.svelte';
import TextLink from './TextLink.svelte';
import User from './User.svelte';
import RecipeStats from './RecipeStats.svelte';

export let id;
export let name;
export let description;
export let owner;
export let pictures = [];
export let hideOwner = false;
export let imageLocation = 'left';
export let canAddRecipe = false;
export let numberOfForks = 0;
export let numberOfCookbooks = 0;

$: pictureToShow = pictures?.[0]?.url;

function navigateToRecipe() {
    // Normalement ici, ça naviguerait.
}`,
			`
<Card {imageLocation} image={pictureToShow} onClick={() => navigateToRecipe(id)}>
	<div class="title" slot="title">
		<TextLink href="/recipe/{id}" text={name} userLink />
		{#if canAddRecipe}
			<div>
				<button>Ajouter au livre</button>
			</div>
		{/if}
	</div>
	<div class="content">
    <div>
      {#if !hideOwner}
        <User {...owner} />
      {/if}
    </div>
		<div class="description">
			{#if description}
				{description.split(' ').slice(0, 30).join(' ')}
			{/if}
		</div>
	</div>
	<div slot="footer">
        <RecipeStats {numberOfCookbooks} {numberOfForks} />
	</div>
</Card>`
		),
		oneSvelteComp(
			'Card',
			`
  import CardStyle from './CardStyle.svelte';
  import ResponsiveImage from './ResponsiveImage.svelte';
  export let image;
  export let imageLocation = 'left';
  export let noMargin = false;
  export let onClick = undefined;
`,
			`
<CardStyle fullWidth={imageLocation === 'left'} onClick={!!onClick}>
  <div class="card {imageLocation}" on:click={onClick}>
    <slot name="contentbefore" />
    {#if image}
      <div class="image">
        <ResponsiveImage data={image} />
      </div>
    {/if}
    <div class="description {noMargin ? 'nomargin' : ''}">
      {#if $$slots.title}
        <div class="title">
          <slot name="title" />
        </div>
      {/if}
      <div class="body">
        <slot />
      </div>
      {#if $$slots.footer}
        <div class="footer">
          <slot name="footer" />
        </div>
      {/if}
    </div>
  </div>
</CardStyle>
`,
			`
  .card {
    position:relative;
    display: flex;
    background-color: white;
    border-radius: 8px;
  }
  .card.top {
    flex-direction: column;
    flex: 1;
  }
  .card.left {
    flex-direction: column;
  }
  .card.top .image {
    height: 15rem;
    width: 100%;
  }
  .card.left .image {
    height: 15rem;
    width: 100%;
  }
  .description {
    flex: 1;
    margin: 8px;
    display: grid;
    grid-gap: 8px;
    grid-template-rows: min-content 1fr min-content;
  }
  .description.nomargin {
    margin: 0;
  }
  .title {
    font-size: 1rem;
    font-weight: bolder;
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 10.5rem;
  }
  .footer {
    font-size: 1rem;
    flex: 0 auto;
  }
  @media (min-width: 1008px) {
    .card.left {
      flex: 1 auto;
      flex-direction: row;
      height: 256px;
      width: 100%;
    }
    .card.left .image {
      height: 100%;
      width: 15rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .footer {
      font-size: 1.2rem;
    }
  }
  .card-title {
    color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    line-height: 1em;
  }`
		),
		oneSvelteComp(
			'CardStyle',
			`
  export let fullWidth;
  export let onClick = undefined;`,
			`
<div class="card{onClick ? ' clickable' : ''}{fullWidth ? ' full-width' : ''}" on:click={onClick}>
  <slot />
</div>`,
			`
  .card {
    flex: 1;
    box-shadow:  0 0 25px rgb(200, 200, 200, 0.3);
    overlay: hidden;
    transition: margin 0.2s, padding 0.2s, box-shadow 0.2s;
    text-align: left;
    overflow: hidden;
    border-radius: var(--general-border-radius);
  }
  .card:hover {
    box-shadow: 0 0 25px rgb(170, 170, 170);
  }
  .full-width {
    flex: auto;
    width: 100%;
  }
  .card.clickable {
    cursor: pointer;
  }`
		),
		oneSvelteComp(
			'TextLink',
			`
  export let href;
  export let text = null;
  export let userLink = false;
  export let viewMore = false;
`,
			`
<a class={(userLink ? 'user-link' : '') + (viewMore ? ' view-more' : '')} {href}>
  {#if text}
    {text}
  {/if}
  <slot />
</a>
`,
			`
  a {
    display: inline-flex;
    align-items: center;
  }
  .user-link {
    font-weight: bold;
  }
  .view-more {
    color: var(--primary-color);
    font-weight: 650;
  }`
		),
		oneSvelteComp(
			'User',
			`
import TextLink from './TextLink.svelte';

export let id;
export let name;
export let pictureUrl;
export let withoutPicture = false;
export let withoutLink = false;
`,
			`
{#if withoutLink}
  <div class="container">
    {#if pictureUrl}
      <img src={pictureUrl} alt="profile" />
    {:else if !withoutPicture}
      <div class="empty-image" />
    {/if}
    <div class:withoutPicture class="name">
      {name}
    </div>
  </div>
{:else}
  <TextLink href="/chef/{id}" userLink>
    {#if pictureUrl}
      <img src={pictureUrl} alt="profile" />
    {:else if !withoutPicture}
      <div class="empty-image" />
    {/if}
    <span class:withoutPicture class="name">
      {name}
    </span>
  </TextLink>
{/if}`,
			`.container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img,
  .empty-image {
    width: 35px;
    height: 35px;
    border-radius: 8px;
  }
  .name {
    padding: 0px 10px;
    font-family: var(--headings-font);
    font-weight: 600;
    font-size: 1.3em;
    text-align: left;
    white-space: nowrap;
  }
  .name.withoutPicture {
    padding-left: 0px;
  }
`
		),
		oneSvelteComp(
			'RecipeStats',
			`
export let numberOfForks = undefined;
export let numberOfCookbooks = undefined;`,
			`
<div class="stats">
  {#if numberOfForks > 0}
    <div>
      {numberOfForks} adaptations
    </div>
  {/if}
  {#if numberOfCookbooks > 0}
    <div>{numberOfCookbooks} favoris</div>
  {/if}
</div>
`,
			`
  .stats {
    font-size: 0.8em;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: max-content max-content;
    align-items: center;
    text-align: center;
  }`
		),
		oneSvelteComp(
			'ResponsiveImage',
			`
  export let data;
  export let alt;
  export let height = '100%';
  export let width = '100%';
  export let rounded = false;
`,
			`
<div class:rounded style="height:{height};width:{width}">
  <img src={data} alt={alt} style="width: 100%; height:100%; object-fit:cover;" />
</div>
`,
			`
  .rounded {
    border-radius: 8px;
    overflow: hidden;
  }`
		)
	];
</script>

<EmbedRepl title="Slots - 'Card' de la Vraie vie vraie" project="Cooktree" {components} />
