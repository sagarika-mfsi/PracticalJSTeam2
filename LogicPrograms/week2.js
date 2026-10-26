/*
bbbb*
bbb*b*
bb*b*b*
b*b*b*b*
*b*b*b*b*
*/
for (let i = 1; i <= 5; i++) {
    let str = "";

    // b's before first *
    for (let j = 1; j <= 5 - i; j++) {
        str += "b";
    }

    // * and b
    for (let j = 1; j <= i; j++) {
        str += "*";

        if (j < i) {
            str += "b";
        }
    }

    console.log(str);
}

//Sorting characters in a given string
let myStr = 'mindfire';
let arr = myStr.split('');

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//sort number
let num = 3176;
let arr1 = [];
for (let i = 3; i >= 0; i--) {
    arr1[i] = parseInt(num % 10);
    num = parseInt(num / 10);
}
for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            let tmp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = tmp;
        }
    }
}
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}