<script context="module">
    export async function load() {
        const allerChercherDuData = () => Promise.resolve("Allo!");
        return {
            props: {
                serverSide: await allerChercherDuData()
            }
        }
    }
</script>

<script>
    import SplashScreen from "$lib/SplashScreen.svelte";

    export let serverSide;
</script>

<SplashScreen text="Svelte Kit" />

{serverSide}