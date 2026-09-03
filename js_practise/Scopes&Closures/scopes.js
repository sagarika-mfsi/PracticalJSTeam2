var a = 10;
function test() {
    var a = 20;
    console.log(a); //20
}
test(); //20
console.log(a); //10

//-------------------------------

let x = 10;
{
    let x = 20;
    console.log(x); //20
}
console.log(x); //10

//-------------------------------

var x1 = 10;
{
    var x1 = 20;
}
console.log(x); //20
// JavaScript ignores the block! as var is function scopes not block scoped
// It sees 'var x' again and overwrites the global x to 20

//------------------------------------
let x2 = 10;
function test() {
    let x2 = 20;
    console.log(x2); //20
}
test();
console.log(x2); //10

//------------------------------------

if (true) {
    var a = 10;
    let b1 = 20;
}
console.log(a); //10
console.log(b1); //reference error ( not accessible outside the block as it is block scoped)

//----------------------------------
function test() {
    var a = 10;
    if (true) {
        var a = 20;
        console.log(a); //20
    }
    console.log(a); //20
}
test();

//-------------------------------
function test() {
    let a = 10;
    if (true) {
        let a = 20;
        console.log(a); //20
    }
    console.log(a); //10
}
test();

//-------------------------------
for (var i = 0; i < 3; i++) {
    console.log(i); //0,1,2
}
//console.log(i); //3 here var will access the i inside for block and as it incremented to 3 after iteration its value now is 3

//---------------------------------
for (let i = 0; i < 3; i++) {
    console.log(i); //0,1,2
}
console.log(i); //reference error

//---------------------------------
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a); //10
        console.log(b); //20
        console.log(c); //30
    }
    inner();
}
outer();

//---------------------------------
let a = 10;
function outer() {
    let a = 20;
    function inner() {
        console.log(a); //20
    }

    inner();
}
outer();

//-------------------------------------
let a = 10;
function outer() {
    let a = 20;
    function inner() {
        let a = 30;
        console.log(a); //30
    }
    inner();
    console.log(a); //20
}
outer();
console.log(a); //10

//----------------------------------
var n1 = 10;
function test() {
    console.log(n1); //undefined 
    //as var is function scoped and it will 1st search inside the funtion as the value is assigned after access, so it will print undefined
    var n1 = 20;
    console.log(n1); //here it will print 20
}
test();

//-----------------------------------
let n2 = 10;
function test() {
    console.log(n2); //reference error
    let n2 = 20;
}
test();

//-----------------------------------
var x3 = 10;
{
    var x3 = 20; //here var will override by ignoring the block as its function scoped
    let y = 30;
    console.log(x3); //20
    console.log(y); //30
}
console.log(x3); //20

//------------------------------
let x4 = 10;
{
    let x4 = 20;
    {
        let x4 = 30;
        console.log(x4); //30
    }
    console.log(x4); //20
}
console.log(x4); //10

//----------------------------------
const x5 = 10;
function test() {
    const x5 = 20;
    if (true) {
        const x5 = 30;
        console.log(x5); //30
    }
    console.log(x5); //20
}
test();
console.log(x5); //10

//-------------------------------------
var a = 10;
function outer() {
    var a = 20;
    function inner() {
        console.log(a); //20
    }
    inner();
}
outer();

//--------------------------
var a = 10;
function outer() {
    function inner() {
        console.log(a); //20 because 1st it will search inside itself then outer then global
    }
    var a = 20;
    inner();
}
outer();

//---------------------------
let a = 10;
function outer() {
    console.log(a); //10
    {
        let a = 20;
        console.log(a); //20
    }
}
outer();

//------------------------------
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i); //4, 4, 4---?-------------------
    }, 1000);
}
//var inside for loop

//------------------------------
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);//1, 2, 3-------------------------
    }, 1000);
}

//------------------------------
let x6 = "global";
function outer() {
    let x6 = "outer";
    function inner() {
        console.log(x6); //"outer"
    }
    inner();
}
outer();

//--------------------------
var x7 = 1;
function test() {
    console.log(x7); //undefined
    if (true) {
        var x7 = 2;
        let y = 3;
        console.log(x7); //2
        console.log(y);  //3
    }
    console.log(x7); //2
}
test();
console.log(x7); //1

//func returning obj
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}
let user1 = createUser("Sagarika", 26);
console.log(user1);

//returning an object which holds one function
function getUser() {
    return {
        name: "Sagarika",
        greet: function () {
            console.log("Hello!");
        }
    };
}
let user = getUser();
console.log(user.name); // Sagarika
console.log(user.greet); //function
user.greet();           // Hello!

//Arrow function returning an object
/*error
let getUser = () => {
    name: "Sagarika",
    age: 26
};*/
let getUser = () => (
    {
        name1: "Sagarika",
        age1: 26
    }
)
//or explicit return
let getUser = () => {
    return {
        name: "Sagarika",
        age: 26
    }
};