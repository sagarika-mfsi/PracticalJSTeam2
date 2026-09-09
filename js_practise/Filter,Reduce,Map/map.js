/*
- map() is used when you want to transform every element of an array.
- map() runs once for every element.
  Therefore the output normally has the same number of elements.
*/
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(num => num * 2);
console.log(result); //[ 2, 4, 6, 8, 10 ]

let names = ["john", "sam", "alex"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); //[ 'JOHN', 'SAM', 'ALEX' ]

//map() with objects
let users = [
    { name: "John", age: 25 },
    { name: "Sam", age: 30 },
    { name: "Alex", age: 20 }
];
//Extract only names:
let resultedNames = users.map(val => val.name);
console.log(resultedNames); //[ 'John', 'Sam', 'Alex' ]

//map() can create a new object
let users2 = [
    { name: "John", age: 25 },
    { name: "Sam", age: 30 }
];
let result1 = users2.map(user => ({
    username: user.name,
    isAdult: user.age >= 18
}));

console.log(result1);
/*
[
  { username: 'John', isAdult: true },
  { username: 'Sam', isAdult: true }
]*/

//map() callback arguments(element, index, array)
let myArr = [10,20,30];
console.log(
  myArr.map(
    (e,i,a)=>{
      console.log(e*2,i,a);
    }
  )
);
