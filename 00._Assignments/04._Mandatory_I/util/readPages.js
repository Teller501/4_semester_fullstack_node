import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage, {
    tabTitle: "Node Portfolio",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/homepage.css">',
});

const javascriptFundamentals = readPage(
    "./public/pages/javascriptFundamentals/javascriptFundamentals.html"
);
export const javascriptFundamentalsPage = renderPage(javascriptFundamentals, {
    tabTitle: "JavaScript Fundamentals",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">',
});

const nodeFundamentals = readPage(
    "./public/pages/nodeFundamentals/nodeFundamentals.html"
);

export const nodeFundamentalsPage = renderPage(nodeFundamentals, {
    tabTitle: "Node.JS Fundamentals",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">',
});

const express = readPage("./public/pages/express/express.html");

export const expressPage = renderPage(express, {
    tabTitle: "Express.JS",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">',
});

const restAPI = readPage("./public/pages/rest-api/rest-api.html");

export const restAPIPage = renderPage(restAPI, {
    tabTitle: "Rest API & Fetching",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">',
});

const urlAnatomy = readPage("./public/pages/url-anatomy/url-anatomy.html");

export const urlAnatomyPage = renderPage(urlAnatomy, {
    tabTitle: "URL Anatomy",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">',
});

const misc = readPage("./public/pages/misc/misc.html");

export const miscPage = renderPage(misc, {
    tabTitle: "Misc",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">',
});
