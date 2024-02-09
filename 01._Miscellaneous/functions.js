
// hoisting
// getRandomInt();
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// task write the above in a single line

const getRandomIntArrowFunctionOneLiner = 
        (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);


                                // string // callback function
function genericActionPerformer(name, genericAction){
    return genericAction(name);
}

// write code below sat you console log "Alex is running"

const running = (name) => `${name} is running`;
const runningResult = genericActionPerformer("Alex", running)

console.log(runningResult);

// write code in a single line below sat you console log "Louis is eating"

console.log(genericActionPerformer("Louis", name => `${name} is eating`));