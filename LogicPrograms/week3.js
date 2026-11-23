//Find Missing number in an array
let arr = [1, 2, 3, 5, 6];

let n1 = 6;

let expectedSum = n1 * (n1 + 1) / 2;

let actualSum = arr.reduce((sum, num) => sum + num, 0);

console.log(expectedSum - actualSum);

/*
E
D E
C D E
B C D E
A B C D E
*/
const n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  let startChar = 65 + (n - 1 - i); // 65 is 'A'

  for (let j = startChar; j < 65 + n; j++) {
    row += String.fromCharCode(j) + " ";
  }

  console.log(row.trim());
}