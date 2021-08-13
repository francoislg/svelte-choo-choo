<div class="card">
    <slot />
</div>

<style>
    .card {
        background-color: var(--background);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 2px 16px;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>