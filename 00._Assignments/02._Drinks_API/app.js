const express = require('express');
const app = express();

let drinks = [
	{ id: 1, name: 'Coca-Cola', type: 'Soda'},
	{ id: 2, name: 'Pepsi', type: 'Soda' },
	{ id: 3, name: 'Faxe-Kondi', type: 'Soda' },
	{ id: 4, name: 'Tuborg Classic', type: 'Beer', alcohol_percentage: '4.7%' },
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

  app.listen(8080);


