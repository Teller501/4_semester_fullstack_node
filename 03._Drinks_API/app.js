const express = require('express');

const app = express();

const drinks = [
	{ id: 1, name: 'Coca-Cola', type: 'Soda'},
	{ id: 2, name: 'Pepsi', type: 'Soda' },
	{ id: 3, name: 'Faxe-Kondi', type: 'Soda' },
	{ id: 4, name: 'Tuborg Classic', type: 'Beer', alcohol_percentage: '4.7%' },
	{ id: 5, name: 'Carlsberg Nordic', type: 'Non Alcoholic Beer' },
	{ id: 6, name: 'Gin & Tonic', type: 'Alcoholi Beverage' },
  ];

app.get("/drinks", (req, res) => {
    return res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const providedDrinkId = Number(req.params.id);
    const foundDrink = drinks.find((drink) => drink.id === providedDrinkId);

    if (!foundDrink){
        res.status(404).send({ data: "drink not found" })
    } else {
        res.send({ data: foundDrink });
    }
});


app.listen(8080, (error) => {
    if (error){
        console.log("Error starting the server");
        return;
    }

    console.log("Server is running on port", 8080);
});