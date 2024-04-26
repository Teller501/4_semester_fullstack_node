<script>
    import Modal from "./Modal.svelte";
    import toast, { Toaster } from "svelte-french-toast";
    import { BASE_URL } from "../stores/generalStore";
    import { fetchPost } from "../util/api";

    let showModal = false;
    let email = '';

    async function handleForgotPassword() {
        const { status, data } = await fetchPost(`${$BASE_URL}/api/forgot-password`, { email });

        if (status === 200) {
            toast.success("An email has been sent to reset your password.");
        } else {
            toast.error(data.error || "Failed to send reset link.", { duration: 3000 });
        }

        showModal = false;
    }
</script>

<Toaster />

<button id="forgot-password-btn" on:click={() => (showModal = true)}
    >Forgot Password</button
>

<Modal bind:showModal>
    <h2 slot="header">Forgot Password</h2>
    <p>Enter your email address to reset your password.</p>
    <input type="email" placeholder="Email" id="email" bind:value={email} />

    <button class="text-c-white pa-2 mt-4" on:click={handleForgotPassword}>Reset Password</button>
</Modal>

<style>

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
