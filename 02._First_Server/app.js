const express = require("express");
const app = express();

//const app = require("express")();

app.use(express.json());

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

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    const withdrawalAmount = Number(req.params.withdrawalAmount);

    if(!withdrawalAmount) res.send({ data: "YOu have submitted an incorrect amount" });

    if ((balance - withdrawalAmount) < 0) {
        res.send({ data: "Sorry, not enough funds." });
    } else {
        balance -= withdrawalAmount;

        res.send({ data: balance });
    }
    
});


// /saySomethingNiceAboutMe/hej?handome=very&tall=indeed&cool=always
app.get("/saySomethingNiceAboutMe/:greeting", (req,res) => {
    console.log(req.params.greeting);
    console.log(req.query);

    if (req.query.handsome !== "very"){
        return res.send({ data: "ain't no thang" })
    }

    return res.send({ data: 'thanks cool cat' })
});

app.post("/postman", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>");
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);