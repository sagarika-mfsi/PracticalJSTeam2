/*Hoisting with var
With var, the declaration is hoisted, but the initialization is not.*/
console.log(a);
var a = 10; //undefined
//here it works like:
/*var a;

console.log(a);

a = 10;*/
/*Declaration → Hoisted
Initialization → Not Hoisted*/

//2. let & const hoisting
console.log(a); //ReferenceError
let a = 10;

console.log(b); //ReferenceError
const b = 20;

//3. Function hoisting
//Function declarations are fully hoisted.
greet(); //Good Morning
function greet() {
    console.log("Good Morning");
}

//4. Function Expression
//Function expressions behave differently.

greet(); //TypeError: greet is not a function
var greet = function () {
    console.log("Hello");
};

/* internally it works like:
var greet;

greet(); // undefined is not a function

greet = function () {
    console.log("Hello");
};*/