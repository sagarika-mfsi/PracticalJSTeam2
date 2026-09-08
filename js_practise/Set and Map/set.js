/*
1. Set stores only unique values and automatically it ignores the duplicate values

2. Useful to remove duplicate values
*/

//Creating set(empty set)
let set1 = new Set();
console.log(set1); // Set(0) {}

//Set with values
let set2 = new Set("value1");
console.log(set2); //Set(6) { 'v', 'a', 'l', 'u', 'e', '1' }
//new Set() accepts an iterable, such as an Array, String, Map, etc. 
//A string is iterable character by character.

let set3 = new Set([10]);
console.log(set3); //Set(1) { 10 }

//Set from an array
let arr1 = [10, 20, 30, 40, 50]
let set4 = new Set(arr1);
console.log(set4);

//Set Methods:--------------
//1. add()


