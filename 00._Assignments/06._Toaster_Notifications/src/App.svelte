<script>
    import toast, { Toaster } from "svelte-french-toast";

    function handleClick() {
        toast.error("Always at the top.", {
            position: "top-center",
        });
    }
</script>

<Toaster />
<button type="button" on:click={handleClick}>Toast</button>
