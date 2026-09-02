//QUE:01
function test() {
  var a = 10;
  let b = 20;
  {
    var a = 30;
    let b = 40;
    console.log(a, b); //30 40
  }
  console.log(a, b); //30 20
  // here a got reassigned to 30 because var is function scoped and b remains 20 because let is block scoped
}
test();

//QUE:02
//Write a program to remove special char - "Hell@ World!"
let myString = "Hell@ World!";
function f1(str){
  return str.replace('@',"");
}
let op = f1(myString);
console.log(op);


//QUE:03
//Write a code to replace a with O in "I am learning Javascript" 
function f2(str){
  return str.replaceAll('a','o');
}
let res1 = f2("I am learning Javascript");
console.log(res1);


//QUE:04
//Create a new array allNumbers that combines numbers and moreNumbers
let numbers = [1,2,3];
let moreNumbers = ["sagarika","sethi"];
function f3(arr1,arr2){
  let allNumbers = [...arr1,...arr2];
  return allNumbers;
}
let res2 = f3(numbers,moreNumbers);
console.log(res2);


//QUE:05
//Use map to create a new array where each number is multiplied by 2
let arr1 = [2,6,1,4];
let f4 = function(arr){
  let res = arr.map(
    (val)=>{return val*2;}
  )
  return res;
}
console.log(f4(arr1));

//QUE:06
//Given an array of numbers, use reduce to calculate the sum of all even numbers
let arr2 = [2,6,1,4];
let f5 = function(arr){
  let res = arr.reduce(
    (a,b)=>{return a+b;}
  )
  return res;
}
console.log(f5(arr2));