<script>
    import { navigate, useParams } from 'svelte-navigator';
    import toast, { Toaster } from "svelte-french-toast";
    import { BASE_URL } from '../../stores/generalStore';
    import { fetchPost } from '../../util/api';

    const params = useParams();

    const token = $params.token;

    let password = '';
    let confirmPassword = '';

    async function handleResetPassword() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.", { duration: 3000 });
            return;
        }

        const { status } = await fetchPost(`${$BASE_URL}/api/reset-password/${token}`, { newPassword: password });
        if (status === 200) {
            toast.success("Password reset successful. You can now login.", { duration: 5000 });
            navigate("/");
        } else {
            toast.error("Password reset failed.", { duration: 3000 });
        }
    }
</script>

<Toaster />

<div class="bg-c-#f8f6e3 rounded-4 shadow-sm w-80 d-grid j-content-center ">
    <h2 class="pa-4 text-c-#7aa2e3">Change your password</h2>
    <input class="ma-4 max-w-64" type="password" placeholder="Password" id="password" bind:value={password} />
    <input class="ma-4 max-w-64" type="password" placeholder="Confirm Password" id="confirm-password" bind:value={confirmPassword} />

    <button class="ma-4 max-w-64" id="reset-btn" on:click={handleResetPassword}>Reset Password</button>
</div>
