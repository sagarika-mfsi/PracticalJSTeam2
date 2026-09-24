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
function f1(str) {
  return str.replace('@', "");
}
let op = f1(myString);
console.log(op);


//QUE:03
//Write a code to replace a with O in "I am learning Javascript" 
function f2(str) {
  return str.replaceAll('a', 'o');
}
let res1 = f2("I am learning Javascript");
console.log(res1);


//QUE:04
//Create a new array allNumbers that combines numbers and moreNumbers
let numbers = [1, 2, 3];
let moreNumbers = ["sagarika", "sethi"];
function f3(arr1, arr2) {
  let allNumbers = [...arr1, ...arr2];
  return allNumbers;
}
let res2 = f3(numbers, moreNumbers);
console.log(res2);


//QUE:05
//Use map to create a new array where each number is multiplied by 2
let arr1 = [2, 6, 1, 4];
let f4 = function (arr) {
  let res = arr.map(
    (val) => { return val * 2; }
  )
  return res;
}
console.log(f4(arr1));

//QUE:06
//Given an array of numbers, use reduce to calculate the sum of all even numbers
let arr2 = [2, 6, 1, 4];
let f5 = function (arr) {
  let res = arr.reduce(
    (a, b) => { return a + b; }
  )
  return res;
}
console.log(f5(arr2));

//QUE:07(map)
//Find each occurance of each character in a string
let letters = ['s', 'a', 'g', 'a', 'r', 'i', 'k', 'a'];
let count1 = new Map();
for (let status of letters) {
  if (count1.has(status)) {
    count1.set(status, count1.get(status) + 1);
  }
  else {
    count1.set(status, 1);
  }
}
console.log(count1); //Map(6) { 's' => 1, 'a' => 3, 'g' => 1, 'r' => 1, 'i' => 1, 'k' => 1 }

//QUE:08
const numbers1 = [10, 20, 10, 30, 20, 40];
/*Write code to produce:
[10, 20, 30, 40]*/
const newArr12 = [];
const res = numbers1.filter((val) => {
    if (!newArr12.includes(val)) {
        newArr12.push(val);
        return true;
    }
    return false;
});
console.log(res);

//QUE:09
const results = [
    "passed",
    "failed",
    "passed",
    "skipped",
    "failed",
    "passed"
];
/*Write JavaScript to calculate:

Passed  = 3
Failed  = 2
Skipped = 1*/

const res3 = results.reduce((a, b) => {

    if (b === "passed") {
        a.passed++;
    }

    if (b === "failed") {
        a.failed++;
    }

    if (b === "skipped") {
        a.skipped++;
    }

    return a;

}, {
    passed: 0,
    failed: 0,
    skipped: 0
});

console.log(res3);

//QUE 10 Reverse a number
let num1 = 234;
let rev = 0 ;
function f1(num1){
while(num1>0){
   let remainder = num1 % 10;
   rev = (rev * 10) + remainder; 
   num1 = Math.floor(num1 / 10);
}
return rev;
}
  
console.log(f1(num1));

/*  que 11
"Automation Testing"

Find:
length
first character
last character
*/
let str = "Automation Testing";
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charAt(str.length-1));

/*que 12
reverse a string
*/
let str1 = "Automation Testing"; let revStr ="";
for(let i = str1.length-1;i>=0;i--){
  revStr+=str1[i];
}
console.log(revStr);

//que 13 Count vowels in a string.
let vowel=0; let str2 = "Automation Testing";

for(let i = 0;i<str2.length;i++){
  if("aeiou".includes(str2[i].toLowerCase())){
    vowel++;
  }
}
console.log(vowel);

//Approach2
let str12="sagarika"; let count=0;
for(let i =0;i<str12.length;i++){
  if(str12[i]==='a' || str12[i]==='e'|| str12[i]==='i'|| str12[i]==='o'||str12[i]==='u' ){
    console.log(str12[i]);
    count++;
  }
}
console.log(count);


//que 14 Reverse an array without using reverse().
let arr3 = [10, 20, 30]; let arrRev =[];
for(let i = arr3.length-1; i>=0;i--){
  arrRev.push(arr3[i]);
}
console.log(arrRev);

//que 15 
/*Find common elements:

[1,2,3,4]
[3,4,5,6]*/
let a1=[1,2,3,4]; let a2 = [3,4,5,6]; let common =[];
for(let i = 0;i<a1.length;i++){
  for(let j = 0;j<a2.length;j++){
    if(a1[i]===a2[j]){
      common.push(a2[j]);
    }
  }
}
console.log(common);

/* que 16
[
 {name:"A", age:25},
 {name:"B", age:30},
 {name:"C", age:22}
]

Get people whose age > 24.*/
let myarr = [
 {name:"A", age:25},
 {name:"B", age:30},
 {name:"C", age:22}
];
let res4 = myarr.map(
  val=>val.age
).filter(val=>val>24
)
console.log(res4);

/* que 17
const employees = [
    {name:"A", department:"QA", experience:3},
    {name:"B", department:"Dev", experience:5},
    {name:"C", department:"QA", experience:2},
    {name:"D", department:"QA", experience:6}
];

Write code to:

Get all QA employees.
Get QA employees with experience > 2.
Get only their names.
Find total QA experience.
Find the most experienced QA employee.
Count QA employees.*/


//frequency of char in a string
let str3 = "she is a girl";
let f={};
for(let i =0; i<str3.length;i++){
    let ch = str3[i];
    console.log(ch)
    if(f[ch]){
        f[ch]++;
    }
    else{
        f[ch]=1;
    }
    
}
console.log(f)
let obj1 ={
    k1:"v1",
    k2:"v2"
}
console.log(obj1["k1"])

//factorial
let fact=1;
for(let n =5;n>=1;n--){
    fact*=n;
}
console.log(fact);
//approach2
let ft=5; let resk=1;
while(ft!==0){
  resk*=ft;
  ft--;
}
console.log(resk);
