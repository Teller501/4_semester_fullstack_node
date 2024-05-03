import db from "./connection.js";

const updatedIceCream = await db.types.updateOne({ name: "Københavner Stang" }, { $set: { price: 10 }});
console.log(updatedIceCream);