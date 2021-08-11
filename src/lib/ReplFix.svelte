<script>
    import { getContext } from "svelte";

    const context = getContext('REPL');

    setTimeout(() => {
        context.rebundle();
    }, 1000);
</script>