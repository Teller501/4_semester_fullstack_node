<script>
    import Modal from "./Modal.svelte";
    import toast, { Toaster } from "svelte-french-toast";

    let showModal = false;

    function handleClick() {
        toast.success("An email has been sent to reset your password.");
    }
</script>

<Toaster />

<button id="forgot-password-btn" on:click={() => (showModal = true)}
    >Forgot Password</button
>

<Modal bind:showModal>
    <h2 slot="header">Forgot Password</h2>
    <p>Enter your email address to reset your password.</p>
    <input type="email" placeholder="Email" id="email" />

    <button id="reset-btn" on:click={handleClick}>Reset Password</button>
</Modal>

<style>
    #reset-btn {
        color: white;
        border: none;
        padding: 0.5em 1em;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1em;
    }

    #forgot-password-btn {
        background-color: transparent;
        color: #7aa2e3;
        font-size: 0.6rem;
        font-weight: bold;
        cursor: pointer;
        border: none;
        background: none;
        padding: 10px 20px;
    }
    #forgot-password-btn:hover {
        text-decoration: underline;
    }
</style>
