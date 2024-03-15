import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

// // nullish coalesce operator ?? - null check
// const value = "";

// console.log(value ?? "some other value")
// console.log(value || "some other value") // type coerce --- takes falsy values and coerces them

const footer = fs
    .readFileSync("./public/components/footer/footer.html")
    .toString();

export function renderPage(page, config = {}) {
    const header = fs
        .readFileSync("./public/components/header/header.html")
        .toString();
    return (
        header
            .replace("$TAB_TITLE$", config.tabTitle ?? "DogInder")
            .replace("$CSS_LINKS$", config.CSSLinks ?? "") +
        page +
        footer
    );
}
