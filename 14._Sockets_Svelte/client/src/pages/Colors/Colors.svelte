<script>
    import io from "socket.io-client";

    const socket = io("localhost:8080");

    let color;

    socket.on("server-sends-color", (data) => {
        document.body.style.backgroundColor = data.data;
    });

    function submitColor() {
        socket.emit("client-sends-color", { data: color });
    }
</script>

<input type="color" bind:value={color}/>
<button on:click={submitColor}>Submit Color</button>