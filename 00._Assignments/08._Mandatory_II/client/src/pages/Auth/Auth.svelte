<script>
    import { userStore } from "../../stores/authStore";
    import Login from "../../components/Login.svelte";
    import Signup from "../../components/Signup.svelte";

    let currentView = "login";

    function switchView(view) {
        currentView = view;
    }
</script>

{#if !$userStore}
    <div class="bg-c-#f8f6e3 rounded-4 shadow-sm max-w-64">
        <div class="d-flex gap-4 ma-4">
            <button class="bg-transparent text-c-#7aa2e3 text-75" 
            hover="bg-transparent text-c-#7aa2e3:-10" on:click={() => switchView("login")}>SIGN IN</button>
            <button class="bg-transparent text-c-#7aa2e3 text-75" 
            hover="bg-transparent text-c-#7aa2e3:-10" on:click={() => switchView("signup")}>SIGN UP</button>
        </div>
        {#if currentView === "login"}
            <Login />
        {:else if currentView === "signup"}
            <Signup />
        {/if}
    </div>
{/if}
