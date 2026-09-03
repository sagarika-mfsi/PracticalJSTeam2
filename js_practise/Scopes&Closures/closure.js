function outer() {
    let count = 0;
    return function() {
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
function f1(){
    let n1 = 0;
    return{
        increment(){
          return ++n1;
            } ,
        decrement(){
            return --n1;
        }
    }  
}
let counter = f1();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.increment()); // 2


function multiplyBy(n) {
    return function (num) {
        return num * n;
    };
}
let multiplyBy5 = multiplyBy(5);
console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5(7));  // 35