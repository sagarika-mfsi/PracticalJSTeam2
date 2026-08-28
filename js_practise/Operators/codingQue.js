/*
Write a program where the user is allowed to log in only if:
username is "admin"
password is "1234"
Use &&.*/
let username = "admin";
let password = "1234";

let isAbleToLogin = false;
if(username==="admin" && password==="1234"){
    //isAbleToLogin = true;
}
if(isAbleToLogin){
    //console.log("user is logged in!!");  
}

/*
Write a program to check whether a person can vote.
Conditions:
Age should be 18 or above
Person should have a valid ID
Use &&.*/
let age = 12;
let hasValidId = false;
if(age>=18 && hasValidId){
        //console.log("person can vote");  
}
else{
    //console.log("person can't vote");  
}

/*
Write a program to check whether the given day is Saturday or Sunday.
Use ||.
*/
let day = "monday";
if(day==="Saturday" || day==="Sunday"){
    //console.log("weekend");
}
else{
    //console.log("work days");   
}

/*
Write a program that prints "No value" if a variable contains a falsy value.
*/
let value= undefined;
/*if(value===null || value === "" || value === undefined || value === 0){
    console.log("No value");
}*/
if(!value){
    console.log("No value");
}
else{
    console.log("Truthy value");  
}
console.log(!0);
