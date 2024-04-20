<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { userStore } from "../stores/authStore.js";

    const navigate = useNavigate();
    const location = useLocation();

    $: if (!$userStore) {
        navigate("/", {
            state: { from: $location.pathname },
            replace: true,
        });
    }
</script>

{#if $userStore}
    <slot />
{/if}
