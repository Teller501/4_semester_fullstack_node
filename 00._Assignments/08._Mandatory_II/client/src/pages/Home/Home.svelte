<script>
    import { fetchGet } from "../../util/api";
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore";
    import { token } from "../../stores/authStore";

    let shoppingList = [];

    onMount(async () => {
        shoppingList = (await fetchGet(`${$BASE_URL}/api/shoppinglist`, $token)) ?? [];
    });
</script>

{#each shoppingList as item}
    <h3>{item.user}</h3>
    <p>{item.items}</p>
{/each}
