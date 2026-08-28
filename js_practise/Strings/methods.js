//String creation types  with example, concat

//charAt() Returns the character at a specific index.
//-------------------------------------------------------------
let str1 = "Sagarika";
console.log(str1.charAt(0)); // S
console.log(str1.charAt(3)); // a

//charCodeAt() Returns the Unicode value of the character at a specific index.
//-------------------------------------------------------------
let str2 = "Hello";
console.log(str2.charCodeAt(0)); // 72
console.log(str2.charCodeAt(1)); // 101

//toUpperCase() Converts a string to uppercase.
//-------------------------------------------------------------
let str3 = "hello world";

let result1 = str3.toUpperCase();
console.log(result); // HELLO WORLD

//toLowerCase() Converts a string to lowercase.
//-------------------------------------------------------------
let str4 = "HELLO WORLD";
let result2 = str4.toLowerCase();
console.log(result2); // hello world

//indexOf() Returns the index of the first occurrence of a value.
//-------------------------------------------------------------
let str5 = "hello world";
console.log(str5.indexOf("o")); // 4
console.log(str5.indexOf("world")); // 6
//If the value is not found:
console.log(str5.indexOf("z")); // -1

//lastIndexOf() Returns the index of the last occurrence of a value.
//-------------------------------------------------------------
let str6 = "hello world hello";
console.log(str6.lastIndexOf("hello")); // 12
console.log(str6.lastIndexOf("o")); // 16

//substring() Extracts characters between two indexes.

let str7 = "JavaScript";
console.log(str7.substring(0, 4)); // Java
console.log(str7.substring(4, 10)); // Script

//slice() Extracts part of a string.
//-------------------------------------------------------------
let str8 = "JavaScript";

console.log(str8.slice(0, 4)); // Java
console.log(str8.slice(4)); // Script
//Using negative indexes:
console.log(str8.slice(-6)); // Script


//substr() Extracts a specific number of characters starting from an index.
//-------------------------------------------------------------
let str9 = "JavaScript";

console.log(str9.substr(0, 4)); // Java
console.log(str9.substr(4, 6)); // Script

//Syntax: str.substr(startIndex, length);

//split() Splits a string into an array.
//-------------------------------------------------------------
let str10 = "Apple,Banana,Mango";
let fruits = str10.split(",");
console.log(fruits);
// ["Apple", "Banana", "Mango"]
//Split into individual characters:
let str11 = "Hello";
console.log(str11.split(""));
// ["H", "e", "l", "l", "o"]

//trim() Removes whitespace from both the beginning and end.
//-------------------------------------------------------------
let str12 = "   Hello World   ";
console.log(str12.trim());
// "Hello World"

//trimStart() Removes whitespace from the beginning only.
//-------------------------------------------------------------
let str13 = "   Hello World   ";
console.log(str.trimStart());
// "Hello World   "

//trimEnd() Removes whitespace from the end only.
//-------------------------------------------------------------
let str14 = "   Hello World   ";
console.log(str.trimEnd());
// "   Hello World"