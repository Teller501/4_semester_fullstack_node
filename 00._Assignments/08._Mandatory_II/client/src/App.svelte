<script>
    import { Router, Route, Link, navigate } from "svelte-navigator";
    import PrivateRoute from "./components/PrivateRoute.svelte";
    import Home from "./pages/Home/Home.svelte";
    import Activation from "./components/Activation.svelte";
    import Auth from "./pages/Auth/Auth.svelte";
    import ResetPassword from "./pages/ResetPassword/ResetPassword.svelte";
    import { logoutUser } from "./util/auth";
    import { userStore } from "./stores/authStore";
    import mandatoryii from "./assets/mandatoryii.svg";

    function handleLogout() {
        logoutUser();
        navigate("/", {
            replace: true,
        });
    }
</script>

<Router>
    <nav
        class="p-fixed top-0 left-0 right-0 h-16 bg-c-#eeeeee[70] shadow-sm d-flex flex-row j-content-between a-items-center text-125 pl-4 pr-8"
    >
        <div class="flex-1 d-flex j-content-start">
            <Link to="/">
                <img
                    src={mandatoryii}
                    class="w-12 d-inline-block"
                    alt="Mandatory II Logo"
                />
            </Link>
        </div>

        <div class="flex-1 d-flex j-content-center">
            <Link
                class="text-c-#7aa2e3 mx-4"
                hover="text-c-#7aa2e3:-10"
                to="/home">Home</Link
            >
        </div>

        <div class="flex-1 d-flex j-content-end">
            {#if $userStore}
                <Link
                    class="text-c-#7aa2e3"
                    hover="text-c-#7aa2e3:-10"
                    to="/"
                    on:click={handleLogout}>Logout</Link
                >
            {:else}
                <Link class="text-c-#7aa2e3" hover="text-c-#7aa2e3:-10" to="/"
                    >Login</Link
                >
            {/if}
        </div>
    </nav>

    <Route path="/activate/:token" component={Activation} />
    <Route path="/reset-password/:token" component={ResetPassword} />
    <Route path="/"><Auth /></Route>
    <Route path="*"><Auth /></Route>
    <PrivateRoute path="/home">
        <Home />
    </PrivateRoute>
</Router>
