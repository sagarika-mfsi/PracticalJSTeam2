//  que 01
console.log(typeof null); //OBJ
console.log(typeof []); //obj
console.log(typeof {}); //obj
console.log(typeof NaN); //number

//que 02
let a = 10;
let b = "10";
console.log(a == b); //true
console.log(a === b); //false

//que03
const arr = [10, 20, 30];
const newArr = [...arr];
newArr.push(40);
console.log(arr);
console.log(newArr);

//que04
let x;
console.log(x); //undefined
console.log(typeof x); //undefined

//que05
const user = {
    name: "John"
};
user.name = "Sam";
console.log(user.name); //Sam

//que06
console.log(10 + "5"); //105
console.log(10 - "5"); //5
console.log(10 * "5"); //50

//que07
console.log(true + true); //2
console.log(true + false); //1
console.log(false + false); //0

//que08
console.log(0 || "Hello"); //Hello
console.log("QA" || "Automation"); //QA
console.log(null ?? "Default"); //Default
// || returns the right side if the left side is any falsy value (0, false, "", null, undefined, NaN).
// ?? returns the right side only if the left side is null or undefined.

//que09
let a1 = 5;
console.log(a1++); //5
console.log(++a1); //7
console.log(a1); //7

//que10
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean("false")); //true
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true

//que11
let x1 = 10;
function test() {
    let x1 = 20;
    console.log(x1); //20
}

test();

console.log(x1); //10

//que12
var x2 = 10;
if (true) {
    var x2 = 20;
}

console.log(x2); //20

//que13
console.log(a2); //reference error
let a2 = 10;

console.log(a3); //undefined
var a3 = 10;

//que14
const employee = {
    name: "John",

    display: () => {
        console.log(this.name); //undefined
    }
};

employee.display();

//que 16
try {
    console.log(a);
} catch(error) {
    console.log("Error occurred");
} finally {
    console.log("Finally executed");
}

//que 17
console.log([] == false); //true
//console.log([] === false); //false

//que 18
console.log(null == undefined); //true
console.log(null === undefined); //false

//que 19
let a4 = [1,2,3];
let b4 = a4;

b4.push(4);

console.log(a4);

//que 20
let numbers = [1,2,3,4,5];

numbers.forEach(number => {
    if(number === 3) {
        //break; //cant use inside for each
    }
});

//que 21
const user = {
    name: "John"
};

console.log(user.age.toUpperCase()); //Cannot read properties of undefined (reading 'toUpperCase')

//que 22
let a11 = 10;
const b11 = "10";

console.log(a11 == b11);
console.log(a11 === b11);

let x12;
//const x123; //SyntaxError: Missing initializer in const declaration

function test() {
    console.log(a);
    var a = 20;
}

/*it converted like:
var a;
console.log(a); // undefined
a = 20;*/

setTimeout(console.log("Hello"), 2000);

async function test() {
    return  "Hello"; 
}

console.log(await test()); //without await promise obj but with await hello

const numbers1 = [1, 2, 3];

const result = numbers1.forEach(num => num * 2);

console.log(result); //undefined

const numbers2 = [2, 4, 6, 8];

console.log(numbers2.some(num => num % 2 !== 0)); //false
console.log(numbers2.every(num => num % 2 === 0)); //true