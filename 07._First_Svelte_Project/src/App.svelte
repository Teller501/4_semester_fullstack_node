<script>
    import Greeter from "./components/Greeter/Greeter.svelte";
    import FriendsCounter from "./components/FriendsCounter/FriendsCounter.svelte";
</script>

<main>
    <Greeter name="fede"></Greeter>

    <FriendsCounter friendsCounter={10}></FriendsCounter>
</main>
