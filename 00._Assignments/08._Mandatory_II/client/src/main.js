import "./app.css";
import mojo from "mojocss";
import App from "./App.svelte";

mojo();

const app = new App({
    target: document.getElementById("app"),
});

export default app;
