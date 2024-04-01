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

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .form-element {
        margin: 0.75rem;
        width: 80%;
    }

    label {
        display: block;
        color: #7aa2e3;
        margin-bottom: 0.5rem;
    }

    input {
        padding: 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid #97e7e1;
        background-color: #ffffff;
        color: black;
        width: 100%;
        box-sizing: border-box;
    }

    button {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: none;
        background-color: #6ad4dd;
        color: white;
        width: 100%;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #97e7e1;
    }
</style>
