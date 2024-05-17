<script>
    import { nicknameStore } from "../../stores/nicknameStore.js";
    
    let nickname;

    async function submitNickname() {
        await fetch("http://localhost:8080/nicknames", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nickname: nickname })
        });
        
        nicknameStore.set(nickname);

        localStorage.setItem("nickname", nickname);
    }
</script>

<input bind:value={nickname} placeholder="nickname"/>
<button on:click={submitNickname}>Submit Nickname</button>