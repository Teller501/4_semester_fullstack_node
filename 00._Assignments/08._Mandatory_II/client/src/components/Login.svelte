<script>
    import { fade } from "svelte/transition";
    import ForgotPassword from "./ForgotPassword.svelte";
    import { fetchPost } from "../util/api.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { BASE_URL } from "../stores/generalStore.js";
    import { navigate } from "svelte-navigator";
    import { userStore } from "../stores/authStore.js";


    let username = "test";
    let password = "test";

    async function handleLogin(event) {
        event.preventDefault();
        
        const user = {
            username,
            password,
        };

        const { status, data } = await fetchPost(`${$BASE_URL}/api/login`, user);
        if (status === 200) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);

            userStore.set(data.user);

            console.log("userStore", $userStore)
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