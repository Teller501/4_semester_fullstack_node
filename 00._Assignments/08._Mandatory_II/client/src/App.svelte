<script>
    import { fade } from "svelte/transition";
    import Login from "./components/Login.svelte";
    import Signup from "./components/Signup.svelte";
    import { writable } from "svelte/store";

    const isLogin = writable(true);
</script>

<main>
    <div id="auth">
        <div class="switch">
            <button
                on:click={() => isLogin.set(true)}
                class:active-button={$isLogin}
                class:inactive-button={!$isLogin}>SIGN IN</button
            >
            <button
                on:click={() => isLogin.set(false)}
                class:active-button={!$isLogin}
                class:inactive-button={$isLogin}>SIGN UP</button
            >
        </div>

        <div class="form-container">
            {#if $isLogin}
                <div in:fade={{ duration: 300 }}>
                    <Login />
                </div>
            {:else}
                <div in:fade={{ duration: 300 }}>
                    <Signup />
                </div>
            {/if}
        </div>
    </div>
</main>

<style>
    #auth {
        background-color: #f8f6e3;
        max-width: 400px;
        margin: auto;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 300px;
    }
    .switch {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 1rem;
    }

    button {
        background-color: transparent;
        color: #7aa2e3;
        font-size: 0.6rem;
        font-weight: bold;
    }
    button:focus {
        outline: none;
    }

    .active-button {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        color: #5294e2;
    }

    .inactive-button {
        opacity: 0.6;
    }
</style>
