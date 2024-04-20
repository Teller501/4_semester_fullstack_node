<script>
    import { fade } from "svelte/transition";
</script>

<div in:fade={{ duration: 300 }}>
    <form>
        <div class="form-element">
            <label for="username">Username </label>
            <input id="username" name="username" placeholder="Username" required />
        </div>

        <div class="form-element">
            <label for="email">Email </label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
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
                required
            />
        </div>

        <div class="form-element">
            <button aria-label="Sign Up">Sign Up</button>
        </div>
    </form>
</div>
