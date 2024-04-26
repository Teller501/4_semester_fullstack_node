<script>
    import { Router, Route, navigate } from "svelte-navigator";
    import PrivateRoute from "./components/PrivateRoute.svelte";
    import Home from "./pages/Home/Home.svelte";
    import Activation from "./components/Activation.svelte";
    import Auth from "./pages/Auth/Auth.svelte";
    import ResetPassword from "./pages/ResetPassword/ResetPassword.svelte";

</script>

<Router>
    <Route path="/activate/:token" component={Activation}/>
    <Route path="/reset-password/:token" component={ResetPassword}/>
    <Route path="/"><Auth /></Route>
    <PrivateRoute path="/home">
        <Home />
    </PrivateRoute>
</Router>