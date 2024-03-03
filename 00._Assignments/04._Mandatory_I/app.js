import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

app.get("/javascript-fundamentals", (req, res) => {
    res.sendFile(
        path.resolve(
            "public/pages/javascriptFundamentals/javascriptFundamentals.html"
        )
    );
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
