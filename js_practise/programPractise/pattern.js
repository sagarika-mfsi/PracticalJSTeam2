/* pattern-01
*
* *
* * *
* * * *
* * * * *
--*/

for(let i=1;i<=5;i++){
    let pattern1="";
for(let j=1;j<=i;j++){
    pattern1+="* ";
    }
    //console.log(pattern1);
}
/* pattern-02
*****
****
***
**
*
--*/
for(let i=1;i<=5;i++){
    let pattern2 = "";
    for(let j=5;j>=i;j--){
        pattern2+="*";
    }
    //console.log(pattern2);
}

/* Pattern 03
1
12
123
1234
12345
*/
for(let i=1;i<=5;i++){
    let pattern3 = "";
    for(let j=1;j<=i;j++){
        pattern3+=j;
    }
    //console.log(pattern3);
}

/* Pattern 04
1
22
333
4444
55555
*/
for(let i=1;i<=5;i++){
    let pattern4 = "";
    for(let j=1;j<=i;j++){
        pattern4+=i;
    }
    //console.log(pattern4);
}

/* Pattern 05
12345
1234
123
12
1
*/
for(let i=5;i>=1;i--){
    let pattern5 = "";
    for(let j=1;j<=i;j++){
        pattern5+=j;
    }
    //console.log(pattern5);
}

/* Pattern 06
54321
5432
543
54
5*/
for(let i=1;i<=5;i++){
    let pattern6 = "";
    for(let j=5;j>=i;j--){
        pattern6+=j;
    }
    //console.log(pattern6);
}

/*Pattern 07
    *
   **
  ***
 ****
*****
*/
for(let i=1;i<=5;i++){
    let pattern7 = "";
    for(let j=4;j>=i;j--){
        pattern7+=" ";
    }
    for(let k=1;k<=i;k++){
        pattern7+="*";
    }
    //console.log(pattern7);
}

/*Pattern 08
*****
 ****
  ***
   **
    *
*/
for(let i=1;i<=5;i++){
    let pattern8 = "";
    for(let k=1;k<i;k++){
        pattern8+=" ";
    }
    for(let j=5;j>=i;j--){
        pattern8+="*";
    }
    //console.log(pattern8);
}

/*Pattern 09
A
AB
ABC
ABCD
ABCDE*/
for(let i=1;i<=5;i++){
    let pattern9 = "";
    for(let j=1;j<=i;j++){
        pattern9+=String.fromCharCode(64 + j); //a:97
    }
    //console.log(pattern9);
}

/*Pattern 10
A
BB
CCC
DDDD
EEEEE*/
for(let i=1;i<=5;i++){
    let pattern10 = "";
    for(let j=1;j<=i;j++){
        pattern10+=String.fromCharCode(64 + i);
    }
    //console.log(pattern10);
}

/* pattern 11
ABCDE
ABCD
ABC
AB
A*/
for(let i=5;i>=1;i--){
    let pattern11 = "";
    for(let j=1;j<=i;j++){
        pattern11+=String.fromCharCode(64 + j);
    }
    console.log(pattern11);
}
/*
*
**
* *
*  *
*****
*/
for(let i=1;i<=5;i++){
    let pattern12 = "";
    for(let j=1;j<=i;j++){
        if (j === 1 || j === i || i === 5) {
            pattern12 += "*";
        } else {
            pattern12 += " ";
        }
    }
    console.log(pattern12);
}

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {
    let str = "";
    // spaces
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(str);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let str = "";
    // spaces
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(str);
}