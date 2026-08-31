/*1. Converting String to Number
Using Number()*/
let value = "100";
let result = Number(value);
console.log(result); //100
console.log(typeof result); //number

//Using parseInt()
//parseInt() converts a string into an integer.
let value1 = "100";
let result1 = parseInt(value1);
console.log(result1); //100
console.log(typeof result1); //number

let value2 = "99.50";
console.log(parseInt(value2)); //99 It removes the decimal portion.

/*Using parseFloat()
parseFloat() is used when you want to keep the decimal value.*/
let value3 = "99.50";
let result3 = parseFloat(value3);
console.log(result3); //99.5

/*Converting Number to String
Using String().*/

let number1 = 100;
let result4 = String(number1);
console.log(result4); //100
console.log(typeof result4); //string

//Using .toString():
let number2 = 100;
let result5 = number2.toString();
console.log(result5); //100
console.log(typeof result5); //string

//Converting String to Array
// using split().
//Convert string into an array of characters
let n1 = "Sagarika";
let result6 = n1.split("");
console.log(result6); //["S", "a", "g", "a", "r", "i", "k", "a"]

//Convert a Comma-Separated String to Array
let fruits = "Apple,Banana,Mango";
let result7 = fruits.split(",");
console.log(result7);//["Apple", "Banana", "Mango"]

//Convert a Space-Separated String to Array
let names = "John Peter Rahul";
let result8 = names.split(" ");
console.log(result8); //["John", "Peter", "Rahul"]

//+ Operation with String and Number
//When + is used with a string, JavaScript performs string concatenation.

let a = "10";
let b = 20;
console.log(a + b); //1020

console.log("5" + 2); //52
console.log("5" - 2); //3

console.log("10" + 10); //1010
console.log("10" - 10); //0

console.log("100" + 50); //10050
console.log("100" - 50); //50

/*
For +:
String + anything → String

For -:
String numbers are converted to Number*/

let v1 = "Hello";
console.log(v1 - 5); //NaN
console.log(v1 + 5); //Hello5