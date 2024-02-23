const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html")
});

app.get("/greeting", (req, res) => {
    const name = req.query.name;

    if (name === 'anders'){
        res.send({ data: `hello ${name}` })
    } else {
        res.send({ data: "hello stranger" })
    }

});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));