function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
let a = outer();
let b = outer();
a(); //1
a(); //2
b(); //1
a(); //3
b(); //2

//Create a function that maintains a private number and returns two functions:
function f1() {
    let n1 = 0;
    return {
        increment() {
            return ++n1;
        },
        decrement() {
            return --n1;
        }
    }
}
let counter = f1();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.increment()); // 2

//-------------------------------------------
function multiplyBy(n) {
    return function (num) {
        return num * n;
    };
}
let res = multiplyBy(5); //fix value 5
res = multiplyBy(4);
console.log(res(10)); // 50 // it will add with 5 whatever argument we have passed
console.log(res(7));  // 35

//NOTE:
/*Rule #1
Inner function remembers variable of outer function even after that outer scope has finished execution.*/

function createTestData(role) {

    return function (username) {

        return {
            username: username,
            role: role
        };
    };
}

let adminData = createTestData("admin");

console.log(adminData("sagarika")); //{ username: 'sagarika', role: 'admin' }
console.log(adminData("testA")); //{ username: 'testA', role: 'admin' }

/*
Function
   +
Lexical Environment
   +
Function remembers/accesses that environment
   =
Closure
*/