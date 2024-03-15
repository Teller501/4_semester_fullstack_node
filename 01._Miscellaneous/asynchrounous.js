// asynchrounous code
// Browser event handlers, network calls, buffers / streams,
// working with files / directories, setTimeout / setInterval,
// databases

// Javascript one thread - the main thread

// Solution 1. Callbacks
// Problem: Callback hell, Pyramid of Doom

// Solution 2. Promises
// states:
// 1. pending
// 2. fulfilled
//    - resolved
//    - rejected

// Solution 3. Async/Await
// syntatic sugar

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("some error");
            resolve("Eveything OK");
        } catch (error) {
            // console.log(error);
            // reject("Nothing OK");
        }
    }, 2000);
});
// .then((successMessage) => console.log(successMessage))
// .catch((errorMessage) => console.log(errorMessage));

// console.log("Im walking here...");

/* Create a promisified function
that is, a function that returns a new promise
it should be called myPromise
and it should either resolve as "Something Good" or reject as "Something Bad"
create a 3 second timeout to simulate asynchronous behavior */

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw "Oh no";
                resolve("Something Good");
            } catch (error) {
                reject("Something Bad");
            }
        }, 3000);
    });
}

function myFetch(URL, options = {}) {
    return new Promise((resolve, reject) => {
        console.log(`Calling ${URL}`);
        setTimeout(() => {
            try {
                resolve({
                    json: () =>
                        new Promise((resolve, reject) =>
                            resolve("Response from server")
                        ),
                });
            } catch {
                reject();
            }
        }, 2500);
    });
}

// myFetch("https://www.google.com")
//     .then((response) => response.json())
//     .then((result) => console.log(result));

// IIFE
(async function () {
    try {
        const myPromiseResult = await myPromise();
        console.log(myPromiseResult);
    } catch (error) {
        console.log(error);
    }
})();
