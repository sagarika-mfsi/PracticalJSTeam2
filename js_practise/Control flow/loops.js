//Que1
//Print odd numbers from 1 to 20
for(let i=1;i<=20;i++){
    if(i%2!==0){
        //console.log(i); 
    }
}

//Find the sum of numbers from 1 to 10
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
//console.log(sum);

//Print the multiplication table of a number
let num = 5;
for(let i=1;i<=10;i++){
    //console.log("5"+"*"+`${i}`+"="+`${num*i}`);
}

//Find the factorial of a number
let num1 = 5;
let fac = 1;
for(let i=num1;i>=1;i--){
    fac*=i;
}
//console.log(fac);

//Find the largest number in an array
let arr = [10, 25, 7, 45, 18];
let max = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
//console.log(max);

//Count even and odd numbers
let arr2 = [10, 5, 8, 13, 20, 7, 4];
let evenCount =0;
let oddCount=0;
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}
//console.log("even count = "+`${evenCount}`);
//console.log("odd count = "+`${oddCount}`);

//Count vowels in a string
let str = "sagarika";
let strArr = str.split("");
let vowel ="aeiou";
let count=0;
//console.log(strArr);
for(let i=0;i<strArr.length;i++){
    if(vowel.includes(strArr[i].toLowerCase())){
        count++;
    }
}
//console.log(count);

//Reverse a string
let str1 = "JavaScript";
let newStr = "";
for(let i=str1.length-1;i>=0;i--){
    newStr+=str1[i];
}
//console.log(newStr);

//Check whether a string is palindrome
let str2 = "madam"; let val = "";
for(let i=str2.length-1;i>=0;i--){
     val+=str2[i];
}
if(val===str2){
        //console.log("palindrome");
     }
     else{
        //console.log("not a palindrome");
     }

//Count a particular character
let str4 = "a for apple";
let char = "a"; let count1=0;
/*for(let i=0;i<str4.length;i++){
    if(str4[i].includes(char)){
        count1++;
    }
}*/
for(let i=0;i<str4.length;i++){
    if(str4[i]===char){
        count1++;
    }
}
//console.log(count1);

//Print numbers from 1 to 10 using while
let i = 1;

while (i <= 10) {
    //console.log(i);
    i++;
}
//Print numbers from 10 to 1 using while

let i2 = 10;

do {
    //console.log(i2);
    i2--;
} while (i2 >= 1);
//Find the sum of numbers from 1 to 100 using while
let sum2 = 0;
let i = 1;

while (i <= 100) {
    sum2 += i; // Adds the current number to sum
    i++;      // Increments the counter by 1
}

//console.log("The sum is:", sum); 
//output??
let i = 10;
do {
    console.log(i); //10
    i++;
} while (i < 5);

//For in loop
const user = {
  name: "Alex",
  age: 28,
  role: "Developer"
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//For of loop
const fruits = ['Apple', 'Banana', 'Orange'];

for (const fruit of fruits) {
  console.log(fruit);
}
 