import db from "./connection.js";

const deletedIceCream = await db.types.deleteOne({
    name: "Københavner Stang",
});

console.log(deletedIceCream);