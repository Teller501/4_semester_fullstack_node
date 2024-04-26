<script>
    export let showModal; // boolean

    let dialog; // HTMLDialogElement

    $: if (dialog) {
        if (showModal) dialog.showModal();
        else dialog.close();
    }
</script>

<dialog
    class="ma-auto text-c-#3868ba bg-c-#f8f6e3 rounded-10 border-none p-4"
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <div class="dialog-content" on:click|stopPropagation>
        <button class="close-btn" on:click={() => dialog.close()}>×</button>
        <slot name="header" />
        <hr />
        <slot />
        <hr />
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    .dialog-content {
        padding: 1em;
        position: relative;
    }
    .close-btn {
        position: absolute;
        top: 10px;
        right: 20px;
        color: #cd5c5c;
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        width: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
