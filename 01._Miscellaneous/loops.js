// loop method
// forEach, map, filter, sort, find, reduce


const dogs = [
    { name: "Lassie", famelevel: 13 },
    { name: "Beethoven", famelevel: 8 },
    { name: "Hachiko", famelevel: 18 },
    { name: "Balto", famelevel: 5 },
];

// add a famelevel of +3 for all dogs
const moreFamousDogs = dogs.map((dog) => {
    dog.famelevel += 3;
    return dog;
});

console.log(moreFamousDogs);

// task add the key male and value true except for Lassie
const genderedDogs = moreFamousDogs.map((dog) => ({
    name: dog.name,
    isMale: dog.name === 'Lassie' ? false : true,
    famelevel: dog.famelevel
}));

console.log(genderedDogs);


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

// console.log(numbers);
// console.log(doubledNumbers);

numbers.map(number => console.log(number));
