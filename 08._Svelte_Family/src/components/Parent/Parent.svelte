<script>
    import Child from "../Child/Child.svelte";
    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";

    export let parentName;
    export let myChildren;

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName}.`);
    }

    let treasureChest = [
        "🧣",
        "👖",
        "🧳",
        "🌂",
        "☂️",
        "🧵",
        "🥼",
        "🦺",
        "👔",
        "👕",
    ];

    function handleTakeItem() {
        console.log(treasureChest.pop());
        treasureChest = treasureChest;
    }

    function clearFridge() {
        fridgeMessages.set([{message: "Svelte Family Fridge"}]);
    }
</script>

<h1>{parentName}</h1>
<p>_________________________________________________</p>
<p>
    {#each treasureChest as treasure}
        {treasure + " "}
    {/each}
</p>
<p>_________________________________________________</p>

<button on:click={clearFridge}>Clear Fridge</button>

{#each myChildren as child}
    <Child {child} onShowLove={handleShowLove} onTakeItem={handleTakeItem} />
{/each}
