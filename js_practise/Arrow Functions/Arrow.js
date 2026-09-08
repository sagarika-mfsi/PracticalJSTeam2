//Arrow functions with no parameters
const test0 = () => console.log("i am a arrow function without taking any parameter");
test0();

//Arrow function with parameters
const test1 = (a, b) => console.log(a + b);
test1(1, 2); //3

//Arrow function with only one parameter
const test2 = num => { return num * 2; };
console.log(test2(2));

//Arrow function with return statement
//1. Explicit
const return1 = (a, b) => {
    return a * b;
}
let res = return1(2, 2);
console.log(res);

//2. Implicit return
const return2 = (a, b) => a * b; //here js automatically return the value of a*b
let res2 = return2(1, 2);
console.log(res2);

//Returning an Object from an Arrow Function
const myObj1 = () => ({ //here the arrow function is returning the object
    name: "sagarika",
    role: "QA"
})
console.log(myObj1());
console.log(myObj1().name);
console.log(myObj1().role);

//Arrow Functions as Callback Functions
function f1(callback) {
    callback();
}
f1(() => console.log("i am a callback arrow function"));

//Arrow function inheitig this from its lexical scope here function
const person = {
    name: "John",
    regularFunction: function () {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name); //here this is inherited from its lexical scope i.e the function above it
    }
};

person.regularFunction();
person.arrowFunction();

//Arrow Functions and async
const myArrFunc1 = async () => {
    setTimeout(() => {
        console.log("Hello after 2 seconds");
    }, 1000);
};
console.log(myArrFunc1()); //it will return Promise as the function is async and after 1 sec it will print "Hello after 2 seconds"


/*
Notes:
1. Arrow functions don't have their own prototype.
This is another reason they cannot be used as constructors.

2. Arrow functions don't have their own this, so call(), apply(), and bind() cannot change the arrow function's this.

3. Arrow Functions Don't Have Their Own arguments

4. Arrow Functions Cannot Be Used as Constructors

5. Arrow functions cannot be called with: new
   because they don't have their own constructor behavior.

6. Arrow functions do not have their own this; they inherit this from the lexical surrounding scope.
*/
