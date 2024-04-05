<script>
    export let child;
    export let onShowLove;
    export let onTakeItem;
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
>
    <h3>{child.name}</h3>
    <button on:click={() => onShowLove(child.name)}>Show Love 💜</button>
    <button on:click={() => onTakeItem(child.name)}>Take Item</button>
</div>

<style>
    .is-girl {
        color: lightcoral;
    }
    .is-boy {
        color: lightsteelblue;
    }
    .grey-sheep {
        border: 2px solid grey;
    }
    .black-sheep {
        border: 2px solid black;
    }
    .not-a-sheep {
        border: 2px solid coral;
    }
</style>
