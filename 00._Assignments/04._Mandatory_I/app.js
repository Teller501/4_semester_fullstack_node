import express from "express";

const app = express();

app.use(express.static("public"));

import {
    homepagePage,
    javascriptFundamentalsPage,
    nodeFundamentalsPage,
    expressPage,
    restAPIPage,
    urlAnatomyPage,
    miscPage,
} from "./util/readPages.js";

app.get("/", (req, res) => {
    res.send(homepagePage);
});

app.get("/javascript-fundamentals", (req, res) => {
    res.send(javascriptFundamentalsPage);
});

app.get("/nodejs-fundamentals", (req, res) => {
    res.send(nodeFundamentalsPage);
});

app.get("/express", (req, res) => {
    res.send(expressPage);
});

app.get("/rest-api", (req, res) => {
    res.send(restAPIPage);
});

app.get("/url-anatomy", (req, res) => {
    res.send(urlAnatomyPage);
});

app.get("/misc", (req, res) => {
    res.send(miscPage);
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
