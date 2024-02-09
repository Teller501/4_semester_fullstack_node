// "use strict"; fange fejl ved brug af strict mode, som ellers ikke vil fanges

// totalGlobalVariable = "Never EVER!!! do this!!!"
var globalVariable = "Also NEVER ever do this!!!";

// use const whenever possible, else use let

// global scope

function someOtherScope(){
    // function scope
}

{
    // block scope
    // console.log("what is this?")
}

{
    var someValue = true; 
    {
        var someValue = false;
    }
    //console.log(someValue);
}

{
    let someValue = true; 
    {
        let someValue = false;
    }
    console.log(someValue);
}

for (let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}