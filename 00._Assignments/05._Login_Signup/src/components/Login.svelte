<script>
    import { fade } from "svelte/transition";
</script>

<div in:fade={{ duration: 300 }}>
    <form>
        <div class="form-element">
            <label for="name">Username </label>
            <input id="name" name="name" placeholder="Username" required />
        </div>

        <div class="form-element">
            <label for="password">Password </label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
            />
        </div>

        <div class="form-element">
            <button aria-label="Login">Login</button>
        </div>
    </form>
</div>