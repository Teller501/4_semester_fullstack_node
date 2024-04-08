<script>
    export let child;
    export let onShowLove;
    export let onTakeItem;

    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";

    let fridgeMessageInputValue = "";

    function submitFridgeMessage() {
        const newFridgeMessage = {
            creator: child.name,
            message: fridgeMessageInputValue,
        };
        // fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);

        fridgeMessages.update((fridgeMessagesStore) => {
            fridgeMessagesStore.push(newFridgeMessage);
            return fridgeMessagesStore;
        })

        fridgeMessageInputValue = "";
    }
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
>
    <h3>{child.name}</h3>

    <label for="fridgeMessageInput">Wrtie a Fridge Message</label>
    <input
        type="text"
        name="fridgeMessageInput"
        placeholder="Fridge Message"
        bind:value={fridgeMessageInputValue}
    />

    <br />
    <button on:click={submitFridgeMessage}>Write Fridge Message</button>
    <br /> <br />

    <button on:click={() => onShowLove(child.name)}>Show Love 💜</button>
    <button on:click={onTakeItem}>Take Item</button>
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
