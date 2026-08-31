//JavaScript – String Comparison and Manipulation
//1. String Comparison using ===
//The === operator checks whether two strings are exactly equal, including their case.
let str1 = "Hello";
let str2 = "Hello";
console.log(str1 === str2); //true

//Different case
let str3 = "Hello";
let str4 = "hello";
console.log(str3 === str4); //false

//2. String Comparison using localeCompare()
//localeCompare() compares two strings and returns:
/*0 → strings are equal
Negative value → first string comes before second
Positive value → first string comes after second*/
let str5 = "Apple";
let str6 = "Banana";
console.log(str5.localeCompare(str6)); //-1

//Checking equality
let str7 = "Apple";
let str8 = "Apple";
console.log(str7.localeCompare(str8)); //0

//3. Case-Insensitive String Comparison
/*JavaScript string comparison is normally case-sensitive.
We can convert both strings to lowercase using toLowerCase().*/

let str9 = "Hello";
let str10 = "hello";
console.log(str9.toLowerCase() === str10.toLowerCase()); //true

//Another example
let username = "Sagarika";
let input = "sagarika";

if (username.toLowerCase() === input.toLowerCase()) {
    console.log("Username matched"); //Username matched
} else {
    console.log("Username does not match");
}


//4. Case-Insensitive Comparison using localeCompare()
//localeCompare() can also be used with options.

let str11 = "Hello";
let str12 = "hello";
console.log(
    str11.localeCompare(str12, undefined, { sensitivity: "base" })
); //0

/*Here, sensitivity: "base" means uppercase and lowercase differences are ignored.*/
//5. Replacing Substrings using replace()
//The replace() method is used to replace part of a string.

let message = "I like Java";
let result = message.replace("Java", "JavaScript");
console.log(result); //I like JavaScript

/*Note:
replace() normally replaces only the first matching occurrence.*/

let message1 = "Java is easy. Java is popular.";
let result1 = message1.replace("Java", "JavaScript");
console.log(result1); //JavaScript is easy. Java is popular.

/*6. Replacing All Occurrences
You can use replaceAll():*/

let message2 = "Java is easy. Java is popular.";
let result2 = message2.replaceAll("Java", "JavaScript");

console.log(result2);//JavaScript is easy. JavaScript is popular.

/*7. Concatenating Strings
Concatenation means joining two or more strings together.*/
//Using +
let firstName = "Sagarika";
let lastName = "Sethi";
let fullName = firstName + " " + lastName;
console.log(fullName); //Sagarika Sethi

//8. Concatenating using concat()
let firstName1 = "Sagarika";
let lastName1 = "Sethi";
let fullName1 = firstName1.concat(" ", lastName1);
console.log(fullName1); //Sagarika Sethi

//9. Concatenating using Template Literals
//This is one of the easiest and most commonly used approaches.

let firstName2 = "Sagarika";
let age = 26;
let message3 = `My name is ${firstName2} and I am ${age} years old.`;
console.log(message3);// My name is Sagarika and I am 26 years old.

/*10. Modifying Strings
Important concept
Strings are immutable in JavaScript.
This means you cannot directly change an existing string. String methods return a new string.*/

let nm4 = "sagarika";
nm4.toUpperCase();
console.log(nm4); //sagarika

/*The original string did not change.
You need to store the returned value:*/

let nm3 = "sagarika";
nm3 = nm3.toUpperCase();
console.log(nm3); //SAGARIKA

//11. Modifying String using toLowerCase()
let nm2 = "SAGARIKA";
nm2 = nm2.toLowerCase();
console.log(nm2); //sagarika

//12. Modifying String using replace()
let message4 = "I love Java";
message4 = message4.replace("Java", "JavaScript");
console.log(message4); //I love JavaScript

//13. Modifying String using trim()
//trim() removes spaces from the beginning and end.

let nm1 = "   Sagarika   ";
nm1 = nm1.trim();
console.log(nm1); //Sagarika

//14. Modifying String using slice()
//slice() creates a new string from part of the original string.

let message5 = "JavaScript";
let result3 = message5.slice(0, 4);

console.log(result3); //Java

//The original string remains unchanged:
let message6 = "JavaScript";
let result4 = message6.slice(0, 4);
console.log(message6); //JavaScript
console.log(result4); //Java