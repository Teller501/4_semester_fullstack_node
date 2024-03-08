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
