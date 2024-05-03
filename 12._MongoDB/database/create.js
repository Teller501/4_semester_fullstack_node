import db from "./connection.js";

const createdIceCream = await db.types.insertOne({
    name: "Københavner Stang",
    price: 12.5,
});
console.log(createdIceCream);
