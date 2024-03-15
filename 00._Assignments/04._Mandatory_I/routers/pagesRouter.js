import { Router } from "express";

const router = Router();

import {
    homepagePage,
    javascriptFundamentalsPage,
    nodeFundamentalsPage,
    expressPage,
    restAPIPage,
    urlAnatomyPage,
    miscPage,
} from "../util/readPages.js";

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/javascript-fundamentals", (req, res) => {
    res.send(javascriptFundamentalsPage);
});

router.get("/nodejs-fundamentals", (req, res) => {
    res.send(nodeFundamentalsPage);
});

router.get("/express", (req, res) => {
    res.send(expressPage);
});

router.get("/rest-api", (req, res) => {
    res.send(restAPIPage);
});

router.get("/url-anatomy", (req, res) => {
    res.send(urlAnatomyPage);
});

router.get("/misc", (req, res) => {
    res.send(miscPage);
});

export default router;
