/*
Points to remember:
------------------
1️. async function always returns a Promise.
2. await waits for a Promise
3. Rejected Promise with await becomes an error.
4. await doesn't block the entire JavaScript program
   It pauses the current async function, while other JavaScript work can continue.
*/

async function test() {
    let result = await Promise.resolve("Hello"); //here if we remove await then it will give the promise itself, using await will give the result of the promise like in then
    console.log(result);
}
test();

//await does NOT block the entire JavaScript
async function f1(){
    console.log('Start');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("B");
}
f1();
console.log("end");

//async with error handling
async function f2(){
   try{
    let result = await Promise.reject(console.log("something went wrong!!"));
    console.log(result);
    }
    catch(err){
        console.log(err);  
    }
}
f2();

//Multiple awaits
function step1() {
    return Promise.resolve("Step 1 completed");
}

function step2() {
    return Promise.resolve("Step 2 completed");
}

async function test() {

    let result1 = await step1();
    console.log(result1); //Step 1 completed

    let result2 = await step2();
    console.log(result2); //Step 2 completed

}

test();

//Async await with API
async function getData() {
    let response = await fetch("https://dummyjson.com/users");
    let data = await response.json();
    console.log(data);

}
getData();

//Async arrow function
const test1 = async () => {
    let result = await Promise.resolve("Hello");
    console.log(result);

};

test1();