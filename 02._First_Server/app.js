//const express = require("express");
//const app = express();

const app = require("express")();

// route
        // endpoint 
app.get("/", (req, res) => {
    res.send({data: "Welcome"});
});

// get route with "secondRoute" as endpoint
app.get("/secondRoute", (req, res) => {
    res.send({ data: [1,2,3,4,5,6,7] });
});

app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    res.send({ name: firstValue});
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>");
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);