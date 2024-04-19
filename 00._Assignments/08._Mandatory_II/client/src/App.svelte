<script>
    import { Router, Route, Link, navigate } from "svelte-navigator";
    import Login from "./components/Login.svelte";
    import Signup from "./components/Signup.svelte";
    import PrivateRoute from "./components/PrivateRoute.svelte";
    import Home from "./pages/Home/Home.svelte";

    // Function to navigate programmatically
    function goto(route) {
        navigate(route, { replace: true });
    }
</script>

<Router>
    <div id="auth">
        <div class="switch">
            <button on:click={() => goto("/")}>SIGN IN</button>
            <button on:click={() => goto("/signup")}>SIGN UP</button>
        </div>
        <Route path="/" component={Login} />
        <Route path="/signup" component={Signup} />
    </div>
    <PrivateRoute path="/home">
        <Home />
    </PrivateRoute>
</Router>

<style>
    #auth {
        background-color: #f8f6e3;
        max-width: 400px;
        margin: auto;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 300px;
    }
    .switch {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 1rem;
    }
    button {
        background-color: transparent;
        color: #7aa2e3;
        font-size: 0.6rem;
        font-weight: bold;
        cursor: pointer;
        border: none;
        background: none;
        padding: 10px 20px;
    }
    button:focus {
        outline: none;
    }
</style>
