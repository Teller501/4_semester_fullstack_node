const express = require('express');
const app = express();


// UTC
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());

app.get("/date", (req, res) => {
    const date = new Date();
    res.send({ data: date })
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"];

app.get("/month/v1", (req, res) => {
    const date = new Date();
    const monthIndex = date.getMonth();
    const currentMonth = months[monthIndex];

    res.send({ data: currentMonth })
});

app.get("/month/v2", (req, res) =>{
    const monthName = new Date().toLocaleString("en-us", { month: "long" })
    res.send({ data: monthName })
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/day", (req, res) => {
    const date = new Date();
    const dayIndex = date.getDay();
    const currentDay = days[dayIndex];

    res.send({ data: currentDay })
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting the server");
        return;
    }

    console.log("Server is running on port", PORT);
});