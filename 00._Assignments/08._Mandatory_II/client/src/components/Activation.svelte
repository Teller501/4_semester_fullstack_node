<script>
    import { onMount } from 'svelte';
    import toast, { Toaster } from "svelte-french-toast";
    import { fetchGet } from '../util/api';
    import { navigate, useParams } from 'svelte-navigator';
    import { BASE_URL } from '../stores/generalStore.js';
   
    const params = useParams();

    const token = $params.token;
   
    onMount(async () => {
   
       const { status } = await fetchGet(`${$BASE_URL}/api/activate/${token}`);

        if (status === 200) {
            toast.success("Account activated. You can now login.", { duration: 5000 });
            navigate("/");
        } else {
            toast.error("Account activation failed.", { duration: 3000 });
        }
    });
</script>
<h1>    HELLAODSOLDASOL </h1>
<Toaster />