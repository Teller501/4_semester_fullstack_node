const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
  res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

const knownNames = ["Anders", "Victor"];

app.get("/greeting", (req, res) => {
  const providedName = req.query.name;

  if (knownNames.includes(providedName)) {
    res.send({ data: `hello ${providedName}` });
  } else {
    res.send({ data: "hello stranger" });
  }
});

app.get("/knownpeople", (req, res) => {
  res.send({ data: knownNames.length });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));
