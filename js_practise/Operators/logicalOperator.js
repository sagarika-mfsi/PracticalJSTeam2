/*-----------------------------------------------------------------------------
LOGICAL AND &&
-----------------------------------------------------------------------------
*/

//  Question:01
let a = true;
let b = false;
//console.log(a && b); //false
//console.log(true && true); //true
//console.log(false && true); //false

//  Question:02
//let age = 25;
//console.log(age >= 18 && age <= 60); //true

//  Question:03
let username = "Sagarika";
let password = "1234";
//console.log(username === "Sagarika" && password === "1234"); //true

/*---------------------------------------------------------------------------
LOGICAL OR ||
-----------------------------------------------------------------------------
*/
//console.log(true || false); //true
//console.log(false || false);  //false

let age = 17;
//console.log(age >= 18 || age === 17); //true

let day = "Sunday";
//console.log(day === "Saturday" || day === "Sunday"); //true

let role = "admin";
//console.log(role === "admin" || role === "manager"); //true

/*---------------------------------------------------------------------------
LOGICAL NOT !
-----------------------------------------------------------------------------
*/
//console.log(!true); //false
//console.log(!false); //true
let isLoggedIn = false;
//console.log(!isLoggedIn); //true

let age2 = 20;
//console.log(!(age2 < 18)); //true

/*---------------------------------------------------------------------------
Truthy/Falsy + Logical Operators
---------------------------------------------------------------------------
*/
/*&&: all value true : last true value
false and true value : 1st false value return
for || its vice versa
*/ 

//console.log("Hello" && "World"); //true---query
//console.log("qa" && ""); //false----query
//console.log("Hello" || "World"); //why not World?
//console.log("" || "Hello"); //Hello
//console.log(0 || 100); //100
//console.log(10 && 20); //20
//console.log(null || "JavaScript"); //JavaScript
//console.log(undefined && "Hello"); //undefined

/*---------------------------------------------------------------------------
Mixed Logical Operators
---------------------------------------------------------------------------
*/
let age3 = 25;
let hasID = true;
//console.log(age3 >= 18 && hasID); //true

let age4 = 16;
let hasPermission = true;
//console.log(age >= 18 || hasPermission); //true

let user = "Sagarika";
let pass = "";
//console.log(user && pass); //false--qa

let uname = "";
let pword = "1234";
console.log(uname || pword); //1234

/*-------------------------------------------------------------------------
Operator Precedence
---------------------------------------------------------------------------
*/
//console.log(true || false && false); //true
//console.log((true || false) && false); //false
//console.log(true && false || true); //true
//console.log(false || true && false); //false
let a1 = 10;
let b1 = 20;

console.log(a1 > 5 && b1 > 15); //true 
console.log(a1 > 15 || b1 > 15); //true
console.log(!(a1 > b1)); //true