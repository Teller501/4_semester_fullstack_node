<script>
    import Child from "../Child/Child.svelte";

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

    function handleTakeItem(childName) {
        console.log(treasureChest.pop());
        treasureChest = treasureChest;
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

{#each myChildren as child}
    <Child {child} onShowLove={handleShowLove} onTakeItem={handleTakeItem} />
{/each}
