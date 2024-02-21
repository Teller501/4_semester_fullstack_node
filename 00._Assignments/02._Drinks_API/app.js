const express = require('express');
const app = express();

app.use(express.json());


let drinks = [
	{ id: 1, name: 'Coca-Cola', type: 'Soda'},
	{ id: 2, name: 'Pepsi', type: 'Soda' },
	{ id: 3, name: 'Faxe-Kondi', type: 'Soda' },
	{ id: 4, name: 'Tuborg Classic', type: 'Beer'},
	{ id: 5, name: 'Carlsberg Nordic', type: 'Non Alcoholic Beer' },
	{ id: 6, name: 'Gin & Tonic', type: 'Alcoholi Beverage' },
  ];
  
  app.get('/drinks', (req, res) => {
	res.send(drinks);
  });

  app.get('/drinks/:id', (req, res) => {
	const id = req.params.id;
	const drink = drinks.find(d => d.id === Number(id));

	if (!Number(id)){
		res.send({ message: 'id is not valid, not a number' });
	}

	if (!drink){
		res.send({ message: `drink not found with id ${id}` });
	}

	res.send(drink);
  });

  app.post('/drinks', (req, res) => {
	const newId = drinks.reduce((maxId, drink) => Math.max(maxId, drink.id), 0) + 1;

	if (!req.body.name){
		return res.status(422).send({ data: 'No name added for drink' })
	}

	if (!req.body.type){
		return res.status(422).send({ data: 'No type added for drink' })
	}

  	const newDrink = { id: newId, ...req.body };
  	drinks.push(newDrink);

	res.send(newDrink);
  });

  const PORT = 8080;
  app.listen(PORT, () => console.log("Server is running on", PORT));


