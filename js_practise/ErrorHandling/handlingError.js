/*Error: 
Compile Time: the error appears while parsing 
------------- 
Run time: The error appears while running the code
---------- 
*/

/*
1. Syntax error(compile time)
----------------------------
console.log(1;

2. Reference error
---------------
console.log(x); // error will appear after running the code

3. type error
-----------
(Performing an operation on an inappropriate type/value.)*/


//Handling error
//1. try catch
//error prone code inside try and the posible error if appears will caught inside catch
try {
    console.log("try block starts here");
    console.log(num);
    console.log("code after error");

    //statement 2 /* if error appears in 16th no line, then statement 2 and 3 will never run)
    //statement 3
    let num = 10;
    //num.toUpperCase(); //type error(Performing an operation on an inappropriate type/value.)
    let arr = new Array(-1); //range error
}
catch (err) {
    //here we can operate with error for ex: retry logic, fallback error, logging, custom error
    console.log("i am inside catch:     ", err);
}

try {
    let obj = null;
    console.log(obj.name);
}
catch (error) {
    console.log(error.name);    //error object: error contains information about the error i.e name, message, stack
    console.log(error.message);
    console.log(error.stack);
}

try {
    let obj1 = null;
    console.log(obj1.name);
}
catch (e) {
    console.log("Something went wrong!!");
}

//finally: will run everytime
try {
    //console.log("i am from try block without error!!");
    //console.log("with error from try block");
    console.log(a);
}
catch (err) {
    console.log(err);
}
finally {
    console.log("will run everytime!!");
}

//Custom error
try {
    console.log(x);
}
catch (err) {
    throw new Error("you are doing wrong!!")
}

//Example:02
try {
    let age = 10;
    if (age < 18) {
        throw new Error("User must be 18 or above");
    }
}
catch (error) {
    console.log(error.message);
}

//Example:03
try {
    console.log(x);
}
catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error occurred");
    }
    else if (error instanceof TypeError) {
        console.log("Type error occurred");
    }
}


//Nested try-catch
try {
    try {
        console.log(x); //error
    }
    catch (error) {
        console.log("Inner catch"); //it will catch
    }
    console.log("Outer try"); //it will execute
}
catch (error) {
    console.log("Outer catch"); //it will not as outer try doesn't contain any error prone code

}

//if inner catch cant handle the error
try {
    try {
        throw new Error("Problem"); //error, but no catch to handle this, it will search outer scope i.e Outer catch
    }
    finally {
        console.log("Inner finally"); //it will execute first
    }
}
catch (error) {
    console.log("Outer catch"); // then the error from inter try will handle by this outer catch
}

//Error handling with functions
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try{
    divide(2,0);
}
catch(err){
    console.log(err.message); 
}

//Error propagation(an error moves upward through the call stack until some catch block handles it.)
function f1() {
    throw new Error("Error in f1");
}
function f2() {
    f1();
}
function f3() {
    f2();
}
try {
    f3();
}
catch (error) {
    console.log(error.message);
}

/*
Rule:01:
 try{
 } //invalid
because try must follow with catch or finally */

/*
Rule:02
catch (error) {
    console.log(error);
}//invalid
because catch must associated with try*/

//Optional catch(err)
try{
    console.log(test1);
}
catch{
    console.log("something went wrong");  
}

try {
    let user = null;
    console.log(user.name);
}
catch (error) {
    console.log(error.message);
    throw error;
}