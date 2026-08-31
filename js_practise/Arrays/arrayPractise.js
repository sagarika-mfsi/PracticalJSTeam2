//Q1. Create an array and print all elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];
//console.log(fruits);

//Q2. Create an array of numbers and find its length
let numbers = [10, 20, 30, 40, 50];
//console.log(numbers.length);

//Create an empty array and add values to it
let arr = [];
arr.push(10);
arr.push(20);
arr.push(30);
//console.log(arr);

//2. Accessing Array Elements
//Q4. Print the first and last element
let numbers1 = [10, 20, 30, 40, 50];
//console.log(numbers[0]);
//console.log(numbers[numbers.length - 1]);

//Q5. Print all array elements using a loop
let numbers2 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
}

//Q8. Add an element at the end using push()
let fruits1 = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
let removed = fruits.pop();
console.log(removed);
console.log(fruits);
//Add an element at the beginning using unshift()
let fruits2 = ["Banana", "Mango"];
fruits2.unshift("Apple");
console.log(fruits2);
//Remove the first element using shift()
let fruits3 = ["Apple", "Banana", "Mango"];
let removed1 = fruits3.shift();
console.log(removed1);
console.log(fruits3);

//Accessing array elements using a positive index
let frt = ["Apple", "Banana", "Mango", "Orange"];

console.log(frt[0]); // Apple
console.log(frt[1]); // Banana
console.log(frt[2]); // Mango

//Accessing array elements using a negative index

/*JavaScript arrays do not directly support negative indexes like Python.
This will not give you the last element:*/

console.log(fruits[-1]); // undefined

//accessing using -ve index using at
let f1 = ["Apple", "Banana", "Mango", "Orange"];

console.log(f1.at(-1)); // Orange
console.log(f1.at(-2)); // Mango
console.log(f1.at(-3)); // Banana

// Take name input
let userName = prompt("What is your name?");

// Check if the user didn't press cancel
if (userName !== null) {
    console.log("Hello, " + userName + "! Welcome to JavaScript.");
} else {
    console.log("You canceled the prompt.");
}

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("Enter numbers separated by comma: ", function(input) {
 
    let arr = input.split(",").map(Number);
 
    console.log("Array:", arr);
 
    rl.close();
});

//Creating array using new key word
let emptyArray = new Array(3);
console.log(emptyArray);        // [empty × 3]
console.log(emptyArray.length); // 3

let numbers = new Array(1, 2, 3); 
console.log(numbers); // [1, 2, 3]

// Multiple strings
let fruits = new Array("Apple", "Banana"); 
console.log(fruits); // ["Apple", "Banana"]

// Single non-number argument
let singleString = new Array("Hello"); 
console.log(singleString); // ["Hello"]