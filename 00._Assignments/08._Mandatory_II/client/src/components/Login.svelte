<script>
    import { fade } from "svelte/transition";
    import ForgotPassword from "./ForgotPassword.svelte";
    import { fetchPost } from "../util/api.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { BASE_URL } from "../stores/generalStore.js";
    import { navigate } from "svelte-navigator";
    import { userStore, tokenStore, refreshTokenStore } from "../stores/authStore.js";


    let username = "";
    let password = "";

    async function handleLogin(event) {
        event.preventDefault();
        
        const user = {
            username,
            password,
        };

        const { status, data } = await fetchPost(`${$BASE_URL}/api/login`, user);
        if (status === 200) {

            userStore.set(data.user);
            tokenStore.set(data.token);
            refreshTokenStore.set(data.refreshToken);

            navigate("/home");
        } else {
            const errorMessage = data && data.error ? data.error : "Wrong username or password.";
            toast.error(errorMessage, { duration: 3000 });
        }
    }
</script>

<Toaster />

<div in:fade={{ duration: 300 }}>
    <form on:submit={handleLogin}>
        <div class="form-element">
            <label for="name">Username </label>
            <input id="name" name="name" placeholder="Username" bind:value={username} required />
        </div>

        <div class="form-element">
            <label for="password">Password </label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                bind:value={password}
                required
            />
        </div>

        <div class="form-element">
            <button aria-label="Login">Login</button>
        </div>
    </form>
</div>

<ForgotPassword />