/*Logical Programs Using Arrays
Q12. Find the sum of all elements*/
let numbers = [10, 20, 30, 40, 50];
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

//console.log(sum);

//Find the average of array elements
let numbers3 = [10, 20, 30, 40, 50];

let sum1 = 0;

for (let i = 0; i < numbers3.length; i++) {
    sum += numbers3[i];
}

let average = sum / numbers3.length;

//console.log(average);

//Search for a specific element
let numbers2 = [10, 20, 30, 40, 50];
let target = 30;
let found = false;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === target) {
        found = true;
        break;
    }
}
console.log(found);

//Move all zeros to the end
/*Input: [0, 1, 0, 3, 12]
Expected: [1, 3, 12, 0, 0]*/

let numbers1 = [0, 1, 0, 3, 12];
let result = [];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] !== 0) {
        result.push(numbers1[i]);
    }
}

while (result.length < numbers1.length) {
    result.push(0);
}

console.log(result);