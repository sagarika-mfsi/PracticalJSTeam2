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


//Example:02 Callback with multiple parameters
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
    console.log("Inside timeout"); // After the timeout provided, the code got executed 
}, 2000);
console.log("End");

//Example:06 Callback with setInterval
//-------------------------------------
setInterval(function () {
    console.log("Inside timeout"); //execute code repeatedly in a certain interval of time
}, 1000);

//Example:7 Synchronous Callback: Executed line by line in a manner
//-------------------------------
function execute(callback) {
    console.log("A"); //A
    callback(); //Callback
    console.log("B"); //B
}
execute(function () {
    console.log("Callback");
});

//Example: 08
//----------
function add() {
    return 10 + 20;
}

function execute(callback) {
    console.log(callback());
}

execute(add()); //TypeError: callback is not a function
//because here the add() will get executed and the return value i.e 30 will pass as an argument to execute()
//so the correct way of callback is execute(add); only the function name


//Example:09 Callbacks in Array Methods
//-----------------------------------------
let myArr = [2, 4, 6, 8];
//1. forEach
myArr.forEach(
    function f1(num) {  //here function f1 is a callback function
        console.log(num);
    }
)

//Example:10 Callback returning a value
//----------------------------------------
function a(a, b, callback) {
    let result = a + b;
    callback(result);
}
function callback(res) {
    console.log("sum of two numbers is: ", res);
}
console.log(a(20, 10, callback));


//Example:11 Callback can be conditional
//----------------------------------------
let age = 10; let isEligibleToVote = false;
function canVote(age, callback) {
    if (age >= 18) {
        isEligibleToVote = true;
        callback(isEligibleToVote);
    }
    else {
        console.log("can not vote!!");
    }
}
function callback(isEligibleToVote) {
    if (isEligibleToVote) {
        console.log("The person is eligible for voting!!");
    }
}

let votingResult = canVote(age, callback);
console.log(votingResult);

//nested callback add
function task1(callback){
    console.log("task 1");
    callback();
}
function task2(callback){
    console.log("task 2");
    callback();
}

task1(
    function() { //callback for task1 which takes task2 as its callback
    task2(
        function() { //callback for task2 
        console.log("Task 3 completed");
    });
});

/*
Note:
-------------------------------------------------------
1. Function can be stored in a variable ex: let res = add;
                ↓
2. Function can be passed as an argument ex:add(test)
                ↓
3. Passed function = callback (test is callback)
                ↓
4. Function receiving it = higher-order function (add is higher order function)
                ↓
5. Callback can be synchronous OR asynchronous*/