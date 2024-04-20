<script>
    import { fetchGet } from "../../util/api";
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore";

    let shoppingList = [];

    onMount(async () => {
        const token = localStorage.getItem("token");
        shoppingList = (await fetchGet(`${$BASE_URL}/api/shoppinglist`, token)) ?? [];
    });
</script>

{#each shoppingList as item}
    <p>{item.items}</p>
{/each}
