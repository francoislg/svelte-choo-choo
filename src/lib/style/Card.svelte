<div class="card test">
	<slot />
	{#if $$slots.icon}
		<div class="icon">
			<slot name="icon" />
		</div>
	{/if}
</div>

<style>
	.card {
		background-color: var(--background);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		padding: 2px 16px;
		height: 200px;
		border-radius: 5px;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		fill: white;
	}

	.icon {
		width: 32px;
		height: 32px;
		fill: white;
		margin-top: 5px;
	}

	.card.test {
		background-color: #451c5c;
		color: white;
	}
</style>
