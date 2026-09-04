//callback function is a function which is sent as an argument to another function and is called later by that function.

//Example:01 Passing a function as an argument
//-------------------------------------------
function welcome() {
    console.log("Good morning!!");
}
function greet(callback) {
    callback();
}
greet(welcome);


//Example:02 Callback taking parameter
//-----------------------------------
function add(a, b) { //this is my callback func
    console.log(a + b);
}
function operation(callback) { //this is higher order func as it recieves the callback function as a parameter
    callback(1, 2);
}
operation(add);

//Example:03 Callback using Anonymous Function
//without creating a separate function we can direct sent a function as an argument
function test(callback) {
    callback();
}
test(function () {
    console.log("hey i am a Anonymous callback function");
})

//Example:04 Callback using Arrow Function
function test2(callback) {
    callback();
}
test2(() => console.log("heyy i am a callback arrow function"));


//Example:05 Callbacks and setTimeout
//-----------------------------------------
console.log("Start");
setTimeout(function () {
    console.log("Inside timeout");
}, 2000);
console.log("End");

//Example:06 Callbacks in Array Methods
//-----------------------------------------


































/*
1. Function can be stored in a variable ex: let res = add;
                ↓
2. Function can be passed as an argument ex:add(test)
                ↓
3. Passed function = callback (test is callback)
                ↓
4. Function receiving it = higher-order function (add is higher order function)
                ↓
5. Callback can be synchronous OR asynchronous*/