<script>
    import { fetchGet } from "../../util/api";
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore";
    import { tokenStore } from "../../stores/authStore";

    let quote = "";

    onMount(async () => {
        const { data } = await fetchGet(`${$BASE_URL}/api/quote`, $tokenStore);
        quote = data;
    });
</script>


<h3>{quote}</h3>
<p>Kanye West</p>
