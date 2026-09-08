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
//---------
let set5 = new Set();
set5.add("hello");
set5.add(30);
set5.add(true);
set5.add("HELLO");
console.log(set5); //Set(4) { 'hello', 30, true, 'HELLO' }

//2.delete(): returns true. If value doesn't exists, returns false
//------------------------------------------------------------------
//set5.delete(true);
console.log(set5.delete(true)); //true
console.log(set5.delete(false)); //false
//after delete
console.log(set5); //Set(3) { 'hello', 30, 'HELLO' }

//3. has(): Checks whether a value exists.
//---------------------------------------
console.log(set5.has("Chrome")); //false

//clear(): empty the set
set5.clear();
console.log(set5); //Set(0) {}

//size: size of the set
let set6 = new Set([10, 20, 30]);
console.log(set6.size); //3

//values(): returns one iterator
console.log(set6.values()); //[Set Iterator] { 10, 20, 30 }

// it can be useful to iterate over the set as below:
for (let val of set6.values()) {
    console.log(val);  // 10 20 30
}

//Iterating a Set using for...of
for (let val of set6) {
    console.log(val);  // 10 20 30
}

//Iterating a Set using for Each
set6.forEach(val => console.log(val)); //// 10 20 30

//keys() in Set
//In Set, keys and values are effectively the same.
let set7 = new Set(["A", "B", "C"]);
console.log(set7.keys()); //same as values() [Set Iterator] { 'A', 'B', 'C' }

//entries()
console.log(set7.entries()); //[Set Entries] { [ 'A', 'A' ], [ 'B', 'B' ], [ 'C', 'C' ] } Because Set doesn't have separate keys and values.

//A Set is not index-based.
console.log(set7[1]); //undefined

//Converting Set → Array
let set8 = new Set(["A", "B", "C"]);
let myArr = [...set8]; //using rest operator
console.log(set8); //Set(3) { 'A', 'B', 'C' }
console.log(myArr); //[ 'A', 'B', 'C' ]

//Array → Set → Array [...new Set(array)] it Convert array into Set to remove duplicates, then convert it back into array.
let set9 = ["A", "B", "C"];
let res = [...new Set(set9)];
console.log(res);



