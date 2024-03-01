import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
