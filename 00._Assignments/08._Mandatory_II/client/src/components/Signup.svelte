<script>
    import { fade } from "svelte/transition";
    import toast, { Toaster } from "svelte-french-toast";
    import { BASE_URL } from "../stores/generalStore.js";
    import { fetchPost } from "../util/api.js";
    import { navigate } from "svelte-navigator";

    let username = "test";
    let email = "test@mail.dk";
    let password = "test";
    let confirmPassword = "test";

    async function handleSignup(event) {
        console.log("Signup");
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.", { duration: 3000 });
            return;
        }

        const user = {
            username,
            email,
            password,
        };

        const { status, data } = await fetchPost(`${$BASE_URL}/auth/signup`, user);
        if (status === 201) {
            toast.success("User created successfully, please login.", { duration: 5000 });
            navigate("/");
        } else {
            let errorMessage = data && data.error ? data.error : "User creation failed.";
            toast.error(errorMessage, { duration: 3000 });
        }
    }
</script>


<Toaster />

<div in:fade={{ duration: 300 }}>
    <form on:submit={handleSignup}>
        <div class="form-element">
            <label for="username">Username </label>
            <input
                id="username"
                name="username"
                placeholder="Username"
                bind:value={username}
                required
            />
        </div>

        <div class="form-element">
            <label for="email">Email </label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                bind:value={email}
                required
            />
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
            <label for="password">Confirm Password </label>
            <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="Confirm Password"
                bind:value={confirmPassword}
                required
            />
        </div>

        <div class="form-element">
            <button type="submit" aria-label="Sign Up">Sign Up</button
            >
        </div>
    </form>
</div>
