// we will always default to const
const myName = "Anders";

const me = {};

me.name = myName;

// console.log(me);

// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and thus also HAS to be assigned


// will give error and has to be initialized in const declaration
// const test; 

const hobbies = ["coding", "eating"];
hobbies.push("sleeping");

me.hobbies = hobbies;

// console.log(me);

// Types in JS - number, string, boolean, object, null, undefined, symbol, bigint

// __type coercion__

// we ALWAYS use strict equality checks:
// === and !==