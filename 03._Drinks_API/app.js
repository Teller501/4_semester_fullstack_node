const express = require('express');

const app = express();

app.use(express.json());

const drinks = [
	{ id: 1, name: 'Coca-Cola', type: 'Soda'},
	{ id: 2, name: 'Pepsi', type: 'Soda' },
	{ id: 3, name: 'Faxe-Kondi', type: 'Soda' },
	{ id: 4, name: 'Tuborg Classic', type: 'Beer', alcohol_percentage: '4.7%' },
	{ id: 5, name: 'Carlsberg Nordic', type: 'Non Alcoholic Beer' },
	{ id: 6, name: 'Gin & Tonic', type: 'Alcoholi Beverage' },
  ];

  let currentId = 6;

app.get("/drinks", (req, res) => {
    return res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const providedDrinkId = Number(req.params.id);
    const foundDrink = drinks.find((drink) => drink.id === providedDrinkId);

    if (!foundDrink){
        res.status(404).send({ error: "drink not found by id", providedDrinkId })
    } else {
        res.send({ data: foundDrink });
    }
});

app.post("/drinks", (req, res) => {
    const newDrink = req.body;
    newDrink.id = ++currentId;
    drinks.push(newDrink);

    res.send({ data: newDrink })
});

app.patch("/drinks/:id", (req, res) => {
    const providedDrinkId = Number(req.params.id);
    const foundDrinkIndex = drinks.findIndex((drink) => drink.id === providedDrinkId);

    if (foundDrinkIndex === -1){
        res.status(404).send({ error: "drink not found by id", providedDrinkId })
    } else {
        const originalDrink = drinks[foundDrinkIndex];
        const drinkToUpdate = { ...originalDrink, ...req.body, id: providedDrinkId };
        drinks[foundDrinkIndex] = drinkToUpdate
        res.send({ data: drinkToUpdate });
    }
});

app.delete("/drinks/:id", (req, res) => {
    const providedDrinkId = Number(req.params.id);
    const foundDrinkIndex = drinks.findIndex((drink) => drink.id === providedDrinkId);

    if (foundDrinkIndex === -1){
        res.status(404).send({ error: "drink not found by id", providedDrinkId })
    } else {
        drinks.splice(foundDrinkIndex, 1);
        res.send({ data: providedDrinkId });
    }

    res.send({ })
});


app.listen(8080, (error) => {
    if (error){
        console.log("Error starting the server");
        return;
    }

    console.log("Server is running on port", 8080);
});