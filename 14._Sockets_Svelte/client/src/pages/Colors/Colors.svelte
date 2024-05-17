<script>
    import ColorList from "../../components/ColorList/ColorList.svelte";
    import { colorListStore } from "../../stores/colorListStore.js";
    import io from "socket.io-client";

    const socket = io("localhost:8080");

    let color = "#000000";

    socket.on("server-sends-color", ({ data, nickname }) => {
        const color = data;

        colorListStore.update((colorListArray) => {
            colorListArray.push({ color, nickname });
            return colorListArray;
        });

        document.body.style.backgroundColor = color;
    });

    function submitColor() {
        socket.emit("client-sends-color", { data: color });
    }
</script>

<input type="color" bind:value={color}/>
<button on:click={submitColor}>Submit Color</button>

<ColorList />